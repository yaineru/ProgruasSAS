"use client"

import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import { Check, Construction } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"
import type { EquipmentCategory } from "@/types/content"
import type { QuoteState } from "@/types/quote"

type EquipmentStepProps = {
  state: QuoteState
  update: (patch: Partial<QuoteState>) => void
}

async function fetchEquipment(): Promise<EquipmentCategory[]> {
  const response = await fetch("/api/availability")
  if (!response.ok) throw new Error("No se pudo cargar la disponibilidad")
  const data = await response.json()
  return data.equipment
}

export function EquipmentStep({ state, update }: EquipmentStepProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["equipment-availability"],
    queryFn: fetchEquipment,
  })

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Elige el equipo
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Disponibilidad estimada en tiempo real por categoría.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-44 rounded-2xl" />
          ))}
        </div>
      ) : (
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data?.map((equipment) => {
            const selected = state.equipment === equipment.slug

            return (
              <RevealItem key={equipment.slug}>
                <button
                  type="button"
                  onClick={() => update({ equipment: equipment.slug })}
                  className={cn(
                    "group relative flex w-full flex-col overflow-hidden rounded-2xl border text-left transition-all",
                    selected
                      ? "border-brand-500 ring-1 ring-brand-500"
                      : "border-border hover:border-brand-500/40"
                  )}
                >
                  <div className="relative h-32 w-full">
                    {equipment.image ? (
                      <Image
                        src={equipment.image}
                        alt={equipment.name}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center bg-gradient-to-br from-ink-900 to-ink-950">
                        <Construction className="size-10 text-brand-500/40" />
                      </div>
                    )}
                    <Badge
                      className="absolute right-3 top-3"
                      variant={equipment.availability === "disponible" ? "default" : "secondary"}
                    >
                      {equipment.availability === "disponible" ? "Disponible" : "Alta demanda"}
                    </Badge>
                    {selected && (
                      <span className="absolute left-3 top-3 flex size-6 items-center justify-center rounded-full bg-brand-500 text-ink-950">
                        <Check className="size-4" />
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 p-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                      {equipment.tonnage}
                    </span>
                    <span className="font-display text-base font-bold tracking-tight">
                      {equipment.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {equipment.useCase}
                    </span>
                  </div>
                </button>
              </RevealItem>
            )
          })}
        </RevealGroup>
      )}
    </div>
  )
}
