import { Menu } from "lucide-react";

export function MobileNav() {
  return (
    <button
      className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] md:hidden"
      type="button"
      aria-label="Abrir navegacion"
    >
      <Menu aria-hidden="true" size={18} />
    </button>
  );
}

