import type { EquipmentCategory } from "@/types/content"

/**
 * Categorías de equipo para el paso "Equipo requerido" del cotizador,
 * alineadas con el brochure oficial de Progruas (torre grúas, malacates y
 * logística de transporte). Fotografía real de campo cedida por el cliente.
 */
export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    slug: "torre-grua",
    name: "Torre Grúa",
    tonnage: "Capacidad según alcance de pluma",
    useCase: "Expertos en maquinaria de transporte vertical: montaje, desmontaje y realce en altura.",
    image: "/images/galeria/torre-grua-ascenso.jpg",
    availability: "alta-demanda",
    specs: ["Montaje y desmontaje certificado", "Realce según avance de obra", "Operador certificado incluido"],
  },
  {
    slug: "malacate",
    name: "Malacate",
    tonnage: "Carga y personal",
    useCase: "Transporte vertical de materiales y personal en fachada de obra.",
    image: "/images/galeria/malacate-instalacion.jpg",
    availability: "disponible",
    specs: ["Montaje y desmontaje incluido", "Realce y mantenimiento periódico", "Personal certificado en alturas"],
  },
  {
    slug: "logistica-transporte",
    name: "Logística y Transporte de Equipos",
    tonnage: "Maquinaria pesada",
    useCase: "Transporte de torres grúa, malacates y equipo pesado entre obras.",
    image: "/images/galeria/montaje-torre-grua-edificio.jpg",
    availability: "disponible",
    specs: ["Logística coordinada de principio a fin", "Camión grúa y camión planchón", "Cobertura en toda la ciudad"],
  },
]
