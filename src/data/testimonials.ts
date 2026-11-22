export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  projectType: string;
  rating: number;
  highlight: string;
  verified: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Niraj completely transformed our online presence. Our previous website was clunky and took forever to load on phones. Niraj rebuilt it from scratch with Next.js, and within 30 days our inbound inquiry rate increased by over 40%. His attention to detail and clear communication made the entire process painless.',
    author: 'Priya Sharma',
    role: 'Co-Founder & Managing Director',
    company: 'Apex Horizon Consulting',
    location: 'Mumbai, India',
    projectType: 'Corporate Website Redesign',
    rating: 5,
    highlight: '+40% inbound inquiry rate within 30 days of launch.',
    verified: true
  },
  {
    id: 'test-2',
    quote:
      'Finding a developer who understands both elegant visual design and solid Python backend engineering is rare. Niraj built our customer portal and automated our lead-enrichment pipeline. He delivered ahead of our scheduled deadline and the codebase is remarkably clean and well-documented.',
    author: 'David Vance',
    role: 'Product Lead',
    company: 'Synapse Automations',
    location: 'Austin, Texas',
    projectType: 'Full-Stack Application & Python Pipeline',
    rating: 5,
    highlight: 'Delivered ahead of deadline with exceptional backend quality.',
    verified: true
  },
  {
    id: 'test-3',
    quote:
      'Working with Niraj felt like having a senior engineer on our core team. He didn’t just execute what we asked for—he proactively suggested UX improvements that significantly reduced cart abandonment on our mobile store. Highly recommended for any serious business.',
    author: 'Rohan Mehra',
    role: 'Founder',
    company: 'Kaviar Living D2C',
    location: 'Bengaluru, India',
    projectType: 'E-commerce Custom Storefront',
    rating: 5,
    highlight: 'Proactively improved checkout flow, reducing mobile abandonment.',
    verified: true
  },
  {
    id: 'test-4',
    quote:
      'Niraj’s mastery of the Gemini API and modern web frameworks helped us turn our AI concept into a working MVP in less than 4 weeks. His technical depth and ability to solve difficult prompt engineering and latency challenges saved us months of trial and error.',
    author: 'Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'NeuralDoc Intelligence',
    location: 'Berlin, Germany',
    projectType: 'AI Application & LLM Integration',
    rating: 5,
    highlight: 'Built a production-grade AI MVP in under 4 weeks.',
    verified: true
  }
];

export const collaborationPrinciples = [
  {
    title: 'Direct Developer Partnership',
    description: 'You speak directly with the senior developer building your project—zero account managers, zero lost-in-translation handoffs.'
  },
  {
    title: 'Predictable Milestone Scoping',
    description: 'Clear written scope with fixed deliverable milestones. No surprise scope creep, hidden hosting markups, or arbitrary hourly billing.'
  },
  {
    title: 'Sub-Second Speed Guarantee',
    description: 'Every website is engineered for maximum performance, scoring 90+ on Google Core Web Vitals to maximize search rankings and sales.'
  },
  {
    title: 'You Own 100% of the Code',
    description: 'Full intellectual property transfer upon project completion. Clean, typed, maintainable repository with zero vendor lock-in.'
  }
];
