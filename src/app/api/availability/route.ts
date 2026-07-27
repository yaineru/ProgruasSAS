import { NextResponse } from "next/server"

import { EQUIPMENT_CATEGORIES } from "@/data/equipment"

/** Simulated latency so the loading state in the UI is meaningfully testable. */
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 350))
  return NextResponse.json({ equipment: EQUIPMENT_CATEGORIES })
}
