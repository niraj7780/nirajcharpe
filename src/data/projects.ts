export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'AI & Machine Learning' | 'SaaS & Automation' | 'Full-Stack Systems' | 'Fintech & Cloud';
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  architecture: string;
  githubUrl: string;
  liveDemoUrl?: string;
  liveUrl?: string;
  status: 'Production' | 'Active Development' | 'Beta';
  featured: boolean;
  completionDate: string;
  metrics?: { label: string; value: string }[];
  highlight: string;
}

export const projectsData: Project[] = [
  {
    id: 'careerlens-resume-ai',
    name: 'CareerLens Resume AI',
    tagline: 'Intelligent ATS scoring, skill gap identification, and targeted CV re-engineering powered by LLMs.',
    category: 'AI & Machine Learning',
    problem:
      'Job applicants face black-box Applicant Tracking Systems (ATS) that reject qualified candidates due to semantic mismatch, missing industry keywords, and suboptimal structural formatting.',
    solution:
      'Engineered an AI-powered pipeline utilizing the Gemini API to parse resumes against real-world job descriptions. Generates granular ATS match scores, highlights missing core competencies, and rewrites impact bullet points with quantitative metrics.',
    techStack: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'FastAPI', 'PyPDF2'],
    features: [
      'Multi-format resume parsing (PDF, DOCX, TXT)',
      'Deterministic ATS parseability and keyword semantic scoring',
      'Actionable section-by-section bullet rephrasing with star-method prompts',
      'Instant job-description vs resume semantic diff engine',
      'Exportable ATS-friendly formatted resume templates'
    ],
    architecture:
      'Client-side Next.js frontend communicating with a Python FastAPI backend that runs text extraction, cleans document artifacts, and interfaces with Gemini 1.5 Pro with structured JSON schema outputs.',
    githubUrl: 'https://github.com/niraj7780/careerlens-resume-ai',
    liveDemoUrl: 'https://careerlens-ai.vercel.app',
    status: 'Production',
    featured: true,
    completionDate: '2024-10',
    metrics: [
      { label: 'Scoring Accuracy', value: '94%' },
      { label: 'Parsing Speed', value: '< 1.8s' }
    ],
    highlight: 'Processes complex PDF structures and scores match percentage in under 2 seconds.'
  },
  {
    id: 'datanayle-ai',
    name: 'Datanayle AI',
    tagline: 'Autonomous data intelligence agent that translates natural language inquiries into SQL, charts, and executive insights.',
    category: 'AI & Machine Learning',
    problem:
      'Business analysts and non-technical stakeholders waste hours writing ad-hoc SQL queries or waiting for data teams to generate exploratory business dashboards.',
    solution:
      'Created an autonomous conversational analytics agent. Users upload CSV/Excel files or connect PostgreSQL databases; the agent inspects schemas, validates queries in a sandboxed runtime, and renders interactive Vega/Chart.js visual dashboards with actionable summaries.',
    techStack: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'LangChain', 'React', 'Tailwind CSS', 'Gemini API'],
    features: [
      'Natural Language to Text-to-SQL translation with schema verification',
      'Automated outlier detection and statistical correlation summaries',
      'Interactive dynamic chart generation (Bar, Line, Scatter, Heatmap)',
      'Secure read-only query execution sandbox with timeout safeguards',
      'Executive one-click PDF & Markdown analytical brief generation'
    ],
    architecture:
      'FastAPI backend orchestrates schema ingestion, vector search for table semantics, automated SQL generation with self-correction loops, and executes queries via connection pooling on PostgreSQL.',
    githubUrl: 'https://github.com/niraj7780/datanayle-ai',
    liveDemoUrl: 'https://datanayle.vercel.app',
    status: 'Production',
    featured: true,
    completionDate: '2024-09',
    metrics: [
      { label: 'Query Generation Accuracy', value: '91%' },
      { label: 'Supported Formats', value: 'CSV, XLSX, SQL' }
    ],
    highlight: 'Handles complex multi-table joins and data cleansing through zero-shot reasoning.'
  },
  {
    id: 'medai',
    name: 'MedAI Clinical Assistant',
    tagline: 'AI-assisted clinical triage protocol, patient symptom assessment, and medical transcription helper.',
    category: 'AI & Machine Learning',
    problem:
      'Healthcare clinics experience triage bottlenecks, where preliminary intake interviews take critical clinician time that could be allocated to high-urgency care.',
    solution:
      'Developed a clinical triage intake assistant adhering to medical triage standard protocols (Emergency Severity Index). Conducts structured symptom clarification interviews, cross-references red-flag criteria, and prepares standardized SBAR clinical summaries for attending physicians.',
    techStack: ['React', 'Next.js', 'FastAPI', 'Python', 'PyTorch', 'Gemini API', 'Tailwind CSS'],
    features: [
      'Symptom intake workflow with dynamic clinical follow-up questions',
      'Emergency red-flag symptom alerts with immediate care-level flags',
      'Structured SBAR (Situation, Background, Assessment, Recommendation) export',
      'Speech-to-text medical consultation transcription simulator',
      'Strict clinical privacy mode (zero persistent PII retention)'
    ],
    architecture:
      'Next.js 14 responsive frontend interfacing with an asynchronous FastAPI triage engine. Implements strict prompt guardrails against unverified prescribing while highlighting clinical urgency levels.',
    githubUrl: 'https://github.com/niraj7780/medai-clinical-assistant',
    liveDemoUrl: 'https://medai-triage.vercel.app',
    status: 'Beta',
    featured: true,
    completionDate: '2024-07',
    metrics: [
      { label: 'Triage Efficiency', value: '+45%' },
      { label: 'Protocol Coverage', value: '28 Symptoms' }
    ],
    highlight: 'Generates structured SBAR summaries for clinicians to review in under 30 seconds.'
  },
  {
    id: 'minigpt',
    name: 'MiniGPT Local & Cloud LLM Studio',
    tagline: 'Lightweight, modular conversational AI studio with document RAG, prompt chains, and model switching.',
    category: 'AI & Machine Learning',
    problem:
      'Developers and privacy-conscious users need an open, hackable interface to test prompt chains, upload reference documents, and switch seamlessly between local models and cloud LLM APIs without vendor lock-in.',
    solution:
      'Built a full-featured LLM studio supporting streaming responses, token estimation, system prompt versioning, Markdown/code rendering with syntax highlighting, and local vector search on uploaded documents.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'LangChain', 'ChromaDB', 'Gemini API'],
    features: [
      'Real-time token streaming with cancelable fetch requests',
      'In-browser vector store RAG for PDF and text research',
      'Custom persona and system prompt presets with variable templating',
      'Syntax-highlighted code blocks with one-click copy and execution previews',
      'Local conversation history storage with JSON/Markdown export'
    ],
    architecture:
      'Modular client architecture with server-sent events (SSE) for token streaming. Backend RAG pipeline segments documents into chunks, embeds with sentence-transformers/Gemini embeddings, and stores in ChromaDB.',
    githubUrl: 'https://github.com/niraj7780/minigpt-studio',
    liveDemoUrl: 'https://minigpt-studio.vercel.app',
    status: 'Production',
    featured: false,
    completionDate: '2024-05',
    metrics: [
      { label: 'Stream Latency', value: '< 200ms' },
      { label: 'Local Search RAG', value: '100% Client/Local' }
    ],
    highlight: 'Zero latency UI with live token streaming and local document contextualization.'
  },
  {
    id: 'banking-transaction-system',
    name: 'Banking Transaction Management System',
    tagline: 'High-throughput double-entry ledger, transaction reconciliation engine, and automated fraud heuristic monitor.',
    category: 'Fintech & Cloud',
    problem:
      'Financial applications require ACID-compliant transactional integrity, atomic balance settlements, double-entry guarantees, and anomaly detection to prevent overdraft race conditions and fraudulent behavior.',
    solution:
      'Engineered an enterprise financial ledger adhering to the double-entry bookkeeping standard. Features cryptographic transaction hashes, account balance locks, automated end-of-day reconciliation audits, and real-time velocity-based fraud anomaly heuristics.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'React', 'Tailwind CSS'],
    features: [
      'ACID-compliant double-entry ledger with debit/credit balance validation',
      'Pessimistic database locking to prevent concurrent balance overdrafts',
      'Real-time rule-based fraud detection (velocity checks, geographical anomalies)',
      'Automated batch settlement & reconciliation engine with anomaly reports',
      'Full audit trail logging with SHA-256 state chain verification'
    ],
    architecture:
      'FastAPI services backed by PostgreSQL with strict foreign keys, check constraints, and indexed audit tables. Dockerized container setup with simulated high-concurrency stress test scripts.',
    githubUrl: 'https://github.com/niraj7780/banking-transaction-system',
    status: 'Production',
    featured: true,
    completionDate: '2024-04',
    metrics: [
      { label: 'Data Integrity', value: '100% ACID' },
      { label: 'Concurrent Tests', value: '1,000 tx/sec' }
    ],
    highlight: 'Rigorous transactional safety preventing race conditions across concurrent balance updates.'
  },
  {
    id: 'crevix-creator-automation',
    name: 'Crevix — Creator Automation SaaS',
    tagline: 'Multi-channel social scheduling, automated carousel generation, and content repurposing pipeline.',
    category: 'SaaS & Automation',
    problem:
      'Content creators and agencies spend 15+ hours weekly reformatting single video or article ideas into multi-slide carousels, platform-tailored captions, and scheduling across diverse networks.',
    solution:
      'Architected a SaaS automation platform that transforms long-form text or video transcripts into designed 1080x1350 multi-slide carousels, generates niche-specific hooks, and schedules multi-platform deployment via webhooks and official APIs.',
    techStack: ['Next.js 14', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'Puppeteer', 'Supabase'],
    features: [
      'Automated long-form to 10-slide carousel generator with typographic themes',
      'Server-side headless browser rendering for high-DPI image exports',
      'AI hook generator testing 26 proven viral engagement patterns',
      'Drag-and-drop editorial calendar with scheduled queue delivery',
      'Workspace collaboration and client post approval workflows'
    ],
    architecture:
      'Next.js web client with Supabase authentication and Row Level Security (RLS). Background Python worker handles heavy asset rendering and programmatic image compositing.',
    githubUrl: 'https://github.com/niraj7780/crevix-automation',
    liveDemoUrl: 'https://crevix.vercel.app',
    status: 'Active Development',
    featured: true,
    completionDate: '2024-11',
    metrics: [
      { label: 'Time Saved per Post', value: '45 mins' },
      { label: 'Export Resolution', value: '1080x1350 HD' }
    ],
    highlight: 'Generates branded, publication-ready carousels in under 10 seconds from raw text.'
  },
  {
    id: 'incidentpilot',
    name: 'IncidentPilot SRE Assistant',
    tagline: 'Automated site reliability incident triaging, log diagnosis, and runbook remediation dispatcher.',
    category: 'SaaS & Automation',
    problem:
      'When production services trigger alerts, on-call engineers must manually comb through disparate logs, trace error spikes, and locate correct runbooks, lengthening Mean Time To Resolution (MTTR).',
    solution:
      'Built an intelligent SRE bot that receives alert webhooks from Datadog/Prometheus, automatically queries relevant application log windows, isolates stack traces, maps them against internal runbooks, and proposes immediate diagnostic steps.',
    techStack: ['Python', 'FastAPI', 'Docker', 'Gemini API', 'PostgreSQL', 'Tailwind CSS', 'React'],
    features: [
      'Webhook ingestion supporting Alertmanager and custom incident webhooks',
      'Automated log anomaly isolation and error clustering',
      'Semantic runbook retrieval for matching error signatures',
      'Automated Slack/Discord notification briefs with severity recommendations',
      'Post-mortem draft generation summarizing timeline and root cause'
    ],
    architecture:
      'Event-driven FastAPI architecture running in Docker. Ingests webhooks asynchronously, analyzes logs using semantic embedding similarity, and prepares structured incident triage cards.',
    githubUrl: 'https://github.com/niraj7780/incidentpilot',
    status: 'Active Development',
    featured: false,
    completionDate: '2024-08',
    metrics: [
      { label: 'Triage Acceleration', value: '60% MTTR reduction' },
      { label: 'Alert Ingestion', value: '< 1.2s' }
    ],
    highlight: 'Transforms noisy log dumps into structured 5-bullet incident briefs within seconds.'
  },
  {
    id: 'business-lead-automation',
    name: 'Business Lead Automation Pipeline',
    tagline: 'High-precision lead scraping, data enrichment, validation, and automated CRM synchronization engine.',
    category: 'SaaS & Automation',
    problem:
      'Sales and business development teams waste valuable hours manually hunting company contacts, verifying email deliverables, and copy-pasting records into CRMs.',
    solution:
      'Designed an end-to-end Python automation pipeline that discovers target B2B prospects, enriches corporate domain records, verifies MX records and mailbox validity, and synchronizes qualified leads directly to CRM databases.',
    techStack: ['Python', 'Playwright', 'BeautifulSoup', 'FastAPI', 'Pandas', 'PostgreSQL', 'SMTP Verifier'],
    features: [
      'Resilient headless browser scraping with rotating user-agents and throttling',
      'Domain data enrichment (tech stack detection, employee sizing, LinkedIn URLs)',
      'Real-time SMTP handshake email deliverability validation (zero-bounce focus)',
      'Deduplication and data normalization pipeline',
      'Automated bidirectional synchronization with HubSpot/Pipedrive or custom SQL'
    ],
    architecture:
      'Modular Python automation CLI and scheduled background workers. Incorporates exponential backoff, proxy rotation, and structured JSON logging with error recovery.',
    githubUrl: 'https://github.com/niraj7780/business-lead-automation',
    status: 'Production',
    featured: false,
    completionDate: '2024-06',
    metrics: [
      { label: 'Deliverability Rate', value: '98.2%' },
      { label: 'Enrichment Speed', value: '500 leads/hr' }
    ],
    highlight: 'Delivers 98%+ validated contact data directly into operational CRMs with zero manual intervention.'
  }
];
