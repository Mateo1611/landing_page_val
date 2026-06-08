import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type SectionProps = PropsWithChildren<{
  id: string;
  /** Use the wider max-width (portfolio, reel, CTA bands). */
  wide?: boolean;
  /** Drop the default vertical rhythm for full-bleed sections (hero, CTA). */
  flush?: boolean;
  /** Hairline divider on top, like the wireframe section breaks. */
  divider?: boolean;
  className?: string;
}>;

/**
 * Section shell: consistent vertical rhythm, max-width and scroll anchor.
 * Keeps every section's outer chrome identical so the page reads as one system.
 */
export function Section({ id, wide = false, flush = false, divider = false, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24",
        !flush && "py-[var(--section-padding)]",
        divider && "border-t border-[var(--line)]",
        className,
      )}
    >
      {flush ? (
        children
      ) : (
        <div className={cn("mx-auto px-6", wide ? "max-w-[var(--maxw-wide)]" : "max-w-[var(--maxw)]")}>
          {children}
        </div>
      )}
    </section>
  );
}
