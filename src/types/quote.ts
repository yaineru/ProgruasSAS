import type { QuoteContact } from "@/lib/schemas/quote"

export type QuoteState = {
  serviceType: string | null
  equipment: string | null
  date: string | null
  timeSlot: string | null
  duration: string | null
  origin: string
  destination: string
  notes: string
  contact: QuoteContact | null
}

export const INITIAL_QUOTE_STATE: QuoteState = {
  serviceType: null,
  equipment: null,
  date: null,
  timeSlot: null,
  duration: null,
  origin: "",
  destination: "",
  notes: "",
  contact: null,
}

export type QuoteStepId =
  | "servicio"
  | "equipo"
  | "agenda"
  | "ubicacion"
  | "contacto"
  | "resumen"
