"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { EQUIPMENT_CATEGORIES } from "@/data/equipment"
import { SERVICE_TYPES } from "@/data/service-types"
import { buildWhatsappLink } from "@/lib/constants"
import type { QuoteState } from "@/types/quote"

function buildConfirmationMessage(state: QuoteState, confirmationId: string) {
  const service = SERVICE_TYPES.find((item) => item.slug === state.serviceType)
  const equipment = EQUIPMENT_CATEGORIES.find((item) => item.slug === state.equipment)

  const lines = [
    `Hola Progruas, quiero confirmar mi solicitud ${confirmationId}.`,
    `Servicio: ${service?.label ?? "—"}`,
    equipment ? `Equipo: ${equipment.name} (${equipment.tonnage})` : null,
    `Fecha: ${state.date ?? "—"} a las ${state.timeSlot ?? "—"}`,
    `Duración: ${state.duration ?? "—"}`,
    `Ubicación: ${state.origin}${state.destination ? ` → ${state.destination}` : ""}`,
    `Contacto: ${state.contact?.name ?? "—"} (${state.contact?.phone ?? "—"})`,
  ].filter(Boolean)

  return lines.join("\n")
}

export function ConfirmationScreen({
  state,
  confirmationId,
}: {
  state: QuoteState
  confirmationId: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-6 py-10 text-center"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
        className="flex size-16 items-center justify-center rounded-full bg-brand-500/15 text-brand-500"
      >
        <CheckCircle2 className="size-9" />
      </motion.span>

      <div className="flex flex-col gap-2">
        <h2 className="font-display text-3xl font-extrabold tracking-tight">
          ¡Solicitud enviada!
        </h2>
        <p className="max-w-md text-balance text-sm text-muted-foreground">
          Tu código de referencia es{" "}
          <span className="font-mono font-semibold text-foreground">
            {confirmationId}
          </span>
          . Confírmala por WhatsApp para que un asesor te contacte de inmediato.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          className="h-14 px-8 text-base"
          nativeButton={false}
          render={
            <a
              href={buildWhatsappLink(buildConfirmationMessage(state, confirmationId))}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <MessageCircle className="size-4" />
          Confirmar por WhatsApp
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-14 px-8 text-base"
          nativeButton={false}
          render={<Link href="/" />}
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Button>
      </div>
    </motion.div>
  )
}
