import { z } from "zod"

export const contactMessageSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.email("Ingresa un correo válido"),
  phone: z.string().min(7, "Ingresa un teléfono válido"),
  message: z.string().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
})

export type ContactMessage = z.infer<typeof contactMessageSchema>
