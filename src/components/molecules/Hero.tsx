import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { ContactsJobTitle, ContactsName } from '../../utilities/siteInfo'

const Hero = ({
  title,
  image,
  darker = false,
  notFound = false
}: {
  title?: string,
  image?: JSX.Element,
  darker?: boolean,
  notFound?: boolean
}) => {

  return (
    <main className={`${image ? 'h-[90vh] md:h-screen' : 'py-20'} relative w-full flex items-center justify-center bg-primary text-white overflow-hidden`}>

      {/* BACKGROUND LAYER: Parallax Image or Full-height fallback */}
      <div className={`absolute inset-0 w-full h-full`}>
        {image ? (
          <Parallax speed={-20} className="w-full h-full">
            <div className="w-full h-full object-cover">
              {image}
            </div>

            {/* DARKER OVERLAY: Applies to both image and fallback */}

          </Parallax>
        ) : (
          <div className="w-full h-full bg-[#0f767a]" />
        )}
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-500 ${darker ? 'bg-black/50' : 'bg-black/20'
            }`}
          style={{
            background: 'linear-gradient(to bottom, rgba(20, 157, 163, 0.4), rgba(0,0,0,0.6))',
          }}
        />
      </div>

      {/* CENTERED RECTANGLE BANNER UI (Only visible if no image) */}
      {/* {!image && (
        <div className="absolute z-10 w-full md:w-3/4 lg:w-2/3 h-[40vh] md:h-[50vh] bg-white/5 backdrop-blur-sm border-y md:border-x border-white/10 shadow-2xl" />
      )} */}

      {/* CONTENT LAYER */}
      <div
        className="relative z-20 text-center px-6 flex flex-col items-center justify-center max-w-5xl"
        style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
      >
        <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold leading-tight mb-6 tracking-tight">
          {title ?? "Studio di Psicologia Clinica"}
        </h1>

        <div className="w-16 h-1 bg-lightBlue mb-8 rounded-full shadow-lg" />

        {notFound ? (
          <a
            href="/"
            className="px-10 py-4 bg-lightBlue text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-xl"
          >
            Torna alla home
          </a>
        ) : (
          <div className="space-y-2">
            <h2 className="text-[1.6rem] md:text-[2.8rem] font-serif italic leading-none">
              {ContactsName}
            </h2>
            <p className="text-[1.2rem] md:text-[2.2rem] font-light tracking-wide opacity-90">
              {ContactsJobTitle}
            </p>
          </div>
        )}
      </div>

    </main>
  )
}

export default Hero