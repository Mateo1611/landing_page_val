import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-[var(--section-padding)]" id="testimonials">
      <SectionLabel>Testimonios</SectionLabel>
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-5" key={testimonial.id}>
            <blockquote className="text-[var(--color-muted)]">{testimonial.quote}</blockquote>
            <figcaption className="mt-4 text-sm font-medium">{testimonial.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

