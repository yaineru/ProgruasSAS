"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import type { QuoteStepId } from "@/types/quote"

const LABELS: Record<QuoteStepId, string> = {
  servicio: "Servicio",
  equipo: "Equipo",
  agenda: "Agenda",
  ubicacion: "Ubicación",
  contacto: "Contacto",
  resumen: "Resumen",
}

type StepIndicatorProps = {
  steps: QuoteStepId[]
  currentIndex: number
}

export function StepIndicator({ steps, currentIndex }: StepIndicatorProps) {
  return (
    <div className="flex w-full items-center gap-2 sm:gap-3">
      {steps.map((step, index) => {
        const isDone = index < currentIndex
        const isCurrent = index === currentIndex

        return (
          <div key={step} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative flex w-full items-center">
              {index > 0 && (
                <span
                  className={cn(
                    "absolute right-1/2 left-0 top-1/2 h-px -translate-y-1/2 bg-border",
                    isDone && "bg-brand-500"
                  )}
                />
              )}
              <motion.span
                initial={false}
                animate={{
                  scale: isCurrent ? 1.1 : 1,
                }}
                className={cn(
                  "relative z-10 mx-auto flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors",
                  isDone && "border-brand-500 bg-brand-500 text-ink-950",
                  isCurrent && "border-brand-500 bg-background text-brand-600 dark:text-brand-400",
                  !isDone && !isCurrent && "border-border bg-background text-muted-foreground"
                )}
              >
                {isDone ? <Check className="size-4" /> : index + 1}
              </motion.span>
            </div>
            <span
              className={cn(
                "hidden text-center text-xs font-medium text-muted-foreground sm:block",
                isCurrent && "text-foreground"
              )}
            >
              {LABELS[step]}
            </span>
          </div>
        )
      })}
    </div>
  )
}
