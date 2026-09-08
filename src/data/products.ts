export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  brand: string;
  description: string;
  specs?: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: "suspension",
    name: "Suspensión",
    icon: "Car",
    subcategories: ["Amortiguadores", "Punta trípode"],
  },
  {
    id: "motor",
    name: "Motor",
    icon: "Cog",
    subcategories: ["Inyectores"],
  },
];

export const products: Product[] = [
  {
    id: "amor-001",
    name: "Amortiguador trasero Ford Fairlane–Falcon–Mustang 1965–1975 / delantero Nissan Patrol 1961–1978",
    category: "suspension",
    subcategory: "Amortiguadores",
    price: 0,
    image: "/products/01-amortiguador-ford-fairlane-falcon-mustang-nissan-patrol.png",
    brand: "Genérico",
    description: "Amortiguador trasero Ford Fairlane–Falcon–Mustang 1965–1975 / delantero Nissan Patrol 1961–1978.",
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "amor-002",
    name: "Amortiguador trasero Spark 2006–2009",
    category: "suspension",
    subcategory: "Amortiguadores",
    price: 0,
    image: "/products/02-amortiguador-trasero-spark-2006-2009.png",
    brand: "Genérico",
    description: "Amortiguador trasero Spark 2006–2009.",
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "trip-001",
    name: "Punta trípode Kia Rio Stylus 1.5, Picanto, Festiva 01–06 / 99–02 y Mazda 323 colombiano (22 INT × 24 EXT × 52), R/INT",
    category: "suspension",
    subcategory: "Punta trípode",
    price: 0,
    image: "/products/03-punta-tripoide-kia-rio-picanto-festiva-mazda-323.png",
    brand: "Genérico",
    description: "Punta trípode Kia Rio Stylus 1.5, Picanto, Festiva 01–06 / 99–02 y Mazda 323 colombiano (22 INT × 24 EXT × 52), R/INT.",
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "iny-001",
    name: "Inyector Dodge Forza / Fiat Palio–Siena 1.4, aro rojo, 4 huecos",
    category: "motor",
    subcategory: "Inyectores",
    price: 0,
    image: "/products/04-inyector-dodge-forza-fiat-palio-siena-1-4.png",
    brand: "Genérico",
    description: "Inyector Dodge Forza / Fiat Palio–Siena 1.4, aro rojo, 4 huecos.",
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "amor-003",
    name: "Amortiguador delantero Century–Celebrity 1981–1992 (cartucho)",
    category: "suspension",
    subcategory: "Amortiguadores",
    price: 0,
    image: "/products/05-amortiguador-delantero-century-celebrity-1981-1992.png",
    brand: "Genérico",
    description: "Amortiguador delantero Century–Celebrity 1981–1992 (cartucho).",
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "iny-002",
    name: "Inyector Ford Fiesta Power 1.6 03/09, Ka–EcoSport 1.6, aro naranja, 4 huecos",
    category: "motor",
    subcategory: "Inyectores",
    price: 0,
    image: "/products/06-inyector-ford-fiesta-power-ka-ecosport-1-6.png",
    brand: "Genérico",
    description: "Inyector Ford Fiesta Power 1.6 03/09, Ka–EcoSport 1.6, aro naranja, 4 huecos.",
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "amor-004",
    name: "Amortiguador trasero Ford Ka 2004–2007, Fiesta 1.25–1.3–1.6 y Balita 1996–2002 (horquilla)",
    category: "suspension",
    subcategory: "Amortiguadores",
    price: 0,
    image: "/products/07-amortiguador-trasero-ford-ka-fiesta-balita.png",
    brand: "Genérico",
    description: "Amortiguador trasero Ford Ka 2004–2007, Fiesta 1.25–1.3–1.6 y Balita 1996–2002 (horquilla).",
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "amor-005",
    name: "Amortiguador trasero Fiesta Power–Max–Move–Amazon 2003–2013",
    category: "suspension",
    subcategory: "Amortiguadores",
    price: 0,
    image: "/products/08-amortiguador-trasero-fiesta-power-max-move-amazon.png",
    brand: "Genérico",
    description: "Amortiguador trasero Fiesta Power–Max–Move–Amazon 2003–2013.",
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "iny-003",
    name: "Inyector Fiat Palio–Siena 1.8, aro amarillo, 4 huecos",
    category: "motor",
    subcategory: "Inyectores",
    price: 0,
    image: "/products/09-inyector-fiat-palio-siena-1-8.png",
    brand: "Genérico",
    description: "Inyector Fiat Palio–Siena 1.8, aro amarillo, 4 huecos.",
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "iny-004",
    name: "Inyector gasolina Corsa 1.6, Cielo, Daewoo Racer y Nubira, 6 huecos, 3 ohmios",
    category: "motor",
    subcategory: "Inyectores",
    price: 0,
    image: "/products/10-inyector-corsa-cielo-daewoo-racer-nubira.png",
    brand: "Genérico",
    description: "Inyector gasolina Corsa 1.6, Cielo, Daewoo Racer y Nubira, 6 huecos, 3 ohmios.",
    inStock: true,
    rating: 0,
    reviews: 0,
  },
];

export const brands = [];
