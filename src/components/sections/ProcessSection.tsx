import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = ["Brief", "Preproduccion", "Produccion", "Postproduccion"];

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-[var(--section-padding)]" id="process">
      <SectionLabel>Proceso</SectionLabel>
      <ol className="grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <li className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-5" key={step}>
            <span className="text-xs text-[var(--color-muted)]">{String(index + 1).padStart(2, "0")}</span>
            <h2 className="mt-3 font-semibold">{step}</h2>
          </li>
        ))}
      </ol>
    </section>
  );
}

