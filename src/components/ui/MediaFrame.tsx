import type { CSSProperties, PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type MediaFrameProps = PropsWithChildren<{
  /** CSS aspect-ratio value, e.g. "16/9", "4/3", "21/9". */
  ratio?: string;
  /** Mono caption describing the pending asset. */
  label?: string;
  /** Shows a centered play affordance for video slots. */
  play?: boolean;
  className?: string;
}>;

/**
 * Cinematic media slot with viewfinder crop marks. Renders real `children`
 * (a <video>/<Image>) when provided; otherwise shows a labeled placeholder so
 * layout and rhythm are reviewable before final assets arrive.
 * TODO(assets): pass real media as children once selected (docs/brief §15).
 */
export function MediaFrame({ children, ratio = "16/9", label, play = false, className }: MediaFrameProps) {
  const style = { aspectRatio: ratio } as CSSProperties;

  return (
    <div
      className={cn(
        "frame media-placeholder relative overflow-hidden rounded-[var(--radius-md)]",
        className,
      )}
      style={children ? { aspectRatio: ratio } : style}
    >
      {/* Extra crop marks (the other two corners) for the viewfinder look. */}
      <span className="cm-tr" aria-hidden />
      <span className="cm-bl" aria-hidden />

      {children ?? (
        <div className="absolute inset-0 grid place-items-center p-4 text-center">
          {play ? (
            <span className="grid size-14 place-items-center rounded-full border border-[var(--line-strong)] bg-[var(--color-base)]/60">
              <span className="ml-1 border-y-[8px] border-l-[13px] border-y-transparent border-l-fg" aria-hidden />
            </span>
          ) : null}
          {label ? (
            <span className="absolute bottom-3 left-3 right-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-fg-faint">
              {label}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
