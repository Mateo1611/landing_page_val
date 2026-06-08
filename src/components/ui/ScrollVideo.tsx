"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, type MotionValue } from "motion/react";

import { cn } from "@/lib/cn";

type ScrollVideoProps = {
  /** Scroll progress (0 → 1). The "playhead" that scrubs the footage. */
  progress: MotionValue<number>;
  /**
   * PRODUCTION input: ordered frame URLs (an exported image sequence). When
   * present, the canvas paints the frame at the current progress instead of the
   * procedural placeholder. This is how Apple/Relats-style scroll video works —
   * far more reliable to scrub than a <video> element across browsers.
   * TODO(assets): pass `frames` once the client delivers the hero clip
   * (I'll export it to ~90 WebP frames at ~1600px). See docs/implementation-notes §11.
   */
  frames?: string[];
  /** Reduced motion → paint a single still, no scrubbing. */
  reducedMotion?: boolean;
  className?: string;
};

/** Clamp helper. */
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

/** Linear interpolate two #rrggbb colors, returns an rgb triplet. */
function mixHex(a: string, b: string, t: number): [number, number, number] {
  const pa = [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)];
  const pb = [parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16)];
  return [
    Math.round(pa[0] + (pb[0] - pa[0]) * t),
    Math.round(pa[1] + (pb[1] - pa[1]) * t),
    Math.round(pa[2] + (pb[2] - pa[2]) * t),
  ];
}

/**
 * ScrollVideo — the centerpiece technique: scrolling scrubs a cinematic clip,
 * so the page reads like an editor's timeline (on-brand for an audiovisual
 * studio). One <canvas>, two paint modes:
 *   • PRODUCTION: paints `frames[index]` for the current progress (image
 *     sequence), the swap-in path for the client's real footage.
 *   • PLACEHOLDER (no frames): paints a procedural cinematic frame whose color
 *     grade, key light and depth all evolve with progress — a premium CSS/canvas
 *     stand-in (no heavy assets, nothing committed to git) that demonstrates the
 *     exact UX today.
 *
 * Scrubbing is smoothed with a rAF lerp so it never snaps to the raw scroll.
 */
export function ScrollVideo({ progress, frames, reducedMotion = false, className }: ScrollVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetRef = useRef(0); // latest scroll progress
  const currentRef = useRef(0); // eased value actually painted
  const sizeRef = useRef({ w: 0, h: 0 });

  // Preload the production frame sequence (if provided).
  useEffect(() => {
    if (!frames?.length) {
      imagesRef.current = [];
      return;
    }
    imagesRef.current = frames.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  }, [frames]);

  // Paint one frame at progress `p` (0..1).
  const paint = (p: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { w, h } = sizeRef.current;
    if (!w || !h) return;

    const images = imagesRef.current;
    if (images.length) {
      // PRODUCTION: cover-fit the nearest frame in the sequence.
      const idx = Math.round(clamp01(p) * (images.length - 1));
      const img = images[idx];
      if (img?.complete && img.naturalWidth) {
        const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
        const dw = img.naturalWidth * scale;
        const dh = img.naturalHeight * scale;
        ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
      }
      return;
    }

    // PLACEHOLDER: procedural cinematic frame, fully driven by progress.
    const t = clamp01(p);

    // 1) Base grade lerps cool (night/indigo) → warm (ember) across the shot.
    const top = mixHex("#0a0b1a", "#1b0d05", t);
    const bottom = mixHex("#08080a", "#0c0608", t);
    const base = ctx.createLinearGradient(0, 0, 0, h);
    base.addColorStop(0, `rgb(${top[0]},${top[1]},${top[2]})`);
    base.addColorStop(1, `rgb(${bottom[0]},${bottom[1]},${bottom[2]})`);
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);

    // 2) Key light pushes in: a radial bloom that drifts and grows with scroll.
    const lx = w * (0.32 + 0.36 * t);
    const ly = h * (0.42 - 0.12 * t);
    const lr = Math.max(w, h) * (0.28 + 0.55 * t);
    const light = ctx.createRadialGradient(lx, ly, 0, lx, ly, lr);
    light.addColorStop(0, `rgba(253,84,0,${0.32 + 0.18 * t})`);
    light.addColorStop(0.5, "rgba(253,84,0,0.06)");
    light.addColorStop(1, "rgba(253,84,0,0)");
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = light;
    ctx.fillRect(0, 0, w, h);

    // 3) Cool counter-light (indigo) receding on the opposite side for depth.
    const cx = w * (0.85 - 0.3 * t);
    const cy = h * (0.7 + 0.1 * t);
    const cr = Math.max(w, h) * (0.45 - 0.2 * t);
    const cool = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
    cool.addColorStop(0, `rgba(35,33,139,${0.3 - 0.15 * t})`);
    cool.addColorStop(1, "rgba(35,33,139,0)");
    ctx.fillStyle = cool;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "source-over";

    // 4) Parallax depth bands — faint horizontal lines that slide as we descend.
    ctx.strokeStyle = "rgba(246,246,246,0.05)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i += 1) {
      const y = h * (0.5 + i * 0.11) + t * h * 0.12 * (i + 1) * 0.18;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // 5) Vignette for cinematic falloff.
    const vig = ctx.createRadialGradient(w / 2, h * 0.42, Math.min(w, h) * 0.2, w / 2, h * 0.5, Math.max(w, h) * 0.75);
    vig.addColorStop(0, "rgba(0,0,0,0)");
    vig.addColorStop(1, "rgba(0,0,0,0.55)");
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, w, h);
  };

  // Size the canvas to its box (DPR-aware) and repaint on resize.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR for perf
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      const ctx = canvas.getContext("2d");
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w: rect.width, h: rect.height };
      paint(reducedMotion ? 0.4 : currentRef.current);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [reducedMotion]);

  // Track scroll progress.
  useMotionValueEvent(progress, "change", (v) => {
    targetRef.current = clamp01(v);
  });

  // rAF loop eases the painted value toward the scroll target (buttery scrub).
  // Reduced motion skips the loop and paints a single representative still.
  useEffect(() => {
    if (reducedMotion) {
      paint(0.4);
      return;
    }
    let raf = 0;
    const loop = () => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.12;
      paint(currentRef.current);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion, frames]);

  return (
    <canvas
      ref={canvasRef}
      // Decorative surface; the headline/HUD carry the accessible content.
      aria-hidden
      className={cn("block h-full w-full", className)}
    />
  );
}
