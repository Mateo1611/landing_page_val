"use client";

import Lenis from "lenis";
import { useEffect } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Smooth scroll (Lenis) for desktop "premium feel" — and, crucially, the bridge
 * that keeps GSAP ScrollTrigger in sync with Lenis so scrub scenes (reel,
 * process) track the smoothed scroll position. Disabled entirely under
 * reduced motion and never blocks native behavior on failure.
 */
export function SmoothScrollProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 });
    let frame = 0;
    let detach = () => {};

    // Drive Lenis from GSAP's ticker so both share one RAF loop and stay in
    // lockstep; fall back to a plain RAF if GSAP isn't available.
    (async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        lenis.on("scroll", ScrollTrigger.update);
        const onTick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(onTick);
        gsap.ticker.lagSmoothing(0);
        detach = () => gsap.ticker.remove(onTick);
      } catch {
        const raf = (time: number) => {
          lenis.raf(time);
          frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);
      }
    })();

    return () => {
      detach();
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
