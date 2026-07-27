import {
  Building2,
  ArrowUpFromLine,
  ClipboardCheck,
  Construction,
  ShieldCheck,
  Truck,
} from "lucide-react"

import type { Service } from "@/types/content"

/**
 * Contenido base tomado de las piezas de marca oficiales de Progruas S.A.S.:
 * montaje y desmontaje de torres grúa, elevadores mixtos, realce, interventoría,
 * alquiler, operación certificada, logística/traslado y movimiento de tierra.
 */
export const SERVICES: Service[] = [
  {
    slug: "montaje-desmontaje-torres-grua",
    title: "Montaje y Desmontaje de Torres Grúa",
    shortDescription:
      "Procesos seguros y certificados en cualquier altura, de principio a fin de la obra.",
    description:
      "Ejecutamos el montaje y desmontaje completo de torres grúa con equipo de protección homologado y personal certificado en trabajo en alturas, cumpliendo la normativa en cada maniobra.",
    icon: Building2,
    bullets: [
      "Equipos de protección homologados",
      "Personal certificado en trabajo en alturas",
      "Cumplimiento normativo en cada maniobra",
      "Cobertura en Medellín y el Valle de Aburrá",
    ],
  },
  {
    slug: "elevadores-mixtos",
    title: "Elevadores Mixtos",
    shortDescription:
      "Montaje, traslado, mantenimiento y desmontaje de elevadores de carga y personal.",
    description:
      "Instalamos y mantenemos elevadores mixtos para transporte vertical de materiales y personal en obra, con logística de montaje y traslado incluida.",
    icon: ArrowUpFromLine,
    bullets: [
      "Logística y traslado del equipo a obra",
      "Montaje y desmontaje certificado",
      "Mantenimiento preventivo y correctivo",
      "Realces según avance de la construcción",
    ],
  },
  {
    slug: "realce-torre-grua",
    title: "Realce de Torre Grúa",
    shortDescription:
      "Incrementamos la altura de tu torre grúa a medida que avanza la estructura.",
    description:
      "El realce se ejecuta con precisión de ingeniería para que la torre grúa siga el ritmo de la obra sin detener la operación, con estructuras y contrapesos calculados para cargas de gran escala.",
    icon: Construction,
    bullets: [
      "Estructuras y contrapesos para gran escala",
      "Ejecución sin detener la operación de la obra",
      "Equipos calibrados y personal experto",
      "Precisión de ingeniería en cada maniobra",
    ],
  },
  {
    slug: "interventoria-operacion",
    title: "Interventoría y Operación Certificada",
    shortDescription:
      "Operadores certificados e interventoría técnica en cada maniobra de altura.",
    description:
      "Nuestros operadores cuentan con certificación vigente y acompañamos cada proyecto con interventoría técnica que garantiza el cumplimiento de los protocolos de seguridad.",
    icon: ShieldCheck,
    bullets: [
      "100% del personal certificado",
      "Interventoría técnica documentada",
      "Ascenso seguro y certificado en altura",
      "Asesoría y soporte 24/7",
    ],
  },
  {
    slug: "mantenimiento",
    title: "Mantenimiento de Torres Grúa y Elevadores",
    shortDescription:
      "Mantenimiento preventivo y correctivo para que tu equipo no pare la operación.",
    description:
      "Realizamos mantenimiento especializado a torres grúa y elevadores de carga industrial, con técnicos que conocen cada componente del equipo.",
    icon: ClipboardCheck,
    bullets: [
      "Mantenimiento preventivo programado",
      "Atención correctiva ágil en obra",
      "Técnicos especializados por tipo de equipo",
      "Historial de cada intervención",
    ],
  },
  {
    slug: "logistica-movimiento-tierra",
    title: "Logística, Traslado y Movimiento de Tierra",
    shortDescription:
      "Maquinaria pesada lista para los terrenos más exigentes y la logística de tu obra.",
    description:
      "Cubrimos la logística y traslado de equipos entre obras, además de movimiento de tierra y cimentación con maquinaria pesada para preparar el terreno antes de construir.",
    icon: Truck,
    bullets: [
      "Traslado de equipos entre obras",
      "Movimiento de tierra y cimentación",
      "Maquinaria pesada para terrenos exigentes",
      "Cobertura en toda la ciudad",
    ],
  },
]
