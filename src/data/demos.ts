export interface InteractiveDemo {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  badge: 'Interactive Concept Demo' | 'Working Prototype';
  previewDescription: string;
  techStack: string[];
  features: string[];
  interactiveControls: string[];
  colorAccent: string;
}

export const conceptDemos: InteractiveDemo[] = [
  {
    id: '3d-configurator',
    slug: '3d-configurator',
    title: '3D Spatial Product Configurator',
    category: '3D & Creative Web',
    tagline: 'Real-time WebGL product visualizer with material switching, orbital rotation, and lighting toggles.',
    badge: 'Interactive Concept Demo',
    previewDescription: 'A custom WebGL canvas rendering interactive 3D geometries with customizable material shaders, wireframe modes, dynamic lighting, and particle fields.',
    techStack: ['Three.js', 'WebGL', 'Tailwind CSS', 'TypeScript'],
    features: [
      '60 FPS orbital mouse camera rotation',
      'Instant material switching (Metallic Chrome, Cyberpunk Blue, Matte Carbon)',
      'Wireframe topology toggle with real-time tessellation',
      'Point-light position and intensity sliders'
    ],
    interactiveControls: ['Color Theme', 'Geometry Shape', 'Wireframe Toggle', 'Rotation Speed'],
    colorAccent: '#A3F527'
  },
  {
    id: 'ecommerce-cart',
    slug: 'ecommerce-cart',
    title: 'Hyper-Fast E-commerce Storefront & Cart',
    category: 'E-commerce & Retail',
    tagline: 'Reactive product catalog with instant category filtering, persistent drawer cart, and checkout flow.',
    badge: 'Interactive Concept Demo',
    previewDescription: 'High-conversion storefront prototype featuring category filter tabs, interactive item detail expansion, reactive slide-out cart drawer, and coupon code calculator.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Zustand'],
    features: [
      'Instant faceted category filtering (Sneakers, Watches, Audio, Accessories)',
      'Reactive cart drawer with quantity adjustments and coupon deduction',
      'Simulated Stripe/Razorpay modal checkout verification',
      'Dynamic currency format switcher (INR ₹ / USD $)'
    ],
    interactiveControls: ['Category Filter', 'Add to Cart', 'Apply Coupon (DEV20)', 'Simulate Checkout'],
    colorAccent: '#10B981'
  },
  {
    id: 'saas-analytics',
    slug: 'saas-analytics',
    title: 'SaaS Metric Intelligence Dashboard',
    category: 'SaaS & Enterprise',
    tagline: 'Data-dense analytics command center with interactive charts, range filters, and live telemetry.',
    badge: 'Interactive Concept Demo',
    previewDescription: 'Executive operational command center with real-time KPI delta indicators, interactive SVG revenue trend curves, customer retention heatmaps, and exportable data tables.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    features: [
      'Live metric KPI cards (MRR, Churn, Active Users, LTV)',
      'Timeframe range switcher (Last 7 Days, 30 Days, 90 Days, 1 Year)',
      'Interactive visual bar & trend chart with hover tooltips',
      'Transaction event stream log with filterable status badges'
    ],
    interactiveControls: ['Timeframe Selector', 'Metric Toggles', 'Export CSV', 'Refresh Live Data'],
    colorAccent: '#6366F1'
  },
  {
    id: 'healthcare-portal',
    slug: 'healthcare-portal',
    title: 'Clinical Triage & Appointment Booking',
    category: 'Healthcare & Wellness',
    tagline: 'Patient intake protocol with symptom triage questionnaire and doctor calendar booking.',
    badge: 'Interactive Concept Demo',
    previewDescription: 'Modern clinic patient intake system with interactive specialist selection, date and time-slot reservation, and preliminary symptom severity evaluation.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Specialist doctor directory with credentials and availability badges',
      'Interactive date calendar with AM/PM time slot selector',
      'Emergency symptom red-flag detection questionnaire',
      'Instant SMS/Email appointment confirmation summary'
    ],
    interactiveControls: ['Select Doctor', 'Pick Date & Slot', 'Symptom Severity', 'Confirm Booking'],
    colorAccent: '#06B6D4'
  },
  {
    id: 'real-estate-showcase',
    slug: 'real-estate-showcase',
    title: 'Luxury Property Showcase & Mortgage Engine',
    category: 'Real Estate & Living',
    tagline: 'Architectural property cards with interactive photo galleries and dynamic mortgage loan calculator.',
    badge: 'Interactive Concept Demo',
    previewDescription: 'Editorial real estate portal presenting luxury estates, filterable by price and bedrooms, equipped with a live mortgage payment estimator (down payment, interest, tenure).',
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Lucide Icons'],
    features: [
      'Filterable luxury listings (Villa, Penthouse, Modern Loft)',
      'Dynamic mortgage monthly installment calculator with down-payment slider',
      'Property spec badges (Square Feet, Bedrooms, Bathrooms, Pool)',
      'Virtual viewing schedule request modal'
    ],
    interactiveControls: ['Price Slider', 'Property Type Filter', 'Mortgage Down Payment', 'Schedule Viewing'],
    colorAccent: '#F59E0B'
  },
  {
    id: 'ai-assistant-interface',
    slug: 'ai-assistant-interface',
    title: 'Enterprise AI Assistant & Knowledge Grounding',
    category: 'AI & Automation',
    tagline: 'Futuristic conversational AI assistant with streaming token simulation and knowledge base context.',
    badge: 'Interactive Concept Demo',
    previewDescription: 'Simulated conversational intelligence interface featuring token typing, system prompt parameter switching (Creative, Concise, Technical), and quick prompt starters.',
    techStack: ['React', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Simulated low-latency token streaming animation',
      'Persona selector (Code Architect, Executive Consultant, Technical Writer)',
      'Markdown and code snippet rendering with copy button',
      'Clear conversation memory reset and export transcript'
    ],
    interactiveControls: ['Persona Switcher', 'Sample Prompts', 'Response Speed Slider', 'Clear Chat'],
    colorAccent: '#8B5CF6'
  },
  {
    id: 'high-converting-landing',
    slug: 'high-converting-landing',
    title: 'Growth Landing Page with A/B Conversion Engine',
    category: 'Landing Pages & Growth',
    tagline: 'Conversion-engineered product launch hero with live social proof counters and waitlist validation.',
    badge: 'Interactive Concept Demo',
    previewDescription: 'Single-purpose high-velocity landing page prototype demonstrating headline A/B variant switching, trust badges, live waitlist counter, and instant form validation.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'A/B Headline variant switcher showing conversion impact comparison',
      'Live simulated waitlist counter with spot reservation',
      'Animated customer testimonial cards and rating badges',
      'One-click lead capture with email validation and success state'
    ],
    interactiveControls: ['Toggle Headline A/B', 'Submit Waitlist', 'Theme Mode', 'Inspect Conversion Elements'],
    colorAccent: '#EC4899'
  },
  {
    id: 'restaurant-experience',
    slug: 'restaurant-experience',
    title: 'Gourmet Culinary Menu & Table Reservation',
    category: 'Hospitality & Dining',
    tagline: 'Artisanal dining website with dietary filtering, chef special highlights, and live table booking.',
    badge: 'Interactive Concept Demo',
    previewDescription: 'Sophisticated culinary destination featuring interactive dietary menu filters (Vegan, Gluten-Free, Signature), high-res presentation, and instant table reservation form.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Dietary filter tabs (All, Chef Signature, Vegetarian, Gluten-Free, Dessert)',
      'Interactive party size selector (1 to 10 guests) and time slot booking',
      'Detailed culinary ingredient breakdowns and spice level indicators',
      'Instant booking confirmation state'
    ],
    interactiveControls: ['Dietary Filter', 'Guest Count', 'Pick Time Slot', 'Reserve Table'],
    colorAccent: '#D97706'
  }
];
