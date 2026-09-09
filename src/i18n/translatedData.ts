import { COMPANY_INFO } from '../data/brandData';

// ─── MATERIAL SPECS ────────────────────────────────────────────────────────────

const MATERIAL_SPECS_EN = [
  {
    id: 'piel-flor-entera',
    title: '100% Full Grain Leather',
    subtitle: 'Export Quality',
    description: 'We select bovine leather hides with a thickness of 2.0 to 2.4 mm treated with oils and water repellent. It offers superior resistance to abrasion, traction, and constant bending without cracking.',
    iconName: 'Shield',
    features: ['Water-repellent', 'Supports constant bending (>100,000 cycles)', 'Tear resistance >120N', 'Natural breathability'],
    technicalData: 'Thickness: 2.2 mm ± 0.2 mm. Industrial safety gauge according to NOM-113-STPS.',
    badge: '100% Leather Upper'
  },
  {
    id: 'casquillos-proteccion',
    title: 'Polyamide & Steel Toe Caps',
    subtitle: 'Anti-Impact and Compression Protection',
    description: 'Available in two technologies: Polyamide (non-metallic composite for dielectric and lightweight environments) and heat-treated Carbon Steel. Both absorb more than 200 Joules of direct impact.',
    iconName: 'Zap',
    features: ['200J impact absorption (20 kg drop from 1 meter)', 'Compression resistance 15 kN (1.5 tons)', 'Synthetic cushioned edge to prevent toe friction', 'Roomy ergonomic design'],
    technicalData: 'Impact tested per NOM-113-STPS-2009 Type II and III.',
    badge: '200 Joules Resistance'
  },
  {
    id: 'suelas-antiderrapantes',
    title: 'Polyurethane & Acrylonitrile Rubber Soles',
    subtitle: 'Anti-Slip Grip and Chemical Resistance',
    description: 'Our cut-injected or vulcanized soles feature self-cleaning channel treads. Resistant to friction wear and penetration by oils, solvents, and mineral greases.',
    iconName: 'Footprints',
    features: ['Direct cut injection (no sole detachment)', 'Anti-slip tread Friction Coefficient > 0.60', 'Oil and hydrocarbon resistant', 'Heel shock-absorber effect'],
    technicalData: 'Abrasion less than 150 mm³ per ISO 20344 test.',
    badge: 'Oil & Grease Resistant'
  },
  {
    id: 'plantilla-confort',
    title: 'Anatomic Insole & Textile Lining',
    subtitle: 'Fatigue Reduction and Thermal Insulation',
    description: 'Interior equipped with a high-density memory polyurethane molded textile insole and breathable antibacterial Dri-Lex lining that prevents odors and moisture during shifts.',
    iconName: 'Sparkles',
    features: ['Uniform plantar pressure distribution', 'Antimicrobial and antifungal treatment', 'Instant sweat absorption and evaporation', 'Washable and replaceable'],
    technicalData: 'Density of 0.35 g/cm³ for maximum comfort.',
    badge: 'Total Ergonomics'
  }
];

const MATERIAL_SPECS_ZH = [
  {
    id: 'piel-flor-entera',
    title: '100% 全粒面牛皮',
    subtitle: '出口品质',
    description: '我们精选厚度为2.0至2.4毫米的牛皮，经过油脂和防水处理，提供卓越的耐磨、耐拉伸和持续弯曲性能，不开裂。',
    iconName: 'Shield',
    features: ['防水排液', '支持持续弯曲（>100,000次循环）', '抗撕裂力 >120N', '天然透气性'],
    technicalData: '厚度：2.2 mm ± 0.2 mm，符合NOM-113-STPS工业安全规格。',
    badge: '100% 皮革鞋面'
  },
  {
    id: 'casquillos-proteccion',
    title: '聚酰胺及钢制安全包头',
    subtitle: '防冲击与防压缩保护',
    description: '提供两种技术：聚酰胺复合材料（非金属，适用于绝缘轻量环境）和热处理碳钢，均可吸收超过200焦耳的直接冲击。',
    iconName: 'Zap',
    features: ['200焦耳冲击吸收（20公斤从1米高度坠落）', '15 kN（1.5吨）压缩阻力', '合成缓冲边缘防止脚趾摩擦', '宽松人体工学设计'],
    technicalData: '通过NOM-113-STPS-2009 II型和III型冲击测试。',
    badge: '200焦耳防护'
  },
  {
    id: 'suelas-antiderrapantes',
    title: '聚氨酯及丁腈橡胶鞋底',
    subtitle: '防滑抓地力与耐化学品性',
    description: '我们的直切注塑或硫化鞋底配有自清洁沟槽花纹，耐摩擦磨损及石油、溶剂和矿物油脂渗透。',
    iconName: 'Footprints',
    features: ['直切注塑（鞋底不脱胶）', '防滑花纹摩擦系数 > 0.60', '耐油耐烃类', '鞋跟减震效果'],
    technicalData: '依据ISO 20344测试，磨耗量低于150 mm³。',
    badge: '耐油防滑'
  },
  {
    id: 'plantilla-confort',
    title: '解剖型鞋垫及纺织内衬',
    subtitle: '疲劳缓解与隔热',
    description: '内部配备高密度记忆聚氨酯成型纺织鞋垫及Dri-Lex抗菌透气内衬，在整个班次期间防止异味和潮湿。',
    iconName: 'Sparkles',
    features: ['均匀足底压力分配', '抗菌抗真菌处理', '即时吸汗蒸发', '可清洗可更换'],
    technicalData: '密度0.35 g/cm³，提供最大舒适度。',
    badge: '全面人体工学'
  }
];

// ─── CERTIFICATIONS ────────────────────────────────────────────────────────────

const CERTIFICATIONS_EN = [
  {
    code: 'NOM-113-STPS-2009',
    title: 'Mexican Official Standard for Protective Footwear',
    description: 'Establishes the specifications and test methods for protective footwear marketed and used in Mexican workplaces.',
    testDetails: 'Approved in laboratories accredited by the Mexican Accreditation Entity (EMA).',
    icon: 'Award'
  },
  {
    code: 'TYPE II (PP)',
    title: 'Occupational Protective Footwear with Toe Cap',
    description: 'Guarantees protection against impact and compression hazards in the toe area.',
    testDetails: '200J impact test and 15,000 N compression test without dangerous deformation.',
    icon: 'ShieldCheck'
  },
  {
    code: 'TYPE III (D)',
    title: 'Dielectric Footwear (Electrical Insulation)',
    description: 'Designed to protect the user against electric shock risks from contact with energized circuits.',
    testDetails: 'Tested resistance to 14,000 Volts at 60 Hz for 1 minute with leakage current < 1.0 mA.',
    icon: 'Zap'
  }
];

const CERTIFICATIONS_ZH = [
  {
    code: 'NOM-113-STPS-2009',
    title: '墨西哥官方防护鞋靴标准',
    description: '规定了在墨西哥工作场所销售和使用的防护鞋靴的技术规范和测试方法。',
    testDetails: '通过墨西哥认证机构（EMA）认可的实验室认证。',
    icon: 'Award'
  },
  {
    code: 'II型 (PP)',
    title: '带安全包头职业防护鞋',
    description: '保证脚趾区域免受冲击和压缩危险的防护。',
    testDetails: '200焦耳冲击测试和15,000 N压缩测试，无危险变形。',
    icon: 'ShieldCheck'
  },
  {
    code: 'III型 (D)',
    title: '绝缘鞋（电气绝缘）',
    description: '旨在保护用户免受与带电线路接触造成的触电风险。',
    testDetails: '在60 Hz、14,000伏特下测试1分钟，泄漏电流 < 1.0 mA。',
    icon: 'Zap'
  }
];

// ─── DISTRIBUTORS ──────────────────────────────────────────────────────────────

const DISTRIBUTORS_EN = [
  {
    name: 'Official Mercado Libre',
    type: 'Marketplace',
    url: COMPANY_INFO.socials.mercadoLibre,
    description: 'Official store with Full shipping throughout Mexico in 24/48 hrs, interest-free installments, and purchase protection.',
    badge: 'Free & Full Shipping',
    logoText: 'Mercado Libre'
  },
  {
    name: 'Flamundial',
    type: 'Official Distributor',
    url: COMPANY_INFO.socials.flamundial,
    description: 'Wholesale distributor specializing in personal protective equipment and Magno Boots industrial footwear.',
    badge: 'Business Supply',
    logoText: 'Flamundial'
  },
  {
    name: 'Guicom',
    type: 'Official Distributor',
    url: COMPANY_INFO.socials.guicom,
    description: 'Industrial supplies and safety solutions for mining, manufacturing, and construction.',
    badge: 'Special B2B Prices',
    logoText: 'Guicom'
  },
  {
    name: 'Magno Boots Official Facebook',
    type: 'Social Network',
    url: COMPANY_INFO.socials.facebook,
    description: 'News, new model launches, and direct attention to wholesale orders via Messenger.',
    badge: '+15k Followers',
    logoText: 'Facebook'
  },
  {
    name: 'Instagram @magno_boots',
    type: 'Social Network',
    url: COMPANY_INFO.socials.instagram,
    description: 'Photo gallery of our boots in action at industrial plants, job sites, and workshops.',
    badge: 'Live Photos',
    logoText: 'Instagram'
  }
];

const DISTRIBUTORS_ZH = [
  {
    name: '官方Mercado Libre',
    type: '电商平台',
    url: COMPANY_INFO.socials.mercadoLibre,
    description: '官方店铺，提供全墨西哥24/48小时全程物流，分期免息，购买保障。',
    badge: '免费全程配送',
    logoText: 'Mercado Libre'
  },
  {
    name: 'Flamundial',
    type: '官方经销商',
    url: COMPANY_INFO.socials.flamundial,
    description: '专业个人防护装备和Magno Boots工业鞋靴批发经销商。',
    badge: '企业批量供应',
    logoText: 'Flamundial'
  },
  {
    name: 'Guicom',
    type: '官方经销商',
    url: COMPANY_INFO.socials.guicom,
    description: '矿业、制造业和建筑业工业用品及安全解决方案。',
    badge: '特别B2B价格',
    logoText: 'Guicom'
  },
  {
    name: 'Magno Boots官方Facebook',
    type: '社交媒体',
    url: COMPANY_INFO.socials.facebook,
    description: '新品资讯、新款发布，以及通过Messenger直接处理批发订单。',
    badge: '+15k 粉丝',
    logoText: 'Facebook'
  },
  {
    name: 'Instagram @magno_boots',
    type: '社交媒体',
    url: COMPANY_INFO.socials.instagram,
    description: '我们的靴子在工业厂房、工地和车间实拍图集。',
    badge: '现场实拍',
    logoText: 'Instagram'
  }
];

// ─── TESTIMONIALS ──────────────────────────────────────────────────────────────

const TESTIMONIALS_EN = [
  {
    id: '1',
    author: 'Eng. Roberto Mendoza',
    role: 'Industrial Health & Safety Manager',
    company: 'Constructora e Infraestructura del Bajío',
    comment: 'We purchased a batch of 120 pairs of the Magno 802 boot with steel toe cap for our civil works crew. The durability is unmatched and the staff highlights that they are incredibly comfortable from day one.',
    rating: 5,
    verifiedPurchase: true,
    date: '2 months ago'
  },
  {
    id: '2',
    author: 'Lic. Claudia Santos',
    role: 'Purchasing & Supply Manager',
    company: 'Automotive Assembly Plant',
    comment: 'We required dielectric NOM-113 certified boots for our energized line area. Magno Boots delivered the full technical data sheet and laboratory certificates. Excellent factory service.',
    rating: 5,
    verifiedPurchase: true,
    date: '1 month ago'
  },
  {
    id: '3',
    author: 'Carlos Alberto V.',
    role: 'Verified Buyer',
    company: 'Mercado Libre México',
    comment: 'They arrived super fast with Full shipping. The leather is thick and of great quality, and the sole does not slip at all in the workshop where there is oil. Totally worth buying footwear made directly in León.',
    rating: 5,
    verifiedPurchase: true,
    date: '3 weeks ago'
  }
];

const TESTIMONIALS_ZH = [
  {
    id: '1',
    author: '工程师 Roberto Mendoza',
    role: '工业安全卫生经理',
    company: 'Constructora e Infraestructura del Bajío',
    comment: '我们为土木工程队购买了120双Magno 802钢包头安全靴。耐用性无与伦比，员工反映从第一天起就非常舒适。',
    rating: 5,
    verifiedPurchase: true,
    date: '2个月前'
  },
  {
    id: '2',
    author: 'Claudia Santos 女士',
    role: '采购与供应主管',
    company: '汽车装配厂',
    comment: '我们需要为带电线路区域提供符合NOM-113标准的绝缘靴。Magno Boots提供了完整的技术数据表和实验室证书，工厂服务非常出色。',
    rating: 5,
    verifiedPurchase: true,
    date: '1个月前'
  },
  {
    id: '3',
    author: 'Carlos Alberto V.',
    role: '认证买家',
    company: 'Mercado Libre México',
    comment: '全程物流非常快到货。皮质厚实、品质优良，鞋底在有油的车间完全不打滑。购买莱昂直接出厂的鞋靴完全值得。',
    rating: 5,
    verifiedPurchase: true,
    date: '3周前'
  }
];

// ─── FAQS ─────────────────────────────────────────────────────────────────────

const FAQS_EN = [
  {
    question: 'Do Magno Boots comply with the Mexican official standard NOM-113-STPS?',
    answer: 'Yes. All our protective models (both with steel toe caps and dielectric polyamide) are manufactured under strict parameters and certifications of the NOM-113-STPS-2009 standard in Types II (Toe Protection) and III (Dielectric). We provide technical data sheets and lab reports for company safety audits.',
    category: 'Certifications'
  },
  {
    question: 'Do you sell wholesale to companies, plants, or distributors?',
    answer: 'Of course! We are a direct factory in León, Guanajuato. We offer tiered wholesale pricing starting at 12 pairs, fiscal invoicing (CFDI), formal quotes, and the possibility of customizing labels or engravings for corporations.',
    category: 'Shipping & Wholesale'
  },
  {
    question: 'Where can I buy a single pair or individual orders?',
    answer: 'You can buy individually with immediate shipping throughout Mexico through our official Mercado Libre store with Full benefit, or through our authorized distributors such as Flamundial and Guicom.',
    category: 'Shipping & Wholesale'
  },
  {
    question: 'What is the Magno Boots factory warranty?',
    answer: 'We offer a 6-month direct factory warranty against any manufacturing defect, sole detachment, or seam rupture under normal industrial use conditions.',
    category: 'Warranty'
  },
  {
    question: 'How do I choose between a steel toe cap and a polyamide toe cap?',
    answer: 'The steel toe cap is ideal for construction and heavy work where there are no metal detectors or electrical hazards. The polyamide (composite) toe cap is dielectric (does not conduct electricity), does not freeze or heat up in extreme temperatures, does not trigger metal detectors, and is lighter.',
    category: 'Specifications'
  },
  {
    question: 'How do the size lasts fit?',
    answer: 'Our boots are designed with a wide Mexican industrial last (E+), allowing the use of thick socks or orthopedic insoles in total comfort. We recommend ordering your usual size in centimeters (example: Size 27 for a 27 cm foot).',
    category: 'Specifications'
  }
];

const FAQS_ZH = [
  {
    question: 'Magno Boots靴子是否符合墨西哥官方标准NOM-113-STPS？',
    answer: '是的。我们所有防护型号（钢包头和绝缘聚酰胺包头）均按照NOM-113-STPS-2009标准的严格参数和认证制造，涵盖II型（包头保护）和III型（绝缘型）。我们为企业安全审核提供技术数据表和实验室报告。',
    category: '认证'
  },
  {
    question: '是否向企业、工厂或经销商批量销售？',
    answer: '当然！我们是瓜纳华托州莱昂的直属工厂。我们提供从12双起的梯度批发价格、财务发票（CFDI）、正式报价，以及为企业定制标签或印记的可能性。',
    category: '物流与批发'
  },
  {
    question: '我在哪里可以购买单双或个人订单？',
    answer: '您可以通过我们在Mercado Libre的官方店铺享受全程物流配送在全墨西哥即时发货，或通过我们的授权经销商Flamundial和Guicom购买。',
    category: '物流与批发'
  },
  {
    question: 'Magno Boots的工厂保修是什么？',
    answer: '我们提供6个月的直属工厂保修，涵盖在正常工业使用条件下出现的任何制造缺陷、鞋底脱胶或缝线断裂。',
    category: '保修'
  },
  {
    question: '如何选择钢包头和聚酰胺包头？',
    answer: '钢包头适合没有金属探测器或电气危险的建筑和重型工作。聚酰胺（复合材料）包头具有绝缘性（不导电），在极端温度下不会冻结或过热，不会触发金属探测器，且更轻便。',
    category: '规格说明'
  },
  {
    question: '尺码楦型如何选择？',
    answer: '我们的靴子采用宽楦墨西哥工业楦型（E+），可完全舒适地使用厚袜子或矫形鞋垫。建议按照您惯用的厘米尺码下单（例如：脚长27厘米对应27码）。',
    category: '规格说明'
  }
];

// ─── EXPORT ────────────────────────────────────────────────────────────────────

import { MATERIAL_SPECS as esMS, CERTIFICATIONS as esC, DISTRIBUTORS as esD, TESTIMONIALS as esT, FAQS as esF } from '../data/brandData';

export const getTranslatedData = (lang: string) => {
  if (lang === 'en') {
    return {
      MATERIAL_SPECS: MATERIAL_SPECS_EN,
      CERTIFICATIONS: CERTIFICATIONS_EN,
      DISTRIBUTORS: DISTRIBUTORS_EN,
      TESTIMONIALS: TESTIMONIALS_EN,
      FAQS: FAQS_EN
    };
  }
  if (lang === 'zh') {
    return {
      MATERIAL_SPECS: MATERIAL_SPECS_ZH,
      CERTIFICATIONS: CERTIFICATIONS_ZH,
      DISTRIBUTORS: DISTRIBUTORS_ZH,
      TESTIMONIALS: TESTIMONIALS_ZH,
      FAQS: FAQS_ZH
    };
  }
  // Español por defecto
  return {
    MATERIAL_SPECS: esMS,
    CERTIFICATIONS: esC,
    DISTRIBUTORS: esD,
    TESTIMONIALS: esT,
    FAQS: esF
  };
};




