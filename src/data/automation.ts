export interface AutomationPipeline {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  triggerType: 'Scheduled Cron' | 'Webhook Event' | 'Database Change' | 'Manual Dispatch';
  problemSolved: string;
  architecture: string;
  timeSaved: string;
  deliverables: string[];
  techStack: string[];
}

export const automationPipelines: AutomationPipeline[] = [
  {
    id: 'b2b-lead-crm-sync',
    number: '01',
    title: 'B2B Lead Scraping, Email Verification & CRM Sync',
    triggerType: 'Scheduled Cron',
    shortDesc: 'Automated end-to-end prospect discovery that enriches corporate domain records, verifies mailbox deliverability, and populates your CRM with zero manual data entry.',
    problemSolved: 'Sales development reps spend 20+ hours a week copying contacts from directories into spreadsheets and emailing invalid bounced addresses.',
    architecture: 'Playwright headless browser with user-agent rotation, paired with SMTP handshake deliverability verification and automated bi-directional API synchronization to HubSpot or Pipedrive.',
    timeSaved: '20+ hours saved weekly per sales rep; maintains a 98%+ email deliverability rate.',
    deliverables: [
      'Headless browser scraping pipeline with rate-limiting and proxy rotation',
      'Zero-bounce SMTP socket deliverability validator',
      'Automated deduplication and company tech stack enrichment',
      'Direct CRM sync mapping contacts, titles, and phone numbers into deal stages'
    ],
    techStack: ['Python', 'Playwright', 'BeautifulSoup', 'FastAPI', 'PostgreSQL', 'HubSpot API']
  },
  {
    id: 'social-media-cross-poster',
    number: '02',
    title: 'Social Media Multi-Platform Cross-Poster & Scheduler',
    triggerType: 'Scheduled Cron',
    shortDesc: 'Publishing pipeline that takes a single content draft, formats it for X, LinkedIn, and Instagram, renders high-DPI graphics, and dispatches on scheduled slots.',
    problemSolved: 'Content marketing teams waste hours manually logging into 4 different social networks every single day to copy-paste the same post.',
    architecture: 'Queue worker built with Python and Node.js that programmatically renders slide images via headless Chrome, verifies character limits per network, and dispatches via official APIs.',
    timeSaved: '15+ hours weekly; eliminates missed posting schedules and formatting inconsistencies.',
    deliverables: [
      'Visual drag-and-drop editorial calendar interface',
      'Automated 1080x1350 carousel image rendering pipeline',
      'Official OAuth API integration for LinkedIn, X (Twitter), and Instagram',
      'Webhook notification on delivery confirmation or rate-limit warnings'
    ],
    techStack: ['Node.js', 'Python', 'Puppeteer', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'sre-incident-triage',
    number: '03',
    title: 'SRE Automated Log Triage & Incident Dispatcher',
    triggerType: 'Webhook Event',
    shortDesc: 'Listens for alerts from Datadog, Prometheus, or Sentry, queries the relevant server log window, clusters errors, and posts an instant runbook diagnosis to Slack.',
    problemSolved: 'On-call engineers are woken up at 2 AM and waste 45 minutes manually sifting through raw server logs before identifying the failing service.',
    architecture: 'FastAPI webhook listener that receives alert payloads, queries log streams with regex/vector search, isolates stack traces, and prepares an executive 5-bullet diagnosis card in Slack.',
    timeSaved: 'Reduces Mean Time to Resolution (MTTR) by 60%; eliminates alert fatigue.',
    deliverables: [
      'Webhook listener accepting Alertmanager, Datadog, and custom alarms',
      'Automated stack trace isolation and log clustering engine',
      'Semantic runbook retrieval for matching error signatures',
      'Automated Slack/Discord card with severity recommendations'
    ],
    techStack: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'Slack Webhooks']
  },
  {
    id: 'financial-ledger-reconciliation',
    number: '04',
    title: 'Financial Double-Entry Ledger & Fraud Anomaly Monitor',
    triggerType: 'Database Change',
    shortDesc: 'Automated transaction reconciliation engine that verifies debit/credit balance equality and flags velocity spikes or geographical anomalies in real-time.',
    problemSolved: 'Financial apps and marketplaces risk silent overdraft bugs, duplicate settlements, and undetected fraudulent transactions.',
    architecture: 'ACID-compliant PostgreSQL ledger with row-level locks, SHA-256 state chain verification, and background worker checking rolling transaction velocity against threshold heuristics.',
    timeSaved: 'Guarantees 100% financial data integrity; eliminates manual end-of-month reconciliation audits.',
    deliverables: [
      'ACID double-entry ledger with debit/credit balance checks',
      'Cryptographic SHA-256 audit trail chain for each transaction',
      'Real-time rule-based velocity anomaly detection',
      'Automated batch settlement & reconciliation report generator'
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker']
  },
  {
    id: 'invoicing-payment-settlement',
    number: '05',
    title: 'Automated Invoicing & Stripe Webhook Settlement',
    triggerType: 'Webhook Event',
    shortDesc: 'Listens for successful Stripe or Razorpay payments, generates a branded PDF tax invoice, updates customer credits, and dispatches automated email receipts.',
    problemSolved: 'Business owners manually draft and email PDF invoices after receiving bank or Stripe notifications.',
    architecture: 'Webhook handler with cryptographic signature verification that decodes event payloads, generates high-DPI PDF invoices with invoice numbering, and syncs accounting records.',
    timeSaved: '10+ hours per month; eliminates manual invoice generation and payment tracking errors.',
    deliverables: [
      'Stripe/Razorpay webhook receiver with replay attack defense',
      'Programmatic branded PDF tax invoice generator',
      'Automated email delivery via SendGrid or AWS SES',
      'Accounting ledger synchronization and failure retry queues'
    ],
    techStack: ['Python', 'FastAPI', 'Stripe API', 'PostgreSQL', 'SendGrid']
  },
  {
    id: 'headless-data-scraper',
    number: '06',
    title: 'Headless Browser Automated Web Scraper',
    triggerType: 'Scheduled Cron',
    shortDesc: 'Extracts real-time pricing, competitor catalog changes, or market data across dynamic JavaScript-heavy websites with rotating proxies and zero blocks.',
    problemSolved: 'Market analysts spend whole days manually checking competitor websites for price adjustments and inventory changes.',
    architecture: 'Playwright cluster executing in headless mode with fingerprint masking, automated CAPTCHA avoidance strategies, exponential backoff, and direct database persistence.',
    timeSaved: 'Reclaims 25+ hours weekly of manual market research; provides real-time pricing alerts.',
    deliverables: [
      'Resilient Playwright crawler handling dynamic JS rendering',
      'Automated proxy rotation and request throttling',
      'Normalized JSON schema storage in PostgreSQL database',
      'Webhook alerting when competitor prices or inventory change'
    ],
    techStack: ['Python', 'Playwright', 'BeautifulSoup', 'FastAPI', 'PostgreSQL']
  },
  {
    id: 'etl-file-pipeline',
    number: '07',
    title: 'ETL File & Spreadsheet Processing Pipeline',
    triggerType: 'Scheduled Cron',
    shortDesc: 'Monitors cloud storage or SFTP folders for incoming customer CSV/Excel files, validates schema columns, normalizes dirty data, and loads into production databases.',
    problemSolved: 'Operations teams manually clean up corrupt customer spreadsheets before importing them into core databases.',
    architecture: 'Pandas data cleaning pipeline running inside Docker with Pydantic type validation, automated missing-value handling, and transactional database bulk insertion.',
    timeSaved: 'Saves 3 hours per client batch file; prevents dirty data from corrupting production systems.',
    deliverables: [
      'Automated file ingestion watcher for S3, SFTP, or Google Drive',
      'Pandas data validation, type casting, and deduplication engine',
      'Automated error report identifying rejected rows with line numbers',
      'High-speed bulk SQL insertion into PostgreSQL database'
    ],
    techStack: ['Python', 'Pandas', 'Pydantic', 'PostgreSQL', 'Docker']
  },
  {
    id: 'customer-onboarding-automation',
    number: '08',
    title: 'Customer Onboarding Drip Automation & User Provisioning',
    triggerType: 'Database Change',
    shortDesc: 'Triggers personalized onboarding sequences based on real user product actions, provisioning accounts, configuring workspaces, and checking completion milestones.',
    problemSolved: 'New software users churn within the first 7 days because onboarding is passive and lacks milestone-driven guidance.',
    architecture: 'Event-driven state tracker listening to database user events, scheduling personalized email drips based on which features the user has or has not touched yet.',
    timeSaved: 'Increases product activation rate by 35%; automates all manual customer greeting calls.',
    deliverables: [
      'Event-based user activity tracker',
      'Milestone-driven transactional email sequences',
      'Automated workspace workspace seeding with demo data',
      'Admin alerts when high-value accounts show drop-off risks'
    ],
    techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'SendGrid', 'Webhooks']
  }
];
