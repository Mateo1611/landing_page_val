import { ArrowUpRight } from "lucide-react";

import { MediaFrame } from "@/components/ui/MediaFrame";
import type { PortfolioItem } from "@/types/portfolio";

type VideoCardProps = {
  item: PortfolioItem;
  /** Opens the project's video modal. */
  onOpen: () => void;
};

/**
 * Portfolio grid card. The whole card is a button that opens the modal
 * (lazy video). Hover lifts the title and zooms the media via group-hover —
 * CSS only, so it stays cheap. Taller `span` items read as masonry accents.
 */
export function VideoCard({ item, onOpen }: VideoCardProps) {
  // Span drives the framing so the grid gets varied rhythm without pixel math.
  const ratio = item.span === 2 ? "3/4" : "4/3";

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ver proyecto: ${item.title}`}
      className="group block w-full text-left"
    >
      <div className="overflow-hidden rounded-[var(--radius-md)]">
        <div className="transition-transform duration-700 [transition-timing-function:var(--ease)] group-hover:scale-[1.04]">
          <MediaFrame ratio={ratio} label={`${item.title} · ${item.client} · ${item.year}`} play />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <div>
          <div className="text-[15px] font-bold text-fg">{item.title}</div>
          <div className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-fg-muted">
            {item.client} · {item.year}
          </div>
        </div>
        <span className="flex items-center gap-1 text-sm text-fg-muted transition-colors group-hover:text-orange">
          Ver
          <ArrowUpRight size={15} aria-hidden />
        </span>
      </div>
    </button>
  );
}
