"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { QuoteState } from "@/types/quote"

type LocationStepProps = {
  state: QuoteState
  update: (patch: Partial<QuoteState>) => void
}

export function LocationStep({ state, update }: LocationStepProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Ubicación
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Indícanos dónde se realizará el servicio.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="origin">Ciudad / dirección de origen</Label>
          <Input
            id="origin"
            placeholder="Ej. Bogotá, zona industrial Puente Aranda"
            value={state.origin}
            onChange={(event) => update({ origin: event.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="destination">Destino (si aplica)</Label>
          <Input
            id="destination"
            placeholder="Ej. Medellín, obra en construcción"
            value={state.destination}
            onChange={(event) => update({ destination: event.target.value })}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="notes">Notas adicionales (opcional)</Label>
        <Textarea
          id="notes"
          placeholder="Peso aproximado, restricciones de acceso, condiciones del sitio..."
          value={state.notes}
          onChange={(event) => update({ notes: event.target.value })}
          rows={4}
        />
      </div>
    </div>
  )
}
