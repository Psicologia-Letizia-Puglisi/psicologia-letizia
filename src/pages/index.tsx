import React from "react"
import type { PageProps } from "gatsby"
import NavBar from "../components/molecules/NavBar"
import Footer from "../components/molecules/Footer"
import Hero from "../components/molecules/Hero"
import AboutMe from "../components/molecules/AboutMe"
import { ParallaxProvider } from "react-scroll-parallax"
import Approach from "../components/molecules/Approach"
import Seo from "../components/atoms/Seo"
import ShortServices from "../components/molecules/ShortServices"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {

  const image = (
    <StaticImage
      // src="../images/studio/FOTO 8.jpg"
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
    <Hero image={image} darker />
    <AboutMe />
    <ShortServices />
    <Approach />
    <Footer />
  </ParallaxProvider>
  )
}

export default IndexPage

export const Head = () => {

  return (
    <Seo
      title={"Psicologia Letizia Puglisi"}
      pathname="/"
      structuredData

    />
  );
};