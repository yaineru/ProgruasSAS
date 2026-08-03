import {
  Building2,
  ArrowUpFromLine,
  Construction,
  Headset,
  PackageSearch,
  Truck,
} from "lucide-react"

import type { Service } from "@/types/content"

/**
 * Contenido tomado verbatim del brochure oficial de Progruas S.A.S.:
 * "Somos una empresa especializada en brindar servicios de transporte,
 * montaje, realce, mantenimiento, operación y desmontaje de torre grúas y
 * malacates mixtos." Las 4 primeras líneas de servicio son las que aparecen
 * en el brochure impreso; repuestos/accesorios y asesoría se agregan como
 * servicios adicionales solicitados por el cliente.
 */
export const SERVICES: Service[] = [
  {
    slug: "logistica-transporte-carga",
    title: "Logística y Transporte de Carga",
    shortDescription:
      "Transporte de equipos y maquinaria con la logística de una operación de izaje.",
    description:
      "Coordinamos el transporte de torres grúa, malacates y equipo pesado entre obras, con la misma precisión con la que ejecutamos un montaje.",
    icon: Truck,
    bullets: [
      "Transporte de equipos entre obras",
      "Logística coordinada de principio a fin",
      "Equipos de última tecnología",
      "Trato directo con el cliente",
    ],
  },
  {
    slug: "malacates",
    title: "Malacates",
    shortDescription:
      "Realce, montaje, desmontaje y mantenimiento de malacates mixtos.",
    description:
      "Instalamos y mantenemos malacates para transporte vertical de materiales y personal en obra, con realce según el avance de la construcción.",
    icon: ArrowUpFromLine,
    bullets: [
      "Montaje y desmontaje certificado",
      "Realce según avance de obra",
      "Mantenimiento preventivo y correctivo",
      "Personal certificado en trabajo en alturas",
    ],
  },
  {
    slug: "torres-grua",
    title: "Torres Grúa",
    shortDescription:
      "Montaje, mantenimiento y realce de torres grúa en obras de construcción.",
    description:
      "Ejecutamos el montaje, mantenimiento y realce de torres grúa con equipos de última tecnología, cubriendo la operación completa hasta el desmontaje.",
    icon: Building2,
    bullets: [
      "Montaje y desmontaje certificado",
      "Realce a medida que avanza la obra",
      "Operación con personal calificado",
      "Mantenimiento preventivo programado",
    ],
  },
  {
    slug: "alquiler-camion-grua",
    title: "Alquiler de Camión Grúas",
    shortDescription:
      "Camión grúas, camión planchón y grúa telescópica (P&H) por proyecto.",
    description:
      "Contamos con camión grúas, camión planchón y grúa telescópica P&H disponibles para izajes puntuales y traslado de carga pesada.",
    icon: Construction,
    bullets: [
      "Camión grúa para izajes puntuales",
      "Camión planchón para carga pesada",
      "Grúa telescópica P&H",
      "Operador certificado incluido",
    ],
  },
  {
    slug: "repuestos-accesorios",
    title: "Repuestos y Accesorios",
    shortDescription:
      "Repuestos y accesorios originales para mantener tu equipo operando.",
    description:
      "Suministramos repuestos y accesorios para torres grúa, malacates y camión grúas, para que el mantenimiento de tu equipo no dependa de terceros.",
    icon: PackageSearch,
    bullets: [
      "Repuestos para torres grúa y malacates",
      "Accesorios y elementos de izaje",
      "Disponibilidad ágil para no parar la obra",
      "Asesoría técnica en cada pedido",
    ],
  },
  {
    slug: "asesoria-soporte",
    title: "Asesoría y Soporte",
    shortDescription:
      "Asesoría y soporte de tus equipos: torre grúa, malacate y más.",
    description:
      "Nuestro equipo técnico te acompaña antes, durante y después del servicio, con asesoría y soporte permanente para torre grúa, malacate y demás equipos de izaje.",
    icon: Headset,
    bullets: [
      "Evaluación técnica antes de cotizar",
      "Soporte durante la operación",
      "Acompañamiento post-servicio",
      "Respuesta ágil por WhatsApp",
    ],
  },
]
