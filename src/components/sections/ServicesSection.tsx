import { services } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-[var(--section-padding)]" id="services">
      <SectionLabel>Servicios</SectionLabel>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-5" key={service.id}>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{service.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

