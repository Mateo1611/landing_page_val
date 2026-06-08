import type { FAQItem } from "@/types/portfolio";

/**
 * FAQ — resolves the objections listed in docs/brief §6 (tiempos, ciudad,
 * entregables, cotización). TODO(content): confirm final answers with client.
 */
export const faqs: FAQItem[] = [
  {
    id: "cotizacion",
    question: "¿Cómo se cotiza un proyecto audiovisual?",
    answer:
      "Partimos del objetivo de la pieza, el formato y los canales. Con eso definimos alcance, días de rodaje y entregables, y te pasamos una propuesta clara sin letra pequeña.",
  },
  {
    id: "marcas-personas",
    question: "¿Trabajan con marcas y personas?",
    answer:
      "Sí. Producimos para marcas, empresas, eventos y también para personas que necesitan contenido profesional o de autoridad.",
  },
  {
    id: "eventos",
    question: "¿Cubren eventos?",
    answer:
      "Cubrimos eventos corporativos, sociales y deportivos, con equipo y dirección para no perder los momentos clave.",
  },
  {
    id: "redes",
    question: "¿Entregan piezas para redes?",
    answer:
      "Entregamos reels verticales y piezas recurrentes optimizadas para cada plataforma, listas para publicar.",
  },
  {
    id: "tiempos",
    question: "¿Cuánto tarda la entrega?",
    answer:
      "Depende del alcance, pero acordamos fechas desde el brief y entregamos por canal a tiempo. Un reel sencillo es cuestión de días; una campaña, algunas semanas.",
  },
  {
    id: "idea",
    question: "¿Pueden encargarse de la idea?",
    answer:
      "Sí. Si llegas solo con un objetivo, proponemos concepto, guion y dirección. No solo grabamos: pensamos la pieza.",
  },
  {
    id: "empezar",
    question: "¿Qué necesita el cliente para empezar?",
    answer:
      "Una idea del objetivo, fecha tentativa y presupuesto aproximado. El resto lo resolvemos en una llamada corta.",
  },
];
