export interface ProcessStep {
  stepNumber: number;
  title: string;
  shortDesc: string;
  duration: string;
  clientCommitment: string;
  deliverables: string[];
  details: string;
  keyQuestions: string[];
}

export const developmentProcess: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discovery & Consultation',
    shortDesc: 'Aligning on business goals, target audience, brand aesthetic, and core functional needs.',
    duration: '2 – 3 days',
    clientCommitment: '1 video call (45 mins) + brief questionnaire',
    deliverables: [
      'Comprehensive project brief & scope definition document',
      'Target user persona mapping & competitive benchmark review',
      'Technical architecture recommendation & host provider plan',
      'Transparent milestone schedule and milestone budget breakdown'
    ],
    details:
      'Every successful project begins with deep listening. Rather than jumping straight into code, we dissect what your business actually needs to achieve: lead volume, institutional authority, user engagement, or automated efficiency.',
    keyQuestions: [
      'Who is the ideal client or user arriving at this website?',
      'What single action must the visitor take before leaving?',
      'What existing websites in or out of your sector inspire your vision?'
    ]
  },
  {
    stepNumber: 2,
    title: 'Requirement Analysis & Technical Blueprint',
    shortDesc: 'Translating business goals into detailed user flows, page hierarchies, and technical architecture.',
    duration: '3 – 5 days',
    clientCommitment: 'Review and approval of the project blueprint',
    deliverables: [
      'Full website sitemap and information architecture diagram',
      'Detailed feature specification and data model schema',
      'API integration contracts and third-party dependency list',
      'Written scope sign-off to ensure zero unexpected cost overruns'
    ],
    details:
      'We eliminate ambiguity before a single line of production code is written. You receive a structured blueprint showing exactly what each page will contain, how users navigate, and how data moves.',
    keyQuestions: [
      'What specific third-party tools need integration (CRM, Stripe, Analytics)?',
      'What are the content requirements for each page section?',
      'Are there specific compliance or accessibility standards required?'
    ]
  },
  {
    stepNumber: 3,
    title: 'UI/UX Design & Interactive Wireframing',
    shortDesc: 'Crafting high-fidelity visual layouts, typography hierarchies, and intuitive component interactions.',
    duration: '5 – 8 days',
    clientCommitment: 'Feedback on design concepts (1 – 2 revision rounds)',
    deliverables: [
      'High-fidelity visual design mockups for desktop and mobile screens',
      'Tailored design system (Color palette, typography scale, component tokens)',
      'Interactive prototype demonstrating animations and user flows',
      'Asset preparation (optimized icons, typography, and illustration guidance)'
    ],
    details:
      'Design is how it works, not just how it looks. I craft clean, modern, electric-accented interfaces inspired by the best of contemporary digital product design—balancing brand elegance with clear conversion paths.',
    keyQuestions: [
      'Does this visual tone reflect the prestige and positioning of your brand?',
      'Is the call-to-action immediately obvious to a first-time visitor?',
      'How does the design feel on a mobile device screen?'
    ]
  },
  {
    stepNumber: 4,
    title: 'Full-Stack Development & Iteration',
    shortDesc: 'Writing clean, typed, modular code with Next.js, React, Tailwind CSS, and Python FastAPI.',
    duration: '1 – 4 weeks (depending on scope)',
    clientCommitment: 'Weekly progress demo reviews via private staging link',
    deliverables: [
      'Accessible private staging environment updated continuously with each sprint',
      'Modular, type-safe Next.js frontend with responsive Tailwind CSS components',
      'High-performance backend API routes and PostgreSQL database integration',
      'Weekly video walk-throughs demonstrating tangible completed features'
    ],
    details:
      'You are never left in the dark wondering about progress. You receive a private preview URL where you can test the live website as it takes shape, providing feedback during weekly development milestones.',
    keyQuestions: [
      'Are the interactive elements and transitions intuitive and responsive?',
      'Does the user flow feel effortless from start to finish?',
      'Are dynamic data and forms operating as specified?'
    ]
  },
  {
    stepNumber: 5,
    title: 'Testing, Security & Quality Assurance',
    shortDesc: 'Rigorous cross-device testing, Core Web Vitals optimization, accessibility audit, and security checks.',
    duration: '3 – 5 days',
    clientCommitment: 'Final client acceptance walkthrough and sign-off',
    deliverables: [
      'Cross-browser testing report (Chrome, Safari, Firefox, Edge)',
      'Mobile device responsiveness audit across modern iOS and Android screen sizes',
      'Google Lighthouse performance audit report (Targeting 90+ across all metrics)',
      'Form validation, error boundary, and anti-spam verification'
    ],
    details:
      'Before launch, every corner of the site is tested under real-world conditions. We verify mobile responsiveness, check form submission under poor network speeds, eliminate console errors, and ensure sub-second page transitions.',
    keyQuestions: [
      'Does every button, link, and interactive element work flawlessly?',
      'Does the site load instantly across mobile data connections?',
      'Are all forms delivering inquiries reliably to the designated inbox?'
    ]
  },
  {
    stepNumber: 6,
    title: 'Deployment, SEO Launch & Ongoing Support',
    shortDesc: 'Production deployment to global CDN edge servers, DNS setup, search engine indexing, and handover.',
    duration: '1 – 2 days',
    clientCommitment: 'Domain DNS access credentials for final launch',
    deliverables: [
      'Production deployment on high-availability edge infrastructure (Vercel / Render)',
      'Custom domain DNS configuration with automated SSL encryption',
      'Search Console sitemap submission and Google indexing verification',
      'Recorded video walkthrough guide explaining how to update content',
      'Included 30-day warranty window covering any post-launch issues'
    ],
    details:
      'Launch day is just the beginning of your website’s journey. I handle the entire technical rollout—DNS configuration, SSL certificate generation, search engine indexing, and provide a clear video guide so you feel in complete control.',
    keyQuestions: [
      'Is the domain resolving globally with active SSL encryption?',
      'Are analytics tracking events firing accurately?',
      'Do you have all credentials, source code access, and documentation?'
    ]
  }
];
