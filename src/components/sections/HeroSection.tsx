"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";

import { ScrollVideo } from "@/components/ui/ScrollVideo";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { Timecode } from "@/components/ui/Timecode";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animation/FadeIn";
import { useHeroScroll } from "@/hooks/useHeroScroll";
import { cn } from "@/lib/cn";
import { hero } from "@/data/hero";
import { whatsappHref } from "@/config/site";

/**
 * Hero (Direction A) — a scroll-driven cinematic intro.
 *
 * Structure: a tall section holds a sticky, viewport-height "stage". As the
 * viewer scrolls through the section, `useHeroScroll` maps progress onto each
 * layer (backdrop parallax, central visual scale, content recede, fade-out
 * handoff). All choreography is isolated in the hook; this file only wires the
 * resulting MotionValues to elements. Under reduced motion the whole thing
 * collapses to a single static viewport — no tall scroll, no transforms.
 *
 * The central visual is a scroll-scrubbed canvas (ScrollVideo): scrolling
 * "scrubs the footage" like an editor's timeline. Today it paints a procedural
 * cinematic placeholder; swap in the client's exported frame sequence to make
 * it real (see docs/implementation-notes §11). The layered backdrop behind it
 * is an intentional CSS-only premium placeholder.
 */
export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const h = useHeroScroll(ref);
  const animated = !h.reducedMotion;

  // Guard helper: apply scroll-driven styles only when motion is allowed
  // (generic keeps each call's MotionValue style type intact).
  const mv = <T,>(style: T) => (animated ? style : undefined);

  return (
    <section
      ref={ref}
      id="hero"
      // Tall section gives the sticky stage room to choreograph; collapses to a
      // single screen under reduced motion.
      className={cn("relative", animated ? "h-[170svh] md:h-[230svh]" : "min-h-svh")}
    >
      <div
        className={cn(
          "flex items-center justify-center overflow-hidden",
          animated ? "sticky top-0 h-svh" : "min-h-svh",
        )}
      >
        {/* Layer 0 — living atmospheric backdrop. */}
        <HeroBackdrop progress={h.scrollYProgress} reducedMotion={h.reducedMotion} />

        {/* Layer 1 — scroll-scrubbed cinematic visual that scales into the scene.
            The canvas paints the frame for the current scroll position; the
            wrapper adds the "enter the scene" zoom + corner straightening. */}
        <motion.div
          className="absolute inset-0 z-10 origin-center overflow-hidden will-change-transform"
          style={mv({ scale: h.visualScale, opacity: h.visualOpacity, borderRadius: h.visualRadius })}
        >
          <ScrollVideo progress={h.scrollYProgress} reducedMotion={h.reducedMotion} className="absolute inset-0" />
          {/* Scrim keeps the claim legible over the footage. */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-base)]/75 via-[var(--color-base)]/45 to-[var(--color-base)]" />
        </motion.div>

        {/* Layer 2 — cinematic HUD corners (decorative, tech atmosphere). */}
        <div className="pointer-events-none absolute inset-0 z-20" aria-hidden>
          <div className="absolute left-6 top-24 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-fg-muted">
            <span className="size-2 rounded-full bg-orange motion-safe:animate-[val-blink_1.6s_steps(1)_infinite]" />
            {hero.hud.rec}
          </div>
          <Timecode
            progress={h.scrollYProgress}
            className="absolute right-6 top-24 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-fg-muted"
          />
          <div className="absolute bottom-24 left-6 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-fg-faint">
            {hero.hud.codec}
          </div>
          <div className="absolute bottom-24 right-6 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-fg-faint">
            2.39 : 1
          </div>
        </div>

        {/* Layer 3 — primary content. */}
        <div className="relative z-20 mx-auto flex max-w-[var(--maxw)] flex-col items-center gap-6 px-6 text-center">
          <motion.div style={mv({ opacity: h.contentOpacity, y: h.contentY })}>
            <FadeIn>
              <SectionLabel className="justify-center">{hero.eyebrow}</SectionLabel>
            </FadeIn>
          </motion.div>

          {/* Headline lingers/drifts independently of the rest of the content. */}
          <motion.h1
            className="font-display text-[clamp(2.75rem,9vw,5.5rem)] uppercase leading-[0.92] tracking-tight"
            style={mv({ y: h.headlineY, opacity: h.headlineOpacity })}
          >
            <RevealText
              lines={[
                <Fragment key="l1">
                  {hero.headline.lead} <em className="text-orange">{hero.headline.accent}</em>
                </Fragment>,
                <Fragment key="l2">{hero.headline.tail}</Fragment>,
              ]}
            />
          </motion.h1>

          <motion.div
            className="flex flex-col items-center gap-6"
            style={mv({ opacity: h.contentOpacity, y: h.contentY })}
          >
            <FadeIn delay={0.15}>
              <p className="max-w-[46ch] text-lg text-fg-muted">{hero.subheadline}</p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <MagneticButton href={hero.primaryCta.href} size="lg">
                  {hero.primaryCta.label}
                </MagneticButton>
                <Button href={hero.secondaryCta.href} variant="ghost" size="lg">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <a
                href={whatsappHref}
                className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-faint transition-colors hover:text-orange"
              >
                {hero.whatsappLabel}
              </a>
            </FadeIn>
          </motion.div>
        </div>

        {/* Layer 3b — supporting line that takes over as content recedes (state 3). */}
        {animated ? (
          <motion.p
            className="absolute bottom-[18%] left-1/2 z-20 w-full -translate-x-1/2 px-6 text-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-fg-muted"
            style={{ opacity: h.supportingOpacity }}
            aria-hidden
          >
            {hero.supporting}
          </motion.p>
        ) : null}

        {/* Scroll cue — fades as soon as the stage starts moving. */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
          style={mv({ opacity: h.cueOpacity })}
        >
          <div className="flex flex-col items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-fg-muted">
            <span>{hero.scrollLabel}</span>
            <span className="relative block h-9 w-px overflow-hidden bg-[var(--line-strong)]">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-orange motion-safe:animate-[val-scrollcue_2s_ease-in-out_infinite]" />
            </span>
          </div>
        </motion.div>

        {/* Layer 4 — fade to base for a seamless handoff to the next section. */}
        {animated ? (
          <motion.div
            className="pointer-events-none absolute inset-0 z-30 bg-[var(--color-base)]"
            style={{ opacity: h.exitOpacity }}
            aria-hidden
          />
        ) : null}
      </div>
    </section>
  );
}
