import { CONTACT, LOCATION, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants"

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: `+${CONTACT.whatsappNumber}`,
    image: `${SITE_URL}/images/flyer-transporte.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: LOCATION.city,
      addressCountry: "CO",
    },
    areaServed: LOCATION.coverage,
    sameAs: [CONTACT.instagram],
    priceRange: "$$",
  }
}
