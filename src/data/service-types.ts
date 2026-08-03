import {
  Building2,
  ArrowUpFromLine,
  Headset,
  PackageSearch,
  ShieldCheck,
  Truck,
} from "lucide-react"

import type { ServiceType } from "@/types/content"

/** Paso 1 del cotizador: qué tipo de servicio necesita el cliente. */
export const SERVICE_TYPES: ServiceType[] = [
  {
    slug: "torre-grua",
    label: "Torre grúa: montaje, desmontaje o realce",
    description: "Necesito instalar, retirar o subir la altura de una torre grúa.",
    icon: Building2,
    requiresEquipment: true,
  },
  {
    slug: "malacate",
    label: "Malacate",
    description: "Necesito montaje, realce o mantenimiento de un malacate.",
    icon: ArrowUpFromLine,
    requiresEquipment: true,
  },
  {
    slug: "logistica-transporte",
    label: "Logística y transporte de equipos",
    description: "Necesito transportar una torre grúa, malacate o equipo pesado entre obras.",
    icon: Truck,
    requiresEquipment: true,
  },
  {
    slug: "repuestos",
    label: "Repuestos o accesorios",
    description: "Necesito un repuesto o accesorio para mi equipo.",
    icon: PackageSearch,
    requiresEquipment: false,
  },
  {
    slug: "interventoria",
    label: "Interventoría u operación certificada",
    description: "Necesito un operador certificado o interventoría técnica.",
    icon: ShieldCheck,
    requiresEquipment: false,
  },
  {
    slug: "asesoria",
    label: "Asesoría técnica gratuita",
    description: "Aún no sé qué necesito, quiero hablar con un asesor.",
    icon: Headset,
    requiresEquipment: false,
  },
]
