import type { Metadata } from "next"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { ContactForm } from "@/components/contact/contact-form"
import { FAQ_ITEMS } from "@/data/faq"
import { buildWhatsappLink, CONTACT } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Habla con Progruas S.A.S: asesoría técnica gratuita por WhatsApp, formulario de contacto y cobertura en Medellín y el Valle de Aburrá.",
}

export default function ContactoPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Contacto
        </span>
        <h1 className="mt-4 text-balance font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
          Hablemos de tu operación
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
          Asesoría técnica gratuita, sin compromiso. Respondemos rápido por WhatsApp.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6">
              <a
                href={buildWhatsappLink("Hola Progruas, quiero más información.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <MessageCircle className="size-5" />
                </span>
                WhatsApp — {CONTACT.whatsappDisplay}
              </a>
              <a
                href={`tel:+${CONTACT.whatsappNumber}`}
                className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Phone className="size-5" />
                </span>
                Llamar — {CONTACT.whatsappDisplay}
              </a>
              <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Mail className="size-5" />
                </span>
                Escríbenos por el formulario
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <MapPin className="size-5" />
                </span>
                Medellín y el Valle de Aburrá
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/60">
              <iframe
                title="Cobertura Progruas en Medellín y el Valle de Aburrá"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-75.68,6.08,-75.48,6.38&layer=mapnik"
                loading="lazy"
                className="h-64 w-full grayscale"
              />
            </div>
          </Reveal>

          <Reveal className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Todo lo que debes saber"
            align="center"
            className="mx-auto"
          />
          <Reveal className="mt-12">
            <Accordion className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-display text-lg font-bold tracking-tight">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  )
}
