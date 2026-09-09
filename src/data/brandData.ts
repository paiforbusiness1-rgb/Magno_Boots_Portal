import { CertificationItem, Distributor, FAQItem, MaterialSpec, Testimonial } from '../types';
import factoryCraftImg from '../assets/images/magno_factory_craft_1784841394124.jpg';

export const COMPANY_INFO = {
  name: 'Magno Boots',
  tagline: 'Fábrica de Calzado Industrial de Alta Resistencia',
  subtagline: 'Protección, confort y durabilidad en cada paso de la industria mexicana.',
  historyYears: 'Más de 15 años',
  location: 'León, Guanajuato, México',
  fullAddress: 'Blvd. Aeropuerto 840, Col. Industrial, León, Guanajuato, C.P. 37290, México',
  phone: '+52 (479) 216-1712',
  whatsapp: '524792161712',
  whatsappDisplay: '+52 479 216 1712',
  email: 'ventas@magnoboots.com.mx',
  b2bEmail: 'cotizaciones@magnoboots.com.mx',
  factoryImg: factoryCraftImg,
  socials: {
    facebook: 'https://www.facebook.com/p/MAGNO-BOOTS-100063699570749/?locale=es_LA',
    instagram: 'https://www.instagram.com/magno_boots/',
    mercadoLibre: 'https://www.mercadolibre.com.mx/pagina/mb4',
    flamundial: 'https://flamundial.com/collections/magno-boots?srsltid=AfmBOorkg21CxJ8XW5ULl4A9ANhBGpXce67o-ZSh6hK1SOEV4N8Ss91u',
    guicom: 'https://guicom.com.mx/producto-tag/magno-boots'
  },
  stats: [
    { label: 'Pares Fabricados al Año', value: '+120,000' },
    { label: 'Cumplimiento Norma Oficial', value: '100% NOM-113' },
    { label: 'Empresas y Plantas Clientes', value: '+350' },
    { label: 'Satisfacción Compradores', value: '4.9 ★' }
  ]
};

export const DISTRIBUTORS: Distributor[] = [
  {
    name: 'Mercado Libre Oficial',
    type: 'Marketplace',
    url: COMPANY_INFO.socials.mercadoLibre,
    description: 'Tienda oficial con envíos Full a todo México en 24/48 hrs, meses sin intereses y compra protegida.',
    badge: 'Envío Gratis y Full',
    logoText: 'Mercado Libre'
  },
  {
    name: 'Flamundial',
    type: 'Distribuidor Oficial',
    url: COMPANY_INFO.socials.flamundial,
    description: 'Distribuidor mayorista especializado en equipos de protección personal y calzado industrial Magno Boots.',
    badge: 'Surtido Empresarial',
    logoText: 'Flamundial'
  },
  {
    name: 'Guicom',
    type: 'Distribuidor Oficial',
    url: COMPANY_INFO.socials.guicom,
    description: 'Suministros industriales y soluciones de seguridad para minería, manufactura y construcción.',
    badge: 'Precios Especiales B2B',
    logoText: 'Guicom'
  },
  {
    name: 'Facebook Oficial Magno Boots',
    type: 'Red Social',
    url: COMPANY_INFO.socials.facebook,
    description: 'Novedades, lanzamientos de nuevos modelos y atención directa a pedidos mayoristas por Messenger.',
    badge: '+15k Seguidores',
    logoText: 'Facebook'
  },
  {
    name: 'Instagram @magno_boots',
    type: 'Red Social',
    url: COMPANY_INFO.socials.instagram,
    description: 'Galería de fotos de nuestras botas en acción en plantas industriales, obras y talleres.',
    badge: 'Fotos en Vivo',
    logoText: 'Instagram'
  }
];

export const MATERIAL_SPECS: MaterialSpec[] = [
  {
    id: 'piel-flor-entera',
    title: 'Piel Vacuno Flor Entera 100%',
    subtitle: 'Calidad de Exportación',
    description: 'Seleccionamos curtidos de cuero vacuno de grosor de 2.0 a 2.4 mm tratadas con aceites e hidrofugado. Ofrece resistencia superior a la abrasión, tracción y flexión constante sin agrietarse.',
    iconName: 'Shield',
    features: ['Hidrofugada repelente a fluidos', 'Soporta flexión constante (>100,000 ciclos)', 'Resistencia a desgarraduras >120N', 'Transpirabilidad natural'],
    technicalData: 'Espesor: 2.2 mm ± 0.2 mm. Calibre de seguridad industrial conforme a NOM-113-STPS.',
    badge: 'Corte 100% Cuero'
  },
  {
    id: 'casquillos-proteccion',
    title: 'Casquillos de Poliamida & Acero',
    subtitle: 'Protección Anti-Impacto y Compresión',
    description: 'Disponibles en dos tecnologías: Poliamida (Composite no metálico para ambiente dieléctrico y ligero) y Acero Carbono tratado térmicamente. Ambos absorben más de 200 Joules de impacto directo.',
    iconName: 'Zap',
    features: ['Absorción de impacto 200J (Caída de 20 kg a 1 metro)', 'Resistencia a la compresión 15 kN (1.5 toneladas)', 'Borde sintético amortiguador que evita roces en los dedos', 'Diseño ergonómico holgado'],
    technicalData: 'Sometidos a pruebas de impacto norma NOM-113-STPS-2009 Tipo II y III.',
    badge: '200 Joules Resistencia'
  },
  {
    id: 'suelas-antiderrapantes',
    title: 'Suelas Poliuretano & Hule Acrilonitrilo',
    subtitle: 'Adherencia Anti-Deslizante y Resistencia a Químicos',
    description: 'Nuestras suelas inyectadas al corte o vulcanizadas cuentan con grabados con canales de autolimpieza. Resistentes al desgaste por rozamiento y a la penetración de aceites, solventes y grasas minerales.',
    iconName: 'Footprints',
    features: ['Inyección directa al corte (sin despego de suela)', 'Huella antideslizante Coeficiente de Fricción > 0.60', 'Resistencia a aceites e hidrocarburos', 'Efecto shock-absorber en talón'],
    technicalData: 'Abrasión menor a 150 mm³ según prueba ISO 20344.',
    badge: 'Anti-Grasas y Aceites'
  },
  {
    id: 'plantilla-confort',
    title: 'Plantilla Anatómica & Forro Textil',
    subtitle: 'Reducción de Fatiga y Aislamiento Térmico',
    description: 'Interior equipado con plantilla textil moldeada de poliuretano de alta densidad con memoria y forro Dri-Lex antibacterial transpirable que evita malos olores y humedad durante el turno.',
    iconName: 'Sparkles',
    features: ['Distribución uniforme de presión plantar', 'Tratamiento antimicrobiano y antihongos', 'Absorción instantánea y evaporación de sudor', 'Lavable y reemplazable'],
    technicalData: 'Densidad de 0.35 g/cm³ para máximo confort.',
    badge: 'Ergonomía Total'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    code: 'NOM-113-STPS-2009',
    title: 'Norma Oficial Mexicana de Calzado de Protección',
    description: 'Establece las especificaciones y métodos de prueba para el calzado de protección que se comercializa e ingresa en centros de trabajo en México.',
    testDetails: 'Aprobado en laboratorios acreditados ante la Entidad Mexicana de Acreditación (EMA).',
    icon: 'Award'
  },
  {
    code: 'TIPO II (PP)',
    title: 'Calzado de Protección Ocupacional con Puntera',
    description: 'Garantiza protección contra riesgos de impacto y compresión en la zona de los dedos de los pies.',
    testDetails: 'Prueba de impacto a 200J y compresión a 15,000 N sin deformación riesgosa.',
    icon: 'ShieldCheck'
  },
  {
    code: 'TIPO III (D)',
    title: 'Calzado Dieléctrico (Aislamiento Eléctrico)',
    description: 'Destinado a proteger al usuario contra riesgos de choque eléctrico por contacto con circuitos en energizados.',
    testDetails: 'Resistencia probada a 14,000 Volts a 60 Hz durante 1 minuto con corriente de fuga < 1.0 mA.',
    icon: 'Zap'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Ing. Roberto Mendoza',
    role: 'Gerente de Seguridad e Higiene Industrial',
    company: 'Constructora e Infraestructura del Bajío',
    comment: 'Compramos un lote de 120 pares de la bota Magno 802 con casquillo de acero para nuestra cuadrilla de obra civil. La durabilidad es insuperable y el personal destaca que son súper cómodas desde el primer día.',
    rating: 5,
    verifiedPurchase: true,
    date: 'Hace 2 meses'
  },
  {
    id: '2',
    author: 'Lic. Claudia Santos',
    role: 'Jefe de Compras y Suministros',
    company: 'Planta de Ensamble Automotriz',
    comment: 'Requeríamos botas con certificación dieléctrica NOM-113 para nuestro área de líneas energizadas. Magno Boots nos entregó la ficha técnica y certificados de laboratorio completos. Excelente servicio de fábrica.',
    rating: 5,
    verifiedPurchase: true,
    date: 'Hace 1 mes'
  },
  {
    id: '3',
    author: 'Carlos Alberto V.',
    role: 'Comprador Verificado',
    company: 'Mercado Libre México',
    comment: 'Llegaron súper rápido en envío Full. La piel es gruesa de buena calidad y la suela no se resbala nada en el taller donde hay aceite. Vale totalmente la pena comprar calzado hecho en León directamente.',
    rating: 5,
    verifiedPurchase: true,
    date: 'Hace 3 semanas'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Las botas Magno Boots cumplen con la norma oficial mexicana NOM-113-STPS?',
    answer: 'Sí. Todos nuestros modelos de protección (tanto con casquillo de acero como con poliamida dieléctrica) son fabricados bajo estrictos parámetros y certificaciones de la norma NOM-113-STPS-2009 en Tipos II (Protección Puntera) y III (Dieléctrico). Proporcionamos dictámenes y fichas técnicas para auditorías de seguridad en empresas.',
    category: 'Certificaciones'
  },
  {
    question: '¿Venden por mayoreo para empresas, plantas o distribuidores?',
    answer: '¡Por supuesto! Somos fábrica directa en León, Guanajuato. Ofrecemos precios escalonados de mayoreo a partir de 12 pares, facturación fiscal (CFDI), cotizaciones formalizadas y posibilidad de personalizar etiquetas o grabados para corporativos.',
    category: 'Envíos y Mayoreo'
  },
  {
    question: '¿Dónde puedo comprar un solo par o pedidos individuales?',
    answer: 'Puedes comprar de manera individual con envío inmediato a todo México mediante nuestra tienda oficial en Mercado Libre con beneficio Full, o a través de nuestros distribuidores autorizados como Flamundial y Guicom.',
    category: 'Envíos y Mayoreo'
  },
  {
    question: '¿Cuál es la garantía de fábrica de Magno Boots?',
    answer: 'Ofrecemos 6 meses de garantía directa de fábrica contra cualquier defecto de fabricación, despegue de suela o ruptura de costuras en condiciones normales de uso industrial.',
    category: 'Garantía'
  },
  {
    question: '¿Cómo elegir entre casquillo de acero y casquillo de poliamida?',
    answer: 'El casquillo de acero es ideal para construcción y trabajo pesado donde no existen detectores de metales ni riesgos de electricidad. El casquillo de poliamida (composite) es dieléctrico (no conduce electricidad), no se congela ni se calienta en temperaturas extremas, no activa detectores de metales y es más ligero.',
    category: 'Especificaciones'
  },
  {
    question: '¿Cómo viene la horma de las tallas?',
    answer: 'Nuestras botas están diseñadas con horma industrial mexicana amplia (E+), permitiendo el uso de calcetines gruesos o plantillas ortopédicas con total comodidad. Recomendamos pedir tu talla habitual en centímetros (ejemplo: Talla 27 para un pie de 27 cm).',
    category: 'Especificaciones'
  }
];
