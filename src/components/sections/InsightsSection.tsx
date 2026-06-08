import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { insights } from "@/data/insights";

/**
 * Insights (docs/brief §9) — authority without a heavy blog. NOT rendered in
 * the V1 page (Direction A omits it); kept ready, on the brand system, so it
 * can be dropped into page.tsx in a later phase. TODO(content): real insights.
 */
export function InsightsSection() {
  return (
    <Section id="insights" divider>
      <SectionLabel>Insights</SectionLabel>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {insights.map((insight) => (
          <article
            className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--color-surface)] p-6"
            key={insight.id}
          >
            <h3 className="font-display text-lg uppercase tracking-tight">{insight.title}</h3>
            <p className="mt-2 text-sm text-fg-muted">{insight.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
