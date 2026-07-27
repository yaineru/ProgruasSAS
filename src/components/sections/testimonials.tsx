import { Quote } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { TESTIMONIALS } from "@/data/testimonials"

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function Testimonials() {
  return (
    <section id="testimonios" className="scroll-mt-24 border-y border-border/60 bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonios"
          title="La confianza se construye en obra"
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <RevealItem key={testimonial.author}>
              <figure className="flex h-full flex-col gap-5 rounded-2xl border border-border/60 bg-background p-7">
                <Quote className="size-7 text-brand-500/60" />
                <blockquote className="flex-1 text-balance text-sm leading-relaxed text-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="bg-brand-500/15 text-xs font-semibold text-brand-600 dark:text-brand-400">
                      {initials(testimonial.author)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{testimonial.author}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.role}</span>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
