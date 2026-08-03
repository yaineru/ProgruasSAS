import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { PRIMARY_CTA_HREF } from "@/lib/constants"

export function CtaBanner() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 px-6 py-20 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklch,var(--color-brand-500)_20%,transparent),transparent_60%)]" />
        <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400">
          Cotizador en línea
        </span>
        <h2 className="relative max-w-2xl text-balance font-display text-4xl font-extrabold tracking-tight text-ink-50 sm:text-5xl">
          Cuéntanos tu requerimiento, sin llamadas eternas
        </h2>
        <p className="relative max-w-lg text-balance text-ink-300">
          Elige el equipo, la fecha y la ubicación. Nosotros confirmamos por
          WhatsApp con un asesor real.
        </p>
        <Button
          size="lg"
          className="relative h-14 px-8 text-base"
          nativeButton={false}
          render={<Link href={PRIMARY_CTA_HREF} />}
        >
          Solicitar cotización
          <ArrowRight className="size-4" />
        </Button>
      </Reveal>
    </section>
  )
}
