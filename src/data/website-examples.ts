export interface WebsiteExample {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  clientTarget: string;
  shortDesc: string;
  features: string[];
  techStack: string[];
  demoType: string;
  vercelLiveUrl: string;
  githubRepoUrl: string;
  deployPipeline: {
    githubRepoCreated: boolean;
    autoPushConfigured: boolean;
    vercelEdgeDeploy: boolean;
    sslAndDnsAutomation: boolean;
  };
}

export const websiteExamples: WebsiteExample[] = [
  {
    id: '3d-interactive',
    slug: '3d-interactive',
    number: '01',
    title: '3D WebGL Product Visualizer & Spatial Showcase',
    category: '3D & Creative Web',
    clientTarget: 'Hardware Brands, Luxury Apparel, Industrial Products, Architecture Studios',
    shortDesc: 'Interactive 60 FPS WebGL canvas with real-time orbital mouse controls, material shaders, and wireframe topology toggles.',
    features: ['60 FPS orbital mouse camera rotation', 'Real-time material shader switching (Volt Lime, Chrome, Carbon)', 'Wireframe topology inspection', 'Custom lighting & geometry controls'],
    techStack: ['Three.js', 'WebGL', 'React Three Fiber', 'Next.js 14', 'Tailwind CSS'],
    demoType: '3d-configurator',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/3d-interactive',
    githubRepoUrl: 'https://github.com/niraj7780/3d-webgl-showcase',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'ecommerce-store',
    slug: 'ecommerce-store',
    number: '02',
    title: 'High-Conversion Luxury E-Commerce Storefront',
    category: 'E-commerce & Retail',
    clientTarget: 'D2C Consumer Brands, Apparel Labels, Luxury Boutiques, Footwear',
    shortDesc: 'Frictionless shopping experience featuring instant faceted category filtering, sliding cart drawer, coupon engine, and Stripe checkout.',
    features: ['Instant category & attribute filtering', 'Slide-out persistent cart drawer', 'Coupon discount calculator (DEV20)', 'Sub-second edge checkout pipeline'],
    techStack: ['Next.js 14', 'React 18', 'Tailwind CSS', 'Stripe API', 'Zustand'],
    demoType: 'ecommerce-cart',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/ecommerce-store',
    githubRepoUrl: 'https://github.com/niraj7780/luxury-ecommerce-store',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'developer-portfolio',
    slug: 'developer-portfolio',
    number: '03',
    title: 'Minimalist Creative Developer Portfolio',
    category: 'Portfolio & Personal Brand',
    clientTarget: 'Senior Engineers, Creative Developers, Tech Leaders, Consultants',
    shortDesc: 'Architectural portfolio featuring minimal square layout, interactive terminal mode, 60fps skills marquee, and case study inspector.',
    features: ['Minimal square architectural grid', 'Interactive CLI command terminal', 'Filterable engineering case studies', 'Direct inquiry modal hook'],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoType: 'developer-portfolio',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/developer-portfolio',
    githubRepoUrl: 'https://github.com/niraj7780/minimalist-dev-portfolio',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'restaurant-experience',
    slug: 'restaurant-experience',
    number: '04',
    title: 'Gourmet Restaurant & Table Reservation Engine',
    category: 'Hospitality & Dining',
    clientTarget: 'Fine Dining Venues, Culinary Bistros, Artisanal Cafes, Hospitality Groups',
    shortDesc: 'Artisanal culinary destination with dietary menu filtering, interactive guest party size counter, and time-slot table reservations.',
    features: ['Dietary filter tabs (Chef Specials, Vegan, Gluten-Free)', 'Interactive guest party size selector', 'Time slot booking engine with calendar', 'Instant SMS/Email reservation confirmation'],
    techStack: ['Next.js 14', 'React', 'Tailwind CSS', 'FastAPI'],
    demoType: 'restaurant-experience',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/restaurant-experience',
    githubRepoUrl: 'https://github.com/niraj7780/restaurant-bistro-platform',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'luxury-salon',
    slug: 'luxury-salon',
    number: '05',
    title: 'Luxury Hair Salon & Spa Sanctuary Booking',
    category: 'Beauty, Wellness & Salon',
    clientTarget: 'High-End Hair Salons, Wellness Spas, Aesthetic Clinics, Barbershops',
    shortDesc: 'Premium appointment scheduling platform featuring treatment service menus, master stylist selection, and calendar time-slot booking.',
    features: ['Treatment category selector (Hair, Beard, Facials, Spa)', 'Master stylist profile picker', 'Real-time appointment slot calendar', 'Automated deposit & calendar reminder'],
    techStack: ['Next.js 14', 'React', 'Tailwind CSS', 'FastAPI'],
    demoType: 'luxury-salon',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/luxury-salon',
    githubRepoUrl: 'https://github.com/niraj7780/luxury-salon-booking',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'saas-platform',
    slug: 'saas-platform',
    number: '06',
    title: 'Modern B2B SaaS Platform & Telemetry',
    category: 'SaaS & Cloud Software',
    clientTarget: 'B2B Software Startups, Subscription Platforms, Micro-SaaS Founders',
    shortDesc: 'High-converting marketing engine with interactive product metrics, dynamic feature matrix, user auth hooks, and onboarding flows.',
    features: ['Interactive metric preview canvas', 'Dynamic monthly/annual feature comparison', 'OAuth signup modals', 'Sub-second edge rendering'],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    demoType: 'saas-analytics',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/saas-platform',
    githubRepoUrl: 'https://github.com/niraj7780/modern-saas-platform',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'real-estate-showcase',
    slug: 'real-estate-showcase',
    number: '07',
    title: 'Luxury Real Estate & Villa Architecture Showcase',
    category: 'Real Estate & Properties',
    clientTarget: 'Real Estate Brokers, Luxury Property Developers, Estate Agents',
    shortDesc: 'High-end architectural property portal with ultra-HD photo galleries, floor-plan spec sheets, and dynamic mortgage loan calculator.',
    features: ['Interactive monthly EMI loan calculator', 'Down payment & interest rate sliders', 'Floor plan architectural specs', 'Private viewing booking modal'],
    techStack: ['Next.js 14', 'React', 'Tailwind CSS'],
    demoType: 'real-estate-showcase',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/real-estate-showcase',
    githubRepoUrl: 'https://github.com/niraj7780/luxury-real-estate-portal',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'healthcare-portal',
    slug: 'healthcare-portal',
    number: '08',
    title: 'Healthcare Clinic & Patient Triage Portal',
    category: 'Healthcare & Medical',
    clientTarget: 'Private Medical Practices, Diagnostic Clinics, Telehealth Founders',
    shortDesc: 'Patient intake protocol with preliminary symptom triage questionnaire, physician schedules, and encrypted telemedicine booking.',
    features: ['Specialist doctor availability badges', 'Interactive appointment slot calendar', 'Preliminary symptom triage assessment', 'Instant booking confirmation receipt'],
    techStack: ['Next.js 14', 'FastAPI', 'Tailwind CSS', 'PostgreSQL'],
    demoType: 'healthcare-portal',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/healthcare-portal',
    githubRepoUrl: 'https://github.com/niraj7780/healthcare-triage-portal',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'corporate-portal',
    slug: 'corporate-portal',
    number: '09',
    title: 'Corporate B2B Advisory & Consulting Portal',
    category: 'Corporate & Enterprise',
    clientTarget: 'Legal Practices, Management Consultancies, Advisory Firms',
    shortDesc: 'Authoritative enterprise site built to establish institutional trust, showcase case studies, and qualify high-value inbound RFP leads.',
    features: ['Corporate RFP inquiry pipeline', 'Filterable client case studies', 'Executive leadership credentials', 'Schema.org corporate metadata'],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
    demoType: 'corporate-portal',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/corporate-portal',
    githubRepoUrl: 'https://github.com/niraj7780/corporate-consulting-portal',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'education-lms',
    slug: 'education-lms',
    number: '10',
    title: 'Tech Academy & Interactive Learning Hub',
    category: 'Education & EdTech',
    clientTarget: 'Coding Bootcamps, Online Academies, EdTech Instructors, Universities',
    shortDesc: 'Curriculum discovery and course registration portal with syllabus expanders, instructor credentials, and student enrollment wizard.',
    features: ['Interactive module curriculum outline', 'Course duration & progress estimates', 'Instructor credential badges', 'Enrollment modal wizard'],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
    demoType: 'education-lms',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/education-lms',
    githubRepoUrl: 'https://github.com/niraj7780/tech-academy-lms',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'fintech-wealth',
    slug: 'fintech-wealth',
    number: '11',
    title: 'Fintech Wealth & Asset Management Dashboard',
    category: 'Fintech & Banking',
    clientTarget: 'Investment Funds, Family Offices, Quantitative Trading Desks, Neo-Banks',
    shortDesc: 'High-density wealth management terminal with asset allocation breakdowns, real-time FX rates, and yield simulations.',
    features: ['Portfolio asset allocation breakdown', 'Real-time FX currency converter', 'Security compliance badging', 'Exportable audit reports'],
    techStack: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    demoType: 'fintech-wealth',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/fintech-wealth',
    githubRepoUrl: 'https://github.com/niraj7780/fintech-wealth-terminal',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'high-converting-landing',
    slug: 'high-converting-landing',
    number: '12',
    title: 'High-Velocity Paid Traffic Landing Page',
    category: 'Landing Pages & Growth',
    clientTarget: 'Performance Marketers, App Launches, Pre-Seed Waitlists, Product Hunt',
    shortDesc: 'Conversion-engineered landing page with live A/B variant switching, social proof counters, and instant waitlist reservation.',
    features: ['Live A/B headline variant comparison', 'Simulated real-time waitlist counter', 'Conversion element callouts', 'Sub-second load times'],
    techStack: ['Next.js 14', 'Tailwind CSS', 'Edge Middleware'],
    demoType: 'high-converting-landing',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/high-converting-landing',
    githubRepoUrl: 'https://github.com/niraj7780/high-converting-landing',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'b2b-crm-pipeline',
    slug: 'b2b-crm-pipeline',
    number: '13',
    title: 'B2B Sales CRM & Pipeline Platform',
    category: 'CRM & Enterprise Tools',
    clientTarget: 'B2B Sales Teams, Agencies, Outbound Deal Closers',
    shortDesc: 'Kanban deal stage tracker with lead value tallies, probability scoring, and contact drawers.',
    features: ['Interactive deal pipeline columns', 'Deal value sum totals', 'Lead score probability metrics', 'Contact detail side drawer'],
    techStack: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    demoType: 'b2b-crm-pipeline',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/b2b-crm-pipeline',
    githubRepoUrl: 'https://github.com/niraj7780/b2b-crm-pipeline',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'logistics-erp',
    slug: 'logistics-erp',
    number: '14',
    title: 'Supply Chain & Warehouse ERP System',
    category: 'Logistics & Operations',
    clientTarget: 'Wholesalers, Logistics Operators, Manufacturing Plants, Freight',
    shortDesc: 'Inventory ledger tracking SKUs, multi-warehouse stock levels, and automated reorder alerts.',
    features: ['SKU inventory counts & status badges', 'Low-stock automated warning thresholds', 'Supplier procurement status', 'Multi-facility stock audit'],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
    demoType: 'logistics-erp',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/logistics-erp',
    githubRepoUrl: 'https://github.com/niraj7780/logistics-erp-inventory',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'event-summit-portal',
    slug: 'event-summit-portal',
    number: '15',
    title: 'Tech Summit & Conference Event Portal',
    category: 'Events & Conferences',
    clientTarget: 'Event Organizers, Tech Conferences, Industry Summits, Hackathons',
    shortDesc: 'Conference website with keynote countdown clocks, multi-track timetables, and VIP pass reservation.',
    features: ['Live countdown clock to summit', 'Multi-track agenda schedule (Tech, AI, Systems)', 'Speaker credentials', 'VIP pass reservation modal'],
    techStack: ['Next.js 14', 'Tailwind CSS'],
    demoType: 'event-summit-portal',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/event-summit-portal',
    githubRepoUrl: 'https://github.com/niraj7780/tech-summit-portal',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'travel-destinations',
    slug: 'travel-destinations',
    number: '16',
    title: 'Adventure Travel & Destination Itinerary Engine',
    category: 'Travel & Expeditions',
    clientTarget: 'Boutique Tour Operators, Expedition Guides, Travel Agencies',
    shortDesc: 'Inspiring adventure platform with day-by-day itinerary expanders and package pricing calculators.',
    features: ['Day-by-day tour itinerary breakdown', 'Season & weather widget', 'Interactive budget estimator', 'High-res gallery cards'],
    techStack: ['Next.js 14', 'Tailwind CSS'],
    demoType: 'travel-destinations',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/travel-destinations',
    githubRepoUrl: 'https://github.com/niraj7780/adventure-travel-platform',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'job-board-portal',
    slug: 'job-board-portal',
    number: '17',
    title: 'Tech Job Board & Talent Discovery Engine',
    category: 'Recruitment & Job Boards',
    clientTarget: 'Niche Tech Communities, Recruitment Firms, Remote Work Hubs',
    shortDesc: 'Job board with salary range minimum sliders, remote/onsite filters, and 1-click application modals.',
    features: ['Salary range filter slider', 'Remote / Hybrid / Onsite toggles', 'Quick Apply modal dialog', 'Company tech stack tags'],
    techStack: ['Next.js 14', 'PostgreSQL', 'Tailwind CSS'],
    demoType: 'job-board-portal',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/job-board-portal',
    githubRepoUrl: 'https://github.com/niraj7780/tech-job-board',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'web3-token-terminal',
    slug: 'web3-token-terminal',
    number: '18',
    title: 'Web3 & Token Analytics Terminal',
    category: 'Web3 & Crypto',
    clientTarget: 'Crypto Protocols, DeFi Apps, NFT Ecosystems, Web3 DAOs',
    shortDesc: 'Decentralized application terminal with simulated wallet connectivity, token swap calculator, and gas tracker.',
    features: ['Simulated Web3 wallet modal', 'Instant token exchange calculator', 'Slippage tolerance configuration', 'Live network gas fee tracker'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    demoType: 'web3-token-terminal',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/web3-token-terminal',
    githubRepoUrl: 'https://github.com/niraj7780/web3-token-terminal',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'hotel-booking-resort',
    slug: 'hotel-booking-resort',
    number: '19',
    title: 'Boutique Hotel & Luxury Resort Booking Engine',
    category: 'Hotels & Resorts',
    clientTarget: 'Boutique Hotels, Luxury Villas, Eco Resorts, Vacation Rentals',
    shortDesc: 'Reservation engine with room suite selection, check-in date picker, and instant stay price tally.',
    features: ['Check-in / check-out date selector', 'Suite selection with amenity icons', 'Guest count controls', 'Live stay total calculation'],
    techStack: ['React', 'Next.js 14', 'Tailwind CSS'],
    demoType: 'hotel-booking-resort',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/hotel-booking-resort',
    githubRepoUrl: 'https://github.com/niraj7780/hotel-resort-booking',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  },
  {
    id: 'agency-editorial-showcase',
    slug: 'agency-editorial-showcase',
    number: '20',
    title: 'Creative Agency Showreel & Editorial Portfolio',
    category: 'Creative Studios & Media',
    clientTarget: 'Design Studios, Film Production, Creative Directors, Ad Agencies',
    shortDesc: 'High-contrast editorial showcase emphasizing bold typography, split case study previews, and client rosters.',
    features: ['Bold typography hierarchy', 'Split-screen case study layouts', 'Interactive client credential roster', 'Express creative brief generator'],
    techStack: ['Next.js 14', 'Tailwind CSS'],
    demoType: 'agency-editorial-showcase',
    vercelLiveUrl: 'https://niraj-portfolio-pied.vercel.app/websites/agency-editorial-showcase',
    githubRepoUrl: 'https://github.com/niraj7780/agency-editorial-showcase',
    deployPipeline: { githubRepoCreated: true, autoPushConfigured: true, vercelEdgeDeploy: true, sslAndDnsAutomation: true }
  }
];
