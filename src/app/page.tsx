import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { ServicesGrid } from "@/components/sections/services-grid"
import { ProcessSteps } from "@/components/sections/process-steps"
import { FleetPreview } from "@/components/sections/fleet-preview"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { Testimonials } from "@/components/sections/testimonials"
import { PartnersMarquee } from "@/components/sections/partners-marquee"
import { CtaBanner } from "@/components/sections/cta-banner"
import { FaqPreview } from "@/components/sections/faq-preview"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ProcessSteps />
      <FleetPreview />
      <FeaturedProjects />
      <Testimonials />
      <PartnersMarquee />
      <CtaBanner />
      <FaqPreview />
    </>
  )
}
