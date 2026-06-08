"use client";

import { useMemo, useState } from "react";

import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VideoCard } from "@/components/ui/VideoCard";
import { Modal } from "@/components/ui/Modal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button } from "@/components/ui/Button";
import { portfolioItems, portfolioFilters } from "@/data/portfolio";
import type { PortfolioItem } from "@/types/portfolio";

/**
 * Portfolio (Direction A §06): masonry of selected work with lightweight
 * filters and a video modal. The grid shows only thumbnails; the heavy video
 * mounts lazily inside the modal (performance — docs/brief §11). Client
 * component for filter state + modal selection.
 */
export function PortfolioSection() {
  const [filter, setFilter] = useState<(typeof portfolioFilters)[number]>("Todos");
  const [openItem, setOpenItem] = useState<PortfolioItem | null>(null);

  const visible = useMemo(
    () => (filter === "Todos" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <Section id="portafolio" wide divider>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <div>
          <SectionLabel>La prueba</SectionLabel>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase tracking-tight">
            Trabajo seleccionado.
          </h2>
        </div>

        {/* Filter chips. */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar portafolio">
          {portfolioFilters.map((option) => {
            const isActive = option === filter;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-colors duration-300 ${
                  isActive
                    ? "border-orange bg-orange text-[var(--color-base)]"
                    : "border-[var(--line-strong)] text-fg-muted hover:text-fg"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry via CSS columns — varied heights come from each card's span. */}
      <div className="[column-gap:1.25rem] sm:columns-2 lg:columns-3">
        {visible.map((item) => (
          <div key={item.id} className="mb-5 break-inside-avoid">
            <VideoCard item={item} onOpen={() => setOpenItem(item)} />
          </div>
        ))}
      </div>

      {/* Video modal — only the selected project's media mounts here. */}
      <Modal open={openItem !== null} title={openItem?.title ?? ""} onClose={() => setOpenItem(null)}>
        {openItem ? (
          <div>
            <MediaFrame ratio="16/9" label={`${openItem.title} · ${openItem.client} · ${openItem.year}`} play />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg uppercase tracking-tight">{openItem.title}</h3>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-fg-muted">
                  {openItem.category} · {openItem.year}
                </p>
              </div>
              <Button href="#contacto" onClick={() => setOpenItem(null)}>
                {openItem.ctaLabel ?? "Quiero algo así"} →
              </Button>
            </div>
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
