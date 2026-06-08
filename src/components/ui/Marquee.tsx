import { Fragment } from "react";

import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: readonly string[];
  /** Seconds for one full loop. Longer = slower/subtler. */
  duration?: number;
  className?: string;
};

/** One copy of the track. Rendered twice so the -50% loop wraps seamlessly. */
function Track({ items, ariaHidden }: { items: readonly string[]; ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-8 px-4" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <Fragment key={`${item}-${i}`}>
          <span className="font-display text-2xl uppercase tracking-tight text-fg-muted">{item}</span>
          <span className="text-orange" aria-hidden>
            /
          </span>
        </Fragment>
      ))}
    </div>
  );
}

/**
 * Ambient horizontal marquee (CSS-only loop). The track is duplicated so the
 * `val-marquee` keyframe can translate -50% for a seamless wrap. Honors
 * reduced-motion through the global guard in animations.css.
 */
export function Marquee({ items, duration = 38, className }: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden", className)}>
      <div
        className="flex w-max animate-[val-marquee_linear_infinite]"
        style={{ animationDuration: `${duration}s` }}
      >
        <Track items={items} />
        <Track items={items} ariaHidden />
      </div>
    </div>
  );
}
