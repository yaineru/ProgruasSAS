import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { FAQ_ITEMS } from "@/data/faq"

export function FaqPreview() {
  const items = FAQ_ITEMS.slice(0, 5)

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas antes de cotizar"
          align="center"
          className="mx-auto"
        />

        <Reveal className="mt-12">
          <Accordion className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
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

        <div className="mt-8 flex justify-center">
          <Link
            href="/contacto"
            className="group flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400"
          >
            Ver todas las preguntas
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
