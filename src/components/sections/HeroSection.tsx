import { Fragment } from "react";

import { MediaFrame } from "@/components/ui/MediaFrame";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { whatsappHref } from "@/config/site";

/**
 * Hero (Direction A): full-bleed looping video behind a centered claim that
 * reveals line by line, then the CTAs. Two conversion paths up front — primary
 * "Cotizar" and secondary "Ver portafolio" (docs/brief §6).
 * TODO(assets): replace MediaFrame with a poster + muted autoplay loop video.
 */
export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background media layer. */}
      <div className="absolute inset-0">
        <MediaFrame
          ratio="auto"
          label="VIDEO HERO · LOOP · 16:9 · autoplay muted"
          className="h-full rounded-none border-0"
        />
        {/* Readability scrim over the video. */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-base)]/70 via-[var(--color-base)]/40 to-[var(--color-base)]" />
      </div>

      {/* Foreground content. */}
      <div className="relative z-10 mx-auto flex max-w-[var(--maxw)] flex-col items-center gap-6 px-6 text-center">
        <FadeIn>
          <SectionLabel>VAL Audiovisual · Estudio</SectionLabel>
        </FadeIn>

        <h1 className="font-display text-[clamp(2.75rem,9vw,5.5rem)] uppercase leading-[0.92] tracking-tight">
          <RevealText
            lines={[
              <Fragment key="l1">
                Contenido <em className="text-orange">imposible</em>
              </Fragment>,
              <Fragment key="l2">de ignorar.</Fragment>,
            ]}
          />
        </h1>

        <FadeIn delay={0.15}>
          <p className="max-w-[46ch] text-lg text-fg-muted">
            Campañas, eventos y piezas para marcas que necesitan verse distintas — no una más.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href="#contacto" size="lg">
              Cotizar proyecto →
            </MagneticButton>
            <Button href="#portafolio" variant="ghost" size="lg">
              Ver portafolio
            </Button>
          </div>
        </FadeIn>

        {/* Low-friction WhatsApp path, kept quiet under the main CTAs. */}
        <FadeIn delay={0.35}>
          <a
            href={whatsappHref}
            className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-faint transition-colors hover:text-orange"
          >
            o escríbenos por WhatsApp
          </a>
        </FadeIn>
      </div>

      {/* Scroll cue. */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-fg-muted">
          <span>Scroll</span>
          <span className="relative block h-9 w-px overflow-hidden bg-[var(--line-strong)]">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[val-scrollcue_2s_ease-in-out_infinite] bg-orange" />
          </span>
        </div>
      </div>
    </section>
  );
}
