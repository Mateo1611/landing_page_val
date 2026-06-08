import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animation/FadeIn";
import { testimonials, clientLogos } from "@/data/testimonials";

/**
 * Social proof (Direction A §09): sober testimonial cards over a row of client
 * logos. Readability over load — proof the work is trusted (docs/brief §6).
 * TODO(assets): replace logo placeholders with real client logos.
 */
export function TestimonialsSection() {
  return (
    <Section id="testimonios" divider>
      <FadeIn className="mb-8 text-center">
        <SectionLabel className="justify-center">Confían en VAL</SectionLabel>
      </FadeIn>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <FadeIn as="div" delay={index * 0.08} key={testimonial.id}>
            <figure className="h-full rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--color-surface)] p-7">
              <span className="font-mono text-2xl text-orange" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="mt-2 text-fg-muted">{testimonial.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="size-10 rounded-full bg-[var(--color-hi)]" aria-hidden />
                <span>
                  <span className="block text-sm font-bold text-fg">{testimonial.name}</span>
                  {testimonial.role ? (
                    <span className="block text-xs text-fg-faint">{testimonial.role}</span>
                  ) : null}
                </span>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>

      {/* Client logo row. */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-60">
        {clientLogos.map((logo) => (
          <span
            key={logo}
            className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fg-muted"
          >
            {logo}
          </span>
        ))}
      </div>
    </Section>
  );
}
