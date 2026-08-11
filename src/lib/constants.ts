export const SITE_NAME = "Progruas S.A.S"

export const SITE_DESCRIPTION =
  "Alquiler, montaje, realce y mantenimiento de torres grúa, malacates y camión grúas en Medellín y el Valle de Aburrá. Operación certificada y asesoría técnica."

export const SITE_URL = "https://www.progruas.co"

export const CONTACT = {
  /** Número principal — debe primar en todo el sitio (WhatsApp, CTAs, header). */
  whatsappNumber: "573503566669",
  whatsappDisplay: "350 356 66 69",
  /** Número secundario, se muestra como alternativa en contacto/footer. */
  whatsappNumberAlt: "573178932731",
  whatsappDisplayAlt: "317 893 27 31",
  landline: "317 893 27 31",
  email: "progruas.pg@hotmail.com",
  instagram: "https://www.instagram.com/progruas_sas/",
  instagramHandle: "@progruas_sas",
} as const

export const LOCATION = {
  city: "Medellín",
  coverage: "Medellín y el Valle de Aburrá",
  address: "Cl. 66b No. 91b - 67, Medellín, Colombia",
} as const

export function buildWhatsappLink(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`
}

export const NAV_LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/maquinaria", label: "Maquinaria" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/contacto", label: "Contacto" },
] as const

export const PRIMARY_CTA_HREF = "/cotizar"
