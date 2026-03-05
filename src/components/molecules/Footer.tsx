import React from 'react'
import { LaptopMinimal, MessageCircle, MapPinIcon, Mail, Phone } from 'lucide-react'
import { ContactsCopyrightText, ContactsInfo1, ContactsInfo2, ContactsLocations, ContactsName, email, filteredNumber, phoneNumber } from '../../utilities/siteInfo'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className='w-full pt-24 pb-8 bg-secondary' id='contatti'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* SECTION TITLE */}
        <div className="flex flex-col items-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Contatti</h3>
          <div className="w-24 h-1 bg-green mt-4 rounded-full"></div>
        </div>

        {/* TOP SECTION: INFO & DIRECT LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/10 pb-16">
          {/* Professional Credentials */}
          <div className="space-y-4 text-white border-l-2 border-green pl-6">
            <h4 className="text-xl font-bold text-primary">{ContactsName}</h4>
            <p className="text-lg opacity-90 italic">{ContactsInfo1}</p>
            <p className="text-sm tracking-wide opacity-75 uppercase">{ContactsInfo2}</p>
          </div>

          {/* Quick Contact Actions */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/10 rounded-xl text-green group-hover:bg-green group-hover:text-secondary transition-all">
                <Phone size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase text-green ">Telefono & WhatsApp</span>
                <div className="flex items-center gap-2 text-white text-lg">
                  <a href={`tel:${phoneNumber}`} className="hover:text-green transition-colors font-medium">
                    {phoneNumber}
                  </a>
                  <span className="opacity-30">|</span>
                  <a
                    href={`https://wa.me/${filteredNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-green transition-colors text-base"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/10 rounded-xl text-green group-hover:bg-green group-hover:text-secondary transition-all">
                <Mail size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase text-green">Email</span>
                <a href={`mailto:${email}`} className="text-white text-lg hover:text-green transition-colors font-medium">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: LOCATIONS */}
        <div className="pt-16">
          <h4 className='uppercase text-center text-2xl font-bold text-white mb-12 tracking-widest'>Dove ricevo</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ContactsLocations.map((location) => (
              <div
                key={location.id}
                className="bg-white/5 hover:bg-white/10 border border-white/10 p-8 rounded-2xl transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-secondary shadow-lg rounded-full text-green group-hover:scale-110 transition-transform">
                    {location.id === 'online' ? <LaptopMinimal size={28} /> : <MapPinIcon size={28} />}
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xl font-bold text-primary">{location.addressLocality}</h5>

                    {location.id === 'online' ? (
                      <p className="text-primary/70 font-medium">Consulenze online disponibili su appuntamento</p>
                    ) : (
                      <a
                        href={location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group-hover:text-green transition-colors"
                      >
                        <address className="not-italic text-sm leading-relaxed text-primary/70 break-words hover:text-green transition-colors">
                          {location.streetAddress}<br />
                          {location.postalCode} {location.addressLocality} ({location.addressCountry})
                        </address>
                        {/* <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest border-b border-green text-green pb-1">
                          Apri Mappa
                        </span> */}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COPYRIGHT & FOOTER LINKS */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col items-center text-white/50 space-y-4">
          <p className="text-xs max-w-2xl text-center italic">{ContactsCopyrightText}</p>
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm">
            <span>© {new Date().getFullYear()} {ContactsName}</span>
            <span className="hidden md:inline">•</span>
            <Link to="/privacy" className="underline hover:text-green transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer