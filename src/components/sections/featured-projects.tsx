import Image from "next/image"
import { TrendingUp } from "lucide-react"

import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { FEATURED_PROJECTS } from "@/data/projects"

export function FeaturedProjects() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proyectos destacados"
          title="Operaciones que exigían precisión"
          description="Una muestra representativa del tipo de operación que ejecutamos."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <RevealItem key={project.title}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-xl bg-ink-950/70 text-brand-400 backdrop-blur">
                    <TrendingUp className="size-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.summary}</p>
                  <span className="mt-auto text-sm font-semibold text-brand-600 dark:text-brand-400">
                    {project.metric}
                  </span>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
