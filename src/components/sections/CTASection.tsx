import { Section } from "@/components/ui/Section";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animation/FadeIn";
import { siteConfig } from "@/config/site";

/**
 * Mid-page cinematic CTA (Direction A §10): a trailer-style close that converts
 * before the FAQ. The cinematic grade backdrop comes from the brand gradient.
 */
export function CTASection() {
  return (
    <Section id="cta" wide>
      <div className="letterbox relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)]">
        {/* Brand cinematic grade as the moving-texture stand-in. */}
        <div className="absolute inset-0 opacity-70" style={{ background: "var(--grade)" }} aria-hidden />
        <div className="absolute inset-0 bg-[var(--color-base)]/45" aria-hidden />

        <div className="relative flex min-h-[360px] flex-col items-center justify-center gap-6 px-6 py-20 text-center sm:px-16">
          <FadeIn>
            <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(1.75rem,4.5vw,3rem)] uppercase leading-[0.98] tracking-tight">
              Tu próximo proyecto no necesita más contenido. Necesita una pieza{" "}
              <em className="text-orange">imposible de ignorar.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="#contacto" size="lg">
                Cotizar proyecto →
              </MagneticButton>
              <Button href={siteConfig.contact.calendly} variant="ghost" size="lg" target="_blank" rel="noopener noreferrer">
                Agendar llamada
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
