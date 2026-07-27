"use client"

import { Clock } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import type { QuoteState } from "@/types/quote"

const TIME_SLOTS = ["07:00", "09:00", "11:00", "13:00", "15:00", "17:00"]

const DURATION_OPTIONS = [
  { value: "4h", label: "4 horas" },
  { value: "8h", label: "Turno completo (8 horas)" },
  { value: "1d", label: "1 día" },
  { value: "2-3d", label: "2 – 3 días" },
  { value: "1sem", label: "1 semana o más" },
]

type ScheduleStepProps = {
  state: QuoteState
  update: (patch: Partial<QuoteState>) => void
}

export function ScheduleStep({ state, update }: ScheduleStepProps) {
  const selectedDate = state.date ? new Date(`${state.date}T00:00:00`) : undefined

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Fecha, hora y duración
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Elige cuándo necesitas el servicio. Confirmamos disponibilidad exacta por WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr]">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(date) =>
            update({ date: date ? date.toISOString().slice(0, 10) : null })
          }
          disabled={{ before: new Date() }}
          className="rounded-2xl border border-border"
        />

        <div className="flex flex-col gap-6">
          <div>
            <span className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Clock className="size-4" />
              Horario preferido
            </span>
            <div className="flex flex-wrap gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => update({ timeSlot: slot })}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    state.timeSlot === slot
                      ? "border-brand-500 bg-brand-500 text-ink-950"
                      : "border-border hover:border-brand-500/40"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-3 block text-sm font-semibold">
              Duración estimada
            </span>
            <Select
              value={state.duration ?? undefined}
              onValueChange={(value) => update({ duration: value })}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona una duración" />
              </SelectTrigger>
              <SelectContent>
                {DURATION_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
