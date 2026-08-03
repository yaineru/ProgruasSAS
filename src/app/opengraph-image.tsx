import { ImageResponse } from "next/og"

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#08090a",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(245, 180, 20, 0.35), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: "#F5B414",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 32, fontWeight: 800, color: "#fafafa" }}>
            PRO<span style={{ color: "#F5B414" }}>GRUAS</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#fafafa",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {SITE_NAME} — Torres grúa y malacates en Medellín
          </span>
          <span style={{ fontSize: 28, color: "#a3a3a3", maxWidth: 800 }}>
            {SITE_DESCRIPTION}
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
