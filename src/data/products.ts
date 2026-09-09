import { Product } from '../types';

import dielectricBootImg from '../assets/images/magno_dielectric_boot_1784841373075.jpg';
import steelBootImg from '../assets/images/magno_steel_boot_1784841383673.jpg';
import heroBootImg from '../assets/images/magno_hero_boot_1784841360353.jpg';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'magno-diel-701',
    name: 'Bota Magno Dieléctrica Pro 701',
    category: 'dielectric',
    categoryLabel: 'Dieléctrica / No Metálica',
    modelCode: 'MG-DIEL-701',
    price: 1190,
    featured: true,
    image: dielectricBootImg,
    description: 'Bota de seguridad dieléctrica de alto rendimiento con casquillo de poliamida libre de metal. Diseñada para plantas de energía, mantenimiento eléctrico y entornos con detectores de metal.',
    shortSpecs: [
      'Casquillo de Poliamida (Libre de Metal)',
      'Aislamiento dieléctrico hasta 14,000 Volts',
      'Piel Vacuno Flor Entera hidrofugada',
      'Suela Poliuretano Dual Antiderrapante'
    ],
    specs: {
      toeCap: 'Casquillo de Poliamida de alta resistencia al impacto (200 Joules) sin conducción eléctrica.',
      leather: 'Piel Vacuno Flor Entera de 2.2 mm de grosor, resistente a desgarraduras y agua.',
      sole: 'Suela de Poliuretano Dual Density inyectada directo al corte, antideslizante sobre aceite y agua.',
      lining: 'Textil Dri-Lex transpirable con tratamiento anti-bacterias y absorción de humedad.',
      construction: 'Inyección directa al corte de máxima flexibilidad y sellado hermético.',
      certifications: ['NOM-113-STPS-2009 Tipo III (Dieléctrico)', 'NOM-113-STPS-2009 Tipo II (Protección PP)'],
      weights: '620 g por bota (Talla 27)'
    },
    sizes: ['24', '25', '26', '27', '28', '29', '30', '31'],
    mercadoLibreUrl: 'https://www.mercadolibre.com.mx/pagina/mb4',
    flamundialUrl: 'https://flamundial.com/collections/magno-boots',
    guicomUrl: 'https://guicom.com.mx/producto-tag/magno-boots',
    rating: 4.9,
    reviewCount: 148
  },
  {
    id: 'magno-acero-802',
    name: 'Bota Magno Casquillo de Acero Heavy Duty 802',
    category: 'steel-toe',
    categoryLabel: 'Casquillo de Acero',
    modelCode: 'MG-ACERO-802',
    price: 1080,
    featured: true,
    image: steelBootImg,
    description: 'La bota insigne para construcción, minería y pesada industria. Protección superior de impacto con casquillo de acero templado y suela antidesgaste de hule acrilonitrilo.',
    shortSpecs: [
      'Casquillo de Acero Tratado Térmicamente',
      'Piel Graso Miel / Café Flor Entera',
      'Suela de Hule Acrilonitrilo Antiderrapante',
      'Soporte Ergonómico en Talón y Tobillo'
    ],
    specs: {
      toeCap: 'Casquillo de acero con borde de goma protectora anti-presión, resistente a 200 J de impacto y 15 kN de compresión.',
      leather: 'Piel vacuno acabado graso de alta durabilidad 2.0 mm.',
      sole: 'Suela de hule acrilonitrilo de alta resistencia a hidrocarburos, aceites y solventes.',
      lining: 'Malla tridimensional térmicamente regulada.',
      construction: 'Cosido Lockstitch reforzado y vulcanizado de alta durabilidad.',
      certifications: ['NOM-113-STPS-2009 Tipo II (Calzado de Protección Ocupacional con Puntera)'],
      weights: '710 g por bota (Talla 27)'
    },
    sizes: ['23', '24', '25', '26', '27', '28', '29', '30'],
    mercadoLibreUrl: 'https://www.mercadolibre.com.mx/pagina/mb4',
    flamundialUrl: 'https://flamundial.com/collections/magno-boots',
    guicomUrl: 'https://guicom.com.mx/producto-tag/magno-boots',
    rating: 4.8,
    reviewCount: 215
  },
  {
    id: 'magno-rudo-905',
    name: 'Bota Magno Rudo Trabajo Titan 905',
    category: 'heavy-duty',
    categoryLabel: 'Uso Rudo / Petrolera',
    modelCode: 'MG-TITAN-905',
    price: 1250,
    featured: true,
    image: heroBootImg,
    description: 'Diseñada para condiciones extremas: campos petroleros, obra civil y talleres pesados. Resistencia química a solventes, grasas y abrasión continua.',
    shortSpecs: [
      'Piel Nubuck / Vacuno Grueso de 2.4 mm',
      'Casquillo de Acero o Poliamida a elegir',
      'Suela de Doble Densidad Poliuretano/Hule',
      'Plantilla Ergonómica PU Shock Absorber'
    ],
    specs: {
      toeCap: 'Casquillo a elegir (Acero o Poliamida Dieléctrica) con pestaña de holgura confort.',
      leather: 'Piel genuina vacuno calibre 2.2 - 2.4 mm con tratamiento repelente a fluidos industriales.',
      sole: 'Suela mixta Poliuretano/Hule con canales multidireccionales de autolimpieza de lodo y grava.',
      lining: 'Forro antibacterial con microperforaciones para ventilación continua.',
      construction: 'Inyección directa al corte de doble densidad.',
      certifications: ['NOM-113-STPS-2009 Tipo II y III'],
      weights: '740 g por bota (Talla 27)'
    },
    sizes: ['25', '26', '27', '28', '29', '30', '31'],
    mercadoLibreUrl: 'https://www.mercadolibre.com.mx/pagina/mb4',
    flamundialUrl: 'https://flamundial.com/collections/magno-boots',
    guicomUrl: 'https://guicom.com.mx/producto-tag/magno-boots',
    rating: 5.0,
    reviewCount: 98
  },
  {
    id: 'magno-ergo-604',
    name: 'Bota Magno Ergonómica Confort Light 604',
    category: 'ergonomic',
    categoryLabel: 'Ergonómica / Larga Jornada',
    modelCode: 'MG-ERGO-604',
    price: 1120,
    featured: false,
    image: dielectricBootImg,
    description: 'Máximo confort para trabajadores en pie durante más de 12 horas consecutivas. Reducción de fatiga lumbar y tobillo acolchado con espuma de alta densidad.',
    shortSpecs: [
      'Casquillo de Poliamida ultraligero',
      'Plantilla Anatómica Memory Foam',
      '30% más ligera que botas tradicionales',
      'Cuello y lengüeta acolchados'
    ],
    specs: {
      toeCap: 'Casquillo de Composite ultraligero (cumple norma de choque 200J).',
      leather: 'Piel Vacuno Suave Flor Entera de primera calidad.',
      sole: 'Suela de Poliuretano expansivo con cápsula de amortiguación en talón.',
      lining: 'Textil acojinado antimicrobiano.',
      construction: 'Inyección de PU ligera.',
      certifications: ['NOM-113-STPS-2009 Tipo II y Ergonómica'],
      weights: '530 g por bota (Talla 27)'
    },
    sizes: ['24', '25', '26', '27', '28', '29', '30'],
    mercadoLibreUrl: 'https://www.mercadolibre.com.mx/pagina/mb4',
    flamundialUrl: 'https://flamundial.com/collections/magno-boots',
    guicomUrl: 'https://guicom.com.mx/producto-tag/magno-boots',
    rating: 4.9,
    reviewCount: 167
  },
  {
    id: 'magno-negra-502',
    name: 'Bota Magno Ejecutiva de Inspección Negra 502',
    category: 'dielectric',
    categoryLabel: 'Supervisión / Dieléctrica',
    modelCode: 'MG-NEGRA-502',
    price: 1150,
    featured: false,
    image: steelBootImg,
    description: 'Combinación perfecta entre estética formal y seguridad industrial para supervisores, ingenieros de obra y auditores de seguridad.',
    shortSpecs: [
      'Piel Vacuno Lisa Color Negro Elegante',
      'Casquillo Poliamida Dieléctrico',
      'Suela Antideslizante PU',
      'Apta para oficinas de planta y campo'
    ],
    specs: {
      toeCap: 'Casquillo de Poliamida no metálico.',
      leather: 'Piel Vacuno acabado liso abrillantable de 2.0 mm.',
      sole: 'Suela PU ligero antiderrapante.',
      lining: 'Textil respirable de confort.',
      construction: 'Inyección directa al corte.',
      certifications: ['NOM-113-STPS-2009 Tipo III'],
      weights: '590 g por bota (Talla 27)'
    },
    sizes: ['24', '25', '26', '27', '28', '29', '30', '31'],
    mercadoLibreUrl: 'https://www.mercadolibre.com.mx/pagina/mb4',
    flamundialUrl: 'https://flamundial.com/collections/magno-boots',
    guicomUrl: 'https://guicom.com.mx/producto-tag/magno-boots',
    rating: 4.8,
    reviewCount: 82
  },
  {
    id: 'magno-petro-990',
    name: 'Bota Magno Tubo Alto Petrolera / Química 990',
    category: 'heavy-duty',
    categoryLabel: 'Uso Rudo / Tubo Alto',
    modelCode: 'MG-TUBO-990',
    price: 1390,
    featured: false,
    image: heroBootImg,
    description: 'Bota de tubo protector de 10 pulgadas para máxima protección de espinilla y tobillo contra salpicaduras químicas, chispas de soldadura y terracería.',
    shortSpecs: [
      'Caña Alta 10" de Protección Total',
      'Piel Vacuno Hidrofugada 2.4mm',
      'Casquillo de Acero o Poliamida',
      'Suela Hule Nítrico antiescurrimiento'
    ],
    specs: {
      toeCap: 'Casquillo térmicamente aislado con borde anti-fricción.',
      leather: 'Piel Vacuno Flor Entera de alto espesor.',
      sole: 'Suela Hule Acrilonitrilo Vulcanizada de tracción profunda.',
      lining: 'Forro térmico lavable.',
      construction: 'Goodyear Welt doble costura de seguridad.',
      certifications: ['NOM-113-STPS-2009 Tipo II / III / VII'],
      weights: '820 g por bota (Talla 27)'
    },
    sizes: ['25', '26', '27', '28', '29', '30'],
    mercadoLibreUrl: 'https://www.mercadolibre.com.mx/pagina/mb4',
    flamundialUrl: 'https://flamundial.com/collections/magno-boots',
    guicomUrl: 'https://guicom.com.mx/producto-tag/magno-boots',
    rating: 4.9,
    reviewCount: 76
  }
];
