"use client";

import { useState } from "react";
import { useMotionValueEvent, type MotionValue } from "motion/react";

import { cn } from "@/lib/cn";

type TimecodeProps = {
  /** Scroll progress (0 → 1) mapped onto a running timecode. */
  progress: MotionValue<number>;
  className?: string;
};

/** Total seconds the timecode counts to across the scroll (a ~2:14 reel). */
const TOTAL_SECONDS = 134;

/**
 * Cinematic timecode HUD that advances as the Hero scrolls — a small "tech"
 * cue that makes the progression legible (you can feel how far into the scene
 * you are). Updates via a MotionValue subscription, so it never re-renders the
 * whole Hero. Decorative → mark aria-hidden where used.
 */
export function Timecode({ progress, className }: TimecodeProps) {
  const [value, setValue] = useState("00:00:00");

  useMotionValueEvent(progress, "change", (v) => {
    const clamped = Math.max(0, Math.min(1, v));
    const totalFrames = Math.floor(clamped * TOTAL_SECONDS * 24);
    const seconds = Math.floor(totalFrames / 24);
    const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");
    const ff = String(totalFrames % 24).padStart(2, "0");
    setValue(`${mm}:${ss}:${ff}`);
  });

  return <span className={cn("tabular-nums", className)}>{value}</span>;
}
