import type { GalleryImage } from "@/types/content"

/**
 * Solo 2 fotografías reales disponibles (flyers de campaña). El resto de la
 * galería debe completarse con fotografía real de flota y proyectos.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/flyer-transporte.jpg",
    alt: "Grúa Progruas izando maquinaria industrial sobre camión de transporte",
    category: "operacion",
  },
  {
    src: "/images/flyer-soluciones.jpg",
    alt: "Elevador de materiales Progruas operando en fachada de edificio en construcción",
    category: "proyecto",
  },
]
