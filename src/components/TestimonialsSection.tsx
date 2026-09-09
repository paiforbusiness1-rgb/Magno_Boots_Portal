import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { t, data } = useLanguage();

  return (
    <section className="py-20 bg-zinc-900 text-white relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#F36C21]/15 text-[#F36C21] border border-[#F36C21]/30">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            {t.testimonials.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.testimonials.titleMain} <span className="text-[#F36C21]">{t.testimonials.titleHighlight}</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between space-y-6 relative hover:border-[#F36C21]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#FFB400]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">{item.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                    {item.verifiedPurchase && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    )}
                  </h4>
                  <p className="text-[11px] text-[#FFB400] font-medium">{item.role}</p>
                  <span className="text-[10px] text-zinc-500 block">{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

