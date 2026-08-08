'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Globe, Share2, Video, MessageSquare, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#168CFF] flex items-center justify-center text-white">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                accredian <span className="text-[#0284C7] text-xs font-semibold">ENTERPRISE</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Accredian Enterprise is the premier workforce upskilling partner for Fortune 500 organizations, tech giants, and scaling enterprises. Delivering certified programs in GenAI, Data Science, Product, and Leadership.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#168CFF] text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0284C7] text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-colors" aria-label="Media">
                <Video className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#168CFF] text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-colors" aria-label="Contact">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Enterprise Solutions */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Enterprise Solutions</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#domains" className="hover:text-[#0284C7] transition-colors">GenAI & Agentic Systems</a></li>
              <li><a href="#domains" className="hover:text-[#0284C7] transition-colors">Data Science & MLOps</a></li>
              <li><a href="#domains" className="hover:text-[#0284C7] transition-colors">Digital Product Management</a></li>
              <li><a href="#domains" className="hover:text-[#0284C7] transition-colors">Executive C-Suite AI Strategy</a></li>
              <li><a href="#domains" className="hover:text-[#0284C7] transition-colors">Cloud Security & DevSecOps</a></li>
            </ul>
          </div>

          {/* Col 3: Company & Approach */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Why Accredian</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#edge" className="hover:text-[#0284C7] transition-colors">The Accredian Edge</a></li>
              <li><a href="#framework" className="hover:text-[#0284C7] transition-colors">CAT Framework</a></li>
              <li><a href="#partners" className="hover:text-[#0284C7] transition-colors">Academic Partners (IIT/XLRI)</a></li>
              <li><a href="#results" className="hover:text-[#0284C7] transition-colors">Enterprise Case Studies</a></li>
              <li><a href="#faq" className="hover:text-[#0284C7] transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Corporate Contact</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span>Accredian Enterprise Tower, Sector 44, Gurugram / Cyber Hub, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>enterprise@accredian.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>+1 (800) 555-ACCRED</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Accredian Enterprise (Innomatics Learning Solutions). All rights reserved.</p>
          
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-[#0284C7] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0284C7] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0284C7] transition-colors">Security & Compliance</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#0284C7]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
