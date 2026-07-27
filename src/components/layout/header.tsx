"use client"

import * as React from "react"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/layout/logo"
import { MobileNav } from "@/components/layout/mobile-nav"
import { buildWhatsappLink, CONTACT, NAV_LINKS, PRIMARY_CTA_HREF } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24)
  })

  return (
    <motion.header
      initial={false}
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:inline-flex"
            nativeButton={false}
            render={
              <a
                href={buildWhatsappLink(
                  "Hola Progruas, quiero más información sobre sus servicios."
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${CONTACT.whatsappDisplay}`}
              />
            }
          >
            <MessageCircle className="size-5" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href={PRIMARY_CTA_HREF} />}
            className="hidden sm:inline-flex"
          >
            Cotizar ahora
          </Button>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.header>
  )
}
