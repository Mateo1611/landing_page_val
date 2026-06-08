/**
 * Hero content — kept out of the component so copy/links stay editable and the
 * Hero markup only deals with layout + motion (separation of state and content).
 * TODO(content): confirm final claim + supporting line with the client.
 */
export const hero = {
  eyebrow: "VAL Audiovisual · Estudio",
  // Headline split so the accent word can be emphasized without markup in data.
  headline: {
    lead: "Contenido",
    accent: "imposible",
    tail: "de ignorar.",
  },
  subheadline: "Campañas, eventos y piezas para marcas que necesitan verse distintas — no una más.",
  primaryCta: { label: "Cotizar proyecto →", href: "#contacto" },
  secondaryCta: { label: "Ver portafolio", href: "#portafolio" },
  whatsappLabel: "o escríbenos por WhatsApp",
  scrollLabel: "Scroll",
  // Secondary phrase that fades in mid-scroll (state 3) to frame the breadth.
  supporting: "Campañas · Eventos · Inmobiliario · Redes · Branding",
  // Cinematic HUD strings for the corners of the scene.
  hud: {
    rec: "REC",
    codec: "4K · 23.976",
    scene: "VAL — TEASER 2026",
  },
} as const;
