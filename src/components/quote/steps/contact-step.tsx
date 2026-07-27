"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { quoteContactSchema, type QuoteContact } from "@/lib/schemas/quote"
import type { QuoteState } from "@/types/quote"

type ContactStepProps = {
  state: QuoteState
  update: (patch: Partial<QuoteState>) => void
  onValid: () => void
  formId: string
}

export function ContactStep({ state, update, onValid, formId }: ContactStepProps) {
  const form = useForm<QuoteContact>({
    resolver: zodResolver(quoteContactSchema),
    defaultValues: state.contact ?? {
      name: "",
      company: "",
      phone: "",
      email: "",
    },
  })

  function onSubmit(values: QuoteContact) {
    update({ contact: values })
    onValid()
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Tus datos de contacto
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Un asesor te confirmará el servicio por WhatsApp.
        </p>
      </div>

      <Form {...form}>
        <form
          id={formId}
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de tu empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="300 000 0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tucorreo@empresa.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
