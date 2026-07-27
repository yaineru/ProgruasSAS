"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

type ParallaxLayerProps = {
  children: React.ReactNode
  className?: string
  /** Positive = moves slower than scroll (background feel), negative = faster. */
  speed?: number
}

export function ParallaxLayer({
  children,
  className,
  speed = 0.3,
}: ParallaxLayerProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`])

  if (reducedMotion) {
    return (
      <div ref={ref} className={cn(className)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div ref={ref} style={{ y }} className={cn(className)}>
      {children}
    </motion.div>
  )
}
