/**
 * A service presented as a "mode of production" (Direction A).
 * Services are grouped by client *need*, not by industry — see docs/brief §3.
 */
export type Service = {
  /** Stable id used for React keys and the active-preview state. */
  id: string;
  /** Two-digit index shown as a large numeral ("01"…"06"). */
  index: string;
  title: string;
  /** Short need-based line, e.g. "Vender o lanzar". */
  need: string;
  /** One-sentence description shown in the sticky preview. */
  description: string;
  /** Contextual CTA label for this service. */
  ctaLabel: string;
  /** Optional preview media (image/video). Pending real assets. */
  media?: string;
};
