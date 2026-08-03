import { BadgeCheck } from "lucide-react"

import { Marquee } from "@/components/motion/marquee"

/**
 * PLACEHOLDER: sin logos reales de aliados/certificadoras disponibles.
 * Se muestran atributos de confianza verificables por el propio servicio.
 * Reemplazar por logos reales (fabricantes, certificadoras) cuando existan.
 */
const TRUST_MARKS = [
  "Operadores certificados",
  "Maquinaria propia",
  "Cobertura en Medellín",
  "Mantenimiento periódico",
  "Asesoría técnica gratuita",
]

export function PartnersMarquee() {
  return (
    <section className="border-y border-border/60 py-10">
      <Marquee durationSeconds={26}>
        {TRUST_MARKS.map((mark) => (
          <span
            key={mark}
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground"
          >
            <BadgeCheck className="size-4 text-brand-500" />
            {mark}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
