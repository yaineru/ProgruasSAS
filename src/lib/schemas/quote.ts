import { z } from "zod"

export const quoteContactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  company: z.string().optional(),
  phone: z.string().min(7, "Ingresa un teléfono válido"),
  email: z.email("Ingresa un correo válido"),
})

export type QuoteContact = z.infer<typeof quoteContactSchema>

export const quoteRequestSchema = z.object({
  serviceType: z.string().min(1),
  equipment: z.string().nullable(),
  date: z.string().min(1, "Selecciona una fecha"),
  timeSlot: z.string().min(1, "Selecciona un horario"),
  duration: z.string().min(1, "Selecciona una duración"),
  origin: z.string().min(2, "Indica la ciudad o dirección de origen"),
  destination: z.string().optional(),
  notes: z.string().optional(),
  contact: quoteContactSchema,
})

export type QuoteRequest = z.infer<typeof quoteRequestSchema>
