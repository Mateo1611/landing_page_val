import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig, whatsappHref } from "@/config/site";

/**
 * Contact (Direction A §12): the structured form on the left, low-friction
 * paths on the right. Three ways to convert — form, WhatsApp, agenda — without
 * friction (docs/brief §13).
 */
export function ContactSection() {
  return (
    <Section id="contacto" divider>
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionLabel>Hablemos</SectionLabel>
          <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-[0.96] tracking-tight">
            Cuéntanos qué quieres lograr.
          </h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        {/* Low-friction contact channels. */}
        <aside className="flex flex-col gap-4">
          <div className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--color-surface)] p-6">
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-orange">
              WhatsApp directo
            </span>
            <p className="mt-2 text-fg">Respuesta rápida, sin fricción.</p>
            <div className="mt-4">
              <Button href={whatsappHref} variant="ghost" target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </Button>
            </div>
          </div>

          <div className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--color-surface)] p-6">
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-fg-muted">
              Agenda
            </span>
            <p className="mt-2 text-fg">Agendar una llamada de 15 min.</p>
            <div className="mt-4">
              <Button href={siteConfig.contact.calendly} variant="ghost" target="_blank" rel="noopener noreferrer">
                Agendar llamada
              </Button>
            </div>
          </div>

          <p className="font-mono text-[0.72rem] leading-relaxed tracking-[0.08em] text-fg-muted">
            {siteConfig.contact.email}
            <br />
            @val.audiovisual · {siteConfig.location}
          </p>
        </aside>
      </div>
    </Section>
  );
}
