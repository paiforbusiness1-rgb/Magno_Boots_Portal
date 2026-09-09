import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ShoppingBag, Menu, X, Shield, FileText, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/brandData';
import { MagnoBootsLogo } from './MagnoBootsLogo';
import { FlagSelector } from './FlagSelector';
import { useLanguage } from '../i18n/LanguageContext';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenSizeGuide: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onOpenSizeGuide, activeSection }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: t.nav.home, id: 'inicio' },
    { href: '#nosotros', label: t.nav.about, id: 'nosotros' },
    { href: '#productos', label: t.nav.products, id: 'productos' },
    { href: '#materiales', label: t.nav.materials, id: 'materiales' },
    { href: '#distribuidores', label: t.nav.distributors, id: 'distribuidores' },
    { href: '#contacto', label: t.nav.contact, id: 'contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      // The sticky header is ~100px tall. We offset the scroll so the section title is fully visible.
      const navbarHeight = 110; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-zinc-950 text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 text-amber-500 font-semibold">
              <Shield className="w-3.5 h-3.5" />
              NOM-113-STPS-2009 100%
            </span>
            <span className="hidden md:inline-block text-zinc-600">|</span>
            <span className="hidden md:inline-block text-zinc-400">
              León, Guanajuato
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20Magno%20Boots`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-amber-400 transition-colors text-emerald-400 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">WhatsApp:</span> {COMPANY_INFO.whatsappDisplay}
            </a>
            <span className="text-zinc-700">|</span>
            {/* Flag Selector in Utility Header */}
            <FlagSelector />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-900/95 backdrop-blur-md shadow-xl border-b border-zinc-800 py-3'
            : 'bg-zinc-900 py-4 border-b border-zinc-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group transition-transform hover:scale-[1.02] shrink-0"
          >
            <MagnoBootsLogo variant="full" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-zinc-950/60 p-1.5 rounded-full border border-zinc-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#F36C21] text-white shadow-md shadow-[#F36C21]/30 font-bold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Main Header Language Selector with Flags */}
            <FlagSelector showLabels={true} />
            <button
              onClick={onOpenSizeGuide}
              className="text-xs font-medium text-zinc-300 hover:text-[#F36C21] transition-colors flex items-center gap-1 px-2.5 py-2 rounded-lg hover:bg-zinc-800/50"
            >
              <FileText className="w-3.5 h-3.5 text-[#F36C21]" />
              {t.nav.sizeGuide}
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="bg-gradient-to-r from-[#F36C21] to-[#D85100] hover:from-[#FF7A00] hover:to-[#F36C21] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-[#F36C21]/25 transition-all flex items-center gap-1.5 transform active:scale-95 border border-orange-500/20 whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-amber-200" />
              {t.nav.quoteB2B}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <FlagSelector />
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#F36C21] text-white text-xs font-bold px-2.5 py-2 rounded-md shadow-md"
            >
              {t.nav.quoteShort}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
            <div className="pb-2 border-b border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-400">Seleccionar Idioma:</span>
              <FlagSelector showLabels={true} />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-amber-400 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSizeGuide();
                }}
                className="w-full text-center py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg text-xs font-semibold"
              >
                {t.nav.sizeGuide}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full text-center py-2.5 bg-[#F36C21] text-white rounded-lg text-xs font-bold shadow-md"
              >
                {t.nav.quoteB2B}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

