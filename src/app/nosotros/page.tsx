import type { Metadata } from "next"
import Image from "next/image"
import { Clock, Handshake, Users, Zap } from "lucide-react"

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/sections/section-heading"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Progruas S.A.S: quiénes somos, nuestra misión, visión y el equipo certificado detrás de cada izaje en Medellín.",
}

const VALUES = [
  {
    icon: Handshake,
    title: "Confianza",
    description: "Un trato directo y transparente en cada proyecto que emprendemos.",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Cumplimos los tiempos que acordamos, sin excusas.",
  },
  {
    icon: Zap,
    title: "Eficiencia",
    description: "Equipos de última tecnología para resolver cada necesidad.",
  },
  {
    icon: Users,
    title: "Respeto",
    description: "Con nuestros clientes y con nuestros colaboradores, nuestro principal recurso.",
  },
]

export default function NosotrosPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Nosotros
        </span>
        <h1 className="mt-4 text-balance font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
          12 años moviendo lo pesado en las alturas
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
          Progruas es un equipo técnico especializado en torres grúa y
          malacates en Medellín, construido sobre seguridad y precisión.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            <SectionHeading eyebrow="¿Quiénes somos?" title="Solución a sus problemas" />
            <p className="text-muted-foreground">
              Somos una empresa especializada en brindar servicios de
              transporte, montaje, realce, mantenimiento, operación y
              desmontaje de torre grúas y malacates mixtos.
            </p>
            <p className="text-muted-foreground">
              Estamos a la vanguardia y contamos con equipos de última
              tecnología para ofrecer el mejor servicio, cubriendo las
              necesidades de nuestros clientes, manteniendo un trato directo
              y haciendo llegar la mejor propuesta del mercado.
            </p>
          </Reveal>
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60">
            <Image
              src="/images/galeria/torre-grua-comuna.jpg"
              alt="Técnicos de Progruas trabajando en la pluma de una torre grúa sobre Medellín"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background p-8">
              <span className="font-display text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                Misión
              </span>
              <p className="text-muted-foreground">
                Brindar un servicio seguro, eficiente, enfocándonos en ser
                socios estratégicos de nuestros clientes buscando un mutuo
                crecimiento y creando una relación duradera en el tiempo
                mediante confianza, puntualidad, eficiencia y respeto; así
                como con nuestros colaboradores quienes son nuestro
                principal recurso.
              </p>
            </Reveal>
            <Reveal className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background p-8">
              <span className="font-display text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                Visión
              </span>
              <p className="text-muted-foreground">
                Ser reconocida como la empresa más importante y sólida del
                gremio, manteniendo un liderazgo en el mercado mediante la
                oferta de servicio de calidad y satisfacción de nuestros
                clientes siendo su mayor proveedor en el gremio; asimismo
                ser una empresa atractiva para nuestros colaboradores.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 lg:order-1">
              <Image
                src="/images/galeria/malacate-instalacion.jpg"
                alt="Personal de Progruas instalando un malacate en obra"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal className="order-1 flex flex-col gap-4 lg:order-2">
              <SectionHeading eyebrow="Nuestro personal" title="Gente calificada, para proyectos exigentes" />
              <p className="text-muted-foreground">
                En Progruas contamos con personal altamente calificado, con
                una vasta experiencia, con las herramientas y entrenamiento
                necesario para cumplir con los proyectos y solicitudes más
                exigentes de nuestros clientes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nuestros valores"
            title="Lo que no negociamos"
            align="center"
            className="mx-auto"
          />

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <RevealItem
                  key={value.title}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-background p-6 text-center"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </section>
    </>
  )
}
