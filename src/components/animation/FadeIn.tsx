"use client";

import { motion } from "motion/react";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type FadeInProps = PropsWithChildren<{
  /** Entrance delay in seconds — use to stagger sibling blocks. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  className?: string;
  /** Render as a different element when the default <div> breaks layout. */
  as?: "div" | "li" | "span";
}>;

/**
 * Generic in-view entrance (fade + rise). The workhorse for section blocks;
 * keeps Motion config in one place and no-ops under reduced motion.
 */
export function FadeIn({ children, delay = 0, y = 20, className, as = "div" }: FadeInProps) {
  const reducedMotion = useReducedMotion();
  // Explicit map (not motion[as]) so the rendered component type stays narrow.
  const MotionTag = as === "li" ? motion.li : as === "span" ? motion.span : motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial={reducedMotion ? false : { opacity: 0, y }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
