"use client";

import type { RefObject } from "react";
import { useScroll, useTransform, type MotionValue } from "motion/react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * All Hero scroll-driven motion lives here so the Hero markup stays declarative
 * and the choreography can evolve without touching JSX (or other sections).
 *
 * The Hero is a tall section with a sticky stage; `scrollYProgress` runs 0 → 1
 * while the stage is pinned, and each derived value maps progress onto one
 * visual "state":
 *   ~0.00  state 1 — dark entrance, claim + CTAs at rest
 *   ~0.30  state 2 — central visual scales up, backdrop deepens
 *   ~0.55  state 3 — primary content recedes, supporting HUD takes over
 *   ~0.80  state 4 — fade to base, handoff to the next section
 */
export type HeroScroll = ReturnType<typeof useHeroScroll>;

export function useHeroScroll(ref: RefObject<HTMLElement | null>) {
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Central visual: grows and "straightens" (radius → sharp) as we descend.
  const visualScale = useTransform(scrollYProgress, [0, 0.6, 1], [0.9, 1.06, 1.14]);
  const radiusPx = useTransform(scrollYProgress, [0, 0.6], [18, 2]);
  const visualRadius: MotionValue<string> = useTransform(radiusPx, (v) => `${v}px`);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.08, 0.85, 1], [0.35, 1, 1, 0.5]);

  // Eyebrow + subheadline + CTAs: present at rest, recede before the transition.
  const contentOpacity = useTransform(scrollYProgress, [0, 0.05, 0.5, 0.66], [1, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.66], [0, -48]);

  // Headline lingers a beat longer and drifts up — keeps the claim readable.
  const headlineY = useTransform(scrollYProgress, [0, 0.85], [0, -70]);
  const headlineOpacity = useTransform(scrollYProgress, [0.55, 0.82], [1, 0]);

  // Supporting line / HUD fades in as the content leaves (state 3), then out.
  const supportingOpacity = useTransform(scrollYProgress, [0.4, 0.55, 0.85, 1], [0, 1, 1, 0]);

  // Scroll cue is only meaningful while the stage is at rest.
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Full-stage fade to the base color prepares the seamless handoff (state 4).
  const exitOpacity = useTransform(scrollYProgress, [0.74, 1], [0, 1]);

  return {
    reducedMotion,
    scrollYProgress,
    visualScale,
    visualRadius,
    visualOpacity,
    contentOpacity,
    contentY,
    headlineY,
    headlineOpacity,
    supportingOpacity,
    cueOpacity,
    exitOpacity,
  };
}
