import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { SERVICES } from "@/data/services"

export function ServicesGrid() {
  return (
    <section id="servicios" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Servicios"
            title="Todo lo que necesita tu operación"
            description="Desde un izaje puntual hasta el mantenimiento de tu maquinaria completa: un solo aliado técnico para cada etapa."
          />
          <Link
            href="/servicios"
            className="group flex w-fit items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400"
          >
            Ver todos los servicios
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <RevealItem key={service.slug}>
                <Link
                  href={`/servicios#${service.slug}`}
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5"
                >
                  <div className="absolute -right-8 -top-8 size-28 rounded-full bg-brand-500/0 blur-2xl transition-colors group-hover:bg-brand-500/20" />
                  <span className="relative flex size-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <Icon className="size-6" />
                  </span>
                  <div className="relative flex flex-col gap-2">
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.shortDescription}
                    </p>
                  </div>
                  <span className="relative mt-auto flex items-center gap-1 text-sm font-semibold text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    Conocer más
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
