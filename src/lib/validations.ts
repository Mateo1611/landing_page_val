import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must contain at least 2 characters."),
  email: z.email("Enter a valid email address."),
  service: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Message must contain at least 10 characters."),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

