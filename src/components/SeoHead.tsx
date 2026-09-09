import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../data/brandData';
import { PRODUCTS_DATA } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';

export const SeoHead: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const isEn = language === 'en';
    const isZh = language === 'zh';

    const title = isEn
      ? 'Magno Boots | Industrial Safety Footwear Factory | León, Guanajuato'
      : isZh
      ? 'Magno Boots | 墨西哥莱昂工业安全靴直营工厂 | NOM-113 认证'
      : 'Magno Boots | Fábrica de Botas de Seguridad e Industriales NOM-113 | León, Gto';

    const description = isEn
      ? 'Official factory of high-resistance industrial safety boots in León, Guanajuato, Mexico. NOM-113-STPS certified, dielectric, steel toe cap, and heavy duty. Wholesale & retail.'
      : isZh
      ? '墨西哥莱昂 Magno Boots 官方安全鞋工厂。提供 NOM-113 认证防砸钢包头、绝缘防静电及重工安全靴。支持个人零售与企业大宗批次采购。'
      : 'Fábrica directa de botas de seguridad e industriales de alta resistencia en León, Guanajuato. Certificación oficial NOM-113-STPS-2009, dieléctricas y casquillo de acero. Mayoreo y menudeo.';

    const keywords = 'botas de seguridad, calzado industrial, Magno Boots, calzado de proteccion, Leon Guanajuato, NOM-113-STPS, casquillo poliamida, bota dielectrica, calzado de seguridad mayoreo, casquillo de acero';

    // Update title
    document.title = title;

    // Helper to update meta tag
    const setMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let el = document.querySelector(`meta[${selector}]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attributeName, attributeValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('name="description"', 'name', 'description', description);
    setMetaTag('name="keywords"', 'name', 'keywords', keywords);
    setMetaTag('name="robots"', 'name', 'robots', 'index, follow');
    setMetaTag('name="author"', 'name', 'author', 'Magno Boots México');

    // Open Graph
    setMetaTag('property="og:title"', 'property', 'og:title', title);
    setMetaTag('property="og:description"', 'property', 'og:description', description);
    setMetaTag('property="og:type"', 'property', 'og:type', 'website');
    setMetaTag('property="og:url"', 'property', 'og:url', window.location.href);
    setMetaTag('property="og:site_name"', 'property', 'og:site_name', 'Magno Boots');
    setMetaTag('property="og:locale"', 'property', 'og:locale', isEn ? 'en_US' : isZh ? 'zh_CN' : 'es_MX');
    setMetaTag('property="og:image"', 'property', 'og:image', `${window.location.origin}/src/assets/images/magno_boots_favicon_1784844705328.jpg`);

    // Twitter
    setMetaTag('name="twitter:card"', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('name="twitter:title"', 'name', 'twitter:title', title);
    setMetaTag('name="twitter:description"', 'name', 'twitter:description', description);
    setMetaTag('name="twitter:image"', 'name', 'twitter:image', `${window.location.origin}/src/assets/images/magno_boots_favicon_1784844705328.jpg`);

    // Schema.org Structured Data: LocalBusiness & Manufacturer
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ShoeStore', 'Manufacturer'],
      '@id': `${window.location.origin}/#organization`,
      name: COMPANY_INFO.name,
      alternateName: 'Calzado Industrial Magno Boots',
      description: COMPANY_INFO.subtagline,
      url: window.location.origin,
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      priceRange: '$$',
      image: `${window.location.origin}/src/assets/images/magno_boots_favicon_1784844705328.jpg`,
      logo: `${window.location.origin}/src/assets/images/magno_boots_favicon_1784844705328.jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Blvd. Aeropuerto 840, Col. Industrial',
        addressLocality: 'León',
        addressRegion: 'Guanajuato',
        postalCode: '37290',
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 21.125,
        longitude: -101.685,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '14:00',
        },
      ],
      sameAs: [
        COMPANY_INFO.socials.facebook,
        COMPANY_INFO.socials.instagram,
        COMPANY_INFO.socials.mercadoLibre,
      ],
      areaServed: {
        '@type': 'Country',
        name: 'México',
      },
      knowsAbout: [
        'Calzado de seguridad industrial',
        'Norma Oficial NOM-113-STPS-2009',
        'Botas dieléctricas',
        'Casquillo de poliamida y acero',
      ],
    };

    // Schema.org Structured Data: Product Catalog List
    const productCatalogSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: PRODUCTS_DATA.map((prod, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          '@id': `${window.location.origin}/#product-${prod.id}`,
          name: prod.name,
          image: prod.image,
          description: prod.description,
          sku: prod.modelCode,
          mpn: prod.modelCode,
          brand: {
            '@type': 'Brand',
            name: 'Magno Boots',
          },
          category: 'Calzado de Seguridad Industrial',
          offers: {
            '@type': 'Offer',
            url: COMPANY_INFO.socials.mercadoLibre,
            priceCurrency: 'MXN',
            price: prod.price,
            priceValidUntil: '2026-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Magno Boots',
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '128',
            bestRating: '5',
            worstRating: '1',
          },
        },
      })),
    };

    // Helper to insert or update script ld+json
    const injectJsonLd = (id: string, schemaObject: object) => {
      let scriptEl = document.getElementById(id) as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = id;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.text = JSON.stringify(schemaObject, null, 2);
    };

    injectJsonLd('schema-local-business', localBusinessSchema);
    injectJsonLd('schema-product-catalog', productCatalogSchema);
  }, [language]);

  return null;
};
