import React from 'react';
import { Store, ExternalLink, Factory, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/brandData';
import { useLanguage } from '../i18n/LanguageContext';

interface DistributorsSectionProps {
  onOpenQuoteModal: () => void;
}

export const DistributorsSection: React.FC<DistributorsSectionProps> = ({ onOpenQuoteModal }) => {
  const { t, data } = useLanguage();

  return (
    <section id="distribuidores" className="py-20 bg-zinc-950 text-white relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F36C21]/15 text-[#F36C21] border border-[#F36C21]/30">
            <Store className="w-3.5 h-3.5" />
            {t.distributors.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.distributors.titleMain} <span className="text-[#F36C21]">{t.distributors.titleHighlight}</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.distributors.subtitle}
          </p>
        </div>

        {/* Distributor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.DISTRIBUTORS.map((dist, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-[#F36C21]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase bg-[#F36C21] text-white">
                    {dist.badge}
                  </span>
                  <span className="text-xs font-bold text-zinc-400 font-mono">
                    {dist.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#F36C21] transition-colors">
                  {dist.name}
                </h3>

                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                  {dist.description}
                </p>
              </div>

              <a
                href={dist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-zinc-950 hover:bg-[#F36C21] hover:text-white text-[#F36C21] border border-[#F36C21]/30 text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>{t.distributors.visitBtn} {dist.logoText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Wholesale Banner Direct Factory */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#F36C21] via-[#E05A10] to-[#D85100] text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-zinc-950 text-[#FFB400] text-xs font-black uppercase tracking-wider">
              {t.distributors.bannerBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-950">
              {t.distributors.bannerTitle}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-zinc-900 max-w-2xl">
              {t.distributors.bannerDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenQuoteModal}
              className="bg-zinc-950 hover:bg-zinc-900 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Factory className="w-4 h-4 text-[#FFB400]" />
              <span>{t.distributors.quoteDirectBtn}</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola,%20busco%20cotizaci%C3%B3n%20mayoreo%20para%20empresa%20de%20botas%20Magno%20Boots`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold text-xs px-6 py-3.5 rounded-xl border border-emerald-500/50 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
              <span>{t.distributors.whatsappBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

