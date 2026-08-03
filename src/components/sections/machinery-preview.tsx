import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Construction } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { EQUIPMENT_CATEGORIES } from "@/data/equipment"

export function MachineryPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Maquinaria"
            title="Equipo listo para tu próximo izaje"
            description="Torres grúa, malacates y camión grúas con mantenimiento periódico y operador certificado."
          />
          <Link
            href="/maquinaria"
            className="group flex w-fit items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400"
          >
            Ver maquinaria completa
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EQUIPMENT_CATEGORIES.map((equipment) => (
            <RevealItem key={equipment.slug}>
              <div className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl border border-border/60">
                {equipment.image ? (
                  <Image
                    src={equipment.image}
                    alt={equipment.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-900 to-ink-950">
                    <Construction className="size-16 text-brand-500/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

                <Badge
                  className="absolute right-4 top-4"
                  variant={equipment.availability === "disponible" ? "default" : "secondary"}
                >
                  {equipment.availability === "disponible" ? "Disponible" : "Alta demanda"}
                </Badge>

                <div className="relative flex flex-col gap-1 p-6 text-ink-50">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
                    {equipment.tonnage}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {equipment.name}
                  </h3>
                  <p className="text-sm text-ink-300">{equipment.useCase}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
