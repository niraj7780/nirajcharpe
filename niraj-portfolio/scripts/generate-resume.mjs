import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public");
const outFile = join(outDir, "resume.pdf");

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 42;
const MAX_W = PAGE_W - MARGIN * 2;

const AS = 0.52;

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function textWidth(s, size) {
  return s.length * size * AS;
}

function wrap(text, size, maxWidth = MAX_W) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const test = line ? line + " " + word : word;
    if (textWidth(test, size) > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const GREEN = [0.302, 0.486, 0.059];
const DARK = [0.06, 0.06, 0.06];
const MUTED = [0.32, 0.32, 0.32];
const LIGHT = [0.45, 0.45, 0.45];

const lines = [];

function push(text, opts = {}) {
  const {
    font = "F1",
    size = 9,
    color = MUTED,
    gapBefore = 0,
    leading = size * 1.38,
    maxWidth = MAX_W,
    indent = 0,
  } = opts;
  if (gapBefore > 0) lines.push({ spacer: gapBefore });
  for (const ln of wrap(text, size, maxWidth - indent)) {
    lines.push({ text: ln, font, size, color, leading, indent });
  }
}

function sectionTitle(text) {
  lines.push({ spacer: 2 });
  lines.push({ text: text.toUpperCase(), font: "F2", size: 8, color: GREEN, leading: 12 });
  lines.push({ rule: true, ruleGap: 2 });
}

function bullet(text) {
  push(text, { size: 8, color: MUTED, maxWidth: MAX_W - 12, indent: 12, leading: 10.8 });
}

// Build content -------------------------------------------------------------

push("NIRAJ CHARPE", { font: "F2", size: 23, color: DARK, leading: 27 });
push("Software Engineer at HCLTech", { size: 10.5, color: MUTED, leading: 15 });
push(
  "nirajcharpe48@gmail.com  |  github.com/niraj7780  |  linkedin.com/in/niraj-charpe  |  Noida, India",
  { size: 8.2, color: LIGHT, leading: 13, gapBefore: 3 }
);
lines.push({ spacer: 2 });
lines.push({ rule: true });

sectionTitle("Professional Summary");
push(
  "Software engineer at HCLTech, building practical software across backend development, databases, web technologies, and AI. Completed Class 12 and developed programming foundations through professional experience and self-directed project work. Focused on backend engineering, database systems, and enterprise technologies.",
  { size: 8.5, color: MUTED, leading: 11.8 }
);

sectionTitle("Technical Skills");
push("Used in projects: Python, JavaScript, TypeScript, React, Next.js, Tailwind CSS, FastAPI, Flask, Django, Node.js/Express, SQLite and PostgreSQL basics, Google Gemini API, PyTorch, Docker, Git, GitHub, Vercel, Monaco Editor.", { size: 8.2, leading: 11.2 });
push("Practising / learning: Java, C++, SQL Server and MySQL fundamentals, data structures and algorithms, system design, testing, CI/CD, SAP ABAP fundamentals, cloud fundamentals.", { size: 8.2, leading: 11.2 });
push("Familiar with fundamentals: C, Linux and shell basics, REST API design, web security basics, Agile/Scrum, technical writing.", { size: 8.2, leading: 11.2 });

sectionTitle("Featured Projects");

push("CareerLens AI  -  Next.js, FastAPI, TypeScript, Gemini API", { font: "F2", size: 8.8, color: DARK, leading: 12 });
push("Resume analysis platform that parses PDF/DOCX files and maps skills to career paths with a learning plan.", { size: 8.2, leading: 10.8 });
bullet("Client and API validation; PyMuPDF and python-docx extraction");
bullet("Gemini analysis for skills, experience, education, and skill gaps");

push("MiniGPT  -  Python, PyTorch, NumPy", { font: "F2", size: 8.8, color: DARK, leading: 12, gapBefore: 4 });
push("GPT-style transformer language model built from scratch without external APIs or pretrained weights.", { size: 8.2, leading: 10.8 });
bullet("Character tokenizer, causal self-attention, transformer blocks");
bullet("Training loop with loss tracking, checkpointing, and sampling");

push("DevCode Online Compiler  -  Express.js, Monaco, Docker, TypeScript", { font: "F2", size: 8.8, color: DARK, leading: 12, gapBefore: 4 });
push("Browser-based compiler with hardened Docker sandboxing and a Monaco editor.", { size: 8.2, leading: 10.8 });
bullet("Network disabled, read-only rootfs, dropped capabilities");
bullet("CPU, memory, PID limits and hard wall-clock timeouts");

push("MedAI Medical Query Generator  -  Flask, Gemini API, Python", { font: "F2", size: 8.8, color: DARK, leading: 12, gapBefore: 4 });
push("Medical information assistant with safety-focused prompts and clear educational disclaimers.", { size: 8.2, leading: 10.8 });
bullet("No diagnosis, no prescriptions, emergency escalation guidance");
bullet("Informational prototype only; not a clinical tool");

push("NirajVersant  -  HTML, CSS, JavaScript, Web Speech API", { font: "F2", size: 8.8, color: DARK, leading: 12, gapBefore: 4 });
push("English proficiency practice platform with 15 Versant-format tests and browser speech recognition.", { size: 8.2, leading: 10.8 });
bullet("15 tests, 70 questions each, practice scoring out of 80");
bullet("No accounts or tracking; runs entirely in the browser");

push("Django E-Commerce  -  Django, Stripe, SQLite / PostgreSQL", { font: "F2", size: 8.8, color: DARK, leading: 12, gapBefore: 4 });
push("E-commerce application with authentication, cart, checkout, Stripe payments, and order history.", { size: 8.2, leading: 10.8 });
bullet("django-allauth authentication and address management");
bullet("Stripe Checkout integration and order records");

sectionTitle("Experience");

push("Software Engineer  -  HCLTech, Noida", { font: "F2", size: 8.8, color: DARK, leading: 12 });
push("Software engineering across programming fundamentals, databases, enterprise systems, cloud concepts, Git workflows, and professional skills.", { size: 8.2, leading: 10.8 });
push("Self-Directed Project Work  -  Independent (ongoing)", { font: "F2", size: 8.8, color: DARK, leading: 12, gapBefore: 4 });
push("Built and published projects across AI, backend development, web technologies, and automation with an emphasis on inspectable source code and honest scope.", { size: 8.2, leading: 10.8 });

sectionTitle("Education");
push("Class 12 completed. School, board, grades, and dates are intentionally not listed.", { size: 8.4, leading: 11.4 });

sectionTitle("Additional Projects");
push("Bank Management System (Python, Tkinter, SQLite): role-based desktop app. All Tools In One Place (Next.js, TypeScript): utility platform with PDF, QR, formatting, encryption, and compression tools. Weather Alert Bot (FastAPI, React Native, Twilio): WhatsApp rain alerts. File Converter: deployed browser utility.", { size: 8.2, leading: 11.2 });

// Render --------------------------------------------------------------------

let y = PAGE_H - MARGIN;
const ops = [];

function rgb(color) {
  return `${color[0]} ${color[1]} ${color[2]}`;
}

for (const line of lines) {
  if (line.spacer) {
    y -= line.spacer;
    continue;
  }
  if (line.rule) {
    const gap = line.ruleGap ?? 3;
    y -= gap;
    ops.push(`0.9 0.9 0.9 RG 0.6 w ${MARGIN} ${y.toFixed(2)} m ${(PAGE_W - MARGIN).toFixed(2)} ${y.toFixed(2)} l S`);
    y -= 6;
    continue;
  }
  y -= line.leading;
  if (y < MARGIN) {
    throw new Error(`Resume content overflows one page by ${(MARGIN - y).toFixed(1)}pt; reduce content.`);
  }
  const x = MARGIN + (line.indent || 0);
  ops.push(
    `BT /${line.font} ${line.size} Tf ${rgb(line.color)} rg ${x.toFixed(2)} ${y.toFixed(2)} Td (${esc(line.text)}) Tj ET`
  );
}

const content = ops.join("\n");

const objects = [];
objects.push("<< /Type /Catalog /Pages 2 0 R >>");
objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
objects.push(
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`
);
objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
objects.push(`<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`);

let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
const offsets = [0];
objects.forEach((body, i) => {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});
const xrefStart = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, Buffer.from(pdf, "latin1"));
console.log(`Wrote ${outFile} (${(Buffer.byteLength(pdf, "latin1") / 1024).toFixed(1)} KB)`);
