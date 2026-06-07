import type { FAQItem } from "@/types/portfolio";

type AccordionProps = {
  items: FAQItem[];
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-[var(--color-border)] rounded-[var(--radius-md)] border border-[var(--color-border)]">
      {items.map((item) => (
        <details className="group p-4" key={item.id}>
          <summary className="cursor-pointer list-none font-medium">{item.question}</summary>
          <p className="mt-3 text-sm text-[var(--color-muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

