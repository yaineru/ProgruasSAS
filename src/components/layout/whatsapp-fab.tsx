"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

import { buildWhatsappLink, CONTACT } from "@/lib/constants"

export function WhatsappFab() {
  return (
    <motion.a
      href={buildWhatsappLink("Hola Progruas, quiero más información sobre sus servicios.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp al ${CONTACT.whatsappDisplay}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-brand-500 text-ink-950 shadow-lg shadow-brand-500/30 lg:bottom-8 lg:right-8"
    >
      <MessageCircle className="size-6" fill="currentColor" strokeWidth={1.5} />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  )
}
