import React from 'react'
import Section from '../organisms/Section'
import { ServicesInfo, ServicesTitle } from '../../utilities/siteInfo'

const ShortServices: React.FC = () => {
  return (
    <Section id="servizi" title={ServicesTitle}>
      <div className="w-full max-w-6xl mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {ServicesInfo.map((s, i) => {
            // Logic to center the last item if it's alone on a row
            const isLast = i === ServicesInfo.length - 1;
            const isOdd = ServicesInfo.length % 2 !== 0;
            const isSingleOnRow = isLast && isOdd;

            return (
              <a
                key={s.title}
                href={'/servizi#' + s.id}
                title={`Vai alla pagina servizi — ${s.title}`}
                className={`group relative block bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2
                  ${isSingleOnRow ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                aria-label={`Vai alla pagina servizi — ${s.title}`}
              >
                {/* Layered Background Effect */}
                <div className="absolute inset-0 bg-purple/5 rounded-2xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 -z-10" />
                <div className="absolute inset-0 border-2 border-purple/10 rounded-2xl -z-5" />

                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon/Image Container with floating effect */}
                  <div className="relative w-24 h-24 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 bg-lightBlue/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      {s.image}
                    </div>
                  </div>

                  {/* Title with decorative element */}
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-lightBlue">
                    {s.title}
                  </h4>

                  {/* Added "Discover more" hint for better UX */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-bold text-lightBlue opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    SCOPRI DI PIÙ
                    <span>→</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default ShortServices