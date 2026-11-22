import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'NIRAJ.DEV — I Build Digital Experiences That Grow Businesses',
  description:
    'Full-Stack Web Developer, Python Automation Specialist, and AI Application Developer. Turning ideas into high-converting business websites, custom e-commerce stores, and robust web applications.',
  authors: [{ name: 'Niraj Charpe', url: 'https://github.com/niraj7780' }],
  creator: 'Niraj Charpe',
  keywords: [
    'Niraj Charpe',
    'Full-Stack Developer India',
    'Freelance Web Developer',
    'Next.js Developer',
    'FastAPI Python Developer',
    'AI Chatbot Developer',
    'Custom E-commerce Developer',
    'Business Website Development'
  ],
  metadataBase: new URL('https://niraj.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://niraj.dev',
    title: 'NIRAJ.DEV — I Build Digital Experiences That Grow Businesses',
    description:
      'From stunning business websites to powerful e-commerce platforms and AI-powered applications, I turn ideas into functional digital experiences.',
    siteName: 'NIRAJ.DEV'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIRAJ.DEV — Full-Stack Developer & AI Specialist',
    description: 'I Build Digital Experiences That Grow Businesses.'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090A0F' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100 antialiased selection:bg-[#0066FF] selection:text-white flex flex-col font-sans">
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
