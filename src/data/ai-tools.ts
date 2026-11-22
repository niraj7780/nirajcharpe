export interface AiToolService {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  problemSolved: string;
  architecture: string;
  businessRoi: string;
  deliverables: string[];
  techStack: string[];
}

export const aiToolsServices: AiToolService[] = [
  {
    id: 'document-rag',
    number: '01',
    title: 'Internal Document Knowledge Grounding (RAG)',
    shortDesc: 'Connect internal PDFs, technical documentation, spreadsheets, and manuals into an intelligent, searchable question-answering assistant.',
    problemSolved: 'Employees and clients waste countless hours searching across sprawling folders, wikis, and manuals for specific policies or product specs.',
    architecture: 'Document chunking engine with vector embeddings (Gemini/HuggingFace), stored in PostgreSQL pgvector or ChromaDB, retrieved via cosine similarity and grounded with zero data leakage.',
    businessRoi: 'Reduces internal lookup time by 80% while keeping proprietary enterprise data completely isolated on private server backends.',
    deliverables: [
      'Document parsing pipeline for PDF, DOCX, CSV, and Markdown',
      'Vector database setup with semantic similarity scoring',
      'Citation linking returning exact document pages and sources',
      'Private API broker ensuring client data is never used for model training'
    ],
    techStack: ['Python', 'FastAPI', 'Gemini API', 'pgvector', 'PostgreSQL', 'LangChain']
  },
  {
    id: 'text-to-sql-agent',
    number: '02',
    title: 'Autonomous Business Data Agent (Text-to-SQL)',
    shortDesc: 'Empower executive teams and non-technical stakeholders to ask questions in plain English and receive instant verified SQL queries, data tables, and charts.',
    problemSolved: 'Business teams wait days for overloaded data analysts to write ad-hoc SQL queries and generate simple exploratory reports.',
    architecture: 'Schema ingestion engine that feeds table context to an LLM loop, validates SQL syntax in a read-only sandbox, executes on PostgreSQL, and formats results into dynamic SVG graphs.',
    businessRoi: 'Delivers instant self-serve analytics to founders and department heads within seconds, eliminating data team backlogs.',
    deliverables: [
      'Natural language to SQL compiler with self-correction error loops',
      'Read-only sandboxed database connection with timeout protections',
      'Dynamic interactive chart visualizer (Bar, Line, Donut)',
      '1-click Markdown and PDF executive report generator'
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Pandas', 'Gemini API', 'React']
  },
  {
    id: 'intake-triage-assistant',
    number: '03',
    title: 'Intelligent Clinical & Client Intake Triage',
    shortDesc: 'Interactive intake interviewer that clarifies user needs, cross-references urgency protocols, and generates standardized summaries for attending staff.',
    problemSolved: 'Service businesses and medical clinics spend valuable senior staff hours asking standard preliminary qualification questions.',
    architecture: 'Conversational state machine with clinical/business guardrails. Evaluates urgency levels against standardized triage criteria and formats standardized intake briefs.',
    businessRoi: 'Accelerates intake turnaround by 50%, identifies high-urgency cases immediately, and ensures zero missing intake fields.',
    deliverables: [
      'Dynamic multi-turn symptom or client qualification questionnaire',
      'Real-time urgency level badging with immediate notification triggers',
      'Standardized SBAR clinical or RFP executive summary generator',
      'Strict PII data scrub mode adhering to privacy hygiene'
    ],
    techStack: ['Next.js', 'FastAPI', 'Python', 'Gemini API', 'Tailwind CSS']
  },
  {
    id: 'content-repurposing-engine',
    number: '04',
    title: 'AI Content Repurposing & Multi-Slide Carousel Generator',
    shortDesc: 'Transform raw video transcripts, newsletters, or long articles into high-DPI 1080x1350 multi-slide carousels, viral hooks, and platform-tailored posts.',
    problemSolved: 'Creators and agencies spend 15+ hours weekly manually chopping long-form articles into social slides, hook variants, and summaries.',
    architecture: 'Headless browser rendering pipeline that extracts core thesis points using an LLM, structures copy across 10 slides, and programmatically renders publication-ready images.',
    businessRoi: 'Saves 45 minutes per social asset, increases organic reach by 3x through consistent multi-slide visual formats.',
    deliverables: [
      'Long-form transcript to slide-by-slide copy generator',
      'Headless browser rendering producing crisp 1080x1350 PNG/PDF files',
      'AI hook generator testing 26 proven viral engagement patterns',
      'Automated multi-network caption and hashtag formatter'
    ],
    techStack: ['Next.js', 'Node.js', 'Python', 'Puppeteer', 'Tailwind CSS']
  },
  {
    id: 'ats-resume-scanner',
    number: '05',
    title: 'Intelligent ATS Candidate Screening & Gap Analyzer',
    shortDesc: 'Parse incoming candidate CVs against target job descriptions, computing exact competency matches and generating objective recruitment briefs.',
    problemSolved: 'Recruiting teams drown in hundreds of resumes, missing qualified talent due to manual skimming and unstructured document formats.',
    architecture: 'Multi-format document extractor connected to an LLM semantic evaluator that extracts technical skills, years of experience, and calculates objective match percentages.',
    businessRoi: 'Cuts candidate screening time from 15 minutes down to 10 seconds per resume with zero human bias.',
    deliverables: [
      'Multi-format parser for PDF, DOCX, and TXT resumes',
      'Semantic keyword extraction and skill gap matrix',
      'Objective qualification score (0-100%) with reasoning bullet points',
      'Recruiter cheat-sheet highlighting verified strengths and missing criteria'
    ],
    techStack: ['Python', 'FastAPI', 'PyPDF2', 'Gemini API', 'Next.js']
  },
  {
    id: 'hallucination-free-chatbots',
    number: '06',
    title: 'Domain-Specific Chatbots with Strict Guardrails',
    shortDesc: 'Customer-facing conversational assistants that only answer from verified company facts, refusing out-of-scope inquiries and adhering to brand tone.',
    problemSolved: 'Generic chatbots frequently hallucinate inaccurate pricing, make false promises, or answer embarrassing competitor questions.',
    architecture: 'Dual-pass verification loop: First pass retrieves knowledge base snippets, second pass validates that the drafted response is 100% supported by the retrieved context before sending.',
    businessRoi: 'Handles 70% of routine customer support tickets around the clock with zero reputational risk or incorrect facts.',
    deliverables: [
      'Streaming markdown chat interface with sub-200ms initial token response',
      'Fallback routing to human support agents when confidence is below 95%',
      'Strict negative constraint guardrails preventing competitive commentary',
      'Token usage tracking, rate-limiting, and conversation audit log'
    ],
    techStack: ['React', 'Next.js', 'FastAPI', 'Gemini API', 'Tailwind CSS']
  },
  {
    id: 'multimodal-document-extractor',
    number: '07',
    title: 'Multimodal Invoice, Receipt & Document Data Extraction',
    shortDesc: 'Ingest scanned invoices, receipts, and contracts to extract structured JSON data (amounts, tax, line items, dates) directly into your database.',
    problemSolved: 'Accounting and operations teams manually retype data from PDF invoices into accounting software, causing expensive errors.',
    architecture: 'Multimodal vision model parsing raw images and PDFs, paired with Pydantic JSON schema validation that enforces exact numerical types and checksum totals.',
    businessRoi: 'Eliminates 95% of manual invoice entry labor and eliminates data entry transcription typos.',
    deliverables: [
      'Multimodal image & PDF OCR extraction pipeline',
      'Mathematical balance validation verifying subtotal + tax = total',
      'Automated export to CSV, JSON, or direct database sync',
      'Flagging mechanism for low-resolution or corrupted receipts'
    ],
    techStack: ['Python', 'FastAPI', 'Gemini Multimodal API', 'Pydantic', 'PostgreSQL']
  },
  {
    id: 'code-review-security-auditor',
    number: '08',
    title: 'Automated Code Review & Security Vulnerability Scanner',
    shortDesc: 'Continuous integration bot that inspects Git pull requests, highlighting SQL injection vulnerabilities, auth flaws, and performance bottlenecks.',
    problemSolved: 'Senior software architects spend half their week reviewing boilerplate code and catching basic security flaws.',
    architecture: 'GitHub webhook listener that diffs PR commits, analyzes abstract syntax trees against common CVEs and architectural patterns, and posts inline review comments.',
    businessRoi: 'Catches critical security and memory leaks before they ever reach production, freeing senior staff for high-level roadmap planning.',
    deliverables: [
      'GitHub Action / Webhook bot for automated pull request inspection',
      'OWASP Top 10 vulnerability checks and dependency flaw alerts',
      'Inline GitHub review comments with proposed code replacements',
      'Weekly engineering security audit scorecards'
    ],
    techStack: ['Python', 'Docker', 'GitHub API', 'FastAPI', 'Gemini API']
  }
];
