import type { Testimonial } from "@/types/content"

/**
 * PLACEHOLDER: no se encontraron testimonios reales verificables (sitio caído,
 * Instagram no scrapeable). Textos representativos del sector para maquetar la
 * sección — deben reemplazarse por citas reales de clientes antes de publicar.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "El equipo llegó puntual, el operador conocía perfectamente el plan de izaje y no tuvimos ni un minuto de tiempo muerto en obra.",
    author: "Jefe de obra",
    role: "Proyecto de construcción industrial",
    placeholder: true,
  },
  {
    quote:
      "La asesoría técnica previa nos ahorró costos: nos recomendaron un equipo más pequeño que cubría exactamente lo que necesitábamos.",
    author: "Gerente de planta",
    role: "Sector manufactura",
    placeholder: true,
  },
  {
    quote:
      "Transportaron maquinaria de alto tonelaje entre ciudades sin contratiempos, con toda la documentación y permisos en regla.",
    author: "Coordinador logístico",
    role: "Sector energía",
    placeholder: true,
  },
]
