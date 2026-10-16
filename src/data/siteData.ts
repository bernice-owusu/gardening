export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  details: string;
}

export interface WorkingStep {
  step: string;
  title: string;
  timeframe: string;
  description: string;
  deliverable: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  project: string;
  quote: string;
  avatar: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

import {
  logo,
  logoWhite,
  accraClient1,
  accraClient2,
  accraClient3,
  line,
  serviceShape1_1,
  serviceShape1_2,
  chooseShape1_1,
  chooseShape1_2,
  ser1,
  ser2,
  ser3,
  ser4,
  ser4_2,
  ser1_1,
  wor1,
  wor2,
  wor4,
} from "../assets/images";

export const SITE_INFO = {
  brandName: "Pots and Palms",
  tagline: "Landscape Architecture & Groundskeeping - Accra",
  logo,
  logoWhite,
  phonePrimary: "+233 24 500 5088",
  phoneSecondary: "+233 30 255 0129",
  phoneTel: "tel:+233245005088",
  email: "info@potsandpalms.com",
  hours: "Mon - Sat: 7:30 AM - 5:30 PM",
  addressMain: "14 Senchi Street, Airport Residential Area, Accra, Ghana",
  addressSecondary: "Plot 8B, Boundary Road, East Legon, Accra, Ghana",
  addressCentralOffice: "Suite 302, Cantonments City, Accra, Ghana",
  socialLinks: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
    instagram: "https://instagram.com",
  },
  decorativeLine: line,
  serviceShape1: serviceShape1_1,
  serviceShape2: serviceShape1_2,
  chooseShape1: chooseShape1_1,
  chooseShape2: chooseShape1_2,
};

export const SERVICES: ServiceItem[] = [
  {
    id: "design-planning",
    title: "Landscape Design & Planning",
    category: "Architecture & Blueprint",
    image: ser4,
    excerpt: "Customized 3D architectural blueprints, tropical plant palettes, and sun/shade hydrological grading for Accra estates.",
    details: "We conceptualize and detail complete residential landscape architecture in Accra, incorporating tropical topography grading, soil drainage, seasonal color palettes, and outdoor functional spaces."
  },
  {
    id: "lawn-care",
    title: "Lawn Care & Maintenance",
    category: "Turf Care",
    image: ser3,
    excerpt: "Precision edging, deep core aeration, organic weed control, and balanced tropical climate fertilization.",
    details: "Our recurring lawn maintenance packages keep your grass resilient against Accra's seasonal Harmattan dry spells and heavy rain season stress."
  },
  {
    id: "turfing-services",
    title: "Professional Turfing Services",
    category: "Sod & Turf",
    image: ser2,
    excerpt: "Drought-hardy Bermuda & Zoysia sod rollouts and ultra-resilient artificial turf with engineered sub-drainage.",
    details: "Whether installing natural heat-hardy sod or luxury all-weather synthetic grass for private residences, our installation process guarantees seamless seams and immediate green results."
  },
  {
    id: "garden-installation",
    title: "Garden Installation",
    category: "Botany & Soil",
    image: ser1,
    excerpt: "Exotic bougainvillea, traveler's palms, nutrient compost blends, and water-conserving micro-drip irrigation.",
    details: "We source top-tier nursery specimens, enrich local coastal savannah soil with nutrient-rich compost, and create thriving ecological micro-habitats that bloom year-round."
  },
  {
    id: "hardscape-patio",
    title: "Hardscape & Patio Design",
    category: "Masonry & Stone",
    image: ser4_2,
    excerpt: "Granite walkways, polished terrazzo terraces, structural retaining walls, pergolas, and outdoor fire pits.",
    details: "Our masonry artisans build durable outdoor entertainment living rooms featuring natural sandstone, granite curbing, permeable pavers, and custom outdoor kitchen islands."
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    id: "w1",
    title: "Accra-Based Master Horticulturists",
    desc: "Decades of certified expertise navigating Greater Accra's unique micro-climates, soil conditions, and resilient tropical flora."
  },
  {
    id: "w2",
    title: "Smart Eco-Irrigation Networks",
    desc: "Weather-synced micro-drip networks that conserve water while keeping your lawns lush throughout the Harmattan season."
  },
  {
    id: "w3",
    title: "5-Year Craftsmanship Warranty",
    desc: "Every retaining wall, stone terrace, paver foundation, and perennial planting in Accra is protected by comprehensive guarantees."
  },
  {
    id: "w4",
    title: "Transparent Fixed-Price Quotes",
    desc: "Detailed line-item quotes with clear local material sourcing, transparent labor schedules, and zero hidden surcharges."
  }
];

export const WORKING_STEPS: WorkingStep[] = [
  {
    step: "Phase 01",
    title: "Vision & Site Discovery",
    timeframe: "Days 1–3",
    description: "We meet at your property in Accra to examine soil pH, sun/shade gradients, drainage slope, and map out your family's outdoor lifestyle aspirations.",
    deliverable: "Comprehensive Topography & Soil Audit",
    image: wor1
  },
  {
    step: "Phase 02",
    title: "Architectural 3D Blueprint",
    timeframe: "Week 2",
    description: "Our landscape architects model photorealistic 3D visual renders, tropical plant palettes, stone paver mockups, and fixed-price line items.",
    deliverable: "3D Virtual Walkthrough & Fixed Bid",
    image: ser1_1
  },
  {
    step: "Phase 03",
    title: "Groundwork & Craftsmanship",
    timeframe: "Weeks 3–4",
    description: "Our dedicated Accra crew executes site grading, sub-base compaction, natural stonework, sod installation, and planting with daily cleanups.",
    deliverable: "Precision Stonework & Fresh Sod",
    image: wor2
  },
  {
    step: "Phase 04",
    title: "Walkthrough & Handover",
    timeframe: "Day 30+",
    description: "We conduct an evening lighting inspection, calibrate smart automated irrigation, and provide a customized seasonal yard care handbook.",
    deliverable: "5-Year Warranty & Seasonal Care Plan",
    image: wor4
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Nana Akua Mensah",
    role: "Villa Owner in Cantonments, Accra",
    project: "Full Private Garden Redesign & Stone Terrace",
    quote: "Pots and Palms completely transformed our home in Cantonments. The lush grass turf, tropical palm arrangements, and elegant stone walkways have turned our garden into our favorite retreat in Accra.",
    avatar: accraClient1,
    rating: 5,
    date: "Verified Homeowner • Cantonments, Accra"
  },
  {
    id: "t2",
    name: "Dr. Kwame Osei",
    role: "Architectural Client, East Legon",
    project: "Drought-Resilient Zoysia Turf & Pergola",
    quote: "As an architect here in Accra, I pay extreme attention to grading, seam lines, and drainage during rainy seasons. Pots and Palms' team was punctual, highly skilled, and their craftsmanship exceeded all standards.",
    avatar: accraClient2,
    rating: 5,
    date: "Verified Client • East Legon, Accra"
  },
  {
    id: "t3",
    name: "Kweku Addison",
    role: "Estate Property Director, Airport Residential Area",
    project: "Commercial Grounds & Automated Drip System",
    quote: "Their team manages our multi-residence estate grounds in Airport Residential. The smart automated drip network reduced our water expenditure substantially while keeping the lawns immaculate year-round.",
    avatar: accraClient3,
    rating: 5,
    date: "Estate Client • Airport Residential, Accra"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Do you operate across all areas of Greater Accra?",
    answer: "Yes, our team serves private residences and estates across Airport Residential Area, Cantonments, East Legon, Trasacco Valley, Dzorwulu, Labone, Ridge, Roman Ridge, and Tema."
  },
  {
    question: "How do your landscaping designs handle Accra's Harmattan and rainy seasons?",
    answer: "We engineer all outdoor spaces with resilient tropical species (such as Zoysia and Bermuda grasses, royal palms, and hardy perennials) paired with smart micro-drip irrigation that automatically adjusts for seasonal dry spells and torrential downpours."
  },
  {
    question: "Do you provide scheduled groundskeeping and lawn maintenance?",
    answer: "Yes! We provide scheduled weekly and bi-weekly residential groundskeeping packages across Accra, including mowing, organic fertilization, hedge trimming, weeding, and irrigation audits."
  },
  {
    question: "Can you design a landscape for small, narrow, or sloping properties?",
    answer: "Absolutely. We specialize in terraced retaining walls, vertical green privacy screens, modern interlocking pavers, and compact tropical gardens customized for compound houses and modern townhomes."
  },
  {
    question: "What warranties protect my stonework and botanical installations?",
    answer: "All structural hardscaping, retaining walls, and paving in Accra include our 5-year craftsmanship warranty. All freshly laid sod rolls and nursery-certified plants include our 1-year plant health replacement guarantee."
  }
];
