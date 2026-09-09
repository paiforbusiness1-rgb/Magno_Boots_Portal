import React from 'react';
import { Factory, ShieldCheck, Award, Users, Check, MapPin, Wrench, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/brandData';
import { useLanguage } from '../i18n/LanguageContext';
import factoryImg from '../assets/images/magno_factory_craft_1784841394124.jpg';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-20 bg-zinc-900 text-zinc-100 relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F36C21]/15 text-[#F36C21] border border-[#F36C21]/30">
              <Factory className="w-3.5 h-3.5" />
              {t.about.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {t.about.title}
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.about.p2}
            </p>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-[#F36C21]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#F36C21]/20 text-[#F36C21] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{t.about.pillar1Title}</h3>
                <p className="text-xs text-zinc-400">
                  {t.about.pillar1Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-[#F36C21]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FFB400]/20 text-[#FFB400] flex items-center justify-center mb-2">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{t.about.pillar2Title}</h3>
                <p className="text-xs text-zinc-400">
                  {t.about.pillar2Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-[#F36C21]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#F36C21]/20 text-[#F36C21] flex items-center justify-center mb-2">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{t.about.pillar3Title}</h3>
                <p className="text-xs text-zinc-400">
                  {t.about.pillar3Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-[#F36C21]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FFB400]/20 text-[#FFB400] flex items-center justify-center mb-2">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{t.about.pillar4Title}</h3>
                <p className="text-xs text-zinc-400">
                  {t.about.pillar4Desc}
                </p>
              </div>
            </div>

            {/* Location Tag */}
            <div className="p-4 rounded-xl bg-[#F36C21]/10 border border-[#F36C21]/30 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#F36C21] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#F36C21]">{t.about.plantLocation}</h4>
                <p className="text-xs text-zinc-300">{COMPANY_INFO.fullAddress}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Factory Photography & Quality Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl bg-zinc-950">
              <img
                src={factoryImg}
                alt="Planta de fabricación de calzado industrial Magno Boots"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#FFB400] text-zinc-950 flex items-center justify-center font-black">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">{t.about.guaranteeTitle}</h4>
                    <p className="text-xs text-[#FFB400] font-semibold">{t.about.guaranteeDesc}</p>
                  </div>
                </div>
                <ul className="text-xs text-zinc-300 space-y-1 pt-1">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFB400]" />
                    {t.about.cfdiNote}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFB400]" />
                    {t.about.shippingNote}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

