export type ProductCategory = 'todos' | 'guantes' | 'proteccion' | 'cascos-petos' | 'sacos' | 'accesorios';

export type Currency = 'CLP' | 'EUR' | 'USD';

export interface Product {
  id: string;
  name: string;
  category: 'guantes' | 'proteccion' | 'cascos-petos' | 'sacos' | 'accesorios';
  price: number; // base price in EUR or normalized
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  tag?: string;
  image: string;
  colorName: string;
  colorHex: string;
  sizes: string[];
  description: string;
  features: string[];
  recommendedFor: string;
  specs: {
    material: string;
    cierre: string;
    densidad: string;
    horma: string;
  };
  inStock: boolean;
  installments?: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  productName: string;
  verified: boolean;
  handFit: 'Ajuste Perfecto' | 'Ligeramente Holgado' | 'Ajuste Firme';
  wristSupport: number; // 1-5
  helpfulCount: number;
  userVotedHelpful?: boolean;
}

export interface SizeRecommendation {
  ounces: string;
  categoryName: string;
  description: string;
  suitableFor: string[];
  handCircumferenceRange: string;
  weightRange: string;
}
