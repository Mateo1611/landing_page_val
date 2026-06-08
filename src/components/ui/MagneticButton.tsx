"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { PointerEvent } from "react";

import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ComponentProps } from "react";

type MagneticButtonProps = ComponentProps<typeof Button> & {
  /** How far the button drifts toward the pointer, in px. */
  strength?: number;
};

/**
 * Subtle magnetic CTA: the button eases toward the cursor while hovered, then
 * springs back. Pure enhancement — disabled under prefers-reduced-motion, and
 * the underlying <Button> keeps all its semantics/href.
 */
export function MagneticButton({ strength = 14, ...buttonProps }: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Spring smooths the follow + return so it never snaps.
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (event: PointerEvent<HTMLSpanElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Offset from the button center, scaled down to a gentle drift.
    x.set(((event.clientX - (rect.left + rect.width / 2)) / rect.width) * strength * 2);
    y.set(((event.clientY - (rect.top + rect.height / 2)) / rect.height) * strength * 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x: springX, y: springY, display: "inline-flex" }}
    >
      <Button {...buttonProps} />
    </motion.span>
  );
}
