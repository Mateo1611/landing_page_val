import type { ContactFormInput } from "@/types/contact";

/**
 * Persists/forwards a contact request.
 *
 * V1 is intentionally a stub: it just timestamps the lead. Wire a real
 * provider (Resend, the client's CRM, Notion or Sheets) behind env vars here
 * — keep credentials server-side only (docs/brief §12 + §13).
 */
export async function queueContactRequest(input: ContactFormInput) {
  // TODO(integration): send via approved provider. Do not log PII in prod.
  return {
    ok: true,
    submittedAt: new Date().toISOString(),
    input,
  };
}
