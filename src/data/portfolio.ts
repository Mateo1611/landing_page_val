import type { PortfolioItem, ProjectCategory } from "@/types/portfolio";

/**
 * Selected work for the masonry grid (Direction A). `span: 2` items render
 * taller to recreate the wireframe's varied rhythm without pixel heights.
 * TODO(assets): attach real thumbnails (WebP/AVIF) + modal video URLs.
 */
export const portfolioItems: PortfolioItem[] = [
  { id: "nova", title: "Lanzamiento Nova", category: "Marca", client: "Marca", year: "2026", featured: true, span: 2, ctaLabel: "Quiero algo así" },
  { id: "copa-oriente", title: "Final Copa Oriente", category: "Deportivo", client: "Deportivo", year: "2025", span: 1, ctaLabel: "Quiero algo así" },
  { id: "torre-aurora", title: "Torre Aurora", category: "Inmobiliario", client: "Inmobiliario", year: "2026", span: 1, ctaLabel: "Quiero algo así" },
  { id: "festival-lumen", title: "Festival Lumen", category: "Eventos", client: "Eventos", year: "2025", span: 1, ctaLabel: "Quiero algo así" },
  { id: "mirame", title: "Serie Mírame", category: "Social", client: "Social", year: "2026", span: 2, ctaLabel: "Quiero algo así" },
  { id: "raiz", title: "Campaña Raíz", category: "Marca", client: "Marca", year: "2025", span: 1, ctaLabel: "Quiero algo así" },
  { id: "forge", title: "Gimnasio Forge", category: "Social", client: "Redes", year: "2026", span: 1, ctaLabel: "Quiero algo así" },
  { id: "boda-vm", title: "Boda V&M", category: "Social", client: "Social", year: "2025", span: 1, ctaLabel: "Quiero algo así" },
];

/** Filter chips. "Todos" is the default; the rest map to ProjectCategory. */
export const portfolioFilters: Array<"Todos" | ProjectCategory> = [
  "Todos",
  "Marca",
  "Eventos",
  "Inmobiliario",
  "Deportivo",
  "Social",
];
