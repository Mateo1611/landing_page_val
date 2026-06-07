import type { PropsWithChildren } from "react";

export function SectionLabel({ children }: PropsWithChildren) {
  return (
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
      {children}
    </p>
  );
}

