import { NextResponse } from "next/server"

import { quoteRequestSchema } from "@/lib/schemas/quote"

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = quoteRequestSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: parsed.error.issues },
      { status: 400 }
    )
  }

  // No backend/CRM connected yet: log server-side and return a confirmation id.
  // The client also opens a prefilled WhatsApp deep link so a real advisor
  // receives the request immediately regardless of this endpoint's storage.
  console.info("[quote] nueva solicitud", parsed.data)

  const confirmationId = `PG-${Date.now().toString(36).toUpperCase()}`

  return NextResponse.json({ confirmationId }, { status: 201 })
}
