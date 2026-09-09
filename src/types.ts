export interface Product {
  id: string;
  name: string;
  category: 'dielectric' | 'steel-toe' | 'heavy-duty' | 'ergonomic';
  categoryLabel: string;
  modelCode: string;
  price: number;
  featured?: boolean;
  image: string;
  description: string;
  shortSpecs: string[];
  specs: {
    toeCap: string; // e.g., 'Casquillo de Poliamida (Dieléctrico)' or 'Casquillo de Acero NOM-113'
    leather: string; // e.g., 'Piel Vacuno Flor Entera 2.0-2.2 mm'
    sole: string; // e.g., 'Suela Poliuretano Dual Density Antiderrapante'
    lining: string; // e.g., 'Forro Textil Transpirable Anti-hongos'
    construction: string; // e.g., 'Inyección Directa al Corte' or 'Goodyear Welt'
    certifications: string[]; // e.g., ['NOM-113-STPS-2009 Tipo II', 'Dieléctrico 14,000V']
    weights: string; // e.g., '680g por bota'
  };
  sizes: string[]; // ['24', '25', '26', '27', '28', '29', '30', '31']
  mercadoLibreUrl?: string;
  flamundialUrl?: string;
  guicomUrl?: string;
  rating: number;
  reviewCount: number;
}

export interface MaterialSpec {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  technicalData: string;
  badge: string;
}

export interface CertificationItem {
  code: string;
  title: string;
  description: string;
  testDetails: string;
  icon: string;
}

export interface Distributor {
  name: string;
  type: 'Marketplace' | 'Distribuidor Oficial' | 'Red Social';
  url: string;
  description: string;
  badge: string;
  logoText: string;
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  quantity: number;
  productModel: string;
  cityState: string;
  comments: string;
  type: 'mayoreo' | 'distribucion' | 'individual';
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  verifiedPurchase: boolean;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Garantía' | 'Envíos y Mayoreo' | 'Especificaciones' | 'Certificaciones';
}
