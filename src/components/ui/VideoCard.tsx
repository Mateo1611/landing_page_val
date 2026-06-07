import type { PortfolioItem } from "@/types/portfolio";

type VideoCardProps = {
  item: PortfolioItem;
};

export function VideoCard({ item }: VideoCardProps) {
  return (
    <article className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
      <div className="mb-4 aspect-video rounded-[var(--radius-sm)] bg-[var(--color-surface)]" />
      <p className="text-xs uppercase text-[var(--color-muted)]">{item.category}</p>
      <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
      <p className="mt-2 text-sm text-[var(--color-muted)]">{item.summary}</p>
    </article>
  );
}

