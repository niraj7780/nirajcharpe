export interface WebsiteExample {
  id: string;
  slug: string;
  number: string;
  title: string;
  clientTarget: string;
  shortDesc: string;
  features: string[];
  techStack: string[];
  demoType: string;
  deployPipeline: {
    githubRepoCreated: boolean;
    autoPushConfigured: boolean;
    vercelEdgeDeploy: boolean;
    sslAndDnsAutomation: boolean;
  };
}

export const websiteExamples: WebsiteExample[] = [
  {
    id: 'saas-platform',
    slug: 'saas-platform',
    number: '01',
    title: 'Modern SaaS Platform',
    clientTarget: 'B2B Software Startups, Subscription Services, Micro-SaaS Founders',
    shortDesc: 'High-conversion marketing site + telemetry dashboard with pricing tiers, user auth hooks, and onboarding flows.',
    features: ['Dynamic monthly/annual pricing matrix', 'Interactive metric preview canvas', 'OAuth signup modals', 'Sub-second edge rendering'],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    demoType: 'saas-analytics',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'ecommerce-store',
    slug: 'ecommerce-store',
    number: '02',
    title: 'High-Conversion E-commerce Storefront',
    clientTarget: 'D2C Consumer Brands, Boutique Retailers, Apparel & Hardware',
    shortDesc: 'Frictionless online store with instant faceted category filtering, slide-out drawer cart, and Stripe/Razorpay integration.',
    features: ['Instant category & attribute filtering', 'Slide-out persistent cart drawer', 'Coupon discount calculator (DEV20)', 'Zero checkout friction'],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Stripe API'],
    demoType: 'ecommerce-cart',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'corporate-portal',
    slug: 'corporate-portal',
    number: '03',
    title: 'Corporate B2B Consulting Portal',
    clientTarget: 'Legal Practices, Management Consultancies, Advisory Firms',
    shortDesc: 'Authoritative enterprise site built to establish institutional trust, showcase case studies, and qualify inbound leads.',
    features: ['Corporate RFP inquiry pipeline', 'Filterable client case studies', 'Executive leadership bios', 'Schema.org corporate metadata'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoType: 'business-corp',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'real-estate-showcase',
    slug: 'real-estate-showcase',
    number: '04',
    title: 'Luxury Real Estate Showcase',
    clientTarget: 'Real Estate Brokers, Property Developers, Luxury Estates',
    shortDesc: 'High-end architectural property portal with photo galleries and live dynamic mortgage loan calculator.',
    features: ['Interactive monthly EMI loan calculator', 'Down payment & interest rate sliders', 'Floor plan spec sheets', 'Private viewing booking modal'],
    techStack: ['React', 'Next.js', 'Tailwind CSS'],
    demoType: 'real-estate-showcase',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'healthcare-portal',
    slug: 'healthcare-portal',
    number: '05',
    title: 'Healthcare & Clinic Triage Portal',
    clientTarget: 'Private Clinics, Diagnostic Centers, Medical Specialists',
    shortDesc: 'Patient intake protocol with preliminary symptom triage questionnaire and doctor calendar booking.',
    features: ['Specialist doctor availability badges', 'Interactive appointment slot picker', 'Preliminary symptom triage assessment', 'Instant booking confirmation'],
    techStack: ['Next.js', 'FastAPI', 'Tailwind CSS'],
    demoType: 'healthcare-portal',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'restaurant-experience',
    slug: 'restaurant-experience',
    number: '06',
    title: 'Gourmet Restaurant & Table Reservation',
    clientTarget: 'Fine Dining Venues, Artisanal Cafes, Hospitality Groups',
    shortDesc: 'Culinary destination featuring interactive dietary menu filters and instant table reservations.',
    features: ['Dietary filter tabs (Chef Signature, Vegan, GF)', 'Interactive party size guest counter', 'Time slot booking engine', 'Instant confirmation receipt'],
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    demoType: 'restaurant-experience',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'education-lms',
    slug: 'education-lms',
    number: '07',
    title: 'Tech Academy & Learning Hub',
    clientTarget: 'Coding Bootcamps, Online Academies, EdTech Instructors',
    shortDesc: 'Curriculum discovery and course registration portal with syllabus expanders and student onboarding.',
    features: ['Interactive module curriculum outline', 'Course progress estimation bar', 'Instructor credential badges', 'Enrollment modal wizard'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoType: 'education-academy',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'fintech-wealth',
    slug: 'fintech-wealth',
    number: '08',
    title: 'Fintech Wealth & Asset Management Dashboard',
    clientTarget: 'Investment Funds, Family Offices, Quantitative Trading Desks',
    shortDesc: 'High-density wealth management terminal with asset allocation donuts and historical yield simulations.',
    features: ['Portfolio asset breakdown curves', 'Real-time FX currency converter', 'Security compliance badging', 'Exportable audit reports'],
    techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    demoType: 'fintech-wealth',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'high-converting-landing',
    slug: 'high-converting-landing',
    number: '09',
    title: 'High-Velocity Paid Traffic Landing Page',
    clientTarget: 'Performance Marketers, App Launches, Pre-Seed Waitlists',
    shortDesc: 'Conversion-engineered landing page with live A/B variant switching and instant waitlist reservation.',
    features: ['Live A/B headline variant comparison', 'Simulated real-time waitlist counter', 'Conversion element callouts', 'Sub-second load times'],
    techStack: ['Next.js', 'Tailwind CSS'],
    demoType: 'high-converting-landing',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'spatial-configurator',
    slug: 'spatial-configurator',
    number: '10',
    title: '3D WebGL Spatial Product Configurator',
    clientTarget: 'Hardware Companies, Luxury Apparel, Industrial Equipment',
    shortDesc: 'Real-time 60 FPS WebGL canvas with interactive orbital controls, geometry switching, and material shaders.',
    features: ['60 FPS orbital mouse camera rotation', 'Material shader switching (Lime, White, Dark)', 'Wireframe topology inspection', 'Speed and lighting controls'],
    techStack: ['Three.js', 'WebGL', 'Tailwind CSS'],
    demoType: '3d-configurator',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'b2b-crm-pipeline',
    slug: 'b2b-crm-pipeline',
    number: '11',
    title: 'B2B Sales CRM & Pipeline Platform',
    clientTarget: 'B2B Sales Teams, Agencies, Outbound Deal Closers',
    shortDesc: 'Kanban deal stage tracker with lead value tallies, probability scoring, and contact drawers.',
    features: ['Interactive deal pipeline columns', 'Deal value sum totals', 'Lead score probability metrics', 'Contact detail side drawer'],
    techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    demoType: 'crm-pipeline',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'logistics-erp',
    slug: 'logistics-erp',
    number: '12',
    title: 'Supply Chain & Warehouse ERP System',
    clientTarget: 'Wholesalers, Logistics Operators, Manufacturing Plants',
    shortDesc: 'Inventory ledger tracking SKUs, multi-warehouse stock levels, and automated reorder alerts.',
    features: ['SKU inventory counts & status badges', 'Low-stock automated warning thresholds', 'Supplier procurement status', 'Multi-facility stock audit'],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
    demoType: 'erp-inventory',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'event-summit-portal',
    slug: 'event-summit-portal',
    number: '13',
    title: 'Tech Summit & Conference Event Portal',
    clientTarget: 'Event Organizers, Tech Conferences, Industry Summits',
    shortDesc: 'Conference website with keynote countdown clocks, track timetables, and speaker credentials.',
    features: ['Live countdown clock to summit', 'Multi-track agenda schedule (Tech, AI, Systems)', 'Speaker bio popups', 'VIP pass reservation'],
    techStack: ['Next.js', 'Tailwind CSS'],
    demoType: 'event-conference',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'travel-destinations',
    slug: 'travel-destinations',
    number: '14',
    title: 'Adventure Travel & Destination Itinerary Engine',
    clientTarget: 'Boutique Tour Operators, Expedition Guides, Travel Agencies',
    shortDesc: 'Inspiring adventure platform with day-by-day itinerary expanders and package pricing calculators.',
    features: ['Day-by-day tour itinerary breakdown', 'Season & weather widget', 'Interactive budget estimator', 'High-res gallery cards'],
    techStack: ['Next.js', 'Tailwind CSS'],
    demoType: 'travel-destinations',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'job-board-portal',
    slug: 'job-board-portal',
    number: '15',
    title: 'Tech Job Board & Talent Discovery Engine',
    clientTarget: 'Niche Tech Communities, Recruitment Firms, Remote Hubs',
    shortDesc: 'Job board with salary range minimum sliders, remote/onsite filters, and 1-click application modals.',
    features: ['Salary range filter slider', 'Remote / Hybrid / Onsite toggles', 'Quick Apply modal dialog', 'Company tech stack tags'],
    techStack: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
    demoType: 'job-board',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'web3-token-terminal',
    slug: 'web3-token-terminal',
    number: '16',
    title: 'Web3 & Token Analytics Terminal',
    clientTarget: 'Crypto Protocols, DeFi Apps, NFT Ecosystems',
    shortDesc: 'Decentralized application terminal with simulated wallet connectivity, token swap calculator, and gas tracker.',
    features: ['Simulated Web3 wallet modal', 'Instant token exchange calculator', 'Slippage tolerance configuration', 'Live network gas fee tracker'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    demoType: 'web3-swap',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'developer-docs-sandbox',
    slug: 'developer-docs-sandbox',
    number: '17',
    title: 'Developer Documentation & API Sandbox',
    clientTarget: 'API Providers, Open-Source Tools, SaaS Companies',
    shortDesc: 'Fast API documentation portal with sidebar navigation, curl request copy blocks, and response explorers.',
    features: ['Collapsible sidebar navigation tree', 'HTTP endpoint method badges (GET, POST)', 'Interactive mock payload toggle', '1-click code snippet copy'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoType: 'docs-portal',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'community-builder-forum',
    slug: 'community-builder-forum',
    number: '18',
    title: 'Community Discussion & Builder Forum',
    clientTarget: 'Creator Communities, Developer Ecosystems, Knowledge Bases',
    shortDesc: 'Discussion board with upvoting, tag categorization, search, and accepted solution indicators.',
    features: ['Upvote counter controls', 'Tag filtering (Next.js, Python, AI)', 'Marked as Answered status badges', 'Sort by Hot, Top, Recent'],
    techStack: ['Next.js', 'Tailwind CSS'],
    demoType: 'community-forum',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'hotel-booking-resort',
    slug: 'hotel-booking-resort',
    number: '19',
    title: 'Boutique Hotel & Resort Booking Engine',
    clientTarget: 'Boutique Hotels, Luxury Villas, Eco Resorts',
    shortDesc: 'Reservation engine with room suite selection, check-in date picker, and instant price tally.',
    features: ['Check-in / check-out date selector', 'Suite selection with amenity icons', 'Guest count controls', 'Live stay total calculation'],
    techStack: ['React', 'Next.js', 'Tailwind CSS'],
    demoType: 'hotel-booking',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'agency-editorial-showcase',
    slug: 'agency-editorial-showcase',
    number: '20',
    title: 'Creative Agency Showreel & Editorial Portfolio',
    clientTarget: 'Design Studios, Film Production, Creative Directors',
    shortDesc: 'High-contrast editorial showcase emphasizing bold typography, split case study previews, and client rosters.',
    features: ['Bold typography hierarchy', 'Split-screen case study layouts', 'Interactive client credential roster', 'Express creative brief generator'],
    techStack: ['Next.js', 'Tailwind CSS'],
    demoType: 'agency-creative',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  }
];
