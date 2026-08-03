import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Logo } from "@/components/layout/logo"
import { InstagramIcon } from "@/components/icons/instagram-icon"
import { SERVICES } from "@/data/services"
import { buildWhatsappLink, CONTACT, LOCATION, SITE_DESCRIPTION } from "@/lib/constants"

const COMPANY_LINKS = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/maquinaria", label: "Maquinaria" },
  { href: "/cotizar", label: "Cotizar" },
  { href: "/contacto", label: "Contacto" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-ink-950 text-ink-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Logo variant="dark" />
            <p className="max-w-xs text-sm text-ink-400">{SITE_DESCRIPTION}</p>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 text-sm text-ink-300 transition-colors hover:text-brand-500"
            >
              <InstagramIcon className="size-4" />
              {CONTACT.instagramHandle}
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink-400">
              Servicios
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios#${service.slug}`}
                    className="text-sm text-ink-300 transition-colors hover:text-brand-500"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink-400">
              Empresa
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-300 transition-colors hover:text-brand-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink-400">
              Contacto
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-300">
              <li>
                <a
                  href={buildWhatsappLink("Hola Progruas, quiero más información.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brand-500"
                >
                  <Phone className="size-4 shrink-0" />
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href="tel:+5745592102"
                  className="flex items-center gap-2 transition-colors hover:text-brand-500"
                >
                  <Phone className="size-4 shrink-0" />
                  {CONTACT.landline}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-brand-500"
                >
                  <Mail className="size-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>{LOCATION.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 text-xs text-ink-500 sm:flex-row">
          <p>
            © {year} Progruas S.A.S. Todos los derechos reservados.
          </p>
          <p>Torres grúa · Malacates · Camión grúas · Medellín</p>
        </div>
      </div>
    </footer>
  )
}
