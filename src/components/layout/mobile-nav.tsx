"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, MessageCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/layout/logo"
import {
  buildWhatsappLink,
  CONTACT,
  NAV_LINKS,
  PRIMARY_CTA_HREF,
} from "@/lib/constants"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Abrir menú" />}
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 data-[side=right]:w-full data-[side=right]:max-w-none p-0 sm:hidden"
      >
        <SheetHeader className="border-b border-border/60 p-5">
          <SheetTitle render={<Logo />} />
        </SheetHeader>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-5">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-border/40 py-5 font-display text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-brand-500"
            >
              <span className="flex items-center gap-3">
                <span className="font-sans text-sm font-normal text-muted-foreground">
                  0{index + 1}
                </span>
                {link.label}
              </span>
              <ArrowRight className="size-5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-border/60 p-5 pb-8">
          <Button
            nativeButton={false}
            render={<Link href={PRIMARY_CTA_HREF} onClick={() => setOpen(false)} />}
            size="lg"
            className="h-14 text-base"
          >
            Solicitar cotización
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 text-base"
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
            <MessageCircle className="size-5" />
            WhatsApp {CONTACT.whatsappDisplay}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
