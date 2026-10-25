"use client";

import Link from "next/link";

const resumeStyles = `
  @page { margin: 1.6cm; size: A4; }
  @media print {
    .resume-print-ui { display: none !important; }
    .resume-page { box-shadow: none !important; border: none !important; padding: 0 !important; }
    .resume-page .project, .resume-page .exp-item { break-inside: avoid; }
  }
  .resume-page { max-width: 800px; margin: 0 auto; background: white; padding: 3rem; box-shadow: 0 0 0 1px #e5e5e5; color: #0f0f0f; }
  .resume-page .header { text-align: center; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 2px solid #e5e5e5; }
  .resume-page .name { font-size: 2.5rem; font-weight: 900; letter-spacing: -0.03em; margin: 0 0 0.25rem; }
  .resume-page .title { font-size: 1.1rem; color: #525252; margin: 0 0 1rem; }
  .resume-page .contacts { display: flex; justify-content: center; flex-wrap: wrap; gap: 0.35rem 0.8rem; font-size: 0.82rem; color: #525252; font-family: var(--font-geist-mono), monospace; }
  .resume-page .contacts a { color: #525252; text-decoration: none; }
  .resume-page .section { margin-bottom: 1.6rem; }
  .resume-page .section-title { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #4d7c0f; margin: 0 0 0.65rem; font-family: var(--font-geist-mono), monospace; border-bottom: 1px solid #e5e5e5; padding-bottom: 0.3rem; }
  .resume-page .summary { font-size: 0.9rem; color: #333; line-height: 1.65; margin: 0; }
  .resume-page .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.9rem 1.2rem; }
  .resume-page .skill-group h4 { font-size: 0.8rem; font-weight: 600; color: #1f1f1f; margin: 0 0 0.25rem; }
  .resume-page .skill-group p { font-size: 0.8rem; color: #525252; line-height: 1.55; margin: 0; }
  .resume-page .project { margin-bottom: 1.1rem; }
  .resume-page .project-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 0.25rem; flex-wrap: wrap; }
  .resume-page .project-name { font-size: 0.95rem; font-weight: 700; color: #0f0f0f; margin: 0; }
  .resume-page .project-tech { font-size: 0.7rem; color: #525252; font-family: var(--font-geist-mono), monospace; }
  .resume-page .project-desc { font-size: 0.8rem; color: #525252; line-height: 1.55; margin: 0 0 0.35rem; }
  .resume-page .project-highlights { font-size: 0.76rem; color: #737373; margin: 0; padding-left: 1.1rem; }
  .resume-page .project-highlights li { margin-bottom: 0.15rem; }
  .resume-page .exp-item { margin-bottom: 1rem; }
  .resume-page .exp-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.2rem; }
  .resume-page .exp-role { font-size: 0.92rem; font-weight: 700; color: #0f0f0f; }
  .resume-page .exp-company { font-size: 0.8rem; color: #525252; }
  .resume-page .exp-meta { font-size: 0.72rem; color: #737373; font-family: var(--font-geist-mono), monospace; white-space: nowrap; }
  .resume-page .exp-desc { font-size: 0.8rem; color: #525252; line-height: 1.55; margin: 0 0 0.35rem; }
  .resume-page .exp-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; }
  .resume-page .tag { font-size: 0.66rem; font-family: var(--font-geist-mono), monospace; color: #525252; background: #f5f5f5; padding: 0.12rem 0.4rem; border: 1px solid #e5e5e5; border-radius: 3px; }
  .resume-page .education-degree { font-size: 0.92rem; font-weight: 600; color: #0f0f0f; }
  .resume-page .education-meta { font-size: 0.75rem; color: #737373; font-family: var(--font-geist-mono), monospace; }
  .resume-page .note { font-size: 0.78rem; color: #737373; line-height: 1.55; margin: 0; }
  .print-btn, .download-btn { padding: 0.65rem 1.15rem; border-radius: 4px; font-weight: 600; cursor: pointer; font-family: inherit; font-size: 0.85rem; border: 1px solid #d4d4d4; background: white; color: #0f0f0f; text-decoration: none; display: inline-flex; align-items: center; }
  .print-btn:hover, .download-btn:hover { background: #f5f5f5; }
  .print-btn { background: #a3e635; border-color: #d5eb9e; }
  .print-btn:hover { background: #84cc16; }
`;

export default function ResumePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#fafafa] px-4 py-8">
      <style dangerouslySetInnerHTML={{ __html: resumeStyles }} />
      <div className="resume-print-ui mx-auto mb-4 flex max-w-[800px] flex-wrap justify-end gap-3">
        <Link
          href="/"
          className="download-btn"
        >
          Back to portfolio
        </Link>
        <a href="/resume.pdf" download="Niraj-Charpe-Resume.pdf" className="download-btn">
          Download PDF
        </a>
        <button type="button" className="print-btn" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>

      <div className="resume-page">
        <header className="header">
          <h1 className="name">Niraj Charpe</h1>
          <p className="title">Software Engineer at HCLTech</p>
          <div className="contacts">
            <a href="mailto:nirajcharpe48@gmail.com">nirajcharpe48@gmail.com</a>
            <span>·</span>
            <a
              href="https://github.com/niraj7780"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/niraj7780
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/niraj-charpe-7a2655355/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/niraj-charpe
            </a>
            <span>·</span>
            <span>Noida, India</span>
          </div>
        </header>

        <section className="section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary">
            Software engineer at HCLTech, building practical software across
            backend development, databases, web technologies, and AI. Completed
            Class 12 and developed programming foundations through professional
            experience and self-directed project work. Focused on backend
            engineering, database systems, and enterprise technologies.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-group">
              <h4>Used in projects</h4>
              <p>
                Python, JavaScript, TypeScript, React, Next.js, Tailwind CSS,
                FastAPI, Flask, Django, Node.js/Express, SQLite and PostgreSQL
                basics, Google Gemini API, PyTorch, Docker, Git, GitHub, Vercel,
                Monaco Editor
              </p>
            </div>
            <div className="skill-group">
              <h4>Practising / learning</h4>
              <p>
                Java, C++, SQL Server and MySQL fundamentals, data structures and
                algorithms, system design, testing (Jest, PyTest), CI/CD, SAP ABAP
                fundamentals, cloud fundamentals
              </p>
            </div>
            <div className="skill-group">
              <h4>Familiar with fundamentals</h4>
              <p>
                C, Linux and shell basics, REST API design, web security basics,
                Agile/Scrum, technical writing
              </p>
            </div>
            <div className="skill-group">
              <h4>Experience</h4>
              <p>
                HCLTech software engineering, enterprise systems, professional
                skills, Git workflows, SQL
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Featured Projects</h2>

          <article className="project">
            <div className="project-header">
              <h3 className="project-name">CareerLens AI</h3>
              <span className="project-tech">Next.js · FastAPI · Gemini · TypeScript</span>
            </div>
            <p className="project-desc">
              Resume analysis platform that parses PDF and DOCX resumes and maps
              skills to career paths with a skill-gap analysis and learning plan.
            </p>
            <ul className="project-highlights">
              <li>Multi-format resume parsing with client and server validation</li>
              <li>Gemini analysis for skills, experience, education, and career paths</li>
              <li>Separate FastAPI backend and Next.js frontend</li>
            </ul>
          </article>

          <article className="project">
            <div className="project-header">
              <h3 className="project-name">MiniGPT</h3>
              <span className="project-tech">Python · PyTorch · NumPy</span>
            </div>
            <p className="project-desc">
              GPT-style transformer language model built from scratch without
              external APIs. Implements character tokenization, causal
              self-attention, transformer blocks, training, checkpointing, and a CLI
              chatbot.
            </p>
            <ul className="project-highlights">
              <li>No pretrained weights; every component implemented by hand</li>
              <li>Multi-head causal self-attention with causal masking</li>
              <li>Training loop with loss tracking and checkpoint saving</li>
            </ul>
          </article>

          <article className="project">
            <div className="project-header">
              <h3 className="project-name">MedAI Medical Query Generator</h3>
              <span className="project-tech">Flask · Gemini API · Python</span>
            </div>
            <p className="project-desc">
              AI-powered medical information assistant with safety-focused prompt
              engineering, clear educational disclaimers, and emergency escalation
              guidance.
            </p>
            <ul className="project-highlights">
              <li>System prompt enforces no diagnosis and no prescriptions</li>
              <li>Disclaimer appended to every response</li>
              <li>Informational prototype only; not a clinical tool</li>
            </ul>
          </article>

          <article className="project">
            <div className="project-header">
              <h3 className="project-name">DevCode Online Compiler</h3>
              <span className="project-tech">Express.js · Monaco · Docker · TypeScript</span>
            </div>
            <p className="project-desc">
              Online compiler with hardened Docker sandboxing (network disabled,
              read-only root filesystem, resource limits) and a Monaco editor.
            </p>
            <ul className="project-highlights">
              <li>Sandbox hardening with CPU, memory, and PID limits</li>
              <li>Custom Docker images per language</li>
              <li>Full local Docker deployment and a Vercel language subset</li>
            </ul>
          </article>

          <article className="project">
            <div className="project-header">
              <h3 className="project-name">NirajVersant</h3>
              <span className="project-tech">HTML · CSS · JavaScript · Web Speech API</span>
            </div>
            <p className="project-desc">
              Free English proficiency practice platform with 15 Versant-format
              tests, automated practice scoring, speech recognition for speaking
              sections, and detailed feedback.
            </p>
            <ul className="project-highlights">
              <li>15 complete practice tests with 70 questions each</li>
              <li>Browser speech recognition and speech synthesis</li>
              <li>Self-contained static app with no accounts or tracking</li>
            </ul>
          </article>

          <article className="project">
            <div className="project-header">
              <h3 className="project-name">Django E-Commerce</h3>
              <span className="project-tech">Django · Stripe · SQLite / PostgreSQL</span>
            </div>
            <p className="project-desc">
              E-commerce application with authentication, product catalog, cart,
              Stripe Checkout, address management, and order history.
            </p>
            <ul className="project-highlights">
              <li>Authentication through django-allauth</li>
              <li>Cart, checkout, and order history end to end</li>
              <li>Production-oriented settings with Gunicorn and Whitenoise</li>
            </ul>
          </article>
        </section>

        <section className="section">
          <h2 className="section-title">Experience</h2>

          <article className="exp-item">
            <div className="exp-header">
              <div>
                <div className="exp-role">Software Engineer</div>
                <div className="exp-company">HCLTech · Noida, India</div>
              </div>
              <span className="exp-meta">Professional role</span>
            </div>
            <p className="exp-desc">
              Software engineering across programming fundamentals, databases,
              enterprise systems, cloud concepts, Git workflows, and professional
              skills.
            </p>
            <div className="exp-tags">
              <span className="tag">Programming</span>
              <span className="tag">Databases</span>
              <span className="tag">Enterprise systems</span>
              <span className="tag">Git</span>
              <span className="tag">Professional skills</span>
            </div>
          </article>

          <article className="exp-item">
            <div className="exp-header">
              <div>
                <div className="exp-role">Self-Directed Project Work</div>
                <div className="exp-company">Independent</div>
              </div>
              <span className="exp-meta">Ongoing</span>
            </div>
            <p className="exp-desc">
              Built and published projects across AI, backend development, web
              technologies, and automation, with an emphasis on inspectable source
              code, documentation, and honest project scope.
            </p>
            <div className="exp-tags">
              <span className="tag">Python</span>
              <span className="tag">TypeScript</span>
              <span className="tag">FastAPI</span>
              <span className="tag">Django</span>
              <span className="tag">Docker</span>
            </div>
          </article>
        </section>

        <section className="section">
          <h2 className="section-title">Education</h2>
          <div>
            <div className="education-degree">Class 12 Completed</div>
            <div className="education-meta">
              School, board, grades, and dates are intentionally not listed.
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Additional Projects</h2>
          <p className="note">
            <strong>Bank Management System</strong> (Python, Tkinter, SQLite):
            role-based desktop application with transaction management and
            reporting. <strong>All Tools In One Place</strong> (Next.js, TypeScript):
            utility platform with PDF, QR, formatting, encryption, and
            compression tools. <strong>Weather Alert Bot</strong> (FastAPI,
            React Native, OpenWeather, Twilio): WhatsApp rain alerts.
            <strong> File Converter</strong> (HTML, CSS, JavaScript): deployed
            browser utility.
          </p>
        </section>
      </div>
    </main>
  );
}
