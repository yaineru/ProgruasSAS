"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

type MagneticProps = {
  children: React.ReactNode
  className?: string
  strength?: number
}

/** Subtle magnetic hover: the element leans toward the cursor within its bounds. */
export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return
    const bounds = ref.current.getBoundingClientRect()
    x.set((event.clientX - bounds.left - bounds.width / 2) * strength)
    y.set((event.clientY - bounds.top - bounds.height / 2) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={reducedMotion ? undefined : { x: springX, y: springY }}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  )
}
