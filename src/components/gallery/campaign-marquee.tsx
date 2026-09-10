import Image from "next/image"

import { Marquee } from "@/components/motion/marquee"
import type { CampaignImage } from "@/data/campaigns"

export function CampaignMarquee({ images }: { images: CampaignImage[] }) {
  return (
    <Marquee durationSeconds={38} className="py-2">
      {images.map((image) => (
        <div
          key={image.src}
          className="relative size-28 shrink-0 overflow-hidden rounded-2xl border border-border/60 sm:size-36"
        >
          <Image
            src={image.src}
            alt=""
            fill
            sizes="144px"
            className="object-cover"
          />
        </div>
      ))}
    </Marquee>
  )
}
