"use client"

import { Check } from "lucide-react"

import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SERVICE_TYPES } from "@/data/service-types"
import { cn } from "@/lib/utils"
import type { QuoteState } from "@/types/quote"

type ServiceStepProps = {
  state: QuoteState
  update: (patch: Partial<QuoteState>) => void
}

export function ServiceStep({ state, update }: ServiceStepProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight">
          ¿Qué necesitas?
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Selecciona el tipo de servicio que se ajusta a tu operación.
        </p>
      </div>

      <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SERVICE_TYPES.map((service) => {
          const Icon = service.icon
          const selected = state.serviceType === service.slug

          return (
            <RevealItem key={service.slug}>
              <button
                type="button"
                onClick={() =>
                  update({
                    serviceType: service.slug,
                    equipment: service.requiresEquipment ? state.equipment : null,
                  })
                }
                className={cn(
                  "group relative flex w-full flex-col gap-3 rounded-2xl border p-5 text-left transition-all",
                  selected
                    ? "border-brand-500 bg-brand-500/5 ring-1 ring-brand-500"
                    : "border-border hover:border-brand-500/40"
                )}
              >
                {selected && (
                  <span className="absolute right-4 top-4 flex size-5 items-center justify-center rounded-full bg-brand-500 text-ink-950">
                    <Check className="size-3.5" />
                  </span>
                )}
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Icon className="size-5" />
                </span>
                <span className="font-display text-lg font-bold tracking-tight">
                  {service.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {service.description}
                </span>
              </button>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </div>
  )
}
