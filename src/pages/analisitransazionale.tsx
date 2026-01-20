import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Footer from '../components/molecules/Footer'
import TransAnalysis from '../components/molecules/TransAnalysis'
import Hero from '../components/molecules/Hero'
import NavBar from '../components/molecules/NavBar'
import { StaticImage } from 'gatsby-plugin-image'
import { TransAnalysisTitle } from '../utilities/siteInfo'
import Seo from '../components/atoms/Seo'

const AnalisiTransazionale = () => {
  const image = (
    <StaticImage
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
      <Hero title={TransAnalysisTitle} darker />
      <TransAnalysis />
      <Footer />
    </ParallaxProvider>
  )
}

export default AnalisiTransazionale

export const Head = () => {
  return (
    <Seo
      title={"Psicologia Letizia Puglisi - Analisi Transazionale"}
      pathname="/analisitransazionale"
      structuredData
    />
  );
}