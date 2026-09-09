import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check scroll position on initial mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      id="btn-back-to-top"
      aria-label={t.footer.backToTop || 'Volver arriba'}
      className={`fixed bottom-22 right-6 z-40 p-3 rounded-full bg-zinc-900/90 hover:bg-[#F36C21] text-zinc-300 hover:text-white border border-zinc-700/80 hover:border-[#F36C21] shadow-2xl backdrop-blur-md transition-all duration-300 transform flex items-center justify-center group cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
      title={t.footer.backToTop || 'Volver arriba'}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-1.5 pr-0 group-hover:pr-1">
        {t.footer.backToTop || 'Volver arriba'}
      </span>
    </button>
  );
};
