export const SITE_NAME = "Progruas S.A.S"

export const SITE_DESCRIPTION =
  "Montaje, desmontaje, realce y mantenimiento de torres grúa y elevadores mixtos en Medellín y el Valle de Aburrá. Operación certificada e interventoría técnica."

export const SITE_URL = "https://www.progruas.co"

export const CONTACT = {
  whatsappNumber: "573178932731",
  whatsappDisplay: "317 893 2731",
  instagram: "https://www.instagram.com/progruas_sas/",
  instagramHandle: "@progruas_sas",
} as const

export const LOCATION = {
  city: "Medellín",
  coverage: "Medellín y el Valle de Aburrá",
} as const

export function buildWhatsappLink(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`
}

export const NAV_LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/flota", label: "Flota" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/contacto", label: "Contacto" },
] as const

export const PRIMARY_CTA_HREF = "/cotizar"
