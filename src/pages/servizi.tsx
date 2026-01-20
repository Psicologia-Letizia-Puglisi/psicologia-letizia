import React from "react"
import type { PageProps } from "gatsby"
import NavBar from "../components/molecules/NavBar"
import Footer from "../components/molecules/Footer"
import Hero from "../components/molecules/Hero"
import { ParallaxProvider } from "react-scroll-parallax"
import Services from "../components/molecules/Services"
import Seo from "../components/atoms/Seo"
import { StaticImage } from "gatsby-plugin-image"
import { ServicesTitle } from "../utilities/siteInfo"

const ServicesPage: React.FC<PageProps> = () => {

  const image = (
    <StaticImage
      // src="../images/studio/FOTO 7.jpg"
      src="../images/studio/FOTO 3.jpeg"
      alt="Studio"
      quality={100}
      placeholder="blurred"
      objectPosition="bottom center"
      layout="fullWidth"
      className="w-full h-[90vh] md:h-screen object-cover"
    />
  )

  return (<ParallaxProvider>
    <NavBar />
    <Hero title={ServicesTitle} darker />
    <Services />
    <Footer />
  </ParallaxProvider>
  )
}

export default ServicesPage

export const Head = () => {

  return (
    <Seo
      title={"Psicologia Letizia Puglisi - Servizi"}
      pathname="/servizi"
      structuredData

    />
  );
};