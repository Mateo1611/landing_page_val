import { NextResponse } from "next/server";

import { queueContactRequest } from "@/lib/contact";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const queued = await queueContactRequest(result.data);

  return NextResponse.json({
    ok: true,
    submittedAt: queued.submittedAt,
  });
}

