import Link from "next/link";

import { mainNavigation } from "@/config/navigation";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="border-b border-[var(--color-border)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link className="text-sm font-semibold tracking-[0.18em]" href="/">
          VAL AUDIOVISUAL
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--color-muted)] md:flex" aria-label="Principal">
          {mainNavigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
