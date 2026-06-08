/** Project categories double as portfolio filter values. */
export type ProjectCategory =
  | "Marca"
  | "Eventos"
  | "Inmobiliario"
  | "Deportivo"
  | "Social";

/**
 * Minimum portfolio model from docs/brief §9. Thumbnails load in the grid;
 * the full video only loads when the modal opens (performance rule §11).
 */
export type PortfolioItem = {
  id: string;
  title: string;
  category: ProjectCategory;
  /** Client or project type, e.g. "Marca · 2026". */
  client: string;
  year: string;
  /** Lightweight grid image. TODO(assets): real WebP/AVIF thumbnails. */
  thumbnail?: string;
  /** Heavy video opened in the modal, never loaded on first paint. */
  videoUrl?: string;
  /** Marks a hero piece (can be emphasized in the grid). */
  featured?: boolean;
  /** Contextual CTA inside the modal, e.g. "Quiero algo así". */
  ctaLabel?: string;
  /**
   * Visual weight in the masonry grid (1 = normal, 2 = tall). Approximates the
   * varied heights of the wireframe without hardcoding pixel values in markup.
   */
  span?: 1 | 2;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type Insight = {
  id: string;
  title: string;
  summary: string;
};

/** A chapter in the "Proceso por capítulos" sticky scene. */
export type ProcessChapter = {
  /** Roman numeral ("I"…"V"). */
  numeral: string;
  title: string;
  description: string;
  /** Media shown in the sticky panel for this chapter. */
  media?: string;
};

/** A single animated stat in the About section. */
export type Stat = {
  value: string;
  label: string;
};
