import React, { useState, useMemo } from 'react';
import { ShoppingCart, Shield, Zap, Search, ExternalLink, FileText, Check, Star, X, Info, Ruler, Download, Loader2 } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { COMPANY_INFO } from '../data/brandData';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedProduct } from '../i18n/productTranslations';
import { generateCatalogPdf } from '../utils/generateCatalogPdf';

interface ProductsSectionProps {
  onOpenQuoteForProduct: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuoteForProduct, onOpenSizeGuide }) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('27');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    setTimeout(() => {
      try {
        const productsToExport = filteredProducts.length > 0 ? filteredProducts : localizedProducts;
        generateCatalogPdf(productsToExport, language);
      } catch (err) {
        console.error('Failed to generate catalog PDF:', err);
      } finally {
        setIsGeneratingPdf(false);
      }
    }, 150);
  };

  const categories = [
    { id: 'all', label: t.products.allModels },
    { id: 'dielectric', label: t.products.catDielectric },
    { id: 'steel-toe', label: t.products.catSteelToe },
    { id: 'heavy-duty', label: t.products.catHeavyDuty },
    { id: 'ergonomic', label: t.products.catErgonomic },
  ];

  const localizedProducts = useMemo(() => {
    return PRODUCTS_DATA.map((prod) => getLocalizedProduct(prod, language));
  }, [language]);

  const filteredProducts = useMemo(() => {
    const normalize = (str: string) =>
      str ? str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';

    const q = normalize(searchQuery.trim());

    return localizedProducts.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      if (!q) return matchesCategory;

      const nameMatch = normalize(product.name).includes(q);
      const categoryLabelMatch = normalize(product.categoryLabel).includes(q);
      const categoryMatch = normalize(product.category).includes(q);
      const modelCodeMatch = normalize(product.modelCode).includes(q);
      const descriptionMatch = normalize(product.description).includes(q);
      const specMatch = product.shortSpecs.some((spec) => normalize(spec).includes(q));

      const matchesSearch =
        nameMatch || categoryLabelMatch || categoryMatch || modelCodeMatch || descriptionMatch || specMatch;

      return matchesCategory && matchesSearch;
    });
  }, [localizedProducts, selectedCategory, searchQuery]);

  return (
    <section id="productos" className="py-20 bg-zinc-950 text-white relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F36C21]/15 text-[#F36C21] border border-[#F36C21]/30">
            <ShoppingCart className="w-3.5 h-3.5" />
            {t.products.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.products.titleMain} <span className="text-[#F36C21]">{t.products.titleHighlight}</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.products.subtitle}
          </p>

          <div className="pt-1">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              id="btn-download-catalog-pdf-header"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-[#F36C21] text-zinc-300 hover:text-white border border-zinc-800 hover:border-[#F36C21] transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#F36C21]" />
                  <span>{t.products.downloadingPdf}</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 text-[#F36C21]" />
                  <span>{t.products.downloadPdfBtn}</span>
                  <Download className="w-3.5 h-3.5 text-zinc-400" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#F36C21] text-white shadow-md shadow-[#F36C21]/30 font-bold'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box & PDF Button */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-[#F36C21] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.products.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 rounded-xl pl-10 pr-9 py-2.5 focus:outline-none focus:border-[#F36C21] focus:ring-1 focus:ring-[#F36C21] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-white rounded-full bg-zinc-800 hover:bg-zinc-700"
                  title="Limpiar búsqueda"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              id="btn-download-catalog-pdf-bar"
              className="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-zinc-800 hover:bg-[#F36C21] text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-[#F36C21] transition-all flex items-center gap-2 shrink-0 shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              title="Descargar catálogo en PDF"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#F36C21] shrink-0" />
                  <span className="hidden sm:inline">{t.products.downloadingPdf}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#F36C21] shrink-0" />
                  <span className="hidden sm:inline">{t.products.downloadPdfBtn}</span>
                  <span className="sm:hidden font-bold">PDF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Active Search / Filters Feedback Bar */}
        {(searchQuery.trim() !== '' || selectedCategory !== 'all') && (
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400 mb-6 px-2 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span>
                {t.products.showing} <strong className="text-white font-bold">{filteredProducts.length}</strong> {t.products.models}
              </span>
              {searchQuery.trim() !== '' && (
                <span className="text-zinc-300">
                  {t.products.for} <strong className="text-[#F36C21]">"{searchQuery}"</strong>
                </span>
              )}
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs font-bold text-[#F36C21] hover:underline flex items-center gap-1 ml-auto"
            >
              <X className="w-3.5 h-3.5" />
              {t.products.clearSearch}
            </button>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col group shadow-xl"
            >
              {/* Product Image Box */}
              <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />

                {/* Category & Featured Badge */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase bg-[#F36C21] text-white shadow">
                    {product.categoryLabel}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-zinc-900/90 text-zinc-300 border border-zinc-700 backdrop-blur-sm">
                    Mod. {product.modelCode}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-right">
                  <span className="text-[10px] text-zinc-400 block font-semibold">{t.products.retailPrice}</span>
                  <span className="text-base font-black text-[#FFB400] font-mono">
                    ${product.price.toLocaleString('es-MX')} MXN
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1 text-[#FFB400] mb-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold">{product.rating}</span>
                    <span className="text-[11px] text-zinc-500">({product.reviewCount} {t.products.reviews})</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#F36C21] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5">
                    {product.shortSpecs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#F36C21] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-zinc-800 space-y-2">
                  <button
                    onClick={() => {
                      setActiveModalProduct(product);
                      setSelectedSize('27');
                    }}
                    className="w-full bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Info className="w-4 h-4 text-[#FFB400]" />
                    <span>{t.products.viewSpecsBtn}</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenQuoteForProduct(product)}
                      className="bg-[#F36C21] hover:bg-[#D85100] text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-md"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t.products.quoteB2BBtn}</span>
                    </button>

                    <a
                      href={product.mercadoLibreUrl || COMPANY_INFO.socials.mercadoLibre}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border border-yellow-500/40 text-xs font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1 text-center"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.products.buyMercadoLibre}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-zinc-900 rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 text-sm">{t.products.noResults}</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-amber-400 underline"
            >
              {t.products.resetFilters}
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl text-white">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Modal Image */}
              <div className="md:col-span-5 space-y-3">
                <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
                  <img
                    src={activeModalProduct.image}
                    alt={activeModalProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-xs space-y-1">
                  <div className="flex justify-between text-zinc-400">
                    <span>{t.products.modelCodeLabel}:</span>
                    <strong className="text-white">{activeModalProduct.modelCode}</strong>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>{t.products.weightLabel}:</span>
                    <strong className="text-amber-400">{activeModalProduct.specs.weights}</strong>
                  </div>
                </div>
              </div>

              {/* Modal Details */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-[#F36C21] text-white uppercase">
                    {activeModalProduct.categoryLabel}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-2">
                    {activeModalProduct.name}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    {activeModalProduct.description}
                  </p>
                </div>

                {/* Size Selector */}
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-zinc-300">{t.products.sizesLabel}:</span>
                    <button
                      onClick={onOpenSizeGuide}
                      className="text-[11px] text-[#F36C21] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Ruler className="w-3 h-3 text-[#F36C21]" />
                      {t.products.sizeGuideBtn}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProduct.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                          selectedSize === sz
                            ? 'bg-[#F36C21] text-white shadow-md'
                            : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Technical Specs Table */}
                <div className="space-y-2 text-xs">
                  <h4 className="font-bold text-[#FFB400] uppercase tracking-wider text-[11px]">
                    {t.products.specsTitle}:
                  </h4>
                  <div className="space-y-1.5 bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-zinc-300">
                    <div>
                      <span className="text-zinc-500 block font-semibold">{t.products.toeCap}:</span>
                      <span>{activeModalProduct.specs.toeCap}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block font-semibold">{t.products.leather}:</span>
                      <span>{activeModalProduct.specs.leather}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block font-semibold">{t.products.sole}:</span>
                      <span>{activeModalProduct.specs.sole}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block font-semibold">{t.products.lining}:</span>
                      <span>{activeModalProduct.specs.lining}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block font-semibold">{t.products.certifications}:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {activeModalProduct.specs.certifications.map((c, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-zinc-800 text-amber-300 text-[10px] font-bold">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Purchase CTA */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const prod = activeModalProduct;
                      setActiveModalProduct(null);
                      onOpenQuoteForProduct(prod);
                    }}
                    className="flex-1 bg-[#F36C21] hover:bg-[#D85100] text-white font-extrabold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <FileText className="w-4 h-4" />
                    {t.products.requestQuoteBtn}
                  </button>

                  <a
                    href={activeModalProduct.mercadoLibreUrl || COMPANY_INFO.socials.mercadoLibre}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 font-bold text-xs py-3 px-4 rounded-xl hover:bg-yellow-500/30 transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.products.buyMercadoLibre}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
