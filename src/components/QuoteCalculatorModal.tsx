import React, { useState } from 'react';
import { X, Send, Calculator, CheckCircle2, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { COMPANY_INFO } from '../data/brandData';
import { useLanguage } from '../i18n/LanguageContext';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: Product | null;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const { t } = useLanguage();
  const [selectedProductCode, setSelectedProductCode] = useState<string>(
    preselectedProduct ? preselectedProduct.modelCode : PRODUCTS_DATA[0].modelCode
  );
  const [quantity, setQuantity] = useState<number>(24);
  const [fullName, setFullName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [cityState, setCityState] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  const [customLogo, setCustomLogo] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentProduct =
    PRODUCTS_DATA.find((p) => p.modelCode === selectedProductCode) || PRODUCTS_DATA[0];

  // Calculate estimated tier discount
  const getDiscountPercent = (qty: number) => {
    if (qty >= 200) return 22;
    if (qty >= 100) return 18;
    if (qty >= 50) return 14;
    if (qty >= 24) return 10;
    if (qty >= 12) return 5;
    return 0;
  };

  const discountPercent = getDiscountPercent(quantity);
  const unitListPrice = currentProduct.price;
  const unitDiscountedPrice = Math.round(unitListPrice * (1 - discountPercent / 100));
  const totalPrice = unitDiscountedPrice * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `*COTIZACIÓN B2B MAGNO BOOTS*
- *Nombre:* ${fullName || 'Cliente'}
- *Empresa:* ${companyName || 'No especificada'}
- *Ciudad/Estado:* ${cityState || 'México'}
- *Modelo:* ${currentProduct.name} (${currentProduct.modelCode})
- *Cantidad de Pares:* ${quantity}
- *Precio Unitario Est.:* $${unitDiscountedPrice} MXN (${discountPercent}% desc)
- *Total Est.:* $${totalPrice.toLocaleString('es-MX')} MXN
- *Personalizado Logo:* ${customLogo ? 'Sí' : 'No'}
- *Comentarios:* ${comments || 'Sin comentarios'}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl text-white max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white">{t.quoteModal.submittedTitle}</h3>

            <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
              {t.quoteModal.submittedDesc} <strong className="text-[#FFB400]">{companyName || 'tu empresa'}</strong> por <strong className="text-white">{quantity} pares</strong> de {currentProduct.name}.
            </p>

            <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-400">{t.quoteModal.selectedModel}:</span>
                <span className="text-[#FFB400] font-bold">{currentProduct.modelCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">{t.quoteModal.discountLevel}:</span>
                <span className="text-emerald-400 font-bold">{discountPercent}% OFF</span>
              </div>
              <div className="flex justify-between border-t border-zinc-800 pt-2 font-bold text-sm">
                <span className="text-white">{t.quoteModal.totalEstimate}:</span>
                <span className="text-[#FFB400]">${totalPrice.toLocaleString('es-MX')} MXN + IVA</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleSendWhatsApp}
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.quoteModal.confirmWhatsapp}</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs py-3.5 px-4 rounded-xl"
              >
                {t.quoteModal.closeWindow}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Modal Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-[#F36C21]/15 text-[#F36C21] border border-[#F36C21]/30">
                <Calculator className="w-3.5 h-3.5 text-[#F36C21]" />
                {t.quoteModal.badge}
              </div>
              <h3 className="text-2xl font-black text-white">
                {t.quoteModal.title}
              </h3>
              <p className="text-xs text-zinc-400">
                {t.quoteModal.subtitle}
              </p>
            </div>

            {/* Product & Quantity Selector Box */}
            <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    {t.quoteModal.selectModelLabel}:
                  </label>
                  <select
                    value={selectedProductCode}
                    onChange={(e) => setSelectedProductCode(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                  >
                    {PRODUCTS_DATA.map((p) => (
                      <option key={p.id} value={p.modelCode}>
                        {p.modelCode} - {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    {t.quoteModal.quantityLabel}:
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-[#F36C21]"
                  />
                </div>
              </div>

              {/* Estimate Calculation Summary */}
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-zinc-400 block text-[11px]">{t.quoteModal.discountLevel}:</span>
                  <span className="text-emerald-400 font-extrabold">{discountPercent}% OFF</span>
                </div>
                <div className="text-right">
                  <span className="text-zinc-400 block text-[11px]">{t.quoteModal.estPricePerPair}:</span>
                  <span className="text-[#FFB400] font-black font-mono text-sm">${unitDiscountedPrice} MXN</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="customLogo"
                  checked={customLogo}
                  onChange={(e) => setCustomLogo(e.target.checked)}
                  className="rounded bg-zinc-900 border-zinc-700 text-[#F36C21] focus:ring-[#F36C21]"
                />
                <label htmlFor="customLogo" className="text-xs text-zinc-300 cursor-pointer">
                  {t.quoteModal.customLogoCheck}
                </label>
              </div>
            </div>

            {/* Form User Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFB400]">
                {t.quoteModal.applicantDetails}:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">{t.contact.fullNameLabel} *</label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.fullNamePlaceholder}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">{t.contact.companyLabel}</label>
                  <input
                    type="text"
                    placeholder={t.contact.companyPlaceholder}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">{t.contact.emailLabel} *</label>
                  <input
                    type="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">{t.quoteModal.phoneWhatsappLabel} *</label>
                  <input
                    type="tel"
                    required
                    placeholder={t.contact.phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">{t.quoteModal.cityStateLabel} *</label>
                  <input
                    type="text"
                    required
                    placeholder={t.quoteModal.cityStatePlaceholder}
                    value={cityState}
                    onChange={(e) => setCityState(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">{t.quoteModal.notesLabel}</label>
                  <input
                    type="text"
                    placeholder={t.quoteModal.notesPlaceholder}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F36C21]"
                  />
                </div>
              </div>
            </div>

            {/* Modal Submit Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#F36C21] to-[#D85100] hover:from-[#FF7A00] hover:to-[#F36C21] text-white font-extrabold text-xs py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-[#F36C21]/25 flex items-center justify-center gap-2 border border-orange-400/20"
              >
                <Send className="w-4 h-4 text-amber-200" />
                <span>{t.quoteModal.generateBtn}</span>
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.quoteModal.sendWhatsappBtn}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

