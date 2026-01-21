import React from 'react'
import { MessageCircle } from 'lucide-react'
import { ContactsAddress, ContactsCopyrightText, ContactsInfo1, ContactsInfo2, ContactsName, email, filteredNumber, phoneNumber } from '../../utilities/siteInfo'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className='w-full pt-36 pb-4 bg-lightBlue' id='contatti'>
      <div className='w-full max-w-6xl items-center mx-auto mb-8'>
        <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center text-white uppercase">Contatti</h3>
        <div className="w-full text-base sm:text-lg max-w-[90%] md:max-w-[80%] mx-auto px-4 flex flex-col md:flex-row justify-evenly items-start md:items-center gap-4">
          <div className="text-white text-left gap-2 flex flex-col">
            <p className="italic font-bold">{ContactsName}</p>
            <p className="italic">{ContactsInfo1}</p>
            <p className="">{ContactsInfo2}</p>
          </div>
          <div className="text-white text-left flex flex-col gap-2 md:max-w-[35vw]">
            <span className="flex flex-row items-center flex-wrap gap-2 w-full">
              <b>Telefono:</b>{' '}
              <a href={`tel:${phoneNumber}`} className="underline hover:opacity-80 whitespace-nowrap" title="Chiama ora">
                {phoneNumber}
              </a>{' -'}
              <a
                href={`https://wa.me/${filteredNumber}`}
                title="Contattami su WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`hover:opacity-80 w-fit inline-flex`}
              >
                <MessageCircle size={20} className='mr-1' />
                WhatsApp
              </a>
            </span>
            <span className="flex flex-row items-center gap-2">
              <b>Email:</b>{' '}
              <a href={`mailto:${email}`} className="underline hover:opacity-80" title="Scrivimi una email">
                {email}
              </a>
            </span>
            <p className="">
              {ContactsAddress}
            </p>
          </div>

        </div>
        {/* <div className="flex gap-6 mt-2">
          <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/facebook/ffffff" alt="Facebook" width={25} height={25} />
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" width={25} height={25} />
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/youtube/ffffff" alt="YouTube" width={25} height={25} />
          </a>
        </div> */}
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 mt-24">
        <div className="text-center text-white">
          <p className="text-sm mt-2">
            {ContactsCopyrightText}
          </p>
          <span className="text-base flex flex-row justify-center items-center gap-2 mt-2">
            <p>© {new Date().getFullYear()} {ContactsName} - </p>
            <Link to="/privacy" className="text-sm text-white underline hover:opacity-80 block text-center">
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>

    </footer>
  )
}

export default Footer