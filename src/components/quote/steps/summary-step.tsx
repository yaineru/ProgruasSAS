import type { ComponentType } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar, Clock, MapPin, Timer, User, Wrench } from "lucide-react"

import { EQUIPMENT_CATEGORIES } from "@/data/equipment"
import { SERVICE_TYPES } from "@/data/service-types"
import type { QuoteState } from "@/types/quote"

const DURATION_LABELS: Record<string, string> = {
  "4h": "4 horas",
  "8h": "Turno completo (8 horas)",
  "1d": "1 día",
  "2-3d": "2 – 3 días",
  "1sem": "1 semana o más",
}

function SummaryRow({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3 py-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-brand-500" />
      <div className="flex flex-1 flex-col">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
        <span className="text-sm font-medium">{value}</span>
      </div>
    </div>
  )
}

export function SummaryStep({ state }: { state: QuoteState }) {
  const service = SERVICE_TYPES.find((item) => item.slug === state.serviceType)
  const equipment = EQUIPMENT_CATEGORIES.find((item) => item.slug === state.equipment)
  const formattedDate = state.date
    ? format(new Date(`${state.date}T00:00:00`), "EEEE d 'de' MMMM 'de' yyyy", { locale: es })
    : "Sin definir"

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Resumen de tu solicitud
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Verifica que todo esté correcto antes de enviar.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card/60 px-5 backdrop-blur">
        <div className="divide-y divide-border">
          <SummaryRow icon={Wrench} label="Servicio" value={service?.label ?? "—"} />
          {equipment && (
            <SummaryRow
              icon={Wrench}
              label="Equipo"
              value={`${equipment.name} (${equipment.tonnage})`}
            />
          )}
          <SummaryRow icon={Calendar} label="Fecha" value={formattedDate} />
          <SummaryRow icon={Clock} label="Horario" value={state.timeSlot ?? "—"} />
          <SummaryRow
            icon={Timer}
            label="Duración"
            value={state.duration ? DURATION_LABELS[state.duration] : "—"}
          />
          <SummaryRow
            icon={MapPin}
            label="Ubicación"
            value={
              state.destination
                ? `${state.origin} → ${state.destination}`
                : state.origin || "—"
            }
          />
          <SummaryRow
            icon={User}
            label="Contacto"
            value={
              state.contact
                ? `${state.contact.name} · ${state.contact.phone} · ${state.contact.email}`
                : "—"
            }
          />
        </div>
      </div>

      {state.notes ? (
        <div className="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Notas: </span>
          {state.notes}
        </div>
      ) : null}
    </div>
  )
}
