import type { Metadata } from "next"

import { QuoteWizard } from "@/components/quote/quote-wizard"

export const metadata: Metadata = {
  title: "Cotizar servicio",
  description:
    "Arma tu servicio de torre grúa, elevador mixto o movimiento de tierra en minutos: equipo, fecha y ubicación, con confirmación por WhatsApp.",
}

export default function CotizarPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-3 text-center">
        <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Cotizador
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Arma tu servicio en minutos
        </h1>
        <p className="mx-auto max-w-xl text-balance text-muted-foreground">
          Selecciona el servicio, el equipo y la fecha. Nosotros confirmamos
          con un asesor real por WhatsApp.
        </p>
      </div>

      <QuoteWizard />
    </section>
  )
}
