import React from "react"
import SEO from "../components/SEO"
import HeroSection from "../components/HeroSection"
import HomeServices from "../components/HomeServices"
import ContentFront from "../components/ContentFront"
import WorkSteps from "../components/WorkSteps"
import ContactFront from "../components/ContactFront"

export default function Home() {
  return (
    <>
      <SEO />
      <HeroSection />
      <HomeServices />
      <ContentFront />
      <WorkSteps />
      <ContactFront/>
    </>
    
    )
}
