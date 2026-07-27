import { Counter } from "@/components/motion/counter"
import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { TRUST_STATS } from "@/data/projects"

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <RevealGroup className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
        {TRUST_STATS.map((stat) => (
          <RevealItem key={stat.label} className="flex flex-col items-center gap-1">
            <Counter
              value={stat.value}
              className="font-display text-4xl font-extrabold tracking-tight text-brand-500 sm:text-5xl"
            />
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
