"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { mainNavigation } from "@/config/navigation";

/**
 * Mobile navigation drawer. Toggles a full-screen overlay with the same nav +
 * CTA as the desktop header. Locks scroll while open and closes on link tap so
 * in-page anchors land cleanly.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir navegación"
        aria-expanded={open}
        className="grid size-10 place-items-center rounded-[var(--radius-sm)] border border-[var(--line-strong)] text-fg"
      >
        <Menu size={18} aria-hidden />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-[var(--color-base)]/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar navegación"
                className="grid size-10 place-items-center rounded-[var(--radius-sm)] border border-[var(--line-strong)] text-fg"
              >
                <X size={18} aria-hidden />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Principal">
              {mainNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl uppercase tracking-tight text-fg"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-8">
                <Button href="#contacto" size="lg" onClick={() => setOpen(false)}>
                  Cotizar proyecto
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
