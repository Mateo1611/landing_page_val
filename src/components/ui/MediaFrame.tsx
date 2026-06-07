import type { PropsWithChildren } from "react";

export function MediaFrame({ children }: PropsWithChildren) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
      {children}
    </div>
  );
}

