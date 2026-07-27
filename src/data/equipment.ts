import type { EquipmentCategory } from "@/types/content"

/**
 * Categorías de equipo para el paso "Equipo requerido" del cotizador,
 * alineadas con las líneas de servicio reales de Progruas (torres grúa y
 * elevadores mixtos). Las fotos usan material real de campaña donde hay
 * coincidencia; el resto usa un tile de marca (sin foto) hasta contar con
 * fotografía de flota real.
 */
export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    slug: "torre-grua",
    name: "Torre Grúa",
    tonnage: "Capacidad según alcance de pluma",
    useCase: "Montaje, desmontaje y realce en obras de construcción en altura.",
    image: "/images/flyer-transporte.jpg",
    availability: "alta-demanda",
    specs: ["Montaje y desmontaje certificado", "Realce según avance de obra", "Operador certificado incluido"],
  },
  {
    slug: "elevador-mixto",
    name: "Elevador Mixto",
    tonnage: "Carga y personal",
    useCase: "Transporte vertical de materiales y personal en fachada de obra.",
    image: "/images/flyer-soluciones.jpg",
    availability: "disponible",
    specs: ["Montaje y desmontaje incluido", "Mantenimiento periódico", "Logística y traslado a obra"],
  },
  {
    slug: "movimiento-tierra",
    name: "Movimiento de Tierra y Cimentación",
    tonnage: "Maquinaria pesada",
    useCase: "Preparación de terreno y cimentación antes de construir.",
    image: null,
    availability: "disponible",
    specs: ["Maquinaria pesada para terrenos exigentes", "Logística de obra civil", "Cobertura en toda la ciudad"],
  },
]
