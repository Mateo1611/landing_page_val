"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ParallaxMediaProps = PropsWithChildren<{
  /** Vertical drift range in px across the scroll through the element. */
  amount?: number;
  className?: string;
}>;

/**
 * Wraps media in a subtle vertical parallax tied to scroll position. Kept
 * small (default ±40px) so it adds depth without motion sickness; disabled
 * under reduced motion.
 */
export function ParallaxMedia({ children, amount = 40, className }: ParallaxMediaProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={reducedMotion ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}
