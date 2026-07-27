import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/reveal"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
        {eyebrow}
      </span>
      <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-balance text-lg text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
