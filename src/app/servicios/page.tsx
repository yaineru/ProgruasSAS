import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { SERVICES } from "@/data/services"
import { PRIMARY_CTA_HREF } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Montaje, desmontaje, realce y mantenimiento de torres grúa y malacates, alquiler de camión grúas, repuestos y asesoría técnica gratuita.",
}

export default function ServiciosPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Servicios
        </span>
        <h1 className="mt-4 text-balance font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
          Un aliado técnico para cada etapa de tu operación
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
          Desde el montaje de tu torre grúa hasta el mantenimiento de tu
          malacate, cubrimos toda la operación en altura.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.slug}>
                <div
                  id={service.slug}
                  className="scroll-mt-28 grid grid-cols-1 gap-8 rounded-3xl border border-border/60 bg-card p-8 sm:p-10 lg:grid-cols-[auto_1fr]"
                >
                  <div className="flex items-start gap-4 lg:flex-col">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <Icon className="size-7" />
                    </span>
                    <span className="font-display text-4xl font-extrabold text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h2 className="font-display text-3xl font-bold tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand-500" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            ¿No estás seguro de qué necesitas?
          </h2>
          <Button
            size="lg"
            className="h-14 px-8 text-base"
            nativeButton={false}
            render={<Link href={PRIMARY_CTA_HREF} />}
          >
            Habla con un asesor
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </>
  )
}
