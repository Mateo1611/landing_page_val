import { Logo } from "@/components/ui/Logo";
import { siteConfig, whatsappHref } from "@/config/site";

/** Footer columns. Data kept inline since it's footer-local navigation. */
const columns = [
  {
    title: "Menú",
    links: [
      { label: "Portafolio", href: "#portafolio" },
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: siteConfig.contact.instagram },
      { label: "YouTube", href: siteConfig.contact.youtube },
      { label: "TikTok", href: siteConfig.contact.tiktok },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "WhatsApp", href: whatsappHref },
      { label: "Agenda", href: siteConfig.contact.calendly },
      { label: "Email", href: `mailto:${siteConfig.contact.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--color-void)]">
      <div className="mx-auto max-w-[var(--maxw-wide)] px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-24">
          <div>
            <Logo className="text-3xl" />
            <p className="mt-3 max-w-[34ch] text-sm text-fg-muted">
              Estudio audiovisual · {siteConfig.location}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-fg">
                  {column.title}
                </span>
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-fg-muted transition-colors hover:text-orange"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-[var(--line)] pt-6 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-faint">
          <span>© {new Date().getFullYear()} VAL Audiovisual</span>
          <span aria-hidden>2.39 : 1</span>
        </div>
      </div>
    </footer>
  );
}
