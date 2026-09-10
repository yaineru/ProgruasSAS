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
              <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 transition-colors group-hover:bg-ink-950/40">
                <Expand className="size-6 text-ink-50 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-2xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active ? (
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="100vw"
              className="max-h-[85vh] w-full rounded-2xl object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
