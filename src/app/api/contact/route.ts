import { NextResponse } from "next/server";

import { queueContactRequest } from "@/lib/contact";
import { contactFormSchema } from "@/lib/validations";

/**
 * Lead capture endpoint. Validates server-side with the same Zod schema as the
 * client and applies a basic anti-spam guard (honeypot). No backend service is
 * needed in V1 — Next.js resolves this directly (docs/brief §7, §12).
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    // Generic error shape — never leak internal details to the client (§12).
    return NextResponse.json(
      { ok: false, errors: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Honeypot filled → silently accept so bots get no signal, but skip queuing.
  if (result.data.website) {
    return NextResponse.json({ ok: true, submittedAt: new Date().toISOString() });
  }

  const queued = await queueContactRequest(result.data);

  return NextResponse.json({ ok: true, submittedAt: queued.submittedAt });
}
