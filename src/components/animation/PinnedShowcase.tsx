"use client";

import { useEffect, useRef } from "react";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type PinnedShowcaseProps = PropsWithChildren<{
  /** Starting scale; the child grows to 1 as it scrolls into the viewport. */
  fromScale?: number;
  className?: string;
}>;

/**
 * GSAP ScrollTrigger scene: the inner media scales up (and its corners
 * straighten) as it scrolls through, so the reel reads as expanding toward
 * full-bleed — the brief's "una o dos escenas fuertes" without a heavy pin
 * (kept mobile-friendly and SSR-safe via dynamic import + reduced-motion).
 */
export function PinnedShowcase({ children, fromScale = 0.88, className }: PinnedShowcaseProps) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    let cleanup = () => {};

    // Dynamic import keeps GSAP out of the server bundle and off first paint.
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(
          target,
          { scale: fromScale, borderRadius: "18px" },
          {
            scale: 1,
            borderRadius: "6px",
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              end: "top 30%",
              scrub: 0.6,
            },
          },
        );
      }, container);

      cleanup = () => ctx.revert();
    })();

    return () => cleanup();
  }, [reducedMotion, fromScale]);

  return (
    <div ref={containerRef} className={cn(className)}>
      <div ref={targetRef} className="origin-center overflow-hidden will-change-transform">
        {children}
      </div>
    </div>
  );
}
