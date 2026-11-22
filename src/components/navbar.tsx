'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { Menu, X, ArrowUpRight, Terminal, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/websites', label: 'Web Development', badge: '20 Examples' },
    { href: '/ai-tools', label: 'AI Tools' },
    { href: '/automation', label: 'Automation' },
    { href: '/process', label: 'Process' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200 border-b',
        scrolled
          ? 'bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md border-neutral-300 dark:border-neutral-800 shadow-sm'
          : 'bg-white dark:bg-[#050505] border-neutral-200 dark:border-neutral-800'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Brand Logo - Minimal Square */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-black dark:bg-[#A3F527] flex items-center justify-center font-mono font-bold text-white dark:text-black text-sm transition-transform group-hover:scale-105">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tight font-display text-neutral-950 dark:text-white flex items-center gap-0.5">
                NIRAJ<span className="font-cursive italic font-normal text-[#A3F527] lowercase text-xl">.dev</span>
              </span>
              <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-500">
                Web • AI • Automation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-1.5 text-xs font-mono uppercase tracking-wider font-medium transition-colors flex items-center gap-1.5 border border-transparent',
                    isActive
                      ? 'text-black dark:text-[#A3F527] font-bold border-black dark:border-[#A3F527] bg-neutral-100 dark:bg-[#A3F527]/10'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700'
                  )}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 bg-[#A3F527] text-black font-extrabold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Availability Pill */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 bg-[#A3F527] animate-pulse"></span>
              <span>Available for Hire</span>
            </div>

            <ThemeToggle />

            {/* Initiate Project Button - Square Minimal */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#A3F527] hover:bg-[#8AE40E] text-black text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_12px_rgba(163,245,39,0.3)] hover:shadow-[0_0_18px_rgba(163,245,39,0.5)]"
            >
              <span>Initiate Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Minimal Square */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#050505] border-b border-neutral-300 dark:border-neutral-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-1 duration-150">
          <div className="flex items-center gap-2 px-3 py-2 mb-3 border border-[#A3F527]/40 bg-[#A3F527]/10 text-neutral-900 dark:text-white text-xs font-mono font-medium">
            <span className="w-2 h-2 bg-[#A3F527] animate-pulse"></span>
            Available for Client Projects
          </div>

          <div className="grid grid-cols-1 gap-1 mb-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-between border',
                    isActive
                      ? 'bg-[#A3F527]/10 border-[#A3F527] text-black dark:text-[#A3F527] font-bold'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400'
                  )}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#A3F527] text-black font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#A3F527] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-md"
          >
            <span>Initiate Project Inquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
