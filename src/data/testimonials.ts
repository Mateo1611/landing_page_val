import type { Testimonial } from "@/types/portfolio";

/**
 * Social proof. Use real testimonials before launch; these are realistic
 * placeholders (docs/brief §6 — "usar testimonios reales; si no existen,
 * usar proyectos o marcas").
 * TODO(content): replace with approved client quotes.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Entendieron la marca mejor que nosotros. La pieza final superó lo que teníamos en la cabeza.",
    name: "Daniela Restrepo",
    role: "Marketing · Marca Nova",
  },
  {
    id: "t2",
    quote:
      "Cubrieron el evento completo sin perder un momento clave. Edición impecable y a tiempo.",
    name: "Andrés Gómez",
    role: "Producción · Festival Lumen",
  },
  {
    id: "t3",
    quote:
      "El contenido para redes nos cambió el ritmo. Por fin nos vemos como la marca que queremos ser.",
    name: "Laura Vélez",
    role: "Fundadora · Gimnasio Forge",
  },
];

/** Client logo row. TODO(assets): swap for real client logos (SVG/PNG). */
export const clientLogos: string[] = [
  "Marca Nova",
  "Festival Lumen",
  "Torre Aurora",
  "Copa Oriente",
  "Gimnasio Forge",
];
