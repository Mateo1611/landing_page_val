"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

type CountUpProps = {
  /** Raw stat value, e.g. "+120", "6" or "MED". Non-numeric renders static. */
  value: string;
};

/**
 * Counts a numeric stat up to its target when it scrolls into view. Parses an
 * optional non-digit prefix/suffix (so "+120" animates the 120 and keeps the
 * "+"). Values without digits render as-is. Reduced motion → final value only.
 */
export function CountUp({ value }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const match = value.match(/^(\D*)(\d+)(\D*)$/);

  useEffect(() => {
    // No digits, reduced motion, or not yet visible → leave the static value
    // (display already initializes to `value`, so nothing to set here).
    if (!match || reducedMotion || !inView) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    const duration = 1100;
    let raf = 0;
    let start = 0;

    const tick = (time: number) => {
      if (!start) start = time;
      const progress = Math.min(1, (time - start) / duration);
      // easeOutCubic for a natural settle.
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${Math.round(eased * target)}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, match, reducedMotion, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
