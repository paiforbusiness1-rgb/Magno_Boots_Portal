import React from 'react';
import { Shield, Zap, Footprints, Sparkles, Award, ShieldCheck, CheckCircle2, FileCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';


export const MaterialsSection: React.FC = () => {
  const { t, data } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#F36C21]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#FFB400]" />;
      case 'Footprints':
        return <Footprints className="w-6 h-6 text-[#F36C21]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#FFB400]" />;
      default:
        return <Shield className="w-6 h-6 text-[#F36C21]" />;
    }
  };

  return (
    <section id="materiales" className="py-20 bg-zinc-900 text-white relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F36C21]/15 text-[#F36C21] border border-[#F36C21]/30">
            <Award className="w-3.5 h-3.5" />
            {t.materials.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.materials.titleMain} <span className="text-[#F36C21]">{t.materials.titleHighlight}</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.materials.subtitle}
          </p>
        </div>

        {/* Material Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {data.MATERIAL_SPECS.map((mat) => (
            <div
              key={mat.id}
              className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-[#F36C21]/40 transition-all duration-300 relative group flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F36C21]/10 border border-[#F36C21]/30 flex items-center justify-center">
                    {getIcon(mat.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-[#F36C21]/20 text-[#F36C21] border border-[#F36C21]/30">
                    {mat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{mat.title}</h3>
                <span className="text-xs font-semibold text-[#FFB400] block mb-3">{mat.subtitle}</span>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {mat.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-zinc-900">
                  <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    {t.materials.keyFeatures}:
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-zinc-300">
                    {mat.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB400] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-zinc-900/90 rounded-xl border border-zinc-800 text-[11px] text-zinc-400">
                <strong className="text-[#FFB400] font-bold block mb-0.5">{t.materials.techLabData}:</strong>
                {mat.technicalData}
              </div>
            </div>
          ))}
        </div>

        {/* Official Certifications Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border-2 border-[#F36C21]/30 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F36C21] text-white flex items-center justify-center shrink-0 shadow-lg">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {t.materials.nomTitle}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {t.materials.nomSub}
                </p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#F36C21]/10 border border-[#F36C21]/40 text-[#F36C21] text-xs font-bold whitespace-nowrap">
              {t.materials.complianceBadge}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="p-5 bg-zinc-950/80 rounded-2xl border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-[#FFB400] font-mono font-bold text-xs">
                  <FileCheck className="w-4 h-4" />
                  <span>{cert.code}</span>
                </div>
                <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{cert.description}</p>
                <div className="text-[11px] text-zinc-300 pt-2 border-t border-zinc-900 font-medium">
                  <span className="text-[#F36C21] font-bold">{t.materials.testLabel}: </span>
                  {cert.testDetails}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

