export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  priceINR: number;
  priceFormattedINR: string;
  priceUSD: number;
  priceFormattedUSD: string;
  billingType: 'One-time project' | 'Starting estimate';
  description: string;
  idealFor: string;
  deliveryTime: string;
  features: string[];
  notIncluded?: string[];
  popular?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'starter-website',
    name: 'Starter Website',
    badge: 'Fast Turnaround',
    priceINR: 18000,
    priceFormattedINR: '₹18,000',
    priceUSD: 240,
    priceFormattedUSD: '$240',
    billingType: 'Starting estimate',
    description: 'A polished, high-speed single-page or 3-page web presence designed to establish instant credibility for professionals and local businesses.',
    idealFor: 'Freelancers, consultants, local businesses, and personal brands needing a modern web presence fast.',
    deliveryTime: '5 – 7 business days',
    features: [
      'Up to 3 custom-designed pages (Home, About/Services, Contact)',
      '100% Mobile-first responsive layout (Looks flawless on phones & tablets)',
      'Sub-second page load times with Next.js static generation',
      'Contact inquiry form connected directly to your email',
      'Essential SEO setup (Title tags, meta descriptions, OpenGraph)',
      'Free 14-day post-launch bug fixing & warranty'
    ],
    notIncluded: [
      'Custom database backend or user logins',
      'Complex payment processing'
    ]
  },
  {
    id: 'business-website',
    name: 'Business Website',
    badge: 'Most Popular',
    priceINR: 38000,
    priceFormattedINR: '₹38,000',
    priceUSD: 490,
    priceFormattedUSD: '$490',
    billingType: 'Starting estimate',
    description: 'A comprehensive multi-page corporate website engineered to showcase your complete service catalog, build institutional trust, and generate inbound leads.',
    idealFor: 'Growing companies, service agencies, medical clinics, legal practices, and B2B firms.',
    deliveryTime: '2 – 3 weeks',
    features: [
      'Up to 7 custom pages (Services, Case Studies, About, Team, Contact)',
      'Custom UI/UX design matching your exact brand colors and typography',
      'High-performance Next.js App Router with smooth page transitions',
      'Interactive lead qualification form with email notification and spam defense',
      'Complete Technical SEO audit, sitemap.xml, robots.txt, and schema markup',
      'Interactive elements (Filterable case studies, FAQ accordions, pricing tables)',
      'Google Analytics / Tag Manager integration',
      '30-day post-launch support and content management walkthrough'
    ],
    popular: true
  },
  {
    id: 'web-application',
    name: 'Advanced Web Application / SaaS MVP',
    badge: 'Full-Stack Solution',
    priceINR: 75000,
    priceFormattedINR: '₹75,000',
    priceUSD: 950,
    priceFormattedUSD: '$950',
    billingType: 'Starting estimate',
    description: 'A complete custom software product featuring secure user authentication, database management, interactive dashboards, and business logic execution.',
    idealFor: 'Tech founders building MVPs, businesses automating internal operational tools, and portals requiring user accounts.',
    deliveryTime: '4 – 6 weeks',
    features: [
      'Complete Full-Stack Architecture (Next.js frontend + FastAPI or Serverless API)',
      'PostgreSQL database modeling with automated migrations and relational integrity',
      'User authentication (Email/Password, OAuth, Password Reset, RBAC permissions)',
      'Interactive operational dashboard with real-time KPI metrics and data tables',
      'RESTful API architecture with strict validation and OpenAPI documentation',
      'Docker containerized deployment setup (Vercel + Render / Supabase)',
      '45-day post-launch warranty with dedicated sprint refinement'
    ],
    popular: false
  },
  {
    id: 'custom-ecommerce',
    name: 'Custom E-commerce / Enterprise',
    badge: 'High Conversion',
    priceINR: 95000,
    priceFormattedINR: '₹95,000+',
    priceUSD: 1250,
    priceFormattedUSD: '$1,250+',
    billingType: 'Starting estimate',
    description: 'A bespoke online commerce powerhouse engineered for high conversion rates, multi-category inventory, and seamless payment collection.',
    idealFor: 'D2C consumer brands, specialty boutiques, digital product sellers, and multi-vendor catalogs.',
    deliveryTime: '5 – 8 weeks',
    features: [
      'Faceted multi-parameter product filtering, category tags, and search',
      'Interactive slide-out cart drawer with instant discount & tax tallying',
      'Stripe or Razorpay payment gateway integration with webhooks',
      'Order confirmation automation & automated customer receipts',
      'Admin catalog portal for adding products, photos, and inventory tracking',
      'Core Web Vitals 95+ score optimization ensuring maximum mobile sales',
      '60-day post-launch priority support & security monitoring'
    ]
  }
];

export interface ScopeCalculatorOption {
  id: string;
  label: string;
  baseINR: number;
  baseUSD: number;
  category: 'type' | 'pages' | 'features' | 'speed';
}

export const calculatorOptions = {
  types: [
    { id: 'landing', label: 'Landing Page / One-Pager', baseINR: 15000, baseUSD: 200 },
    { id: 'business', label: 'Corporate / Business Website', baseINR: 32000, baseUSD: 420 },
    { id: 'ecommerce', label: 'E-commerce Storefront', baseINR: 52000, baseUSD: 680 },
    { id: 'webapp', label: 'Custom Web App / SaaS MVP', baseINR: 70000, baseUSD: 900 },
    { id: 'ai-app', label: 'AI-Integrated Application', baseINR: 62000, baseUSD: 800 }
  ],
  addons: [
    { id: 'cms', label: 'Easy Content Management (CMS)', baseINR: 8000, baseUSD: 100 },
    { id: '3d', label: 'Interactive 3D / WebGL Element', baseINR: 12000, baseUSD: 160 },
    { id: 'auth', label: 'User Authentication & User Profiles', baseINR: 14000, baseUSD: 180 },
    { id: 'payments', label: 'Payment Gateway (Stripe/Razorpay)', baseINR: 10000, baseUSD: 130 },
    { id: 'ai', label: 'AI Assistant / LLM Integration', baseINR: 16000, baseUSD: 210 },
    { id: 'seo-pro', label: 'Advanced SEO & Schema Architecture', baseINR: 6000, baseUSD: 80 }
  ],
  delivery: [
    { id: 'standard', label: 'Standard Timeline (Recommended)', multiplier: 1.0 },
    { id: 'priority', label: 'Priority Rush Delivery (+25%)', multiplier: 1.25 }
  ]
};
