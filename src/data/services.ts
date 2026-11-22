export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  targetAudience: string;
  deliverables: string[];
  businessBenefits: string[];
  technologies: string[];
  estimatedTimeline: string;
  indicativeStartingPriceINR: string;
  indicativeStartingPriceUSD: string;
  popular?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'business-websites',
    slug: 'business-websites',
    title: 'Business Website Development',
    shortDesc: 'High-credibility corporate websites designed to build trust, communicate authority, and convert prospective clients.',
    fullDesc: 'Your website is the single most critical touchpoint for prospective clients and partners. I build tailored corporate websites with immaculate typography, fast load times, clear service architecture, and conversion-optimized inquiry pathways.',
    iconName: 'Building2',
    targetAudience: 'Consulting firms, agencies, legal/financial advisors, B2B companies, and growing enterprises looking to upgrade from generic templates.',
    deliverables: [
      'Custom responsive design tailored to your brand identity',
      'High-speed Next.js server-side rendering for instant page transitions',
      'SEO metadata architecture & OpenGraph social sharing setup',
      'Lead capture inquiry forms with email notification integration',
      'Full cross-browser and mobile device compatibility testing'
    ],
    businessBenefits: [
      'Establishes instant institutional credibility with potential enterprise clients',
      'Drastically reduces bounce rate with sub-second page loads',
      'Transforms passive organic traffic into qualified inbound leads',
      'Easy content updates without requiring a developer on retainer'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    estimatedTimeline: '2 to 3 weeks',
    indicativeStartingPriceINR: '₹35,000',
    indicativeStartingPriceUSD: '$450',
    popular: true
  },
  {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'E-commerce Website Development',
    shortDesc: 'Custom online stores optimized for customer conversion, friction-free checkout, and seamless inventory management.',
    fullDesc: 'Off-the-shelf templates frequently drag down sales with clunky mobile checkout and slow load times. I engineer custom e-commerce storefronts with reactive product search, faceted filtering, persistent shopping carts, and secure payment gateway integrations.',
    iconName: 'ShoppingBag',
    targetAudience: 'Direct-to-consumer (D2C) brands, boutique retailers, merchandise stores, and wholesalers expanding into online sales.',
    deliverables: [
      'Interactive product catalog with faceted category & price filters',
      'Frictionless slide-out cart drawer with instant tax/discount calculation',
      'Stripe, Razorpay, or PayPal checkout gateway integration',
      'Order confirmation automation & customer email notifications',
      'Mobile-first responsive optimization ensuring high checkout completion'
    ],
    businessBenefits: [
      'Maximizes mobile conversion rate by eliminating checkout friction',
      'Zero monthly plugin bloat compared to standard monolithic platforms',
      'Lightning-fast catalog navigation leading to higher Average Order Value (AOV)',
      'Bank-grade transactional security and PCI compliance readiness'
    ],
    technologies: ['Next.js', 'React', 'Stripe / Razorpay API', 'Tailwind CSS', 'PostgreSQL'],
    estimatedTimeline: '3 to 5 weeks',
    indicativeStartingPriceINR: '₹55,000',
    indicativeStartingPriceUSD: '$700',
    popular: true
  },
  {
    id: 'custom-web-apps',
    slug: 'custom-web-apps',
    title: 'Custom Web Application Development',
    shortDesc: 'Bespoke full-stack web applications engineered for complex workflows, high reliability, and scalability.',
    fullDesc: 'When off-the-shelf software cannot satisfy your unique operational needs, I architect custom web applications from database schema to responsive frontend. Built with clean architecture, strict type safety, and production-tested API backends.',
    iconName: 'Cpu',
    targetAudience: 'Startups building MVP products, established companies modernizing legacy internal tools, and operational teams automating manual workflows.',
    deliverables: [
      'Complete full-stack architecture design (Frontend + API + Database)',
      'Role-based access control (RBAC) and secure authentication flow',
      'Relational database modeling with automated migrations (PostgreSQL)',
      'RESTful or GraphQL API endpoints with comprehensive input validation',
      'Deployment setup with automated CI/CD and production monitoring'
    ],
    businessBenefits: [
      'Eliminates repetitive manual workflows, saving hundreds of staff hours',
      'Complete ownership of your proprietary intellectual property and data',
      'Built to scale seamlessly from 10 to 100,000+ active users without refactoring',
      'Customized exactly to your business logic rather than forcing workarounds'
    ],
    technologies: ['FastAPI', 'Python', 'Next.js', 'PostgreSQL', 'Docker', 'TypeScript'],
    estimatedTimeline: '4 to 8 weeks',
    indicativeStartingPriceINR: '₹75,000',
    indicativeStartingPriceUSD: '$950',
    popular: true
  },
  {
    id: 'saas-development',
    slug: 'saas-development',
    title: 'SaaS MVP Development',
    shortDesc: 'End-to-end development of Software-as-a-Service products from product conception to subscription billing launch.',
    fullDesc: 'Turn your software idea into a revenue-generating SaaS product. I build complete SaaS foundations including multi-tenant databases, user onboarding, tier-based subscription billing, usage metrics, and administrative control panels.',
    iconName: 'Layers',
    targetAudience: 'Solo founders, early-stage startups, and entrepreneurs seeking to validate and launch subscription software quickly.',
    deliverables: [
      'User authentication with email verification, OAuth (Google/GitHub), and password reset',
      'Subscription billing integration with customer portal and webhooks',
      'Multi-tenant workspace architecture with data isolation',
      'Clean modern dashboard with user usage telemetry and project management',
      'Marketing landing page with pricing tier matrix and waitlist capture'
    ],
    businessBenefits: [
      'Reaches market in weeks instead of 6+ months of bloated agency cycles',
      'Reliable subscription collection infrastructure reducing churn',
      'Robust code foundation ready for investor audits and seed scaling',
      'Direct developer partnership with agile weekly sprint check-ins'
    ],
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'Stripe Subscriptions', 'Tailwind CSS'],
    estimatedTimeline: '5 to 9 weeks',
    indicativeStartingPriceINR: '₹85,000',
    indicativeStartingPriceUSD: '$1,100',
    popular: true
  },
  {
    id: 'ai-applications',
    slug: 'ai-applications',
    title: 'AI-Powered Application Development',
    shortDesc: 'Harness LLMs, retrieval-augmented generation (RAG), and intelligent agents to create automated intelligence inside your app.',
    fullDesc: 'Transform generic AI promises into real revenue-generating features. I integrate the Gemini API, custom prompt chains, document parsing pipelines, and domain-grounded chatbots that automate customer support, summarize complex data, and enhance user productivity.',
    iconName: 'Sparkles',
    targetAudience: 'Companies looking to embed AI intelligence, creators wanting automated content assistants, and businesses seeking smart automation.',
    deliverables: [
      'Structured prompt engineering with JSON schema validation',
      'Document RAG pipeline for querying internal PDFs, spreadsheets, and manuals',
      'Real-time token streaming with cancelable requests and Markdown rendering',
      'Strict safety guardrails and fallback mechanisms preventing hallucinations',
      'Token usage tracking, rate-limiting, and cost estimation monitoring'
    ],
    businessBenefits: [
      'Differentiates your product with cutting-edge intelligent automation',
      'Reduces customer response times from hours to under 2 seconds',
      'Automates document analysis, contract checks, and data extraction',
      'Maintains zero data privacy leakage with strict server-side API brokering'
    ],
    technologies: ['Gemini API', 'Python', 'FastAPI', 'LangChain', 'Next.js', 'PostgreSQL'],
    estimatedTimeline: '3 to 6 weeks',
    indicativeStartingPriceINR: '₹60,000',
    indicativeStartingPriceUSD: '$780',
    popular: true
  },
  {
    id: 'portfolio-websites',
    slug: 'portfolio-websites',
    title: 'Portfolio Website Development',
    shortDesc: 'Bespoke developer, designer, and executive portfolios that command attention, prove expertise, and win high-ticket roles.',
    fullDesc: 'Stand out in a competitive global market with a portfolio that reflects your real craftsmanship. I build portfolio websites with purposeful animations, narrative project breakdowns, interactive demos, and impeccable mobile responsiveness.',
    iconName: 'UserCheck',
    targetAudience: 'Senior engineers, product designers, creative directors, consultants, and founders wanting an impressive digital presence.',
    deliverables: [
      'Unique custom layout tailored to your career milestones and style',
      'Interactive project case studies with problem-solution breakdowns',
      'Light/Dark theme switcher with smooth transition state',
      'Interactive skills and technology showcases',
      'Contact inquiry modal with calendar scheduling link'
    ],
    businessBenefits: [
      'Creates an unforgettable first impression on recruiters and high-value clients',
      'Positions you in the top 1% of candidates with design-conscious engineering',
      'Turns inbound portfolio visitors into interview invitations and freelance leads',
      'Fast loading speeds ensuring visitors never bounce on mobile connections'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    estimatedTimeline: '1 to 2 weeks',
    indicativeStartingPriceINR: '₹22,000',
    indicativeStartingPriceUSD: '$280'
  },
  {
    id: 'landing-pages',
    slug: 'landing-pages',
    title: 'High-Converting Landing Page Development',
    shortDesc: 'Focused, single-purpose landing pages engineered to maximize ad campaign ROI and lead generation.',
    fullDesc: 'Paid traffic is expensive. Every element of your landing page must work in harmony to guide visitors toward your single core conversion goal. I combine persuasive visual hierarchy, trust badges, responsive speed, and frictionless form completion.',
    iconName: 'Target',
    targetAudience: 'Marketing teams running ad campaigns, product managers launching beta tests, and service providers booking consultations.',
    deliverables: [
      'High-impact hero section with persuasive value proposition architecture',
      'Social proof integration (client testimonials, press mentions, metrics)',
      'Interactive pricing or ROI calculator section',
      'Conversion-tracked lead generation form with instant validation',
      'A/B test ready component structure'
    ],
    businessBenefits: [
      'Maximizes return on ad spend (ROAS) on Google and Meta campaigns',
      'Sub-1-second load times that significantly improve Google Quality Scores',
      'Eliminates friction points that cause visitors to drop off without converting',
      'Clear analytics event tracking to measure exact conversion rates'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    estimatedTimeline: '1 to 2 weeks',
    indicativeStartingPriceINR: '₹18,000',
    indicativeStartingPriceUSD: '$240'
  },
  {
    id: '3d-interactive',
    slug: '3d-interactive',
    title: '3D & Interactive Web Experience',
    shortDesc: 'Immersive WebGL and Three.js elements that captivate audiences and elevate your brand into an unforgettable digital showcase.',
    fullDesc: 'When standard flat layouts are not enough to convey the innovative nature of your product, 3D interactive web experiences create that "wow" factor. I implement performant WebGL canvases, interactive 3D product visualizers, and spatial physics.',
    iconName: 'Box',
    targetAudience: 'Hardware startups, luxury brands, creative agencies, game studios, and high-tech companies seeking award-winning web design.',
    deliverables: [
      'Custom 3D model viewer with rotation, zoom, and lighting controls',
      'Particle simulations and interactive geometry reacting to user interaction',
      'Mobile GPU performance profiling with automatic low-power fallback',
      'Smooth camera animations choreographed to page scroll events',
      'Seamless integration into standard web layout without layout thrashing'
    ],
    businessBenefits: [
      'Dramatically elevates brand prestige to match top Awwwards-level agencies',
      'Increases time-on-page and brand recall by over 300%',
      'Allows customers to inspect physical products from every angle before buying',
      'Optimized lightweight asset delivery preventing battery drain'
    ],
    technologies: ['Three.js', 'React Three Fiber', 'WebGL', 'Tailwind CSS'],
    estimatedTimeline: '3 to 5 weeks',
    indicativeStartingPriceINR: '₹50,000',
    indicativeStartingPriceUSD: '$650'
  },
  {
    id: 'python-backend',
    slug: 'python-backend',
    title: 'Python Backend & Microservices',
    shortDesc: 'High-throughput, asynchronous backend services, data processing pipelines, and REST APIs built with Python.',
    fullDesc: 'Leverage the immense ecosystem of Python for your backend services. I develop asynchronous FastAPI and Flask backends with clean Pydantic data schemas, database connection pooling, background worker queues, and comprehensive test suites.',
    iconName: 'Terminal',
    targetAudience: 'Enterprises needing high-speed API services, data-heavy applications, and organizations processing continuous batch pipelines.',
    deliverables: [
      'Asynchronous FastAPI REST API endpoints with OpenAPI interactive documentation',
      'PostgreSQL database integration with SQLAlchemy ORM and Alembic migrations',
      'Background task execution queue with Redis or Celery',
      'JWT token authentication and granular API key management',
      'Docker container configuration with production Dockerfile and compose setup'
    ],
    businessBenefits: [
      'Blazing-fast response times (<50ms) with Python async event loops',
      'Seamless interoperability with machine learning models and data libraries',
      'Crystal-clear automated documentation making frontend collaboration effortless',
      'Production-ready stability with rigorous typing and input validation'
    ],
    technologies: ['Python 3.11', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Redis'],
    estimatedTimeline: '3 to 6 weeks',
    indicativeStartingPriceINR: '₹48,000',
    indicativeStartingPriceUSD: '$620'
  },
  {
    id: 'api-automation',
    slug: 'api-automation',
    title: 'API Integration & Workflow Automation',
    shortDesc: 'Connect disconnected business systems, automate manual data entry, and build resilient third-party integrations.',
    fullDesc: 'Stop wasting team hours manually transferring records between software tools. I build automated data pipelines that synchronize CRMs, payment providers, email marketing tools, inventory databases, and custom webhooks with automated error retries.',
    iconName: 'Workflow',
    targetAudience: 'Operational leaders, sales teams, and businesses juggling multiple disjointed SaaS tools and manual spreadsheets.',
    deliverables: [
      'Custom webhook handlers with signature verification and replay attack defense',
      'Bi-directional sync between CRMs (HubSpot, Pipedrive, Salesforce) and internal DBs',
      'Resilient scraping and enrichment pipeline with rate-limiting & proxy rotation',
      'Automated email/Slack alerting on pipeline anomalies or threshold triggers',
      'Detailed execution audit logs and failure recovery mechanisms'
    ],
    businessBenefits: [
      'Reclaims 20+ hours per week of manual data entry across operational staff',
      'Eliminates costly human transcription errors in billing and customer databases',
      'Enables real-time data visibility across all your management tools',
      'Bulletproof reliability with automatic exponential backoff on network failures'
    ],
    technologies: ['Python', 'FastAPI', 'Playwright', 'BeautifulSoup', 'Webhooks', 'PostgreSQL'],
    estimatedTimeline: '2 to 4 weeks',
    indicativeStartingPriceINR: '₹32,000',
    indicativeStartingPriceUSD: '$420'
  },
  {
    id: 'dashboard-development',
    slug: 'dashboard-development',
    title: 'Executive Dashboard & Analytics Development',
    shortDesc: 'Transform raw business data into actionable visual command centers with interactive charts and real-time metrics.',
    fullDesc: 'Make data-driven business decisions faster. I build data-dense executive dashboards and administrative portals that aggregate complex database tables into clear KPI metrics, trend charts, filterable tables, and exportable reports.',
    iconName: 'BarChart3',
    targetAudience: 'C-suite executives, product managers, financial controllers, and operational teams needing real-time business visibility.',
    deliverables: [
      'Real-time KPI metric overview cards with positive/negative trend indicators',
      'Interactive time-series charts (revenue, active users, operational throughput)',
      'Sortable, searchable, and paginated data tables with CSV/PDF export',
      'Role-based permissions ensuring sensitive metrics are only visible to authorized personnel',
      'Dark/Light mode contrast optimization for comfortable extended monitoring'
    ],
    businessBenefits: [
      'Provides instant executive clarity on company performance at a single glance',
      'Spot anomalies and operational bottlenecks before they impact the bottom line',
      'Empowers team members with self-serve data filters without asking engineering',
      'Fast client-side rendering even when visualizing tens of thousands of rows'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'FastAPI'],
    estimatedTimeline: '3 to 6 weeks',
    indicativeStartingPriceINR: '₹52,000',
    indicativeStartingPriceUSD: '$670'
  },
  {
    id: 'redesign-maintenance',
    slug: 'redesign-maintenance',
    title: 'Website Redesign & Ongoing Retainer',
    shortDesc: 'Modernize outdated websites with cutting-edge design, enhanced security, speed optimization, and ongoing care.',
    fullDesc: 'If your current website looks dated, loads slowly on mobile, or fails to generate leads, a strategic redesign will revitalize your digital presence. I rebuild legacy sites with modern Next.js tech stacks and provide proactive monthly maintenance.',
    iconName: 'RefreshCw',
    targetAudience: 'Established businesses with dated websites, companies experiencing performance issues, and owners wanting peace of mind.',
    deliverables: [
      'Comprehensive UI/UX overhaul modernizing visual layout and typography',
      'Migration of legacy content, blog posts, and assets with 301 redirect mapping',
      'Core Web Vitals speed optimization targeting 95+ Google Lighthouse scores',
      'Security patching, dependency updates, and continuous uptime monitoring',
      'Monthly allocated hours for new feature requests and content updates'
    ],
    businessBenefits: [
      'Protects your hard-earned SEO authority with zero broken links or lost rankings',
      'Restores client confidence with modern, professional design aesthetics',
      'Dramatically accelerates page load speeds, boosting Google search rankings',
      'Peace of mind knowing a dedicated senior engineer is monitoring your uptime'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'SEO Optimization'],
    estimatedTimeline: '2 to 4 weeks',
    indicativeStartingPriceINR: '₹28,000',
    indicativeStartingPriceUSD: '$360'
  }
];
