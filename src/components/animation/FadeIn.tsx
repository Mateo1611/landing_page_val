"use client";

import { motion } from "motion/react";
import type { PropsWithChildren } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FadeIn({ children }: PropsWithChildren) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

