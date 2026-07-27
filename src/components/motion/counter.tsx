"use client"

import * as React from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"

type CounterProps = {
  value: string
  className?: string
}

/** Parses "+300", "24/7", "100%" into an animated numeric prefix/suffix. */
export function Counter({ value, className }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reducedMotion = useReducedMotion()

  const match = value.match(/^([^\d]*)(\d+)(.*)$/)
  const target = match ? Number(match[2]) : 0

  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 24, stiffness: 90 })
  const [display, setDisplay] = React.useState(0)

  React.useEffect(() => {
    if (inView) motionValue.set(target)
  }, [inView, motionValue, target])

  React.useEffect(() => spring.on("change", (latest) => setDisplay(Math.round(latest))), [spring])

  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    )
  }

  const [, prefix, , suffix] = match

  return (
    <span ref={ref} className={className}>
      {prefix}
      {reducedMotion ? target : display}
      {suffix}
    </span>
  )
}
