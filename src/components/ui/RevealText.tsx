"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealTextProps = {
  /** Each entry becomes one masked line that rises into view in sequence. */
  lines: ReactNode[];
  className?: string;
  /** Seconds between each line. */
  stagger?: number;
};

/**
 * Line-by-line text reveal, like subtitles coming up. Each line sits in an
 * overflow-hidden track and translates from 100% → 0. Under reduced motion it
 * renders statically. Animation timing is isolated here so headings can reuse
 * it without leaking choreography into sections.
 */
export function RevealText({ lines, className, stagger = 0.09 }: RevealTextProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span className="block" key={i}>
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12%" }}
      transition={{ staggerChildren: stagger }}
    >
      {lines.map((line, i) => (
        <span className="block overflow-hidden" key={i}>
          <motion.span
            className="block"
            variants={{
              hidden: { y: "110%" },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
