import type { Service } from "@/types/service";

/**
 * Six services as "modes of production", grouped by need (docs/brief §3 + §6).
 * Copy comes from Direction A of the wireframes. The first item is the default
 * active preview in ServicesSection.
 * TODO(content): confirm final descriptions + attach real preview media.
 */
export const services: Service[] = [
  {
    id: "campanas",
    index: "01",
    title: "Campañas de marca",
    need: "Vender o lanzar",
    description:
      "Piezas comerciales para vender o lanzar: spot, claim y formato pensado para cada canal.",
    ctaLabel: "Cotizar este servicio",
  },
  {
    id: "eventos",
    index: "02",
    title: "Eventos",
    need: "Cubrir un momento",
    description:
      "Producción audiovisual para eventos corporativos, sociales y deportivos, sin perder un instante.",
    ctaLabel: "Cotizar este servicio",
  },
  {
    id: "inmobiliario",
    index: "03",
    title: "Inmobiliario",
    need: "Mostrar un espacio",
    description:
      "Video y fotografía que venden el lugar: recorridos, luz y composición amplia.",
    ctaLabel: "Cotizar este servicio",
  },
  {
    id: "redes",
    index: "04",
    title: "Contenido para redes",
    need: "Crecer en redes",
    description:
      "Reels verticales y piezas recurrentes con ritmo nativo para cada plataforma.",
    ctaLabel: "Cotizar este servicio",
  },
  {
    id: "branding",
    index: "05",
    title: "Branding audiovisual",
    need: "Verse profesional",
    description:
      "Retratos, video corporativo y piezas de autoridad para una marca que se ve seria.",
    ctaLabel: "Cotizar este servicio",
  },
  {
    id: "corporativo",
    index: "06",
    title: "Producción corporativa",
    need: "Posicionar",
    description:
      "Marca, cultura y comunicación interna producidas con criterio de estudio.",
    ctaLabel: "Cotizar este servicio",
  },
];
