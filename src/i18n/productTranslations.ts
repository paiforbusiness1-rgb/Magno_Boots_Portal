import { Product } from '../types';
import { Language } from './translations';

interface LocalizedProductData {
  name: string;
  categoryLabel: string;
  description: string;
  shortSpecs: string[];
  specs: {
    toeCap: string;
    leather: string;
    sole: string;
    lining: string;
    construction: string;
    certifications: string[];
    weights: string;
  };
}

const productTranslationsMap: Record<string, Record<'en' | 'zh', LocalizedProductData>> = {
  'magno-diel-701': {
    en: {
      name: 'Magno Dielectric Pro 701 Boot',
      categoryLabel: 'Dielectric / Non-Metallic',
      description: 'High-performance dielectric safety boot with metal-free polyamide toe cap. Engineered for power plants, electrical maintenance, and environments with metal detectors.',
      shortSpecs: [
        'Polyamide Toe Cap (100% Metal-Free)',
        'Dielectric insulation up to 14,000 Volts',
        'Water-repellent Full Grain Bovine Leather',
        'Anti-slip Dual Polyurethane Sole'
      ],
      specs: {
        toeCap: 'High impact resistance Polyamide toe cap (200 Joules) without electrical conductivity.',
        leather: 'Full Grain Bovine Leather 2.2 mm thick, tear and water resistant.',
        sole: 'Dual Density Polyurethane sole injected directly to upper, anti-slip on oil and water.',
        lining: 'Breathable Dri-Lex textile with anti-bacterial treatment and moisture absorption.',
        construction: 'Direct injection to upper for maximum flexibility and airtight seal.',
        certifications: ['NOM-113-STPS-2009 Type III (Dielectric)', 'NOM-113-STPS-2009 Type II (Puncture Protection)'],
        weights: '620 g per boot (Size 27 MX / 9 US)'
      }
    },
    zh: {
      name: 'Magno 701 专业电绝缘安全靴',
      categoryLabel: '电绝缘 / 非金属',
      description: '高性能绝缘安全靴，配备无金属复合聚酰胺防砸包头。专为发电厂、电气检修及过安检门场所设计。',
      shortSpecs: [
        '聚酰胺安全包头（100%不含金属）',
        '绝缘防护耐压达 14,000 伏特',
        '防泼水头层牛皮材质',
        '双密度聚氨酯防滑鞋底'
      ],
      specs: {
        toeCap: '高抗冲击聚酰胺包头（200焦耳），无导电性。',
        leather: '2.2毫米厚头层牛皮，耐磨撕裂且具防泼水性能。',
        sole: '双密度聚氨酯直接注塑鞋底，耐油防滑。',
        lining: 'Dri-Lex 抗菌吸湿透气内里。',
        construction: '连底注塑一体成型，气密性好且易弯曲。',
        certifications: ['NOM-113-STPS-2009 III型 (电绝缘)', 'NOM-113-STPS-2009 II型 (防砸)'],
        weights: '620 克/单只（鞋码 27 MX）'
      }
    }
  },
  'magno-acero-802': {
    en: {
      name: 'Magno Steel Toe Heavy Duty 802 Boot',
      categoryLabel: 'Steel Toe Cap',
      description: 'The flagship boot for civil construction, mining, and heavy industry. Superior impact protection with tempered steel toe cap and anti-wear acrylonitrile rubber sole.',
      shortSpecs: [
        'Heat-Treated Tempered Steel Toe Cap',
        'Full Grain Honey / Brown Oiled Leather',
        'Anti-slip Acrylonitrile Rubber Sole',
        'Ergonomic Heel & Ankle Support'
      ],
      specs: {
        toeCap: 'Steel toe cap with protective rubber edge, resistant to 200J impact and 15kN compression.',
        leather: 'High durability 2.0 mm oiled bovine leather.',
        sole: 'High-resistance acrylonitrile rubber sole resistant to hydrocarbons, oils, and solvents.',
        lining: 'Thermally regulated 3D mesh.',
        construction: 'Reinforced Lockstitch sewing and high durability vulcanization.',
        certifications: ['NOM-113-STPS-2009 Type II (Occupational Protection Footwear with Toe Cap)'],
        weights: '710 g per boot (Size 27 MX / 9 US)'
      }
    },
    zh: {
      name: 'Magno 802 重工钢包头安全靴',
      categoryLabel: '防砸钢包头',
      description: '建筑施工、采矿及重工业旗舰安全靴。配备淬火防砸钢头和耐磨丁腈橡胶鞋底，保护力优异。',
      shortSpecs: [
        '热处理淬火钢包头',
        '蜜糖色/棕色头层油浸牛皮',
        '耐油防滑丁腈橡胶鞋底',
        '脚踝与脚跟人体工学支撑'
      ],
      specs: {
        toeCap: '带缓冲橡胶边防砸钢头，耐 200J 冲击及 15kN 挤压。',
        leather: '2.0毫米厚高耐磨油浸牛皮。',
        sole: '高抗碳氢化合物及溶剂的丁腈橡胶底。',
        lining: '3D 立体控温透气网布。',
        construction: '强化 Lockstitch 缝线与高耐用硫化工艺。',
        certifications: ['NOM-113-STPS-2009 II型 (带钢头职业防护鞋)'],
        weights: '710 克/单只（鞋码 27 MX）'
      }
    }
  },
  'magno-rudo-905': {
    en: {
      name: 'Magno Titan Heavy Duty Work 905 Boot',
      categoryLabel: 'Heavy Duty / Oil Industry',
      description: 'Engineered for extreme conditions: oil fields, civil engineering, and heavy workshops. Chemical resistance to solvents, grease, and continuous abrasion.',
      shortSpecs: [
        '2.4 mm Thick Bovine / Nubuck Leather',
        'Choice of Steel or Polyamide Toe Cap',
        'Dual Density PU/Rubber Hybrid Sole',
        'PU Shock Absorber Ergonomic Insole'
      ],
      specs: {
        toeCap: 'Choice of toe cap (Steel or Dielectric Polyamide) with comfort margin tab.',
        leather: 'Genuine bovine leather 2.2 - 2.4 mm gauge with industrial fluid repellent treatment.',
        sole: 'Mixed PU/Rubber sole with self-cleaning multidirectional channels for mud and gravel.',
        lining: 'Antibacterial lining with micro-perforations for continuous ventilation.',
        construction: 'Direct injection dual density.',
        certifications: ['NOM-113-STPS-2009 Type II & III'],
        weights: '740 g per boot (Size 27 MX / 9 US)'
      }
    },
    zh: {
      name: 'Magno Titan 905 油田重工特种靴',
      categoryLabel: '重工加固 / 石油化工',
      description: '专为极极端环境设计：油田、土木工程及重型车间。耐油脂、溶剂及持续磨损。',
      shortSpecs: [
        '2.4毫米厚牛皮 / 磨砂革',
        '可选钢包头或绝缘包头',
        '双密度聚氨酯/橡胶复合底',
        'PU 减震人体工学鞋垫'
      ],
      specs: {
        toeCap: '可选钢头或绝缘复合头，防压舒适。',
        leather: '2.2 - 2.4 毫米厚抗液体头层牛皮。',
        sole: '自洁防泥沙 PU/橡胶复合大底。',
        lining: '抗菌透气微孔衬里。',
        construction: '双密度直接注塑成型。',
        certifications: ['NOM-113-STPS-2009 II型与III型'],
        weights: '740 克/单只（鞋码 27 MX）'
      }
    }
  },
  'magno-ergo-604': {
    en: {
      name: 'Magno Ergonomic Confort Light 604 Boot',
      categoryLabel: 'Ergonomic / Long Shifts',
      description: 'Maximum comfort for workers standing for over 12 consecutive hours. Lumbar fatigue reduction and high-density foam padded ankle collar.',
      shortSpecs: [
        'Ultra-lightweight Polyamide Toe Cap',
        'Memory Foam Anatomical Insole',
        '30% lighter than traditional boots',
        'Padded collar and tongue'
      ],
      specs: {
        toeCap: 'Ultra-lightweight composite toe cap (meets 200J impact test).',
        leather: 'Premium soft full grain bovine leather.',
        sole: 'Expansive polyurethane sole with shock absorbing heel capsule.',
        lining: 'Antimicrobial padded textile.',
        construction: 'Lightweight PU injection.',
        certifications: ['NOM-113-STPS-2009 Type II & Ergonomic'],
        weights: '530 g per boot (Size 27 MX / 9 US)'
      }
    },
    zh: {
      name: 'Magno 604 人体工学超轻舒适安全靴',
      categoryLabel: '人体工学 / 长时间站立',
      description: '为连续站立工作 12 小时以上的工人提供极致舒适度。减轻腰部疲劳，加厚高密度发泡护踝。',
      shortSpecs: [
        '超轻复合绝缘防砸包头',
        '记忆棉人体工学鞋垫',
        '比传统安全靴轻 30%',
        '衬垫加厚鞋领与鞋舌'
      ],
      specs: {
        toeCap: '超轻复合材质防砸包头（达 200J 冲击测试）。',
        leather: '高品质软质头层牛皮。',
        sole: '后跟减震气垫聚氨酯发泡鞋底。',
        lining: '抗菌缓冲织物衬里。',
        construction: '轻量化 PU 注塑。',
        certifications: ['NOM-113-STPS-2009 II型及人体工学认证'],
        weights: '530 克/单只（鞋码 27 MX）'
      }
    }
  },
  'magno-negra-502': {
    en: {
      name: 'Magno Executive Inspection Black 502 Boot',
      categoryLabel: 'Supervision / Dielectric',
      description: 'Perfect balance between formal business look and industrial protection for supervisors, site engineers, and safety auditors.',
      shortSpecs: [
        'Elegant Smooth Black Bovine Leather',
        'Dielectric Polyamide Toe Cap',
        'Anti-slip PU Sole',
        'Suitable for office and job site'
      ],
      specs: {
        toeCap: 'Non-metallic polyamide toe cap.',
        leather: '2.0 mm polishable smooth bovine leather.',
        sole: 'Lightweight anti-slip PU sole.',
        lining: 'Comfortable breathable textile.',
        construction: 'Direct injection to upper.',
        certifications: ['NOM-113-STPS-2009 Type III'],
        weights: '590 g per boot (Size 27 MX / 9 US)'
      }
    },
    zh: {
      name: 'Magno 502 行政巡视黑色安全靴',
      categoryLabel: '巡视督导 / 绝缘',
      description: '商务外观与工业安全的完美结合，专为现场主管、工程监理和安全稽核员打造。',
      shortSpecs: [
        '高雅黑色平纹头层牛皮',
        '绝缘非金属复合包头',
        '防滑轻量 PU 鞋底',
        '适用于车间办公室与工地'
      ],
      specs: {
        toeCap: '非金属聚酰胺绝缘包头。',
        leather: '2.0毫米厚可抛光光面牛皮。',
        sole: '轻质防滑 PU 鞋底。',
        lining: '舒适透气织物。',
        construction: '连底直接注塑。',
        certifications: ['NOM-113-STPS-2009 III型'],
        weights: '590 克/单只（鞋码 27 MX）'
      }
    }
  },
  'magno-petro-990': {
    en: {
      name: 'Magno High-Leg Oil / Chemical 990 Boot',
      categoryLabel: 'Heavy Duty / High Shaft',
      description: '10-inch high protector shaft boot for maximum shin and ankle protection against chemical splashes, welding sparks, and rough terrain.',
      shortSpecs: [
        '10" High Shaft for Total Protection',
        'Waterproof Bovine Leather 2.4mm',
        'Steel or Polyamide Toe Cap',
        'Nitrile Rubber Anti-runoff Sole'
      ],
      specs: {
        toeCap: 'Thermally insulated toe cap with anti-friction lining.',
        leather: 'Heavy gauge full grain bovine leather.',
        sole: 'Vulcanized acrylonitrile rubber sole with deep traction treads.',
        lining: 'Washable thermal lining.',
        construction: 'Goodyear Welt double safety stitch.',
        certifications: ['NOM-113-STPS-2009 Type II / III / VII'],
        weights: '820 g per boot (Size 27 MX / 9 US)'
      }
    },
    zh: {
      name: 'Magno 990 高筒石油化工安全靴',
      categoryLabel: '重工加固 / 高筒防护',
      description: '10 英寸高筒靴靴身，为小腿及脚踝提供全方位防护，防御化学溅射、焊接飞溅及恶劣地形。',
      shortSpecs: [
        '10英寸高筒全面防护',
        '2.4毫米防水头层牛皮',
        '防砸钢头或绝缘包头可选',
        '丁腈橡胶高牵引防滑大底'
      ],
      specs: {
        toeCap: '隔热防摩擦保护包头。',
        leather: '加厚特级头层牛皮。',
        sole: '深纹路防滑硫化丁腈橡胶底。',
        lining: '可清洗保温衬里。',
        construction: 'Goodyear Welt 双缝线工艺。',
        certifications: ['NOM-113-STPS-2009 II型 / III型 / VII型'],
        weights: '820 克/单只（鞋码 27 MX）'
      }
    }
  }
};

export const getLocalizedProduct = (product: Product, lang: Language): Product => {
  if (lang === 'es') return product;

  const loc = productTranslationsMap[product.id]?.[lang];
  if (!loc) return product;

  return {
    ...product,
    name: loc.name,
    categoryLabel: loc.categoryLabel,
    description: loc.description,
    shortSpecs: loc.shortSpecs,
    specs: loc.specs,
  };
};
