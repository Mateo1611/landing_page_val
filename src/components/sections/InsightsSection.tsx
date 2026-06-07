import { SectionLabel } from "@/components/ui/SectionLabel";
import { insights } from "@/data/insights";

export function InsightsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-[var(--section-padding)]" id="insights">
      <SectionLabel>Insights</SectionLabel>
      <div className="grid gap-4 md:grid-cols-2">
        {insights.map((insight) => (
          <article className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-5" key={insight.id}>
            <h2 className="font-semibold">{insight.title}</h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{insight.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

