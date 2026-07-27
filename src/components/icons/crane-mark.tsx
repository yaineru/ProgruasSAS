import type { SVGProps } from "react"

export function CraneMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 29V5" />
      <path d="M6 6L27 11.5" />
      <path d="M6 11L20 14.5" />
      <path d="M20 14.5V26" />
      <path d="M20 14.5L24 20.5H16.5Z" />
      <path d="M3 29H14" />
    </svg>
  )
}
