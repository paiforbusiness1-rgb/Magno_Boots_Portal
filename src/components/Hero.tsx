import React from 'react';
import { Shield, Zap, Award, CheckCircle2, ArrowRight, FileText, ShoppingCart, Factory, Star } from 'lucide-react';
import { COMPANY_INFO } from '../data/brandData';
import { useLanguage } from '../i18n/LanguageContext';
import heroBootImg from '../assets/images/magno_hero_boot_1784841360353.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreProducts }) => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative bg-zinc-950 text-white overflow-hidden pt-6 pb-16 lg:pb-24 border-b border-zinc-800">
      {/* Background Subtle Industrial Grid Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-600/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F36C21]/15 text-[#F36C21] border border-[#F36C21]/30">
            <Factory className="w-3.5 h-3.5 text-[#F36C21]" />
            {t.hero.factoryBadge}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-zinc-900 text-amber-300 border border-amber-500/30">
            <Award className="w-3.5 h-3.5 text-[#FFB400]" />
            {t.hero.normBadge}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-zinc-900 text-emerald-400 border border-zinc-800">
            <Star className="w-3.5 h-3.5 fill-current" />
            {t.hero.reviewBadge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              {t.hero.titleMain}{' '}
              <span className="bg-gradient-to-r from-[#FF9900] via-[#F36C21] to-[#FF3300] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(243,108,33,0.2)]">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Key Quality Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#F36C21]/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#F36C21] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.hero.spec1Title}</h4>
                  <p className="text-[11px] text-zinc-400">{t.hero.spec1Sub}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#F36C21]/40 transition-colors">
                <Zap className="w-5 h-5 text-[#FFB400] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.hero.spec2Title}</h4>
                  <p className="text-[11px] text-zinc-400">{t.hero.spec2Sub}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#F36C21]/40 transition-colors">
                <Shield className="w-5 h-5 text-[#F36C21] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.hero.spec3Title}</h4>
                  <p className="text-[11px] text-zinc-400">{t.hero.spec3Sub}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#F36C21]/40 transition-colors">
                <Factory className="w-5 h-5 text-[#FFB400] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.hero.spec4Title}</h4>
                  <p className="text-[11px] text-zinc-400">{t.hero.spec4Sub}</p>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="bg-gradient-to-r from-[#F36C21] to-[#D85100] hover:from-[#FF7A00] hover:to-[#F36C21] text-white text-sm font-extrabold px-6 py-4 rounded-xl shadow-xl shadow-[#F36C21]/30 transition-all flex items-center justify-center gap-2 transform active:scale-95 group border border-orange-400/20"
              >
                <FileText className="w-4 h-4 text-amber-200" />
                <span>{t.hero.quoteB2BBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreProducts}
                className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 text-sm font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4 text-[#FFB400]" />
                <span>{t.hero.viewProductsBtn}</span>
              </button>
            </div>

            {/* Mercado Libre Quick Badge */}
            <div className="pt-2 flex items-center gap-3 text-xs text-zinc-400">
              <span className="text-zinc-500">Mercado Libre FULL:</span>
              <a
                href={COMPANY_INFO.socials.mercadoLibre}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline font-semibold flex items-center gap-1"
              >
                Mercado Libre Magno Boots <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl group bg-zinc-900">
              <img
                src={heroBootImg}
                alt="Magno Boots Bota Industrial"
                referrerPolicy="no-referrer"
                className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              {/* Float Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800/90 shadow-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                    Titan Heavy Duty 905
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F36C21] text-white">
                    NOM-113
                  </span>
                </div>
                <p className="text-xs text-zinc-300">
                  {t.hero.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-2 border-r border-zinc-800 last:border-r-0 md:last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
              <div className="text-xl sm:text-3xl font-black text-[#FFB400] font-mono">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-zinc-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
