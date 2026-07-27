"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Loader2, MessageCircle, Send } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { buildWhatsappLink, CONTACT } from "@/lib/constants"
import { contactMessageSchema, type ContactMessage } from "@/lib/schemas/contact"

async function sendMessage(values: ContactMessage) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  })
  if (!response.ok) throw new Error("No se pudo enviar el mensaje")
  return response.json()
}

export function ContactForm() {
  const form = useForm<ContactMessage>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  })

  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      toast.success("Mensaje enviado. Te contactaremos pronto.")
      form.reset()
    },
    onError: () => {
      toast.error("No se pudo enviar el mensaje. Intenta por WhatsApp.")
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => mutation.mutate(values))}
        className="flex flex-col gap-5"
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Cuéntanos qué necesitas" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" disabled={mutation.isPending} className="h-12 flex-1 gap-2">
            {mutation.isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Send className="size-4" />
            )}
            Enviar mensaje
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-12 flex-1 gap-2"
            nativeButton={false}
            render={
              <a
                href={buildWhatsappLink("Hola Progruas, quiero más información.")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircle className="size-4" />
            WhatsApp {CONTACT.whatsappDisplay}
          </Button>
        </div>
      </form>
    </Form>
  )
}
