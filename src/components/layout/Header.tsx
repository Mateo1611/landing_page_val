"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { mainNavigation } from "@/config/navigation";

/**
 * Site header (Direction A): transparent over the hero, then condenses into a
 * blurred dark bar after the user scrolls past the fold. The "Cotizar" CTA is
 * always visible so conversion is one click away.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 [transition-timing-function:var(--ease)] ${
        scrolled
          ? "border-b border-[var(--line)] bg-[var(--color-base)]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[var(--maxw-wide)] items-center gap-6 px-6 py-4">
        <a href="#hero" aria-label="VAL Audiovisual — inicio">
          <Logo />
        </a>

        <nav className="mx-auto hidden items-center gap-7 md:flex" aria-label="Principal">
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden md:block">
          <Button href="#contacto" size="sm">
            Cotizar proyecto
          </Button>
        </div>

        <div className="ml-auto md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
