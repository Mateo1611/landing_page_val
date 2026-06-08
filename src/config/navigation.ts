/**
 * Primary navigation for header + mobile drawer.
 * Hrefs are in-page anchors (single-page landing, per docs/brief §1).
 * Order mirrors Direction A of the wireframes.
 */
export const mainNavigation = [
  { label: "Portafolio", href: "#portafolio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
] as const;

export type NavItem = (typeof mainNavigation)[number];
