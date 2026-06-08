"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Thin reading-progress bar fixed at the top of the viewport. Driven by
 * Motion's useScroll (cheap, GPU transform) and lightly spring-smoothed.
 * Decorative, so it's aria-hidden.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-orange"
    />
  );
}
