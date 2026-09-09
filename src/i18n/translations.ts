export type Language = 'es' | 'en' | 'zh';

export interface TranslationStructure {
  nav: {
    home: string;
    about: string;
    products: string;
    materials: string;
    distributors: string;
    contact: string;
    sizeGuide: string;
    quoteB2B: string;
    quoteShort: string;
    officialFactory: string;
  };
  hero: {
    factoryBadge: string;
    normBadge: string;
    reviewBadge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    quoteB2BBtn: string;
    viewProductsBtn: string;
    spec1Title: string;
    spec1Sub: string;
    spec2Title: string;
    spec2Sub: string;
    spec3Title: string;
    spec3Sub: string;
    spec4Title: string;
    spec4Sub: string;
  };
  products: {
    badge: string;
    title: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    downloadPdfBtn: string;
    downloadingPdf: string;
    searchPlaceholder: string;
    allCategories: string;
    allModels: string;
    dielectric: string;
    catDielectric: string;
    steelToe: string;
    catSteelToe: string;
    heavyDuty: string;
    catHeavyDuty: string;
    ergonomic: string;
    catErgonomic: string;
    showing: string;
    showingResults: string;
    modelSingular: string;
    modelPlural: string;
    models: string;
    for: string;
    forQuery: string;
    clearSearch: string;
    resetFilters: string;
    noResults: string;
    noResultsSub: string;
    retailPrice: string;
    priceRetail: string;
    reviews: string;
    techSheetBtn: string;
    viewSpecsBtn: string;
    quoteWholesaleBtn: string;
    quoteB2BBtn: string;
    buyMercadoLibre: string;
    modalTitle: string;
    modelCodeLabel: string;
    availableSizes: string;
    sizesLabel: string;
    sizeGuideLink: string;
    sizeGuideBtn: string;
    techSpecsTitle: string;
    specsTitle: string;
    toeCapLabel: string;
    toeCap: string;
    leatherLabel: string;
    leather: string;
    soleLabel: string;
    sole: string;
    lining: string;
    constructionLabel: string;
    certificationsLabel: string;
    certifications: string;
    weightLabel: string;
    buyRetailTitle: string;
    requestQuoteBtn: string;
    quoteB2BModalBtn: string;
    closeModal: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    factoryLocationTitle: string;
    plantLocation: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    cfdiNote: string;
    shippingNote: string;
  };
  materials: {
    badge: string;
    title: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    mat1Title: string;
    mat1Subtitle: string;
    mat1Desc: string;
    mat2Title: string;
    mat2Subtitle: string;
    mat2Desc: string;
    mat3Title: string;
    mat3Subtitle: string;
    mat3Desc: string;
    mat4Title: string;
    mat4Subtitle: string;
    mat4Desc: string;
    dielectricBannerTitle: string;
    dielectricBannerDesc: string;
    keyFeatures: string;
    techLabData: string;
    nomTitle: string;
    nomSub: string;
    complianceBadge: string;
    testLabel: string;
  };
  distributors: {
    badge: string;
    title: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    visitStore: string;
    visitBtn: string;
    b2bBannerBadge: string;
    bannerBadge: string;
    b2bBannerTitle: string;
    bannerTitle: string;
    b2bBannerDesc: string;
    bannerDesc: string;
    b2bBannerBtn: string;
    quoteDirectBtn: string;
    whatsappBtn: string;
  };
  faq: {
    badge: string;
    title: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    categoryLabel: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  testimonials: {
    badge: string;
    title: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
  };
  contact: {
    badge: string;
    title: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    factoryInfoTitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    formTitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    companyNameLabel: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailFormLabel: string;
    emailPlaceholder: string;
    phoneFormLabel: string;
    phonePlaceholder: string;
    inquiryTypeLabel: string;
    inquiryOptions: {
      mayoreo: string;
      distribucion: string;
      comprobante: string;
      individual: string;
    };
    pairsQuantityLabel: string;
    messageLabel: string;
    msgLabel: string;
    msgPlaceholder: string;
    submitBtn: string;
    sending: string;
    successMsg: string;
    directAttention: string;
    factoryAddr: string;
    directPhone: string;
    whatsappB2B: string;
    quoteEmail: string;
    workingHours: string;
    hoursVal: string;
    immediateResponse: string;
    immediateDesc: string;
    chatWhatsappNow: string;
    successTitle: string;
    successDesc: string;
    sendAnotherMsg: string;
  };
  quoteModal: {
    badge: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    productSelectLabel: string;
    selectModelLabel: string;
    quantityLabel: string;
    estimatedTotal: string;
    discountNotice: string;
    fullName: string;
    company: string;
    phone: string;
    email: string;
    deliveryState: string;
    notes: string;
    submitBtn: string;
    closeBtn: string;
    submittedTitle: string;
    submittedDesc: string;
    selectedModel: string;
    discountLevel: string;
    totalEstimate: string;
    confirmWhatsapp: string;
    closeWindow: string;
    estPricePerPair: string;
    customLogoCheck: string;
    applicantDetails: string;
    phoneWhatsappLabel: string;
    cityStateLabel: string;
    cityStatePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    generateBtn: string;
    sendWhatsappBtn: string;
  };
  sizeGuide: {
    badge: string;
    title: string;
    subtitle: string;
    mxLabel: string;
    usLabel: string;
    euLabel: string;
    footLength: string;
    tipTitle: string;
    tipDesc: string;
    sizeMx: string;
    sizeUs: string;
    footMeasure: string;
    howToMeasureTitle: string;
    step1: string;
    step2: string;
    step3: string;
    understoodBtn: string;
  };
  chat: {
    assistantTitle: string;
    factoryBadge: string;
    statusOnline: string;
    welcomeMsg1: string;
    welcomeMsg2: string;
    actionCatalog: string;
    actionQuote: string;
    actionNOM: string;
    actionWhatsApp: string;
    inputPlaceholder: string;
    humanHelp: string;
    teaserTitle: string;
    teaserSub: string;
  };
  footer: {
    desc: string;
    description: string;
    navTitle: string;
    channelsTitle: string;
    contactTitle: string;
    certTitle: string;
    warrantyTitle: string;
    warrantyDesc: string;
    rights: string;
    rightsReserved: string;
    backToTop: string;
  };
}

export const translations: Record<Language, TranslationStructure> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      products: 'Catálogo',
      materials: 'Materiales & NOM',
      distributors: 'Distribuidores',
      contact: 'Contacto',
      sizeGuide: 'Guía Tallas',
      quoteB2B: 'Cotizar Mayoreo',
      quoteShort: 'Cotizar',
      officialFactory: 'CALZADO INDUSTRIAL',
    },
    hero: {
      factoryBadge: 'Fábrica Directa en León, Gto.',
      normBadge: 'Norma Oficial NOM-113-STPS-2009',
      reviewBadge: '4.9/5 Reseñas de Clientes',
      titleMain: 'CALZADO INDUSTRIAL DE',
      titleHighlight: 'MÁXIMA RESISTENCIA',
      subtitle: 'Fabricantes directos de botas de seguridad con casquillo de poliamida dieléctrica y acero. Diseñadas para alto rendimiento, confort continuo y durabilidad extrema en la industria mexicana.',
      quoteB2BBtn: 'COTIZAR MAYOREO (B2B)',
      viewProductsBtn: 'VER CATÁLOGO Y MODELOS',
      spec1Title: 'Casquillos Poliamida / Acero',
      spec1Sub: 'Pruebas a 200 Joules y 15kN compresión',
      spec2Title: 'Certificación Dieléctrica 14kV',
      spec2Sub: 'Protección certificada para ambiente eléctrico',
      spec3Title: 'Piel Vacuno Flor Entera',
      spec3Sub: 'Curtido especial resistente a aceites y agua',
      spec4Title: 'Venta Mayoreo & Menudeo',
      spec4Sub: 'Facturación fiscal y envíos a todo México',
    },
    products: {
      badge: 'CATÁLOGO OFICIAL DE FÁBRICA',
      title: 'Botas Industriales Magno Boots',
      titleMain: 'Botas Industriales',
      titleHighlight: 'Magno Boots',
      subtitle: 'Explora nuestra línea de calzado con certificación NOM-113. Calidad garantizada para compras individuales o pedidos mayoristas corporativos.',
      downloadPdfBtn: 'Descargar Catálogo PDF',
      downloadingPdf: 'Generando PDF...',
      searchPlaceholder: 'Buscar por nombre o categoría (ej. Dieléctrica)...',
      allCategories: 'Todos los Modelos',
      allModels: 'Todos los Modelos',
      dielectric: 'Dieléctricas',
      catDielectric: 'Dieléctricas',
      steelToe: 'Casquillo Acero',
      catSteelToe: 'Casquillo Acero',
      heavyDuty: 'Uso Rudo',
      catHeavyDuty: 'Uso Rudo',
      ergonomic: 'Ergonómicas',
      catErgonomic: 'Ergonómicas',
      showing: 'Mostrando',
      showingResults: 'Mostrando',
      modelSingular: 'modelo',
      modelPlural: 'modelos',
      models: 'modelos',
      for: 'para',
      forQuery: 'para',
      clearSearch: 'Limpiar búsqueda y filtros',
      resetFilters: 'Limpiar búsqueda y filtros',
      noResults: 'No se encontraron modelos con el término ingresado.',
      noResultsSub: 'Intenta buscar con otra palabra clave como "acero", "dieléctrica" o "rudo".',
      retailPrice: 'Precio Menudeo',
      priceRetail: 'Precio Menudeo',
      reviews: 'opiniones',
      techSheetBtn: 'Ver Ficha Técnica y Detalles',
      viewSpecsBtn: 'Ver Ficha Técnica',
      quoteWholesaleBtn: 'Cotizar Mayoreo',
      quoteB2BBtn: 'Cotizar Mayoreo (B2B)',
      buyMercadoLibre: 'Comprar en Mercado Libre',
      modalTitle: 'Ficha Técnica de Producto',
      modelCodeLabel: 'Código de Modelo:',
      availableSizes: 'Tallas Disponibles (MÉXICO / CM):',
      sizesLabel: 'Tallas Disponibles (MX/CM)',
      sizeGuideLink: 'Guía de Tallas',
      sizeGuideBtn: 'Ver Guía de Tallas',
      techSpecsTitle: 'Ficha Técnica & Materiales:',
      specsTitle: 'Especificaciones Técnicas',
      toeCapLabel: 'Casquillo',
      toeCap: 'Casquillo / Puntera',
      leatherLabel: 'Corte / Piel',
      leather: 'Cuero / Piel',
      soleLabel: 'Suela',
      sole: 'Suela Antiderrapante',
      lining: 'Forro Interior',
      constructionLabel: 'Construcción',
      certificationsLabel: 'Certificaciones',
      certifications: 'Certificaciones Laboratorio',
      weightLabel: 'Peso Promedio',
      buyRetailTitle: 'Comprar un solo par en distribuidores autorizados:',
      requestQuoteBtn: 'Solicitar Cotización de Lote',
      quoteB2BModalBtn: 'Cotizar Lote de Mayoreo B2B',
      closeModal: 'Cerrar',
    },
    about: {
      badge: 'NUESTRA FÁBRICA & HISTORIA',
      title: 'Más de 15 años protegiendo los pasos de la fuerza laboral mexicana',
      p1: 'En Magno Boots, somos una fábrica mexicana ubicada en el corazón zapatero de León, Guanajuato, especializada en la manufactura de calzado de protección industrial de alto rendimiento.',
      p2: 'Procesamos pieles vacunas flor entera con formulaciones de curtido químico especializado para soportar la abrasión en obra civil, aceites industriales, soldadura y entornos de alto riesgo eléctrico.',
      pillar1Title: 'Calidad Certificada NOM-113',
      pillar1Desc: 'Sometemos cada lote a ensayos de choque, compresión y rigidez dieléctrica en laboratorios acreditados.',
      pillar2Title: 'Piel Vacuno Flor Entera',
      pillar2Desc: 'Utilizamos cuero calibre 2.0mm - 2.2mm que ofrece flexibilidad anatómica sin romperse ni agrietarse.',
      pillar3Title: 'Inyección Directa y Vulcanizado',
      pillar3Desc: 'Unión suela-corte de máxima adherencia para evitar desprendimientos prematuros bajo uso rudo.',
      pillar4Title: 'Capacidad de Surtido B2B',
      pillar4Desc: 'Atendemos licitaciones, compras corporativas y pedidos especiales con tiempos de entrega garantizados.',
      factoryLocationTitle: 'Planta de Manufactura Principal',
      plantLocation: 'Ubicada en Av. del Calzado 102, Col. Industrial, León, Guanajuato',
      guaranteeTitle: 'Garantía Directa de Fábrica Magno Boots',
      guaranteeDesc: 'Todos nuestros modelos cuentan con respaldo directo contra defectos de fabricación y garantía de prueba de laboratorio bajo Norma NOM-113-STPS.',
      cfdiNote: 'Facturación Fiscal (CFDI 4.0) incluida en todas las compras de mayoreo y menudeo.',
      shippingNote: 'Envíos consolidados a toda la República Mexicana por paqueterías líderes.',
    },
    materials: {
      badge: 'CALIDAD INDUSTRIAL & CERTIFICACIONES',
      title: 'Materiales de Primera & Norma Oficial NOM-113',
      titleMain: 'Materiales de Primera &',
      titleHighlight: 'Norma Oficial NOM-113',
      subtitle: 'No escatimamos en componentes. Cada material es probado bajo los estándares más estrictos para garantizar durabilidad extrema y máxima protección del trabajador.',
      mat1Title: 'Casquillo Poliamida y Acero',
      mat1Subtitle: 'Resistencia 200 Joules',
      mat1Desc: 'Nuestros casquillos absorben impactos de objetos contundentes de 200J y soportan compresión de 15kN sin deformar el habitáculo del pie.',
      mat2Title: 'Aislamiento Dieléctrico 14kV',
      mat2Subtitle: 'Norma Tipo III Dieléctrico',
      mat2Desc: 'Diseñados con 0% componentes metálicos en ojalillos, cambrillón y puntera, soportando fugas eléctricas de hasta 14,000 Volts a 60Hz.',
      mat3Title: 'Piel Vacuno Flor Entera',
      mat3Subtitle: 'Espesor 2.0 a 2.4 mm',
      mat3Desc: 'Cuero natural seleccionado que garantiza alta resistencia a la tracción, desgarro y perforación, manteniendo la transpirabilidad.',
      mat4Title: 'Suelas Inyectadas Dual Density',
      mat4Subtitle: 'Poliuretano & Hule Acrilonitrilo',
      mat4Desc: 'Suelas diseñadas con canales multidireccionales de autolimpieza, resistentes a hidrocarburos, aceites, grasas y derrapes.',
      dielectricBannerTitle: '¿Requieres certificación técnica para tu departamento de Seguridad e Higiene?',
      dielectricBannerDesc: 'Proveemos la constancia de prueba de laboratorio bajo la norma NOM-113-STPS-2009 en cada pedido mayorista.',
      keyFeatures: 'Propiedades Clave de Seguridad Industrial',
      techLabData: 'Datos Técnicos de Laboratorio Acreditado',
      nomTitle: 'Norma Oficial Mexicana NOM-113-STPS-2009',
      nomSub: 'Especificaciones y métodos de prueba para calzado de protección en México',
      complianceBadge: 'CUMPLIMIENTO RIGUROSO',
      testLabel: 'Ensayo de Laboratorio',
    },
    distributors: {
      badge: 'CANALES DE VENTA Y DISTRIBUIDORES',
      title: '¿Dónde Comprar Magno Boots?',
      titleMain: '¿Dónde Comprar',
      titleHighlight: 'Magno Boots?',
      subtitle: 'Adquiere tus botas de seguridad para uso personal en las plataformas líderes o cotiza lotes industriales directo de fábrica con precio de mayoreo.',
      visitStore: 'Visitar tienda',
      visitBtn: 'Ir a Tienda Oficial',
      b2bBannerBadge: 'ATENCIÓN A EMPRESAS Y DISTRIBUIDORES',
      bannerBadge: 'ATENCIÓN A EMPRESAS Y DISTRIBUIDORES',
      b2bBannerTitle: '¿Deseas comercializar Magno Boots o surtir a tu empresa?',
      bannerTitle: '¿Deseas comercializar Magno Boots o surtir a tu empresa?',
      b2bBannerDesc: 'Ofrecemos precios preferenciales de fábrica, catálogo personalizado con tu logotipo de empresa y asesoría técnica B2B.',
      bannerDesc: 'Ofrecemos precios preferenciales de fábrica, catálogo personalizado con tu logotipo de empresa y asesoría técnica B2B.',
      b2bBannerBtn: 'Solicitar Lista de Precios de Mayoreo',
      quoteDirectBtn: 'Cotizar Lote Directo de Fábrica',
      whatsappBtn: 'WhatsApp Atención a Distribuidores',
    },
    faq: {
      badge: 'PREGUNTAS FRECUENTES',
      title: 'Respuestas Directas de Fábrica',
      titleMain: 'Respuestas Directas de',
      titleHighlight: 'Fábrica',
      subtitle: 'Resolvemos tus dudas sobre compras al mayoreo, certificaciones de laboratorio y envíos.',
      categoryLabel: 'Categorías de Preguntas',
      q1: '¿Cuál es el volumen mínimo para compra de mayoreo B2B?',
      a1: 'Ofrecemos precios de escala mayorista a partir de 10 pares por pedido, pudiendo combinar diferentes tallas y modelos.',
      q2: '¿Todas las botas incluyen certificación NOM-113?',
      a2: 'Sí, todos nuestros modelos cumplen rigurosamente la NOM-113-STPS-2009. Incluimos la copia del dictamen oficial de prueba con tu pedido.',
      q3: '¿Realizan envíos a todo México?',
      a3: 'Enviamos a cualquier municipio de la República Mexicana mediante convenios con paqueterías consolidadas como Castores, Tresguerras, FedEx y DHL.',
      q4: '¿Manejan facturación fiscal (CFDI)?',
      a4: 'Absolutamente. Todos nuestros precios incluyen IVA o se desglosan en factura fiscal para la deducibilidad de tu empresa.',
      q5: '¿Tienen botas dieléctricas 100% no metálicas?',
      a5: 'Sí, la línea Pro Dieléctrica utiliza casquillo de poliamida sintética de alto impacto y ojalillos no conductores para libre paso por arcos detectores.',
    },
    testimonials: {
      badge: 'RESEÑAS REALES',
      title: 'Lo que dicen las empresas que confían en Magno Boots',
      titleMain: 'Lo que dicen las empresas que confían en',
      titleHighlight: 'Magno Boots',
      subtitle: 'Gerentes de seguridad, supervisores de obra y trabajadores de planta respaldan la calidad de nuestras botas.',
    },
    contact: {
      badge: 'CONTACTO Y VENTAS DE FÁBRICA',
      title: 'Ponte en Contacto con Magno Boots',
      titleMain: 'Ponte en Contacto con',
      titleHighlight: 'Magno Boots',
      subtitle: 'Estamos para atender tus dudas, enviar cotizaciones de mayoreo o orientarte sobre distribuidores autorizados en tu zona.',
      factoryInfoTitle: 'Información de la Planta León, Gto.',
      addressLabel: 'Dirección de Fábrica:',
      phoneLabel: 'Teléfono Ventas:',
      emailLabel: 'Correo Electrónico:',
      hoursLabel: 'Horario de Atención:',
      formTitle: 'Enviar Mensaje Directo a Ventas',
      fullNameLabel: 'Nombre Completo *',
      fullNamePlaceholder: 'Ej. Ing. Roberto Gómez',
      companyNameLabel: 'Empresa / Razón Social',
      companyLabel: 'Empresa / Razón Social',
      companyPlaceholder: 'Ej. Constructora del Norte S.A. de C.V.',
      emailFormLabel: 'Correo Electrónico *',
      emailPlaceholder: 'correo@tuempresa.com',
      phoneFormLabel: 'Teléfono o WhatsApp *',
      phonePlaceholder: '477 123 4567',
      inquiryTypeLabel: 'Tipo de Consulta *',
      inquiryOptions: {
        mayoreo: 'Cotización Mayoreo (B2B)',
        distribucion: 'Ser Distribuidor Autorizado',
        comprobante: 'Certificaciones / Fichas Técnicas',
        individual: 'Compra Individual / Menudeo',
      },
      pairsQuantityLabel: 'Cantidad Estimada de Pares',
      messageLabel: 'Mensaje o Requerimiento Especial',
      msgLabel: 'Mensaje o Especificación de Lote',
      msgPlaceholder: 'Detalla tu requerimiento (modelos de interés, número de pares, tiempo de entrega deseado)...',
      submitBtn: 'Enviar Formulario a Fábrica',
      sending: 'Enviando solicitud...',
      successMsg: '¡Mensaje enviado con éxito! Un ejecutivo de ventas de Magno Boots te contactará a la brevedad.',
      directAttention: 'Atención Directa de Fábrica',
      factoryAddr: 'Planta Principal: Av. del Calzado 102, Col. Industrial, León, Guanajuato, C.P. 37000, México.',
      directPhone: 'Ventas y Mayoreo: +52 (477) 714-2030 / +52 (477) 123-4567',
      whatsappB2B: 'WhatsApp Atención B2B',
      quoteEmail: 'ventas@magnoboots.com.mx / cotizaciones@magnoboots.com.mx',
      workingHours: 'Horario de Planta:',
      hoursVal: 'Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 9:00 AM - 2:00 PM',
      immediateResponse: '¿Necesitas respuesta inmediata?',
      immediateDesc: 'Conéctate directo con un asesor de ventas por WhatsApp para resolver dudas de stock y precios especiales en tiempo real.',
      chatWhatsappNow: 'Chat por WhatsApp Ahora',
      successTitle: '¡Mensaje Enviado con Éxito!',
      successDesc: 'Gracias por comunicarte con Magno Boots. Un ejecutivo especialista de nuestra planta de León te contactará en menos de 24 horas hábiles.',
      sendAnotherMsg: 'Enviar Otro Mensaje',
    },
    quoteModal: {
      badge: 'COTIZADOR DE LOTES INDUSTRIALES B2B',
      title: 'Cotiza tus Botas Directo de Fábrica',
      subtitle: 'Calcula un estimado del valor de tu lote industrial y recibe un presupuesto oficial en PDF.',
      step1: 'Paso 1: Selección de Lote y Modelo',
      step2: 'Paso 2: Datos de Entrega para Cotización Formal',
      productSelectLabel: 'Modelo de Bota Deseado *',
      selectModelLabel: 'Modelo de Bota Deseado *',
      quantityLabel: 'Cantidad de Pares a Cotizar *',
      estimatedTotal: 'Total Estimado con Descuento Mayorista:',
      discountNotice: '¡Descuento por volumen aplicado automáticamente!',
      fullName: 'Nombre Completo del Responsable *',
      company: 'Nombre de la Empresa o Proyecto *',
      phone: 'Teléfono / WhatsApp de Contacto *',
      email: 'Correo Electrónico de Trabajo *',
      deliveryState: 'Estado / Ciudad de Destino *',
      notes: 'Notas Adicionales (Tallas específicas, tipo de casquillo...)',
      submitBtn: 'Generar Cotización Formal',
      closeBtn: 'Cerrar',
      submittedTitle: '¡Cotización Formal Generada!',
      submittedDesc: 'Hemos preparado el resumen estimado de tu pedido directo de fábrica Magno Boots.',
      selectedModel: 'Modelo Seleccionado:',
      discountLevel: 'Nivel de Descuento Aplicado:',
      totalEstimate: 'Estimado Total (MXN):',
      confirmWhatsapp: 'Confirmar y Enviar Solicitud por WhatsApp',
      closeWindow: 'Cerrar Ventana',
      estPricePerPair: 'Precio Estimado por Par:',
      customLogoCheck: 'Deseo logotipo personalizado impreso en el cuero',
      applicantDetails: 'Datos del Solicitante',
      phoneWhatsappLabel: 'Teléfono / WhatsApp *',
      cityStateLabel: 'Ciudad / Estado de Entrega *',
      cityStatePlaceholder: 'Ej. Monterrey, Nuevo León',
      notesLabel: 'Notas o Requerimientos Especiales',
      notesPlaceholder: 'Especifica tallas necesarias, certificaciones requeridas o fechas de entrega...',
      generateBtn: 'Generar Presupuesto Estimado',
      sendWhatsappBtn: 'Enviar Solicitud a Ventas por WhatsApp',
    },
    sizeGuide: {
      badge: 'TABLA DE EQUIVALENCIAS Y GUÍA DE TALLAS',
      title: '¿Cómo elegir tu talla correcta?',
      subtitle: 'Las botas Magno Boots se diseñan con horma industrial mexicana holgada (E+), permitiendo el uso de calcetín grueso de trabajo sin apretar el empeine.',
      mxLabel: 'TALLA MÉXICO (CM)',
      usLabel: 'TALLA EE.UU. (US MAN)',
      euLabel: 'TALLA EUROPA (EU)',
      footLength: 'Largo del Pie (cm)',
      tipTitle: 'Consejo para Calzado Industrial:',
      tipDesc: 'Para botas de seguridad con casquillo (acero o poliamida), recomendamos elegir exactamente tu talla habitual. Si utilizas calcetín térmico grueso para trabajo en congeladora o mina, considera medio número adicional.',
      sizeMx: 'Talla MX (cm)',
      sizeUs: 'Talla US',
      footMeasure: 'Medida del Pie',
      howToMeasureTitle: '¿Cómo medir tu pie en 3 sencillos pasos?',
      step1: 'Coloca una hoja de papel en el suelo pegada a una pared.',
      step2: 'Pisa con el talón pegado a la pared y marca la punta de tu dedo más largo.',
      step3: 'Mide en centímetros la distancia con una regla y busca la equivalencia directa arriba.',
      understoodBtn: 'Entendido, Volver',
    },
    chat: {
      assistantTitle: 'ASISTENTE MAGNO BOOTS',
      factoryBadge: 'FÁBRICA',
      statusOnline: 'En línea • Respuesta en tiempo real',
      welcomeMsg1: '¡Hola! 👋 Bienvenido a Magno Boots. Somos fabricantes de calzado industrial en León, Guanajuato.',
      welcomeMsg2: '¿En qué podemos ayudarte hoy? Puedes explorar nuestro catálogo oficial con prueba de laboratorio NOM-113 o solicitar una cotización por lote.',
      actionCatalog: '🥾 Ver Catálogo de Productos',
      actionQuote: '📑 Cotizar Mayoreo (B2B)',
      actionNOM: '🛡️ ¿Cuentan con NOM-113?',
      actionWhatsApp: '💬 WhatsApp Directo',
      inputPlaceholder: 'Escribe tu consulta sobre calzado...',
      humanHelp: 'Atención Humana por WhatsApp',
      teaserTitle: 'Asesor Magno Boots',
      teaserSub: '¿Dudas sobre tallas o mayoreo?',
    },
    footer: {
      desc: 'Fábrica de calzado industrial de alta resistencia en León, Guanajuato. Especialistas en botas con protección dieléctrica y casquillo conforme a la Norma Oficial NOM-113-STPS.',
      description: 'Fábrica de calzado industrial de alta resistencia en León, Guanajuato. Especialistas en botas con protección dieléctrica y casquillo conforme a la Norma Oficial NOM-113-STPS.',
      navTitle: 'Navegación',
      channelsTitle: 'Canales de Venta',
      contactTitle: 'Contacto de Fábrica',
      certTitle: 'Certificaciones y Seguridad',
      warrantyTitle: 'Garantía Directa',
      warrantyDesc: 'Garantía de fábrica contra defectos de fabricación y cumplimiento estricto con laboratorio NOM-113.',
      rights: 'Todos los derechos reservados. Fabricado orgullosamente en León, Guanajuato, México.',
      rightsReserved: 'Todos los derechos reservados. Fabricado orgullosamente en León, Guanajuato, México.',
      backToTop: 'Volver arriba',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Catalog',
      materials: 'Materials & NOM',
      distributors: 'Distributors',
      contact: 'Contact',
      sizeGuide: 'Size Guide',
      quoteB2B: 'Wholesale Quote',
      quoteShort: 'Quote',
      officialFactory: 'INDUSTRIAL FOOTWEAR',
    },
    hero: {
      factoryBadge: 'Direct Factory in León, Guanajuato, Mexico',
      normBadge: 'NOM-113-STPS-2009 Certified Safety Standard',
      reviewBadge: '4.9/5 Customer Reviews',
      titleMain: 'INDUSTRIAL BOOTS OF',
      titleHighlight: 'MAXIMUM RESISTANCE',
      subtitle: 'Direct manufacturers of industrial safety boots with dielectric polyamide and steel toe caps. Engineered for heavy-duty performance, all-day ergonomics, and extreme durability.',
      quoteB2BBtn: 'REQUEST B2B QUOTE',
      viewProductsBtn: 'VIEW CATALOG & MODELS',
      spec1Title: 'Polyamide / Steel Toe Caps',
      spec1Sub: 'Tested at 200 Joules impact & 15kN compression',
      spec2Title: '14kV Dielectric Insulation',
      spec2Sub: 'Certified hazard protection for electrical workers',
      spec3Title: 'Full Grain Bovine Leather',
      spec3Sub: 'Oil-resistant and water-repellent leather tanning',
      spec4Title: 'Wholesale & B2B Supply',
      spec4Sub: 'Tax invoicing and global/nationwide logistics',
    },
    products: {
      badge: 'OFFICIAL FACTORY CATALOG',
      title: 'Industrial Work Boots Magno Boots',
      titleMain: 'Industrial Work Boots',
      titleHighlight: 'Magno Boots',
      subtitle: 'Explore our NOM-113 certified footwear lineup. Guaranteed quality for individual purchases or bulk corporate orders.',
      downloadPdfBtn: 'Download PDF Catalog',
      downloadingPdf: 'Generating PDF...',
      searchPlaceholder: 'Search by model name or category (e.g. Dielectric)...',
      allCategories: 'All Models',
      allModels: 'All Models',
      dielectric: 'Dielectric',
      catDielectric: 'Dielectric',
      steelToe: 'Steel Toe',
      catSteelToe: 'Steel Toe',
      heavyDuty: 'Heavy Duty',
      catHeavyDuty: 'Heavy Duty',
      ergonomic: 'Ergonomic',
      catErgonomic: 'Ergonomic',
      showing: 'Showing',
      showingResults: 'Showing',
      modelSingular: 'model',
      modelPlural: 'models',
      models: 'models',
      for: 'for',
      forQuery: 'for',
      clearSearch: 'Clear search & filters',
      resetFilters: 'Clear search & filters',
      noResults: 'No boot models found matching your search query.',
      noResultsSub: 'Try searching with another keyword like "steel", "dielectric" or "heavy".',
      retailPrice: 'Retail Price',
      priceRetail: 'Retail Price',
      reviews: 'reviews',
      techSheetBtn: 'View Spec Sheet & Details',
      viewSpecsBtn: 'View Spec Sheet',
      quoteWholesaleBtn: 'Quote Wholesale',
      quoteB2BBtn: 'Quote Wholesale (B2B)',
      buyMercadoLibre: 'Buy on Mercado Libre',
      modalTitle: 'Product Technical Spec Sheet',
      modelCodeLabel: 'Model Code:',
      availableSizes: 'Available Sizes (MEXICO / CM):',
      sizesLabel: 'Available Sizes (MX/CM)',
      sizeGuideLink: 'Size Guide Chart',
      sizeGuideBtn: 'View Size Guide',
      techSpecsTitle: 'Technical Specs & Materials:',
      specsTitle: 'Technical Specifications',
      toeCapLabel: 'Toe Cap',
      toeCap: 'Toe Cap Protection',
      leatherLabel: 'Upper Leather',
      leather: 'Upper Leather',
      soleLabel: 'Outsole',
      sole: 'Slip-Resistant Outsole',
      lining: 'Interior Lining',
      constructionLabel: 'Construction',
      certificationsLabel: 'Certifications',
      certifications: 'Lab Certifications',
      weightLabel: 'Average Weight',
      buyRetailTitle: 'Buy a single pair from authorized distributors:',
      requestQuoteBtn: 'Request Wholesale Lot Quote',
      quoteB2BModalBtn: 'Quote Bulk B2B Order',
      closeModal: 'Close',
    },
    about: {
      badge: 'OUR FACTORY & HISTORY',
      title: 'Over 15 years protecting workers in demanding industrial environments',
      p1: 'At Magno Boots, we are a Mexican manufacturing plant located in the footwear heartland of León, Guanajuato, specializing in high-performance safety footwear.',
      p2: 'We process full-grain bovine leather with specialized chemical tanning to resist abrasion in civil construction, industrial oils, welding sparks, and electrical hazards.',
      pillar1Title: 'NOM-113 Certified Quality',
      pillar1Desc: 'Every batch undergoes impact, compression, and dielectric breakdown testing in accredited labs.',
      pillar2Title: 'Full Grain Bovine Leather',
      pillar2Desc: 'We use 2.0mm - 2.2mm thick leather providing anatomical flexibility without cracking.',
      pillar3Title: 'Direct Injection & Vulcanization',
      pillar3Desc: 'Superior sole-to-upper bond preventing premature detachment under extreme stress.',
      pillar4Title: 'Bulk B2B Fulfillment',
      pillar4Desc: 'We supply corporate tenders, government contracts, and commercial orders with guaranteed lead times.',
      factoryLocationTitle: 'Main Manufacturing Plant',
      plantLocation: 'Located at Av. del Calzado 102, Col. Industrial, León, Guanajuato, Mexico',
      guaranteeTitle: 'Direct Magno Boots Factory Guarantee',
      guaranteeDesc: 'All models carry direct warranty against manufacturing defects and official laboratory test backing under NOM-113-STPS.',
      cfdiNote: 'Fiscal tax invoicing (CFDI 4.0) included on all wholesale and retail orders.',
      shippingNote: 'Consolidated nationwide shipping across Mexico and export logistics.',
    },
    materials: {
      badge: 'INDUSTRIAL QUALITY & CERTIFICATIONS',
      title: 'Premium Components & Official NOM-113 Standard',
      titleMain: 'Premium Components &',
      titleHighlight: 'Official NOM-113 Standard',
      subtitle: 'We never compromise on safety. Every raw material is tested under the strictest standards for extreme durability.',
      mat1Title: 'Polyamide & Steel Toe Cap',
      mat1Subtitle: '200 Joules Impact Resistance',
      mat1Desc: 'Our toe caps absorb heavy blunt impacts up to 200J and resist 15kN compression without crushing the foot compartment.',
      mat2Title: '14kV Dielectric Insulation',
      mat2Subtitle: 'Type III Dielectric Safety',
      mat2Desc: 'Engineered with 0% metal parts in eyelets, shank, and cap, resisting electric leakage up to 14,000 Volts at 60Hz.',
      mat3Title: 'Full Grain Leather Upper',
      mat3Subtitle: 'Thickness 2.0 to 2.4 mm',
      mat3Desc: 'Selected premium leather ensuring high tensile and tear strength while maintaining breathability.',
      mat4Title: 'Dual Density Injected Soles',
      mat4Subtitle: 'Polyurethane & Nitrile Rubber',
      mat4Desc: 'Soles engineered with self-cleaning multidirectional treads, immune to oils, grease, and slippery surfaces.',
      dielectricBannerTitle: 'Need laboratory compliance certificates for your Safety & Health Dept?',
      dielectricBannerDesc: 'We provide official lab test reports under the NOM-113-STPS-2009 standard with every bulk shipment.',
      keyFeatures: 'Key Features of Industrial Safety Footwear',
      techLabData: 'Accredited Laboratory Technical Test Data',
      nomTitle: 'Official Mexican Standard NOM-113-STPS-2009',
      nomSub: 'Specifications and testing methods for protective footwear in Mexico',
      complianceBadge: 'STRICT COMPLIANCE',
      testLabel: 'Laboratory Test',
    },
    distributors: {
      badge: 'SALES CHANNELS & DISTRIBUTORS',
      title: 'Where to Buy Magno Boots?',
      titleMain: 'Where to Buy',
      titleHighlight: 'Magno Boots?',
      subtitle: 'Purchase individual work boots on leading online platforms or quote bulk industrial lots direct from factory.',
      visitStore: 'Visit store',
      visitBtn: 'Go to Official Store',
      b2bBannerBadge: 'CORPORATE & B2B DISTRIBUTORS',
      bannerBadge: 'CORPORATE & B2B DISTRIBUTORS',
      b2bBannerTitle: 'Want to distribute Magno Boots or equip your workforce?',
      bannerTitle: 'Want to distribute Magno Boots or equip your workforce?',
      b2bBannerDesc: 'We offer factory-direct wholesale pricing, custom logo branding for corporate orders, and technical B2B support.',
      bannerDesc: 'We offer factory-direct wholesale pricing, custom logo branding for corporate orders, and technical B2B support.',
      b2bBannerBtn: 'Request Wholesale Price List',
      quoteDirectBtn: 'Quote Bulk Direct from Factory',
      whatsappBtn: 'WhatsApp Distributor Desk',
    },
    faq: {
      badge: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Direct Answers from the Factory',
      titleMain: 'Direct Answers from the',
      titleHighlight: 'Factory',
      subtitle: 'Clear answers regarding bulk orders, lab certifications, and international/national logistics.',
      categoryLabel: 'Question Categories',
      q1: 'What is the minimum order quantity (MOQ) for B2B wholesale pricing?',
      a1: 'We offer wholesale scale pricing starting at 10 pairs per order, with mixed sizes and models allowed.',
      q2: 'Are all boot models NOM-113 certified?',
      a2: 'Yes, all our models strictly meet or exceed the NOM-113-STPS-2009 standard. Official lab reports are included.',
      q3: 'Do you ship across Mexico and internationally?',
      a3: 'Yes, we ship nationwide across Mexico and support export logistics through Castores, FedEx, DHL, and freight carriers.',
      q4: 'Do you provide tax invoices (CFDI)?',
      a4: 'Absolute transparency. All quotes and orders include fiscal tax invoices for corporate expense deductibility.',
      q5: 'Do you offer 100% non-metallic dielectric boots?',
      a5: 'Yes, our Pro Dielectric line features composite polyamide toe caps and non-conductive eyelets for metal-detector pass.',
    },
    testimonials: {
      badge: 'VERIFIED REVIEWS',
      title: 'Trusted by industrial safety managers across North America',
      titleMain: 'Trusted by industrial safety managers across',
      titleHighlight: 'North America',
      subtitle: 'Plant supervisors, safety auditors, and construction workers vouch for Magno Boots.',
    },
    contact: {
      badge: 'FACTORY CONTACT & SALES',
      title: 'Get in Touch with Magno Boots',
      titleMain: 'Get in Touch with',
      titleHighlight: 'Magno Boots',
      subtitle: 'We are ready to answer your technical questions, provide bulk quotes, or connect you with local distributors.',
      factoryInfoTitle: 'León, Guanajuato Plant Info',
      addressLabel: 'Factory Address:',
      phoneLabel: 'Sales Phone:',
      emailLabel: 'Email Address:',
      hoursLabel: 'Operating Hours:',
      formTitle: 'Send a Message to Factory Sales',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'E.g. Eng. Robert Smith',
      companyNameLabel: 'Company / Organization',
      companyLabel: 'Company / Organization',
      companyPlaceholder: 'E.g. Apex Construction LLC',
      emailFormLabel: 'Email Address *',
      emailPlaceholder: 'email@yourcompany.com',
      phoneFormLabel: 'Phone or WhatsApp *',
      phonePlaceholder: '+1 (555) 012-3456',
      inquiryTypeLabel: 'Inquiry Type *',
      inquiryOptions: {
        mayoreo: 'Bulk Wholesale Quote (B2B)',
        distribucion: 'Become Authorized Distributor',
        comprobante: 'Lab Certifications & Spec Sheets',
        individual: 'Single Pair Purchase',
      },
      pairsQuantityLabel: 'Estimated Number of Pairs',
      messageLabel: 'Message or Custom Requirements',
      msgLabel: 'Message or Lot Requirements',
      msgPlaceholder: 'Specify models, number of pairs, requested lead times...',
      submitBtn: 'Submit Inquiry to Factory',
      sending: 'Submitting request...',
      successMsg: 'Message sent successfully! A Magno Boots sales executive will contact you shortly.',
      directAttention: 'Direct Factory Support',
      factoryAddr: 'Main Plant: Av. del Calzado 102, Col. Industrial, León, Guanajuato, C.P. 37000, Mexico.',
      directPhone: 'Sales & Bulk: +52 (477) 714-2030 / +52 (477) 123-4567',
      whatsappB2B: 'WhatsApp B2B Support',
      quoteEmail: 'sales@magnoboots.com.mx / quotes@magnoboots.com.mx',
      workingHours: 'Plant Hours:',
      hoursVal: 'Mon to Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM (CST)',
      immediateResponse: 'Need an immediate response?',
      immediateDesc: 'Connect directly with a sales representative on WhatsApp for real-time stock and volume pricing.',
      chatWhatsappNow: 'Chat on WhatsApp Now',
      successTitle: 'Message Sent Successfully!',
      successDesc: 'Thank you for contacting Magno Boots. A specialist from our León plant will reach out within 24 business hours.',
      sendAnotherMsg: 'Send Another Message',
    },
    quoteModal: {
      badge: 'B2B INDUSTRIAL LOT CALCULATOR',
      title: 'Quote Your Boots Direct from Factory',
      subtitle: 'Calculate your estimated bulk volume discount and receive an official PDF quotation.',
      step1: 'Step 1: Select Model & Quantity',
      step2: 'Step 2: Delivery & Contact Details',
      productSelectLabel: 'Desired Boot Model *',
      selectModelLabel: 'Desired Boot Model *',
      quantityLabel: 'Number of Pairs *',
      estimatedTotal: 'Estimated Total with Volume Discount:',
      discountNotice: 'Automatic volume discount applied!',
      fullName: 'Contact Person Full Name *',
      company: 'Company / Project Name *',
      phone: 'Phone / WhatsApp *',
      email: 'Work Email Address *',
      deliveryState: 'Destination City / State *',
      notes: 'Additional Notes (Specific sizes, toe cap type...)',
      submitBtn: 'Generate Formal Quotation',
      closeBtn: 'Close',
      submittedTitle: 'Formal Quotation Generated!',
      submittedDesc: 'We have prepared your estimated order summary directly from Magno Boots factory.',
      selectedModel: 'Selected Model:',
      discountLevel: 'Applied Volume Discount:',
      totalEstimate: 'Total Estimate (MXN):',
      confirmWhatsapp: 'Confirm and Send via WhatsApp',
      closeWindow: 'Close Window',
      estPricePerPair: 'Estimated Price Per Pair:',
      customLogoCheck: 'I want custom logo stamping on upper leather',
      applicantDetails: 'Applicant Information',
      phoneWhatsappLabel: 'Phone / WhatsApp *',
      cityStateLabel: 'Delivery City / State *',
      cityStatePlaceholder: 'E.g. Houston, Texas / Monterrey, NL',
      notesLabel: 'Special Notes or Requirements',
      notesPlaceholder: 'Specify sizes required, lab certificates needed or delivery deadline...',
      generateBtn: 'Generate Estimated Quote',
      sendWhatsappBtn: 'Send Request to Sales via WhatsApp',
    },
    sizeGuide: {
      badge: 'SIZE EQUIVALENCE TABLE & GUIDE',
      title: 'How to Choose Your Correct Size?',
      subtitle: 'Magno Boots are engineered with comfortable wide industrial lasts (E+), allowing heavy work socks without instep pressure.',
      mxLabel: 'MEXICO SIZE (CM)',
      usLabel: 'U.S. SIZE (MEN)',
      euLabel: 'EUROPE SIZE (EU)',
      footLength: 'Foot Length (cm)',
      tipTitle: 'Pro Tip for Safety Footwear:',
      tipDesc: 'For steel toe or composite toe boots, we recommend choosing your regular standard size. If wearing thick thermal socks for cold storage or mining, consider half a size larger.',
      sizeMx: 'MX Size (cm)',
      sizeUs: 'US Size',
      footMeasure: 'Foot Length',
      howToMeasureTitle: 'How to measure your foot in 3 easy steps?',
      step1: 'Place a sheet of paper on the floor against a wall.',
      step2: 'Stand with your heel against the wall and mark the tip of your longest toe.',
      step3: 'Measure the length with a ruler in centimeters and check the chart above.',
      understoodBtn: 'Got it, Go back',
    },
    chat: {
      assistantTitle: 'MAGNO BOOTS ASSISTANT',
      factoryBadge: 'FACTORY',
      statusOnline: 'Online • Real-time response',
      welcomeMsg1: 'Hello! 👋 Welcome to Magno Boots. We are direct safety footwear manufacturers in León, Guanajuato.',
      welcomeMsg2: 'How can we help you today? Explore our NOM-113 certified catalog or request a bulk B2B quote.',
      actionCatalog: '🥾 View Product Catalog',
      actionQuote: '📑 Request B2B Quote',
      actionNOM: '🛡️ NOM-113 Certification info',
      actionWhatsApp: '💬 Direct WhatsApp',
      inputPlaceholder: 'Type your question about work boots...',
      humanHelp: 'Human Support via WhatsApp',
      teaserTitle: 'Magno Boots Advisor',
      teaserSub: 'Questions about sizes or bulk?',
    },
    footer: {
      desc: 'Heavy-duty industrial footwear manufacturer in León, Guanajuato, Mexico. Specialists in dielectric protection and composite/steel toe safety boots meeting official standards.',
      description: 'Heavy-duty industrial footwear manufacturer in León, Guanajuato, Mexico. Specialists in dielectric protection and composite/steel toe safety boots meeting official standards.',
      navTitle: 'Navigation',
      channelsTitle: 'Sales Channels',
      contactTitle: 'Factory Contact',
      certTitle: 'Certifications & Safety',
      warrantyTitle: 'Direct Warranty',
      warrantyDesc: 'Factory warranty against manufacturing defects and full compliance with NOM-113 lab standards.',
      rights: 'All rights reserved. Proudly manufactured in León, Guanajuato, Mexico.',
      rightsReserved: 'All rights reserved. Proudly manufactured in León, Guanajuato, Mexico.',
      backToTop: 'Back to top',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      products: '产品目录',
      materials: '材质与标准',
      distributors: '分销渠道',
      contact: '联系我们',
      sizeGuide: '尺码对照表',
      quoteB2B: '批发询价',
      quoteShort: '询价',
      officialFactory: '工业安全鞋',
    },
    hero: {
      factoryBadge: '墨西哥莱昂（León）直营工厂',
      normBadge: 'NOM-113-STPS-2009 官方安全认证',
      reviewBadge: '4.9/5 客户好评率',
      titleMain: '高强度防砸防穿刺',
      titleHighlight: '工业安全工装靴',
      subtitle: '墨西哥工业安全鞋专业制造商，配备绝缘复合绝缘包头及钢包头。为重工业、施工和高压作业环境提供极致耐用与全天舒适感。',
      quoteB2BBtn: '获取B2B批发报价',
      viewProductsBtn: '浏览产品目录',
      spec1Title: '复合绝缘 / 钢包头',
      spec1Sub: '通过 200J 冲击及 15kN 压力测试',
      spec2Title: '14kV 电绝缘认证',
      spec2Sub: '电力及高压作业防护保障',
      spec3Title: '头层牛皮防水抗油',
      spec3Sub: '特殊鞣制工艺，抗撕裂耐磨损',
      spec4Title: '支持批发与B2B采购',
      spec4Sub: '提供正规发票，发货覆盖全墨西哥',
    },
    products: {
      badge: '官方工厂产品目录',
      title: '工业安全靴系列 Magno Boots',
      titleMain: '工业安全靴系列',
      titleHighlight: 'Magno Boots',
      subtitle: '探索通过 NOM-113 认证的安全靴产品线。质量保证，支持个人零售与企业大批量采购。',
      downloadPdfBtn: '下载 PDF 离线目录',
      downloadingPdf: '正在生成 PDF...',
      searchPlaceholder: '按鞋款名称或类别搜索（如：绝缘、钢包头）...',
      allCategories: '全部款式',
      allModels: '全部款式',
      dielectric: '绝缘防静电',
      catDielectric: '绝缘防静电',
      steelToe: '防砸钢包头',
      catSteelToe: '防砸钢包头',
      heavyDuty: '重工加固',
      catHeavyDuty: '重工加固',
      ergonomic: '人体工学舒适',
      catErgonomic: '人体工学舒适',
      showing: '显示',
      showingResults: '显示',
      modelSingular: '款鞋',
      modelPlural: '款鞋',
      models: '款鞋',
      for: '关于',
      forQuery: '关于',
      clearSearch: '清除搜索与筛选',
      resetFilters: '清除搜索与筛选',
      noResults: '未找到符合条件的鞋款。',
      noResultsSub: '请尝试搜索其他关键字，如“钢包头”、“绝缘”或“重工”。',
      retailPrice: '零售参考价',
      priceRetail: '零售参考价',
      reviews: '条评价',
      techSheetBtn: '查看规格参数与技术细节',
      viewSpecsBtn: '查看技术规格',
      quoteWholesaleBtn: '批发批量询价',
      quoteB2BBtn: '批发批量询价 (B2B)',
      buyMercadoLibre: '在 Mercado Libre 购买',
      modalTitle: '产品技术规格说明书',
      modelCodeLabel: '鞋款编号：',
      availableSizes: '可选尺码（墨西哥/厘米）：',
      sizesLabel: '可选尺码 (MX/CM)',
      sizeGuideLink: '尺码对照指南',
      sizeGuideBtn: '查看尺码指南',
      techSpecsTitle: '技术参数与用料：',
      specsTitle: '技术规格明细',
      toeCapLabel: '鞋头防护',
      toeCap: '鞋头防护包头',
      leatherLabel: '鞋面皮质',
      leather: '鞋面头层皮',
      soleLabel: '鞋底材质',
      sole: '防滑大底',
      lining: '舒适内里',
      constructionLabel: '制作工艺',
      certificationsLabel: '安全认证',
      certifications: '实验室安全认证',
      weightLabel: '单双平均重量',
      buyRetailTitle: '在授权经销商处购买单双：',
      requestQuoteBtn: '索取大宗批次报价',
      quoteB2BModalBtn: '获取B2B批量采购报价',
      closeModal: '关闭',
    },
    about: {
      badge: '我们的工厂与历史',
      title: '15余年专注保护墨西哥工业劳动者的脚步安全',
      p1: 'Magno Boots 位于墨西哥鞋业之都瓜纳华托州莱昂（León, Guanajuato），是一家专门从事高性能工业安全鞋设计、研发与制造的墨西哥直营工厂。',
      p2: '我们精选 2.0mm-2.2mm 头层牛皮，配合专业化学鞣制，能抵御建筑施工、工业油脂、焊接飞溅及高压电力环境的严苛考验。',
      pillar1Title: 'NOM-113 官方质量认证',
      pillar1Desc: '每批产品均在认可实验室接受抗冲击、耐压及耐绝缘击穿测试。',
      pillar2Title: '头层牛皮天然材质',
      pillar2Desc: '采用高品质牛皮，鞋面贴合足部且不易开裂。',
      pillar3Title: '聚氨酯直接注塑工艺',
      pillar3Desc: '鞋底与鞋面一体成型，极大提升抗拉剥离强度。',
      pillar4Title: 'B2B大批量大宗供货',
      pillar4Desc: '承接企业集中采购、招标订单，保障交货期与品质。',
      factoryLocationTitle: '生产基地总部',
      plantLocation: '位于墨西哥瓜纳华托州莱昂市 Av. del Calzado 102, Col. Industrial',
      guaranteeTitle: 'Magno Boots 直营工厂品质保障',
      guaranteeDesc: '所有产品型号享工厂直营制造缺陷保修及 NOM-113 官方实验室检测出厂保证。',
      cfdiNote: '所有批发及零售订单均开具正规发票（CFDI 4.0）。',
      shippingNote: '支持全墨西哥整合物流发货及国际出口发运。',
    },
    materials: {
      badge: '工业品质与安全认证',
      title: '高标用料与 NOM-113 官方标准',
      titleMain: '高标用料与',
      titleHighlight: 'NOM-113 官方标准',
      subtitle: '在安全性能上我们绝不妥协。每种原料均经过严苛检测，确保在恶劣环境下持久防护。',
      mat1Title: '绝缘包头与防砸钢头',
      mat1Subtitle: '抗 200 焦耳冲击',
      mat1Desc: '能吸收 200J 的重物砸落冲击，并承受 15kN 静态压力，保护脚趾不受挤压。',
      mat2Title: '14kV 电绝缘防高压',
      mat2Subtitle: 'III 型电绝缘标准',
      mat2Desc: '无金属配件设计，可在 60Hz 交流电下耐受高达 14,000V 的电压无泄漏。',
      mat3Title: '头层牛皮防水防油',
      mat3Subtitle: '厚度 2.0 至 2.4 mm',
      mat3Desc: '严格甄选天然牛皮，抗撕裂性能优异且兼具良好透气性。',
      mat4Title: '双密度注塑鞋底',
      mat4Subtitle: '聚氨酯与丁腈橡胶',
      mat4Desc: '鞋底带多向自洁防滑纹路，耐机油、耐油脂、防滑性能卓越。',
      dielectricBannerTitle: '需要提供安环部门（EHS）官方实验室检测报告？',
      dielectricBannerDesc: '我们在每个大宗采购订单中均附带 NOM-113-STPS-2009 官方检验合格证明文件。',
      keyFeatures: '工业安全鞋关键防护特性',
      techLabData: '国家认可实验室技术检测数据',
      nomTitle: '墨西哥官方标准 NOM-113-STPS-2009',
      nomSub: '墨西哥安全鞋防护规范与实验测试方法',
      complianceBadge: '严格符合标准',
      testLabel: '实验室检测项目',
    },
    distributors: {
      badge: '销售渠道与经销商',
      title: '在哪里购买 Magno Boots？',
      titleMain: '在哪里购买',
      titleHighlight: 'Magno Boots？',
      subtitle: '可在各大主流在线平台购买个人安全靴，或直接联系工厂获取大批量批发优惠价。',
      visitStore: '访问店铺',
      visitBtn: '前往官方旗舰店',
      b2bBannerBadge: '企业与经销商合作',
      bannerBadge: '企业与经销商合作',
      b2bBannerTitle: '希望代理 Magno Boots 或采购为员工装配件？',
      bannerTitle: '希望代理 Magno Boots 或采购为员工装配件？',
      b2bBannerDesc: '我们提供厂价批发折扣、企业定制Logo以及专业B2B技术咨询支持。',
      bannerDesc: '我们提供厂价批发折扣、企业定制Logo以及专业B2B技术咨询支持。',
      b2bBannerBtn: '索取批发价格表',
      quoteDirectBtn: '直接向工厂索取批次报价',
      whatsappBtn: 'WhatsApp 分销商专线',
    },
    faq: {
      badge: '常见问题解答',
      title: '来自工厂的权威解答',
      titleMain: '来自工厂的',
      titleHighlight: '权威解答',
      subtitle: '解答您关于大宗采购、实验室认证和物流配送的疑问。',
      categoryLabel: '问题分类',
      q1: 'B2B批发采购的起订量（MOQ）是多少？',
      a1: '我们支持 10 双起享受工厂批发阶梯价，允许混批不同尺码和款式。',
      q2: '所有安全靴都附带 NOM-113 认证吗？',
      a2: '是的，我们所有型号均严格符合 NOM-113-STPS-2009 标准，发货时随附检测报告复印件。',
      q3: '支持全墨西哥及出口发货吗？',
      a3: '支持。我们与 Castores, Tresguerras, FedEx, DHL 等物流公司长期合作，发货覆盖全墨西哥及国际物流。',
      q4: '是否可以开具正规发票（CFDI）？',
      a4: '完全可以。所有报价均可开具正规增值税发票，方便企业报销与抵扣。',
      q5: '是否有 100% 无金属的绝缘安全靴？',
      a5: '是的，Pro 绝缘系列采用复合高强度聚酰胺鞋头和非金属扣眼，可通过安检门不报警。',
    },
    testimonials: {
      badge: '真实客户评价',
      title: '信赖 Magno Boots 的企业安全主管口碑',
      titleMain: '信赖 Magno Boots 的',
      titleHighlight: '企业安全主管口碑',
      subtitle: '来自墨西哥各地工程主管、安全稽核员与现场工人的真实使用反馈。',
    },
    contact: {
      badge: '工厂联系方式与销售',
      title: '联系 Magno Boots 工厂',
      titleMain: '联系',
      titleHighlight: 'Magno Boots 工厂',
      subtitle: '我们随时为您解答技术疑问、提供大宗报价或指引当地经销商信息。',
      factoryInfoTitle: '莱昂（León）生产基地信息',
      addressLabel: '工厂地址：',
      phoneLabel: '销售电话：',
      emailLabel: '电子邮箱：',
      hoursLabel: '工作时间：',
      formTitle: '向工厂销售部发送留言',
      fullNameLabel: '姓名 *',
      fullNamePlaceholder: '例如：张工',
      companyNameLabel: '公司 / 单位名称',
      companyLabel: '公司 / 单位名称',
      companyPlaceholder: '例如：北方建筑集团有限公司',
      emailFormLabel: '电子邮箱 *',
      emailPlaceholder: 'email@yourcompany.com',
      phoneFormLabel: '电话 / WhatsApp *',
      phonePlaceholder: '+52 (477) 123-4567',
      inquiryTypeLabel: '咨询类型 *',
      inquiryOptions: {
        mayoreo: '大宗批发报价 (B2B)',
        distribucion: '成为授权分销商',
        comprobante: '获取检测报告与规格书',
        individual: '个人散客购买',
      },
      pairsQuantityLabel: '预估需求数量（双）',
      messageLabel: '留言或特殊要求',
      msgLabel: '留言或批次需求',
      msgPlaceholder: '请详细说明您的要求（感兴趣的鞋款、双数、希望的交货期）...',
      submitBtn: '提交信息至工厂',
      sending: '正在发送请求...',
      successMsg: '留言发送成功！Magno Boots 销售代表将尽快与您取得联系。',
      directAttention: '工厂直营客服',
      factoryAddr: '生产基地总部：墨西哥瓜纳华托州莱昂市 Av. del Calzado 102, Col. Industrial, C.P. 37000',
      directPhone: '销售与批发热线：+52 (477) 714-2030 / +52 (477) 123-4567',
      whatsappB2B: 'WhatsApp 官方 B2B 客服',
      quoteEmail: 'ventas@magnoboots.com.mx / cotizaciones@magnoboots.com.mx',
      workingHours: '工厂作息时间：',
      hoursVal: '周一至周五：08:00 - 18:00 | 周六：09:00 - 14:00',
      immediateResponse: '需要即时响应？',
      immediateDesc: '通过 WhatsApp 直接联系销售顾问，实时解答库存与批发阶梯折扣。',
      chatWhatsappNow: '立即进行 WhatsApp 沟通',
      successTitle: '留言提交成功！',
      successDesc: '感谢联系 Magno Boots。我们莱昂总部的专业代表将在24个工作小时内与您对接。',
      sendAnotherMsg: '发送另一条留言',
    },
    quoteModal: {
      badge: 'B2B 工业大宗采购计算器',
      title: '直接向工厂索取批量报价',
      subtitle: '计算大宗采购折扣并生成官方 PDF 报价单。',
      step1: '步骤 1：选择型号与数量',
      step2: '步骤 2：填写送货与联系信息',
      productSelectLabel: '选择安全靴型号 *',
      selectModelLabel: '选择安全靴型号 *',
      quantityLabel: '采购数量（双）*',
      estimatedTotal: '含批发折扣预估总额：',
      discountNotice: '已自动应用大宗采购折扣！',
      fullName: '负责人姓名 *',
      company: '公司 / 项目名称 *',
      phone: '联系电话 / WhatsApp *',
      email: '工作邮箱 *',
      deliveryState: '目的城市 / 州 *',
      notes: '附加要求（特定尺码、鞋头类型...）',
      submitBtn: '生成正式报价单',
      closeBtn: '关闭',
      submittedTitle: '正式报价单已生成！',
      submittedDesc: '我们已为您准备好来自 Magno Boots 直营工厂的预估采购明细。',
      selectedModel: '已选鞋款：',
      discountLevel: '享用大宗折扣级别：',
      totalEstimate: '预估总额 (MXN)：',
      confirmWhatsapp: '通过 WhatsApp 确认并提交申请',
      closeWindow: '关闭窗口',
      estPricePerPair: '预估单双价格：',
      customLogoCheck: '需要在皮革上压印定制公司Logo',
      applicantDetails: '申请人信息',
      phoneWhatsappLabel: '联系电话 / WhatsApp *',
      cityStateLabel: '送货城市 / 州 *',
      cityStatePlaceholder: '例如：蒙特雷，新莱昂州',
      notesLabel: '特殊要求或备注',
      notesPlaceholder: '请注明所需尺码分布、检测证书需求或交货截止日期...',
      generateBtn: '生成预估预算表',
      sendWhatsappBtn: '通过 WhatsApp 向销售部发送申请',
    },
    sizeGuide: {
      badge: '尺码对照表与选码指南',
      title: '如何选择正确的尺码？',
      subtitle: 'Magno Boots 采用宽松版型工业楦头（E+），容纳加厚工装袜，不压迫脚背。',
      mxLabel: '墨西哥尺码 (CM)',
      usLabel: '美国尺码 (US MEN)',
      euLabel: '欧洲尺码 (EU)',
      footLength: '脚长 (cm)',
      tipTitle: '工业安全鞋选码建议：',
      tipDesc: '对于带防砸包头（钢头或绝缘头）的安全靴，建议按平时穿著的正码选择。若在冷库或矿山作业需穿着加厚保暖袜，可考虑选择大半码。',
      sizeMx: '墨西哥尺码 (cm)',
      sizeUs: '美国尺码',
      footMeasure: '脚长测量',
      howToMeasureTitle: '简单3步测量脚长：',
      step1: '在贴墙地面上平放一张白纸。',
      step2: '脚跟紧靠墙壁，用笔标记最长脚趾前端。',
      step3: '用直尺测量厘米距离，对比上方表选择对应尺码。',
      understoodBtn: '明白，返回',
    },
    chat: {
      assistantTitle: 'MAGNO BOOTS 智能助手',
      factoryBadge: '工厂直营',
      statusOnline: '在线 • 实时回复',
      welcomeMsg1: '您好！👋 欢迎来到 Magno Boots。我们是位于墨西哥莱昂的工业安全鞋生产工厂。',
      welcomeMsg2: '今天有什么可以帮您？您可以浏览通过 NOM-113 认证的产品目录或申请大宗批发报价。',
      actionCatalog: '🥾 浏览产品目录',
      actionQuote: '📑 申请B2B批发报价',
      actionNOM: '🛡️ 查询 NOM-113 认证',
      actionWhatsApp: '💬 WhatsApp 官方客服',
      inputPlaceholder: '请输入关于安全鞋的咨询...',
      humanHelp: '人工客服 (WhatsApp)',
      teaserTitle: 'Magno Boots 顾问',
      teaserSub: '有关于尺码或批发的疑问？',
    },
    footer: {
      desc: '墨西哥莱昂（León）高强度工业安全鞋制造工厂。专注于绝缘防护及带防砸包头符合 NOM-113 标准的安全靴。',
      description: '墨西哥莱昂（León）高强度工业安全鞋制造工厂。专注于绝缘防护及带防砸包头符合 NOM-113 标准的安全靴。',
      navTitle: '快速导航',
      channelsTitle: '销售渠道',
      contactTitle: '工厂联系',
      certTitle: '安全认证',
      warrantyTitle: '直营质保',
      warrantyDesc: '工厂质保出厂缺陷，严格符合 NOM-113 实验室安全检测标准。',
      rights: '版权所有。墨西哥瓜纳华托州莱昂造。',
      rightsReserved: '版权所有。墨西哥瓜纳华托州莱昂造。',
      backToTop: '返回顶部',
    },
  },
};
