import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/brandData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20Magno%20Boots,%20quisiera%20informaci%C3%B3n%20sobre%20sus%20botas%20industriales`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 flex items-center gap-2 group border-2 border-emerald-300"
      aria-label="Atención por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-extrabold pr-1">
        Atención por WhatsApp
      </span>
    </a>
  );
};
