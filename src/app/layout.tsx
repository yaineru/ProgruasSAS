import type { Metadata } from "next"
import { Inter, Big_Shoulders } from "next/font/google"

import { Providers } from "@/lib/providers"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsappFab } from "@/components/layout/whatsapp-fab"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants"
import { buildLocalBusinessSchema } from "@/lib/seo"

import "./globals.css"

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Torres grúa y elevadores mixtos en Medellín`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Torres grúa y elevadores mixtos en Medellín`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessSchema()) }}
        />
        <Providers>
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <WhatsappFab />
        </Providers>
      </body>
    </html>
  )
}
