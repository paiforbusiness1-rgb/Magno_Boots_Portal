import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';

export const FaqSection: React.FC = () => {
  const { t, data } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-zinc-950 text-white relative border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#F36C21]/15 text-[#F36C21] border border-[#F36C21]/30">
            <HelpCircle className="w-3.5 h-3.5" />
            {t.faq.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.faq.titleMain} <span className="text-[#F36C21]">{t.faq.titleHighlight}</span>
          </h2>
          <p className="text-zinc-400 text-sm">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {data.FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-bold text-white hover:text-[#FFB400] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-zinc-800 text-[#FFB400] transition-transform ${isOpen ? 'rotate-180 bg-[#F36C21] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 border-t border-zinc-800/60 leading-relaxed animate-fadeIn">
                    <p className="mb-2">{faq.answer}</p>
                    <span className="inline-block px-2 py-0.5 rounded bg-zinc-950 text-[#FFB400] text-[10px] font-bold border border-zinc-800">
                      {t.faq.categoryLabel}: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

