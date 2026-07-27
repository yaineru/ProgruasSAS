"use client"

import * as React from "react"
import { motion, type Variants } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "li"
}

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const reducedMotion = useReducedMotion()
  const Component = motion[as]

  if (reducedMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}

type RevealGroupProps = {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: RevealGroupProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={baseVariants} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  )
}
