import type { ProcessChapter } from "@/types/portfolio";

/**
 * Five chapters for the "Proceso por capítulos" sticky scene (Direction A).
 * The right-hand media stays pinned and swaps as each chapter scrolls into view.
 */
export const processChapters: ProcessChapter[] = [
  { numeral: "I", title: "Brief", description: "Escuchamos el objetivo real, no solo el pedido." },
  { numeral: "II", title: "Concepto", description: "Una idea con punto de vista y un porqué." },
  { numeral: "III", title: "Producción", description: "Rodaje con equipo, luz y dirección." },
  { numeral: "IV", title: "Edición", description: "Ritmo, color y sonido hasta el último frame." },
  { numeral: "V", title: "Entrega", description: "Piezas listas para cada canal, a tiempo." },
];
