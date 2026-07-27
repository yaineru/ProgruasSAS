import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

const LOGO_ASPECT = 2082 / 846

type LogoProps = {
  className?: string
  /**
   * "auto" follows the site theme (light/dark). Use "dark" to force the
   * white/yellow mark on a surface that's always dark regardless of theme
   * (e.g. the footer), or "light" for a surface that's always light.
   */
  variant?: "auto" | "dark" | "light"
  heightClassName?: string
}

export function Logo({
  className,
  variant = "auto",
  heightClassName = "h-9 lg:h-10",
}: LogoProps) {
  const imgClassName = cn(heightClassName, "w-auto")

  return (
    <Link
      href="/"
      className={cn("group flex items-center", className)}
      aria-label="Progruas S.A.S — inicio"
    >
      {variant === "dark" && (
        <Image
          src="/images/progruas-logo-dark-theme.png"
          alt="Progruas S.A.S"
          width={2082}
          height={846}
          priority
          className={cn(imgClassName, "transition-transform group-hover:scale-[1.03]")}
          style={{ aspectRatio: LOGO_ASPECT }}
        />
      )}

      {variant === "light" && (
        <Image
          src="/images/progruas-logo-light-theme.png"
          alt="Progruas S.A.S"
          width={2082}
          height={846}
          priority
          className={cn(imgClassName, "transition-transform group-hover:scale-[1.03]")}
          style={{ aspectRatio: LOGO_ASPECT }}
        />
      )}

      {variant === "auto" && (
        <>
          <Image
            src="/images/progruas-logo-light-theme.png"
            alt="Progruas S.A.S"
            width={2082}
            height={846}
            priority
            className={cn(imgClassName, "block dark:hidden transition-transform group-hover:scale-[1.03]")}
            style={{ aspectRatio: LOGO_ASPECT }}
          />
          <Image
            src="/images/progruas-logo-dark-theme.png"
            alt="Progruas S.A.S"
            width={2082}
            height={846}
            priority
            className={cn(imgClassName, "hidden dark:block transition-transform group-hover:scale-[1.03]")}
            style={{ aspectRatio: LOGO_ASPECT }}
          />
        </>
      )}
    </Link>
  )
}
