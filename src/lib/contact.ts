import type { ContactFormInput } from "@/types/contact";

export async function queueContactRequest(input: ContactFormInput) {
  // TODO: Integrate an approved provider such as Resend, CRM, Notion, or Sheets.
  return {
    ok: true,
    submittedAt: new Date().toISOString(),
    input,
  };
}

