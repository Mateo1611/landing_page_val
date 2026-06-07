import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[var(--color-accent)] text-black hover:opacity-90",
  secondary: "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]",
  ghost: "text-[var(--color-text)] hover:bg-[var(--color-surface)]",
};

export function Button({ className, variant = "primary", type = "button", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] px-5 text-sm font-medium transition",
        variants[variant],
        className,
      )}
      type={type}
      {...props}
    />
  );
}

