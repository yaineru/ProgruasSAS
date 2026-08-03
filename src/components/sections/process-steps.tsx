import Image from "next/image"
import { CalendarCheck, ClipboardCheck, MessageSquareText, Truck } from "lucide-react"

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/sections/section-heading"

const STEPS = [
  {
    icon: MessageSquareText,
    title: "Pide tu asesoría",
    description: "Escríbenos o usa el cotizador: tipo de carga, equipo y fecha.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluación técnica",
    description: "Un asesor valida sitio, peso y logística sin costo.",
  },
  {
    icon: CalendarCheck,
    title: "Confirmación",
    description: "Agendamos equipo, operador y ruta con todo documentado.",
  },
  {
    icon: Truck,
    title: "Ejecución",
    description: "Operación en sitio con seguimiento hasta el cierre.",
  },
]

export function ProcessSteps() {
  return (
    <section className="border-y border-border/60 bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="De la solicitud a la ejecución, sin llamadas eternas"
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <Reveal className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border/60 lg:min-h-0">
            <Image
              src="/images/galeria/torre-grua-comuna.jpg"
              alt="Técnicos de Progruas trabajando en la pluma de una torre grúa sobre Medellín"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
            <div className="absolute bottom-0 left-0 flex flex-col gap-1 p-6 text-ink-50">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
                Equipo en obra
              </span>
              <p className="font-display text-xl font-bold tracking-tight">
                Personal certificado, en cada altura
              </p>
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <RevealItem
                  key={step.title}
                  className="relative flex flex-col gap-4 rounded-2xl border border-border/60 bg-background p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-ink-950 text-brand-500 dark:bg-brand-500 dark:text-ink-950">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-3xl font-extrabold text-muted-foreground/40">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
