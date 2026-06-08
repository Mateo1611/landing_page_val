import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

/**
 * Default document metadata. Indexable title/description + Open Graph so shared
 * links render a proper cinematic card (docs/brief §11).
 * TODO(assets): add a real /public/images/og.jpg before launch.
 */
export const defaultMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.claim}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "producción audiovisual",
    "video corporativo",
    "campañas de marca",
    "cobertura de eventos",
    "contenido para redes",
    "Medellín",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.claim}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.claim}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};
