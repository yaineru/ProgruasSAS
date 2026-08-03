"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ParallaxLayer } from "@/components/motion/parallax-layer"
import { buildWhatsappLink, CONTACT, PRIMARY_CTA_HREF } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink-950 text-ink-50">
      <ParallaxLayer speed={0.5} className="absolute inset-0">
        <video
          className="size-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/flyer-transporte.jpg"
        >
          <source src="/video/hero-reel.mp4" type="video/mp4" />
        </video>
      </ParallaxLayer>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-ink-950/40" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-20 pt-40 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-fit items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur"
        >
          <ShieldCheck className="size-3.5" />
          Programa una visita técnica y cotizamos servicios
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Movemos lo pesado.{" "}
          <span className="text-brand-500">Con precisión.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-xl text-balance text-lg text-ink-300 sm:text-xl"
        >
          Montaje, desmontaje y mantenimiento de torres grúa y malacates en
          Medellín y el Valle de Aburrá. Operación certificada y un cotizador
          que arma tu servicio en minutos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-14 px-8 text-base"
            nativeButton={false}
            render={<Link href={PRIMARY_CTA_HREF} />}
          >
            Solicitar cotización
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 border-ink-50/20 bg-ink-50/5 px-8 text-base text-ink-50 backdrop-blur hover:bg-ink-50/10"
            nativeButton={false}
            render={
              <a
                href={buildWhatsappLink(
                  "Hola Progruas, quiero más información sobre sus servicios."
                )}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircle className="size-4" />
            WhatsApp {CONTACT.whatsappDisplay}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
