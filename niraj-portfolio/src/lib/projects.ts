export type ProjectCategory =
  | "ai"
  | "fullstack"
  | "backend"
  | "frontend"
  | "automation"
  | "tools"
  | "education";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  category: ProjectCategory;
  githubUrl: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "maintained";
  statusNote?: string;
  learned: string;
  highlights: string[];
}

export const featuredProjects: Project[] = [
  {
    id: "careerlens",
    name: "CareerLens AI",
    tagline: "Turn a resume into a realistic career roadmap",
    description:
      "A resume analysis platform: upload a PDF or DOCX resume, and a FastAPI backend extracts the text, sends it to Gemini for structured analysis, and returns career paths with a skill-gap map and learning plan.",
    problem:
      "Generic career advice ignores a person's actual background. CareerLens answers a specific question: based on this resume, what roles are realistic next, and what should be learned to reach them?",
    solution:
      "Separate Next.js frontend and FastAPI backend. PDFs are parsed with PyMuPDF and DOCX files with python-docx; Gemini returns skills, experience, education, career paths, skill gaps, and a learning plan. The API key stays server-side.",
    features: [
      "Resume upload for PDF and DOCX with validation on the client and API",
      "FastAPI backend with multipart upload handling and environment-based API keys",
      "Gemini analysis covering skills, experience, education, career paths, and next steps",
      "Loading, error, and unreadable-file states in the interface",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "FastAPI",
      "Python",
      "PyMuPDF",
      "python-docx",
      "google-genai",
    ],
    category: "ai",
    githubUrl: "https://github.com/niraj7780/CareerLens-resume-",
    status: "completed",
    learned:
      "How to split a product into a static frontend and a Python API, parse real documents, and keep model output structured enough to render.",
    highlights: [
      "Two-service architecture: Next.js frontend and a separate Python API",
      "Handles malformed or unreadable resumes with user-readable error responses",
      "AI output structured around career paths and next-step learning",
    ],
  },
  {
    id: "minigpt",
    name: "MiniGPT",
    tagline: "A GPT-style language model built from scratch",
    description:
      "A small transformer language model written from the ground up in PyTorch: tokenizer, causal self-attention, training loop, checkpointing, and generation, with no external AI API and no pretrained weights.",
    problem:
      "Calling an AI API teaches almost nothing about how language models work internally. The only way to understand attention, masking, and next-token prediction is to implement them.",
    solution:
      "model.py implements token and position embeddings, multi-head causal self-attention with triangular masking, feed-forward blocks with residual connections, and layer normalization. train.py batches a custom text corpus and saves a checkpoint; tokenizer.py handles character-level tokens; chatbot.py provides a CLI generation loop.",
    features: [
      "Character-level tokenizer with encode and decode utilities",
      "Multi-head causal self-attention with masked attention scores",
      "Transformer blocks with residual connections and layer normalization",
      "Training loop with batching, loss tracking, checkpoint saving, and temperature sampling",
    ],
    techStack: ["Python", "PyTorch", "NumPy"],
    category: "ai",
    githubUrl: "https://github.com/niraj7780/my-own-ai-chat-bot",
    status: "completed",
    learned:
      "The mechanics behind attention masks, residual streams, positional information, and the train-save-reload-generate workflow.",
    highlights: [
      "No Hugging Face and no pretrained weights: every component implemented by hand",
      "README documents the architecture and the learning goal",
      "Checkpoint-based workflow: train, save, reload, generate",
    ],
  },
  {
    id: "devcode",
    name: "DevCode Online Compiler",
    tagline: "Browser compiler with Docker-sandboxed execution",
    description:
      "An online compiler and code playground using the Monaco editor. Code runs inside locked-down Docker containers rather than on the host, with each language toolchain shipped as an image.",
    problem:
      "Running untrusted code safely is the hard part of an online compiler. Naive implementations execute user code directly on the server.",
    solution:
      "An Express server runs each submission in a sandbox container with networking disabled, a read-only root filesystem, dropped capabilities, memory/CPU/PID limits, and a hard wall-clock timeout. Monaco provides syntax highlighting and IntelliSense; separate stdin and output panes report compile errors, runtime errors, and timeouts.",
    features: [
      "Sandbox hardening: network disabled, read-only root filesystem, dropped capabilities",
      "Memory, CPU, and PID limits with wall-clock timeouts",
      "Monaco editor with syntax highlighting, bracket pairing, and a minimap",
      "Self-hosted assets plus Docker Compose for a full local deployment",
    ],
    techStack: [
      "Node.js",
      "Express",
      "TypeScript",
      "Monaco Editor",
      "Docker",
      "Docker Compose",
      "Vercel",
    ],
    category: "tools",
    githubUrl: "https://github.com/niraj7780/compiler-",
    liveUrl: "https://compiler-eosin-gamma.vercel.app",
    status: "maintained",
    statusNote:
      "The Vercel demo runs the language subset available on the host. Docker runs the full set.",
    learned:
      "Threat modeling for untrusted code, container isolation, resource limits, and the operational difference between a demo host and a real sandbox host.",
    highlights: [
      "Security-first execution model instead of eval() on the host",
      "Custom Docker images per language with a warm-up script",
      "Honest deployment docs: Vercel runs a subset, Docker runs all languages",
    ],
  },
  {
    id: "medai",
    name: "MedAI Medical Query Generator",
    tagline: "Educational medical Q&A with safety boundaries",
    description:
      "A Flask web app that answers medical questions with structured, educational information from Google Gemini. A detailed system prompt enforces safety boundaries, and an explicit disclaimer is appended to every response.",
    problem:
      "Medical search results are often unstructured or unsafe. A helpful assistant here must be clear about what it is not: it does not diagnose, does not prescribe, and must escalate emergency symptoms.",
    solution:
      "app.py exposes a small Flask API. The system prompt asks the model to explain issues in plain language, list common causes and warning signs, give general self-care context, state when to see a doctor, and recommend emergency care when symptoms could indicate an emergency.",
    features: [
      "Gemini integration through the official SDK with the key loaded from .env",
      "Medical safety prompt: no diagnosis, no prescriptions, emergency escalation",
      "Disclaimer appended to every response",
      "Graceful API error handling with user-readable messages",
    ],
    techStack: ["Python", "Flask", "Google Gemini API", "HTML", "CSS", "JavaScript"],
    category: "ai",
    githubUrl: "https://github.com/niraj7780/MedAI-Medical-Query-Generator",
    status: "completed",
    statusNote:
      "The public demo is currently unavailable, so no live link is shown. Run it locally with a Gemini API key.",
    learned:
      "How prompt constraints shape model behavior, and why an informational prototype must state its limits clearly.",
    highlights: [
      "Informational prototype only, explicitly not a clinical tool",
      "Prompt engineering as the core safety mechanism",
      "Serverless deployment of a Flask app on Vercel",
    ],
  },
  {
    id: "nirajversant",
    name: "NirajVersant",
    tagline: "English proficiency practice for Versant-style tests",
    description:
      "A free practice platform for Versant-format English assessments: 15 complete tests covering speaking, sentence building, conversations, sentence completion, dictation, and passage reconstruction.",
    problem:
      "Practice material for English proficiency tests is scarce and often paid. Candidates need realistic timed practice with immediate feedback.",
    solution:
      "A self-contained HTML application with no build step. The test structure follows the documented format: 70 questions across six parts, roughly 30 minutes, with a practice score out of 80. Speaking sections use browser speech recognition and speech synthesis; results are practice-only.",
    features: [
      "15 full practice tests following the documented Versant structure",
      "Speaking sections use the Web Speech API for recognition and playback",
      "Typing, dictation, and passage reconstruction exercises",
      "Sentence library and quick practice mode with no accounts or tracking",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    category: "education",
    githubUrl: "https://github.com/niraj7780/nirajversant",
    liveUrl: "https://nirajversant.vercel.app",
    status: "completed",
    learned:
      "Browser speech APIs, test-state management in a single-page app, and scoring that is transparent about being practice-only.",
    highlights: [
      "Independent practice tool, clearly unaffiliated with Pearson or the official test",
      "Self-contained static app: one HTML file, no dependencies, no build step",
      "Scores are practice-only and labeled as unofficial by the project itself",
    ],
  },
  {
    id: "ecom",
    name: "Django E-Commerce",
    tagline: "A complete purchase flow in Django",
    description:
      "An e-commerce application covering the full path from account creation to checkout: authentication, product catalog, cart with quantity management, address book, Stripe checkout, and order history.",
    problem:
      "Tutorial e-commerce projects usually stop at product CRUD. The integration work around sessions, carts, payments, and orders is where the real learning happens.",
    solution:
      "Django 3.2 with a reusable app structure: core for products, cart, and orders; djecommerce for settings. Authentication uses django-allauth, payments use Stripe Checkout, forms use crispy-forms, and static files are served through Whitenoise with Gunicorn as the production server.",
    features: [
      "Authentication and registration through django-allauth",
      "Product catalog and detail pages driven by Django models",
      "Session cart with quantity management and order summary",
      "Stripe Checkout integration and multiple saved addresses",
    ],
    techStack: [
      "Python",
      "Django 3.2",
      "django-allauth",
      "Stripe",
      "SQLite / PostgreSQL",
      "Bootstrap",
      "Gunicorn",
      "Whitenoise",
    ],
    category: "fullstack",
    githubUrl: "https://github.com/niraj7780/ecom",
    status: "completed",
    learned:
      "How sessions, cart state, payment callbacks, and order records fit together in a server-rendered Django application.",
    highlights: [
      "Server-rendered Django architecture with class-based views",
      "Payment flow wired through Stripe Checkout",
      "Deployment-oriented settings: environment config, Whitenoise, Gunicorn",
    ],
  },
];

export const secondaryProjects = [
  {
    id: "bank",
    name: "Bank Management System",
    description:
      "A Tkinter desktop application with manager, employee, and customer views, account operations, transactions, and reporting on top of SQLite.",
    techStack: ["Python", "Tkinter", "SQLite"],
    githubUrl: "https://github.com/niraj7780/Bank",
    category: "backend" as const,
  },
  {
    id: "alltools",
    name: "All Tools In One Place",
    description:
      "A Next.js utility platform with routed tool categories, including JSON formatting, password generation, QR codes, PDF generation, and file compression.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Radix UI", "Tailwind CSS"],
    githubUrl: "https://github.com/niraj7780/alltoolinoneplace",
    category: "tools" as const,
  },
  {
    id: "weather-bot",
    name: "Weather Alert Bot",
    description:
      "Checks the next hours of forecast with the OpenWeather API and sends a rain alert over WhatsApp via Twilio, plus an Expo/React Native screen that queries the same backend.",
    techStack: ["Python", "FastAPI", "React Native", "OpenWeather API", "Twilio"],
    githubUrl: "https://github.com/niraj7780/weather_alert_bot",
    liveUrl: "https://weather-alert-bot.vercel.app",
    category: "automation" as const,
  },
  {
    id: "file-converter",
    name: "File Converter",
    description:
      "A small static file-conversion utility deployed on Vercel, focused on a single task with no account or upload server required.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/niraj7780/fileconvertor",
    liveUrl: "https://fileconvertor-one.vercel.app",
    category: "tools" as const,
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / ML" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
  { id: "education", label: "Education" },
] as const;

export const featuredRepoNames = featuredProjects.map(
  (project) => project.githubUrl.split("/").pop()?.toLowerCase() ?? ""
);
