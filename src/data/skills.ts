export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Expert' | 'Specialist';
    highlights: string;
    tags: string[];
  }[];
}

export const skillsData: SkillGroup[] = [
  {
    category: 'Frontend Development',
    description: 'Crafting responsive, high-performance, and visually captivating user interfaces with modern toolchains.',
    skills: [
      {
        name: 'React',
        level: 'Expert',
        highlights: 'Component architecture, custom hooks, state optimization, server-state sync, and high-frequency UI updates.',
        tags: ['Hooks', 'Context', 'Performance', 'JSX']
      },
      {
        name: 'Next.js (App Router)',
        level: 'Expert',
        highlights: 'Server Components, dynamic routing, streaming SSR, API route handlers, and SEO metadata orchestration.',
        tags: ['RSC', 'SSR', 'Edge Functions', 'SEO']
      },
      {
        name: 'TypeScript',
        level: 'Expert',
        highlights: 'Strict type safety, generics, discriminated unions, schema inference with Zod, and full-stack contracts.',
        tags: ['Generics', 'Type Inference', 'Zod', 'Safety']
      },
      {
        name: 'Tailwind CSS',
        level: 'Expert',
        highlights: 'Design token architecture, custom theme extensions, responsive layout engineering, and dark-mode paradigms.',
        tags: ['Utility-First', 'JIT', 'Responsive', 'Themes']
      },
      {
        name: 'Framer Motion',
        level: 'Advanced',
        highlights: 'Physics-based spring animations, layout transitions, scroll-linked choreography, and micro-interactions.',
        tags: ['AnimatePresence', 'Gestures', 'LayoutSprings']
      },
      {
        name: 'Three.js / WebGL',
        level: 'Advanced',
        highlights: 'Interactive 3D geometry rendering, WebGL lighting, particle systems, orbit controls, and mobile GPU performance.',
        tags: ['3D Canvas', 'Particles', 'Shaders', 'WebGL']
      },
      {
        name: 'HTML5 & Modern CSS',
        level: 'Expert',
        highlights: 'Semantic accessibility (a11y), CSS Grid, Flexbox, custom properties, and cross-browser rendering fidelity.',
        tags: ['Semantic HTML', 'CSS Grid', 'a11y', 'Web APIs']
      },
      {
        name: 'JavaScript (ESNext)',
        level: 'Expert',
        highlights: 'Asynchronous event loops, DOM performance, Web Workers, Canvas API, and modern ECMAScript features.',
        tags: ['Async/Await', 'Event Loop', 'Canvas', 'ES6+']
      }
    ]
  },
  {
    category: 'Backend & APIs',
    description: 'Building robust, scalable service layers with robust data contracts and high-throughput execution.',
    skills: [
      {
        name: 'Python',
        level: 'Expert',
        highlights: 'Object-oriented architecture, asynchronous concurrency, script automation, data scraping, and API development.',
        tags: ['Asyncio', 'Automation', 'Data Pipelines', 'OOP']
      },
      {
        name: 'FastAPI',
        level: 'Expert',
        highlights: 'High-speed async REST endpoints, Pydantic data schemas, dependency injection, and automatic OpenAPI generation.',
        tags: ['Pydantic', 'Async Endpoints', 'Swagger', 'Dependency Injection']
      },
      {
        name: 'Flask',
        level: 'Advanced',
        highlights: 'Lightweight microservices, blueprint modularity, custom middleware, and Jinja/REST hybrid applications.',
        tags: ['Microservices', 'Blueprints', 'Middleware']
      },
      {
        name: 'Node.js',
        level: 'Advanced',
        highlights: 'Event-driven architectures, stream processing, filesystem pipelines, and headless automation.',
        tags: ['Event-Driven', 'Streams', 'CLI Tools', 'Express']
      },
      {
        name: 'RESTful API Architecture',
        level: 'Expert',
        highlights: 'Resource-oriented design, HTTP status hygiene, rate-limiting, error schema standardization, and pagination.',
        tags: ['API Design', 'Versioning', 'Rate Limiting', 'JSON Schema']
      }
    ]
  },
  {
    category: 'AI & Automation Engineering',
    description: 'Bridging large language models and intelligent automation to solve tangible business workflows.',
    skills: [
      {
        name: 'Gemini API & LLM Integration',
        level: 'Specialist',
        highlights: 'Structured JSON schema outputs, multi-turn system prompts, function calling, multimodal prompts, and low-latency streaming.',
        tags: ['Structured Output', 'Prompt Engineering', 'Function Calling', 'RAG']
      },
      {
        name: 'AI Chatbots & Agents',
        level: 'Specialist',
        highlights: 'Autonomous agent loops, conversational memory structures, fallback routing, and goal-directed task orchestration.',
        tags: ['Agent Loops', 'Memory Management', 'Guardrails', 'Tool Use']
      },
      {
        name: 'Python Automation',
        level: 'Specialist',
        highlights: 'Headless browser automation (Playwright/Selenium), scheduled ETL jobs, lead scrapers, and file processing.',
        tags: ['Playwright', 'BeautifulSoup', 'Cron Jobs', 'ETL Pipelines']
      },
      {
        name: 'AI-Assisted Workflows',
        level: 'Expert',
        highlights: 'Accelerated development loops, automated test scaffolding, code refactoring pipelines, and AI copilot optimization.',
        tags: ['Dev Productivity', 'Prompt Chaining', 'Evaluation Loops']
      },
      {
        name: 'PyTorch Basics & Machine Learning',
        level: 'Advanced',
        highlights: 'Tensor fundamentals, neural network training loops, transfer learning, and embeddings computation.',
        tags: ['Tensors', 'Embeddings', 'Model Inference', 'Pipelines']
      }
    ]
  },
  {
    category: 'Databases & Storage',
    description: 'Ensuring ACID transactional integrity, relational design, and optimized query access patterns.',
    skills: [
      {
        name: 'PostgreSQL',
        level: 'Expert',
        highlights: 'Relational schema design, indexes, JSONB operators, CTEs, connection pooling, and ACID guarantees.',
        tags: ['Relational Schema', 'Indexing', 'JSONB', 'ACID']
      },
      {
        name: 'SQL & Query Optimization',
        level: 'Expert',
        highlights: 'Complex joins, window functions, query plan analysis with EXPLAIN ANALYZE, and aggregation pipelines.',
        tags: ['Window Functions', 'Query Plans', 'Aggregations']
      },
      {
        name: 'SQL Server',
        level: 'Advanced',
        highlights: 'T-SQL stored procedures, enterprise relational tables, constraint definitions, and transaction logs.',
        tags: ['T-SQL', 'Stored Procedures', 'Constraints']
      },
      {
        name: 'Supabase / Cloud DBs',
        level: 'Advanced',
        highlights: 'Managed Postgres, Row Level Security (RLS) policies, realtime subscriptions, and storage buckets.',
        tags: ['RLS Policies', 'Realtime', 'Storage', 'Cloud DB']
      }
    ]
  },
  {
    category: 'Cloud, DevOps & Tooling',
    description: 'Modern deployment pipelines, version control protocols, and infrastructure automation.',
    skills: [
      {
        name: 'Git & GitHub',
        level: 'Expert',
        highlights: 'Feature-branch flows, interactive rebasing, merge hygiene, GitHub Actions CI/CD workflows, and release tagging.',
        tags: ['Version Control', 'Rebasing', 'GitHub Actions', 'CI/CD']
      },
      {
        name: 'Vercel Deployment',
        level: 'Expert',
        highlights: 'Zero-config edge deployment, serverless function optimization, environment variable security, and preview branches.',
        tags: ['Edge Network', 'Serverless', 'Preview Deploys']
      },
      {
        name: 'Render & Cloud Backends',
        level: 'Advanced',
        highlights: 'FastAPI web services, Docker container deployments, background workers, and managed databases.',
        tags: ['Containers', 'Web Services', 'Background Workers']
      },
      {
        name: 'Netlify',
        level: 'Advanced',
        highlights: 'Static site generation, serverless edge redirects, forms handling, and branch previews.',
        tags: ['Jamstack', 'Edge Redirects', 'Forms']
      },
      {
        name: 'Docker Fundamentals',
        level: 'Advanced',
        highlights: 'Multi-stage Dockerfiles, container isolation, local environment parity with docker-compose.',
        tags: ['Containers', 'Dockerfiles', 'Parity']
      }
    ]
  }
];
