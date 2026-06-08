import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { FadeIn } from "@/components/animation/FadeIn";
import { PinnedShowcase } from "@/components/animation/PinnedShowcase";

/**
 * Featured reel (Direction A §04): an ultra-wide frame that scales up as it
 * scrolls in (PinnedShowcase / GSAP), framed by REC metadata to read like a
 * cut on a timeline. Quality proof in the first few seconds (docs/brief §6).
 * TODO(assets): wire the real showreel + open it fullscreen on click.
 */
export function ReelSection() {
  return (
    <Section id="reel" wide>
      <FadeIn className="mb-7 text-center">
        <SectionLabel className="justify-center">El reel</SectionLabel>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase tracking-tight">
          Producción que se siente.
        </h2>
      </FadeIn>

      <PinnedShowcase>
        <MediaFrame ratio="21/9" label="REEL PRINCIPAL · 02:14 · click → fullscreen" play />
      </PinnedShowcase>

      <div className="mt-4 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-muted">
        <span className="flex items-center gap-2">
          <span className="size-2 animate-[val-blink_1.6s_steps(1)_infinite] rounded-full bg-orange" aria-hidden />
          REC · 4K · 23.976
        </span>
        <span>VAL — Showreel 2026</span>
      </div>
    </Section>
  );
}
