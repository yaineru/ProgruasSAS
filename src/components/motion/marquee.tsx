import * as React from "react"

import { cn } from "@/lib/utils"

type MarqueeProps = {
  children: React.ReactNode
  className?: string
  durationSeconds?: number
  reverse?: boolean
}

/** Infinite CSS-driven marquee (no JS animation loop, cheap on the main thread). */
export function Marquee({
  children,
  className,
  durationSeconds = 30,
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      {[0, 1].map((index) => (
        <div
          key={index}
          aria-hidden={index === 1}
          className="flex shrink-0 items-center justify-around gap-16 pr-16 motion-safe:animate-marquee group-hover:[animation-play-state:paused]"
          style={{
            animationDuration: `${durationSeconds}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
