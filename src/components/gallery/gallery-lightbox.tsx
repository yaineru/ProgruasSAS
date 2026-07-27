"use client"

import * as React from "react"
import Image from "next/image"
import { Expand } from "lucide-react"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import type { GalleryImage } from "@/types/content"

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = React.useState<GalleryImage | null>(null)

  return (
    <>
      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <RevealItem key={image.src}>
            <button
              type="button"
              onClick={() => setActive(image)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/60"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 transition-colors group-hover:bg-ink-950/40">
                <Expand className="size-6 text-ink-50 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
