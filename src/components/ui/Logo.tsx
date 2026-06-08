import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

/**
 * Wordmark "VAL." with the brand-orange period — the typographic stand-in for
 * the logo until the official SVG is provided (docs/brief §15 checklist).
 * TODO(assets): swap for the official VAL logo SVG.
 */
export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("font-display text-2xl uppercase leading-none tracking-tight text-fg", className)}>
      VAL<span className="text-orange">.</span>
    </span>
  );
}
