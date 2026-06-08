/**
 * Global site configuration.
 *
 * Single source for brand strings, conversion endpoints and contact
 * channels so sections never hardcode them. Replace the contact values
 * with the client's real handles before launch (TODO: client to confirm).
 */
export const siteConfig = {
  name: "VAL AUDIOVISUAL",
  shortName: "VAL",
  // Brand concept from docs/brief ("Historias visuales que mueven marcas").
  claim: "Contenido imposible de ignorar.",
  tagline: "Estudio audiovisual · Oriente Antioqueño, Medellín",
  description:
    "Estudio audiovisual en Medellín. Campañas, eventos, inmobiliario y contenido para redes con calidad de cine y enfoque en resultado.",
  locale: "es-CO",
  location: "Medellín · Oriente Antioqueño",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // Conversion channels. WhatsApp/Calendly are placeholders until the
  // client confirms the real numbers/links (see docs/brief §13).
  contact: {
    email: "hola@valaudiovisual.com",
    // E.164 number without "+" for wa.me deep links.
    whatsapp: "573000000000",
    whatsappMessage: "Hola VAL, quiero cotizar un proyecto audiovisual.",
    calendly: "https://calendly.com/",
    instagram: "https://instagram.com/val.audiovisual",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
  },
} as const;

/** Pre-built wa.me deep link with the default prefilled message. */
export const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage,
)}`;
