"use client"

import * as React from "react"
import { useMutation } from "@tanstack/react-query"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { StepIndicator } from "@/components/quote/step-indicator"
import { ServiceStep } from "@/components/quote/steps/service-step"
import { EquipmentStep } from "@/components/quote/steps/equipment-step"
import { ScheduleStep } from "@/components/quote/steps/schedule-step"
import { LocationStep } from "@/components/quote/steps/location-step"
import { ContactStep } from "@/components/quote/steps/contact-step"
import { SummaryStep } from "@/components/quote/steps/summary-step"
import { ConfirmationScreen } from "@/components/quote/confirmation-screen"
import { SERVICE_TYPES } from "@/data/service-types"
import { quoteRequestSchema } from "@/lib/schemas/quote"
import { INITIAL_QUOTE_STATE, type QuoteState, type QuoteStepId } from "@/types/quote"

const CONTACT_FORM_ID = "quote-contact-form"

async function submitQuote(state: QuoteState) {
  const payload = quoteRequestSchema.parse({
    serviceType: state.serviceType,
    equipment: state.equipment,
    date: state.date,
    timeSlot: state.timeSlot,
    duration: state.duration,
    origin: state.origin,
    destination: state.destination || undefined,
    notes: state.notes || undefined,
    contact: state.contact,
  })

  const response = await fetch("/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!response.ok) throw new Error("No se pudo enviar la solicitud")
  return response.json() as Promise<{ confirmationId: string }>
}

export function QuoteWizard() {
  const [state, setState] = React.useState<QuoteState>(INITIAL_QUOTE_STATE)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(1)

  const update = React.useCallback((patch: Partial<QuoteState>) => {
    setState((prev) => ({ ...prev, ...patch }))
  }, [])

  const requiresEquipment =
    SERVICE_TYPES.find((service) => service.slug === state.serviceType)?.requiresEquipment ?? false

  const steps: QuoteStepId[] = React.useMemo(() => {
    const base: QuoteStepId[] = ["servicio"]
    if (requiresEquipment) base.push("equipo")
    base.push("agenda", "ubicacion", "contacto", "resumen")
    return base
  }, [requiresEquipment])

  const currentStep = steps[Math.min(currentIndex, steps.length - 1)]

  const mutation = useMutation({
    mutationFn: () => submitQuote(state),
  })

  const canContinue = (() => {
    switch (currentStep) {
      case "servicio":
        return Boolean(state.serviceType)
      case "equipo":
        return Boolean(state.equipment)
      case "agenda":
        return Boolean(state.date && state.timeSlot && state.duration)
      case "ubicacion":
        return state.origin.trim().length > 1
      default:
        return true
    }
  })()

  function goNext() {
    setDirection(1)
    setCurrentIndex((index) => Math.min(index + 1, steps.length - 1))
  }

  function goBack() {
    setDirection(-1)
    setCurrentIndex((index) => Math.max(index - 1, 0))
  }

  if (mutation.isSuccess) {
    return (
      <ConfirmationScreen state={state} confirmationId={mutation.data.confirmationId} />
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <StepIndicator steps={steps} currentIndex={currentIndex} />

      <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-border bg-background p-6 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentStep === "servicio" && <ServiceStep state={state} update={update} />}
            {currentStep === "equipo" && <EquipmentStep state={state} update={update} />}
            {currentStep === "agenda" && <ScheduleStep state={state} update={update} />}
            {currentStep === "ubicacion" && <LocationStep state={state} update={update} />}
            {currentStep === "contacto" && (
              <ContactStep
                state={state}
                update={update}
                onValid={goNext}
                formId={CONTACT_FORM_ID}
              />
            )}
            {currentStep === "resumen" && <SummaryStep state={state} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {mutation.isError && (
        <p className="text-center text-sm text-destructive">
          No se pudo enviar la solicitud. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={goBack}
          disabled={currentIndex === 0}
          className="gap-1"
        >
          <ArrowLeft className="size-4" />
          Atrás
        </Button>

        {currentStep === "contacto" ? (
          <Button type="submit" form={CONTACT_FORM_ID} className="gap-1">
            Continuar
            <ArrowRight className="size-4" />
          </Button>
        ) : currentStep === "resumen" ? (
          <Button
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
            className="gap-1"
          >
            {mutation.isPending && <Loader2 className="size-4 animate-spin" />}
            Enviar solicitud
          </Button>
        ) : (
          <Button onClick={goNext} disabled={!canContinue} className="gap-1">
            Continuar
            <ArrowRight className="size-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
