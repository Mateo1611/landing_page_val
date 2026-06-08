"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

type HeroBackdropProps = {
  /** Hero scroll progress (0 → 1) driving the parallax of each layer. */
  progress: MotionValue<number>;
  /** When true, layers render static (no scroll transforms, no breathing). */
  reducedMotion: boolean;
};

/**
 * Layered cinematic backdrop — pure CSS atmosphere (no media assets), built to
 * read as a living scene with depth: a graded base, two light blooms, the brand
 * gradient wash and a technical grid. Each layer drifts at a different rate so
 * scrolling feels like moving *into* the scene. Decorative → aria-hidden.
 */
export function HeroBackdrop({ progress, reducedMotion }: HeroBackdropProps) {
  // Different speeds per layer = parallax depth. Kept subtle for performance.
  const gradeY = useTransform(progress, [0, 1], ["0%", "14%"]);
  const gradeScale = useTransform(progress, [0, 1], [1.05, 1.22]);
  const bloomAY = useTransform(progress, [0, 1], ["0%", "-26%"]);
  const bloomBY = useTransform(progress, [0, 1], ["0%", "20%"]);
  const gridY = useTransform(progress, [0, 1], ["0%", "9%"]);
  const gridOpacity = useTransform(progress, [0, 0.5, 1], [0.05, 0.1, 0.03]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Graded base — center lifts to raised, edges fall to void for depth. */}
      <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_28%,var(--color-raised)_0%,var(--color-base)_52%,var(--color-void)_100%)]" />

      {/* Brand cinematic grade wash. */}
      <motion.div
        className="absolute inset-0 opacity-25 mix-blend-screen blur-2xl will-change-transform"
        style={
          reducedMotion
            ? { background: "var(--grade)" }
            : { background: "var(--grade)", y: gradeY, scale: gradeScale }
        }
      />

      {/* Warm light bloom (orange). Breathing opacity is CSS-only to avoid
          clashing with the scroll-driven transform on the same element. */}
      <motion.div
        className="absolute -left-[12%] top-[6%] h-[60vh] w-[60vh] rounded-full blur-[90px] will-change-transform motion-safe:animate-[val-glow_7s_ease-in-out_infinite] md:blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(253,84,0,0.5) 0%, transparent 65%)",
          ...(reducedMotion ? {} : { y: bloomAY }),
        }}
      />

      {/* Cool light bloom (indigo). */}
      <motion.div
        className="absolute -right-[10%] bottom-[2%] h-[65vh] w-[65vh] rounded-full blur-[100px] will-change-transform motion-safe:animate-[val-glow_9s_ease-in-out_infinite] md:blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(35,33,139,0.55) 0%, transparent 65%)",
          ...(reducedMotion ? {} : { y: bloomBY }),
        }}
      />

      {/* Technical grid — masked so it dissolves into the atmosphere. */}
      <motion.div
        className="hero-grid absolute inset-0 will-change-transform"
        style={reducedMotion ? { opacity: 0.06 } : { y: gridY, opacity: gridOpacity }}
      />

      {/* Edge darkening for cinematic falloff. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
