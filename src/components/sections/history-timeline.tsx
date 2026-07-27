"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import type { HISTORY_MILESTONES } from "@/data/history"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type HistoryTimelineProps = {
  milestones: typeof HISTORY_MILESTONES
}

export function HistoryTimeline({ milestones }: HistoryTimelineProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const lineRef = React.useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  React.useEffect(() => {
    if (reducedMotion || !containerRef.current) return

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
              end: "bottom 75%",
              scrub: true,
            },
          }
        )
      }

      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <div ref={containerRef} className="relative flex flex-col gap-12 pl-10 sm:pl-14">
      <div className="absolute top-1 bottom-1 left-3 w-px bg-border sm:left-5">
        <div
          ref={lineRef}
          className="h-full w-full origin-top bg-brand-500"
          style={reducedMotion ? undefined : { transform: "scaleY(0)" }}
        />
      </div>

      {milestones.map((milestone) => (
        <div key={milestone.title} className="timeline-item relative">
          <span className="absolute -left-10 top-1 flex size-6 items-center justify-center rounded-full border-2 border-brand-500 bg-background sm:-left-14" />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            {milestone.stage}
          </span>
          <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">
            {milestone.title}
          </h3>
          <p className="mt-2 max-w-xl text-muted-foreground">{milestone.description}</p>
        </div>
      ))}
    </div>
  )
}
