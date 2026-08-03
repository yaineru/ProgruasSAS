import type { FeaturedProject, TrustStat } from "@/types/content"

/**
 * PLACEHOLDER: descripciones representativas del sector, con fotografía real
 * de campo. Reemplazar por casos reales (cliente, cifras) cuando existan.
 */
export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "Montaje de torre grúa en altura",
    summary:
      "Ascenso y montaje de torre grúa en edificio en construcción, con equipo de protección homologado en cada maniobra.",
    metric: "Operación certificada en altura",
    image: "/images/galeria/torre-grua-ascenso.jpg",
    placeholder: true,
  },
  {
    title: "Realce de torre grúa en obra activa",
    summary:
      "Incremento de altura de torre grúa a medida que avanza la estructura, sin detener la operación de la obra.",
    metric: "Ejecutado sin parar el proyecto",
    image: "/images/galeria/montaje-torre-grua-edificio.jpg",
    placeholder: true,
  },
  {
    title: "Montaje de malacate",
    summary:
      "Instalación de malacate de carga y personal en fachada, con personal certificado en trabajo en alturas.",
    metric: "Cobertura en Medellín",
    image: "/images/galeria/malacate-cimentacion.jpg",
    placeholder: true,
  },
]

/** Cifras propias de Progruas (piezas de marca oficiales). */
export const TRUST_STATS: TrustStat[] = [
  { value: "12", label: "años de experiencia" },
  { value: "100%", label: "personal certificado" },
  { value: "Medellín", label: "y Valle de Aburrá" },
]
