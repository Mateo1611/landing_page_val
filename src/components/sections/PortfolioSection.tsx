import { VideoCard } from "@/components/ui/VideoCard";
import { portfolioItems } from "@/data/portfolio";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PortfolioSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-[var(--section-padding)]" id="portfolio">
      <SectionLabel>Portafolio</SectionLabel>
      <div className="grid gap-4 md:grid-cols-3">
        {portfolioItems.map((item) => (
          <VideoCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

