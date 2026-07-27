import type { Metadata } from "next"
import { ShieldCheck, Target, Users, Wrench } from "lucide-react"

import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { HistoryTimeline } from "@/components/sections/history-timeline"
import { HISTORY_MILESTONES } from "@/data/history"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Progruas S.A.S: nuestra trayectoria, valores y el equipo certificado detrás de cada izaje.",
}

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Seguridad primero",
    description: "Cada maniobra sigue un plan de izaje documentado y protocolos de seguridad industrial.",
  },
  {
    icon: Target,
    title: "Precisión técnica",
    description: "Evaluamos carga, sitio y logística antes de mover un solo kilo.",
  },
  {
    icon: Users,
    title: "Gente certificada",
    description: "Operadores con certificación vigente y experiencia comprobada.",
  },
  {
    icon: Wrench,
    title: "Equipo bien mantenido",
    description: "Mantenimiento periódico que reduce el riesgo de falla en obra.",
  },
]

export default function NosotrosPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Nosotros
        </span>
        <h1 className="mt-4 text-balance font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
          Más de 8 años moviendo lo pesado en las alturas
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
          Progruas es un equipo técnico especializado en torres grúa y
          elevadores mixtos en Medellín, construido sobre seguridad y
          precisión.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <HistoryTimeline milestones={HISTORY_MILESTONES} />
      </section>

      <section className="border-t border-border/60 bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Valores"
            title="Lo que no negociamos"
            align="center"
            className="mx-auto"
          />

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <RevealItem
                  key={value.title}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-background p-6 text-center"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </section>
    </>
  )
}
