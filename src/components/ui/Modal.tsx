import type { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren<{
  open: boolean;
  title: string;
  onClose?: () => void;
}>;

export function Modal({ children, open, title, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-lg rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className="text-sm text-[var(--color-muted)]" onClick={onClose} type="button">
            Cerrar
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

