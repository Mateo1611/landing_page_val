import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type SectionLabelProps = PropsWithChildren<{
  /** Mutes the accent color for secondary eyebrows. */
  muted?: boolean;
  className?: string;
}>;

/**
 * Eyebrow / kicker label — the brand's mono caption with a leading rule.
 * Styling lives in `.eyebrow` (styles/utilities.css) so the fixed geometry
 * stays in one place.
 */
export function SectionLabel({ children, muted = false, className }: SectionLabelProps) {
  return <span className={cn("eyebrow", muted && "muted", className)}>{children}</span>;
}
