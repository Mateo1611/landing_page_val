/**
 * Lead capture payload — mirrors the recommended form fields in docs/brief §13.
 * `website` is a honeypot field: humans leave it empty, bots tend to fill it.
 */
export type ContactFormInput = {
  name: string;
  brand?: string;
  projectType: string;
  budget?: string;
  date?: string;
  whatsapp: string;
  message: string;
  /** Honeypot — must stay empty. Not a real field for users. */
  website?: string;
};
