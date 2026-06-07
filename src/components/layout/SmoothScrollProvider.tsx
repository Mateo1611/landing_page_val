"use client";

import Lenis from "lenis";
import { useEffect } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function SmoothScrollProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
    });
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}

