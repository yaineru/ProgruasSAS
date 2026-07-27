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
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <TrendingUp className="size-5" />
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.summary}</p>
                <span className="mt-auto text-sm font-semibold text-brand-600 dark:text-brand-400">
                  {project.metric}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
