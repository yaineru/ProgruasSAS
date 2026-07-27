import type { FeaturedProject, TrustStat } from "@/types/content"

/**
 * PLACEHOLDER: casos de éxito representativos del sector. Reemplazar con
 * proyectos reales de Progruas (fotos, cliente, cifras) antes de publicar.
 */
export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "Montaje de torre grúa en altura",
    summary:
      "Ascenso y montaje de torre grúa en edificio en construcción, con equipo de protección homologado en cada maniobra.",
    metric: "Operación certificada en altura",
    placeholder: true,
  },
  {
    title: "Realce de torre grúa en obra activa",
    summary:
      "Incremento de altura de torre grúa a medida que avanza la estructura, sin detener la operación de la obra.",
    metric: "Ejecutado sin parar el proyecto",
    placeholder: true,
  },
  {
    title: "Montaje de elevador mixto",
    summary:
      "Instalación de elevador mixto de carga y personal en fachada, con personal certificado en trabajo en alturas.",
    metric: "Cobertura en El Poblado, Medellín",
    placeholder: true,
  },
]

/** Cifras propias de Progruas (piezas de marca oficiales). */
export const TRUST_STATS: TrustStat[] = [
  { value: "+8", label: "años de experiencia" },
  { value: "100%", label: "personal certificado" },
  { value: "24/7", label: "asesoría y soporte" },
]
