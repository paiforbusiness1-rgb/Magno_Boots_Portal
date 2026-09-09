import React from 'react';
import { Shield, ArrowUp, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/brandData';
import { MagnoBootsLogo } from './MagnoBootsLogo';
import { useLanguage } from '../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs border-t border-zinc-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#inicio" className="inline-block hover:opacity-90 transition-opacity">
              <MagnoBootsLogo variant="full" size="md" />
            </a>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="pt-2 text-[11px] text-zinc-500 space-y-1">
              <p>📍 {COMPANY_INFO.fullAddress}</p>
              <p>📞 {COMPANY_INFO.phone}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.footer.navTitle}</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#inicio" className="hover:text-[#F36C21] transition-colors">{t.nav.home}</a></li>
              <li><a href="#nosotros" className="hover:text-[#F36C21] transition-colors">{t.nav.about}</a></li>
              <li><a href="#productos" className="hover:text-[#F36C21] transition-colors">{t.nav.products}</a></li>
              <li><a href="#materiales" className="hover:text-[#F36C21] transition-colors">{t.nav.materials}</a></li>
              <li><a href="#distribuidores" className="hover:text-[#F36C21] transition-colors">{t.nav.distributors}</a></li>
              <li><a href="#contacto" className="hover:text-[#F36C21] transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Online Stores & Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.footer.channelsTitle}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={COMPANY_INFO.socials.mercadoLibre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFB400] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Mercado Libre Tienda Oficial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.socials.flamundial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFB400] flex items-center gap-1"
                >
                  <span>Flamundial Distribuidor</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.socials.guicom}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFB400] flex items-center gap-1"
                >
                  <span>Guicom Suministros</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFB400] flex items-center gap-1"
                >
                  <span>Facebook @MAGNOBOOTS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFB400] flex items-center gap-1"
                >
                  <span>Instagram @magno_boots</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* NOM Warranty Box */}
          <div className="lg:col-span-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-[#FFB400] font-bold">
              <Shield className="w-4 h-4" />
              <span>{t.footer.warrantyTitle}</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              {t.footer.warrantyDesc}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <p>© {new Date().getFullYear()} Magno Boots. {t.footer.rightsReserved}</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-[#FFB400] transition-colors flex items-center gap-1"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

