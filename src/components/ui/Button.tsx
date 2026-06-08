import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-bold whitespace-nowrap " +
  "transition-[background-color,border-color,transform,opacity] duration-300 [transition-timing-function:var(--ease)] " +
  "focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  // Primary = brand orange CTA; lifts slightly on hover.
  primary: "bg-orange text-[var(--color-base)] hover:bg-orange-bright hover:-translate-y-px",
  // Ghost = bordered, used for secondary actions over dark surfaces.
  ghost: "border border-[var(--line-strong)] text-fg hover:border-fg",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-[0.8rem]",
  md: "min-h-11 px-6 text-sm",
  lg: "min-h-12 px-7 text-[0.95rem]",
};

/** Shared class builder so anchors/inputs can reuse the exact button look. */
export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Polymorphic button: renders an <a> when `href` is passed, otherwise a
 * <button>. Keeps CTA markup consistent (conversion lives in many sections)
 * without duplicating styles.
 */
export function Button({ variant = "primary", size = "md", className, children, ...rest }: ButtonProps) {
  const classes = buttonClasses(variant, size, className);

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  const { type, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type={type ?? "button"} {...buttonRest}>
      {children}
    </button>
  );
}
