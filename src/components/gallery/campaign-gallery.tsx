"use client"

import * as React from "react"
import Image from "next/image"
import { Expand } from "lucide-react"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import type { CampaignImage } from "@/data/campaigns"

export function CampaignGallery({ images }: { images: CampaignImage[] }) {
  const [active, setActive] = React.useState<CampaignImage | null>(null)

  return (
    <>
      <RevealGroup className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {images.map((image) => (
          <RevealItem key={image.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(image)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border/60"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950/85 via-ink-950/0 to-ink-950/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-display text-sm font-bold leading-tight text-ink-50">
                  {image.title}
                </span>
              </div>
              <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-ink-950/50 text-ink-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="size-4" />
              </span>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-2xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.title}</DialogTitle>
          {active ? (
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="100vw"
                className="max-h-[85vh] w-full object-contain"
              />
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-950/85 to-transparent px-5 py-4 font-display text-base font-bold text-ink-50">
                {active.title}
              </span>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
