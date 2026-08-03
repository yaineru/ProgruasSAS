import type { LucideIcon } from "lucide-react"

export type Service = {
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: LucideIcon
  bullets: string[]
}

export type EquipmentCategory = {
  slug: string
  name: string
  tonnage: string
  useCase: string
  image: string | null
  availability: "disponible" | "alta-demanda"
  specs: string[]
}

export type ServiceType = {
  slug: string
  label: string
  description: string
  icon: LucideIcon
  requiresEquipment: boolean
}

export type Testimonial = {
  quote: string
  author: string
  role: string
  placeholder: boolean
}

export type FaqItem = {
  question: string
  answer: string
}

export type GalleryImage = {
  src: string
  alt: string
  category: "flota" | "proyecto" | "operacion"
}

export type FeaturedProject = {
  title: string
  summary: string
  metric: string
  image: string
  placeholder: boolean
}

export type TrustStat = {
  value: string
  label: string
}
