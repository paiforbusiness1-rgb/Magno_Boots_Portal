import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Factory, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/brandData';
import { useLanguage } from '../i18n/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'mayoreo',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-zinc-900 text-white relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F36C21]/15 text-[#F36C21] border border-[#F36C21]/30">
            <Mail className="w-3.5 h-3.5" />
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.contact.titleMain} <span className="text-[#F36C21]">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-6">
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                <Factory className="w-5 h-5 text-[#FFB400]" />
                <span>{t.contact.directAttention}</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F36C21]/10 text-[#F36C21] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold">{t.contact.factoryAddr}:</strong>
                    <span className="text-zinc-400 leading-relaxed block">{COMPANY_INFO.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F36C21]/10 text-[#F36C21] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold">{t.contact.directPhone}:</strong>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#FFB400] hover:underline font-mono font-bold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold">{t.contact.whatsappB2B}:</strong>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20Magno%20Boots,%20deseo%20m%C3%A1s%20informaci%C3%B3n`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-mono font-bold flex items-center gap-1"
                    >
                      {COMPANY_INFO.whatsappDisplay} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F36C21]/10 text-[#F36C21] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold">{t.contact.quoteEmail}:</strong>
                    <a href={`mailto:${COMPANY_INFO.b2bEmail}`} className="text-[#FFB400] hover:underline font-mono">
                      {COMPANY_INFO.b2bEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-800 text-zinc-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold">{t.contact.workingHours}:</strong>
                    <span className="text-zinc-400">{t.contact.hoursVal}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-zinc-950 to-zinc-950 border border-emerald-500/40 text-white space-y-3">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.contact.immediateResponse}</span>
              </h4>
              <p className="text-xs text-zinc-300">
                {t.contact.immediateDesc}
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola,%20quisiera%20cotizar%20botas%20Magno%20Boots`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3 px-4 rounded-xl transition-all shadow-lg"
              >
                <span>{t.contact.chatWhatsappNow}</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">{t.contact.successTitle}</h3>
                <p className="text-zinc-300 text-xs sm:text-sm max-w-md mx-auto">
                  {t.contact.successDesc}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#FFB400] underline"
                >
                  {t.contact.sendAnotherMsg}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-extrabold text-white mb-2">
                  {t.contact.formTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">
                      {t.contact.fullNameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.fullNamePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.companyPlaceholder}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">
                      {t.contact.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    {t.contact.inquiryTypeLabel}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                  >
                    <option value="mayoreo">{t.contact.inquiryOptions.mayoreo}</option>
                    <option value="distribucion">{t.contact.inquiryOptions.distribucion}</option>
                    <option value="comprobante">{t.contact.inquiryOptions.comprobante}</option>
                    <option value="individual">{t.contact.inquiryOptions.individual}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    {t.contact.msgLabel} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t.contact.msgPlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F36C21] to-[#D85100] hover:from-[#FF7A00] hover:to-[#F36C21] text-white font-extrabold text-xs py-3.5 px-6 rounded-xl transition-all shadow-xl shadow-[#F36C21]/20 flex items-center justify-center gap-2 border border-orange-400/20"
                >
                  <Send className="w-4 h-4 text-amber-200" />
                  <span>{t.contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

