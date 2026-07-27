import {
  Building2,
  ArrowUpFromLine,
  Mountain,
  ShieldCheck,
  Headset,
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
    slug: "elevador-mixto",
    label: "Elevador mixto",
    description: "Necesito montaje, traslado o mantenimiento de un elevador de carga y personal.",
    icon: ArrowUpFromLine,
    requiresEquipment: true,
  },
  {
    slug: "movimiento-tierra",
    label: "Movimiento de tierra o cimentación",
    description: "Necesito maquinaria pesada para preparar el terreno de mi obra.",
    icon: Mountain,
    requiresEquipment: true,
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
