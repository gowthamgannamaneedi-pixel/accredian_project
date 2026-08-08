'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/data';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border border-slate-200 shadow-lg py-3 px-5 sm:px-6'
            : 'bg-white border border-slate-200/90 shadow-sm py-3.5 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="#" className="flex items-center gap-3 group shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tight text-[#168CFF] group-hover:text-[#0284C7] transition-colors duration-200" style={{ letterSpacing: '-0.02em' }}>
                accredian
              </span>
              <span className="text-[9.5px] text-[#6B7280] font-medium tracking-wide" style={{ letterSpacing: '0.02em' }}>
                credentials that matter
              </span>
            </div>
            <span className="px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest rounded bg-sky-50 text-[#0284C7] border border-sky-200 self-center">
              ENTERPRISE
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold text-[#374151] hover:text-[#168CFF] transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="#enquiry"
              className="text-xs font-bold text-[#4B5563] hover:text-[#111827] px-2.5 py-2 transition-colors"
            >
              Talk to Advisor
            </a>

            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold text-xs shadow-md shadow-[#168CFF]/20 transition-all duration-300 hover:-translate-y-0.5 shrink-0"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-[#374151] hover:text-[#111827] border border-slate-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-white border border-slate-200 p-5 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#374151] hover:text-[#168CFF] py-2 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <span>Book Enterprise Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
