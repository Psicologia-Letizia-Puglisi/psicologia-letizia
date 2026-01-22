import { Mail, MessageCircle } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { BookText, email, filteredNumber } from '../../utilities/siteInfo';

const Book = ({ text }: { text?: string }) => {
  const [hovered, setHovered] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 640px)');
    const update = () => setSupportsHover(mq.matches);

    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);

  return (
    <span
      className="cta w-fit relative flex items-center gap-2 !py-0 !pr-0 font-semibold text-secondary rounded-lg border-2 border-secondary transition duration-300 hover:bg-secondary hover:text-white hover:shadow-xl"
      onMouseEnter={supportsHover ? () => setHovered(true) : undefined}
      onMouseLeave={supportsHover ? () => setHovered(false) : undefined}
    >
      <a title={text || BookText} href="#contatti" className="inline-block p-3 text-center">
        {text || BookText}
      </a>
      <span
        className={`inline-flex items-center ml-3 origin-left transform overflow-hidden transition-[max-width,opacity,transform] duration-300 ${(supportsHover && hovered) ? 'max-w-[96px] opacity-100 scale-100' : 'max-w-0 opacity-0 scale-0 pointer-events-none'}`}
      >
        <a
          href={`https://wa.me/${filteredNumber}`}
          title="Contattami su WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className={`inline-flex p-3 items-center transform transition duration-200 border-l-2 border-white ${(supportsHover && hovered) ? 'opacity-100 translate-y-0 delay-75' : 'opacity-0 -translate-y-1'}`}
        >
          <MessageCircle size={20} />
        </a>

        <a
          href={`mailto:${email}`}
          title="Inviami una email"
          aria-label="Mail"
          className={`inline-flex p-3 items-center transform transition duration-200 border-l-2 border-white ${(supportsHover && hovered) ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 -translate-y-1'}`}
        >
          <Mail size={20} />
        </a>
      </span>
    </span>
  );
}

export default Book