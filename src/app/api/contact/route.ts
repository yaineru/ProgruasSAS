import { NextResponse } from "next/server"

import { contactMessageSchema } from "@/lib/schemas/contact"

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = contactMessageSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: parsed.error.issues },
      { status: 400 }
    )
  }

  console.info("[contact] nuevo mensaje", parsed.data)

  return NextResponse.json({ ok: true }, { status: 201 })
}
