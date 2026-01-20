import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"
import NavBar from "../components/molecules/NavBar"
import Hero from "../components/molecules/Hero"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/molecules/Footer"

const NotFoundPage: React.FC<PageProps> = () => {
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
  return (
    <ParallaxProvider>
      <NavBar />
      <Hero image={image} darker title="Pagina non trovata" notFound />
      <Footer />
    </ParallaxProvider>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
