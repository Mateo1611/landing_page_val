import { z } from "zod";

/**
 * Contact/lead schema — shared by the client form (React Hook Form resolver)
 * and the server route, so validation runs on both sides (docs/brief §12:
 * "validar inputs en cliente y servidor con Zod").
 *
 * `website` is a honeypot: it must stay empty. A filled value signals a bot,
 * and the server silently rejects it.
 */
export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Cuéntanos tu nombre."),
  brand: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.string().trim().min(2, "¿Qué tipo de proyecto es?"),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  date: z.string().trim().max(80).optional().or(z.literal("")),
  whatsapp: z.string().trim().min(7, "Déjanos un WhatsApp o email de contacto."),
  message: z.string().trim().min(10, "Cuéntanos un poco más (mín. 10 caracteres)."),
  // Honeypot — kept short; humans never see or fill this.
  website: z.string().max(0, "").optional().or(z.literal("")),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
