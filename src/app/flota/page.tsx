import type { Metadata } from "next"
import Image from "next/image"
import { Construction } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox"
import { EQUIPMENT_CATEGORIES } from "@/data/equipment"
import { GALLERY_IMAGES } from "@/data/gallery"

export const metadata: Metadata = {
  title: "Flota y galería",
  description:
    "Conoce la flota de grúas y equipos de transporte de Progruas: tonelaje, características y disponibilidad estimada por categoría.",
}

export default function FlotaPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Flota
        </span>
        <h1 className="mt-4 text-balance font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
          Equipo mantenido, listo para operar
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
          Cada grúa cuenta con mantenimiento periódico y operador certificado.
          Esta es una muestra de nuestras categorías principales.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {EQUIPMENT_CATEGORIES.map((equipment) => (
            <RevealItem key={equipment.slug}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card">
                <div className="relative h-56 w-full">
                  {equipment.image ? (
                    <Image
                      src={equipment.image}
                      alt={equipment.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-gradient-to-br from-ink-900 to-ink-950">
                      <Construction className="size-14 text-brand-500/40" />
                    </div>
                  )}
                  <Badge
                    className="absolute right-4 top-4"
                    variant={equipment.availability === "disponible" ? "default" : "secondary"}
                  >
                    {equipment.availability === "disponible" ? "Disponible" : "Alta demanda"}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    {equipment.tonnage}
                  </span>
                  <h2 className="font-display text-2xl font-bold tracking-tight">
                    {equipment.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">{equipment.useCase}</p>
                  <ul className="mt-auto flex flex-col gap-1.5 pt-3 text-sm">
                    {equipment.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-muted-foreground">
                        <span className="size-1 rounded-full bg-brand-500" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="border-t border-border/60 bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Galería"
            title="Operación en campo"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <GalleryLightbox images={GALLERY_IMAGES} />
          </div>
        </div>
      </section>
    </>
  )
}
