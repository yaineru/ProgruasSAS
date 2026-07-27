import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/constants"

const ROUTES = ["", "/servicios", "/flota", "/nosotros", "/cotizar", "/contacto"]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
