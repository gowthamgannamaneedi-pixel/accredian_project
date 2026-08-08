'use client';

import React from 'react';
import { Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// 100% reliable inline SVG logos — no external network dependency
function CompanyLogo({ name }: { name: string }) {
  switch (name) {
    case 'Google':
      return (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span className="font-semibold text-slate-700 text-sm">Google</span>
        </div>
      );

    case 'Microsoft':
      return (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 21 21" className="w-5 h-5 shrink-0">
            <rect x="1" y="1" width="9" height="9" fill="#F35325" />
            <rect x="11" y="1" width="9" height="9" fill="#81BC06" />
            <rect x="1" y="11" width="9" height="9" fill="#05A6F0" />
            <rect x="11" y="11" width="9" height="9" fill="#FFBA08" />
          </svg>
          <span className="font-semibold text-slate-700 text-sm">Microsoft</span>
        </div>
      );

    case 'Amazon':
      return (
        <div className="flex flex-col items-start justify-center">
          <span className="font-bold text-slate-900 text-sm leading-tight" style={{ fontFamily: 'Arial, sans-serif' }}>amazon</span>
          <svg viewBox="0 0 100 18" className="w-14 h-2.5 text-[#FF9900]" fill="currentColor">
            <path d="M3 3 C35 16, 65 16, 97 3 L92 10 C65 20, 35 20, 8 10 Z" />
            <polygon points="90,1 100,8 90,15" />
          </svg>
        </div>
      );

    case 'Meta':
      return (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 36 36" className="w-5 h-5 shrink-0">
            <defs>
              <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0082FB" />
                <stop offset="100%" stopColor="#0668E1" />
              </linearGradient>
            </defs>
            <path fill="url(#metaGrad)" d="M18 3C9.716 3 3 9.716 3 18s6.716 15 15 15 15-6.716 15-15S26.284 3 18 3zm0 6c2.21 0 4 2.686 4 6s-1.79 6-4 6-4-2.686-4-6 1.79-6 4-6zm-7 6c0-3.314 1.343-6 3-6-.657 1.004-1 2.44-1 3.75v4.5c0 1.31.343 2.746 1 3.75-1.657 0-3-2.686-3-6zm14 0c0 3.314-1.343 6-3 6 .657-1.004 1-2.44 1-3.75v-4.5c0-1.31-.343-2.746-1-3.75 1.657 0 3 2.686 3 6z" />
          </svg>
          <span className="font-bold text-[#0668E1] text-sm">Meta</span>
        </div>
      );

    case 'IBM':
      return (
        <div className="flex items-center">
          <svg viewBox="0 0 60 24" className="h-5 w-14 shrink-0">
            {/* I */}
            <rect x="0" y="2" width="12" height="3" fill="#1F70C1" />
            <rect x="4" y="7" width="4" height="10" fill="#1F70C1" />
            <rect x="0" y="19" width="12" height="3" fill="#1F70C1" />
            {/* B */}
            <rect x="14" y="2" width="4" height="20" fill="#1F70C1" />
            <path d="M18 2 h5 a5 5 0 0 1 0 9 h-5 z" fill="#1F70C1" />
            <path d="M18 11 h5 a5 5 0 0 1 0 11 h-5 z" fill="#1F70C1" />
            {/* M */}
            <rect x="30" y="2" width="4" height="20" fill="#1F70C1" />
            <rect x="52" y="2" width="4" height="20" fill="#1F70C1" />
            <polygon points="34,2 43,14 52,2" fill="#1F70C1" />
          </svg>
        </div>
      );

    case 'Accenture':
      return (
        <div className="flex items-center gap-1.5">
          <span className="font-black text-[#A100FF] text-xl leading-none">{'>'}</span>
          <span className="font-semibold text-slate-800 text-sm">accenture</span>
        </div>
      );

    case 'TCS':
      return (
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center justify-center w-10 h-8 bg-[#003087] rounded px-1.5">
            <span className="text-white font-black text-[11px] leading-tight tracking-widest">TCS</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[#003087] text-[11px] tracking-widest uppercase">TATA</span>
            <span className="font-medium text-slate-500 text-[8px] tracking-wide uppercase">Consultancy</span>
          </div>
        </div>
      );

    case 'Wipro':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#341571] to-[#6E2B8B] flex items-center justify-center">
            <span className="text-white font-black text-[8px]">W</span>
          </div>
          <span className="font-bold text-[#341571] text-sm tracking-tight">Wipro</span>
        </div>
      );

    case 'Infosys':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-[#007CC3] flex items-center justify-center">
            <span className="text-white font-black text-[8px]">i</span>
          </div>
          <span className="font-bold text-[#007CC3] text-sm tracking-tight">Infosys</span>
        </div>
      );

    case 'Oracle':
      return (
        <div className="flex items-center">
          <span className="font-black text-[#F80000] text-sm tracking-tight">ORACLE</span>
        </div>
      );

    case 'Deloitte':
      return (
        <div className="flex items-center gap-0.5">
          <span className="font-bold text-slate-800 text-sm tracking-tight">Deloitte</span>
          <span className="text-[#86BC25] font-black text-lg leading-none">.</span>
        </div>
      );

    case 'Samsung':
      return (
        <div className="flex items-center">
          <span className="font-black text-[#1428A0] text-sm tracking-widest uppercase">SAMSUNG</span>
        </div>
      );

    default:
      return <span className="font-bold text-slate-700 text-sm">{name}</span>;
  }
}

const COMPANIES = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'IBM',
  'Accenture', 'TCS', 'Wipro', 'Infosys', 'Oracle',
  'Deloitte', 'Samsung'
];

const academicPartners = [
  { name: 'E&ICT Academy, IIT Guwahati', logoText: 'E&ICT Academy, IIT Guwahati' },
  { name: 'XLRI Executive Education', logoText: 'XLRI Executive Education' },
];

export default function Partners() {
  const marqueeItems = [...COMPANIES, ...COMPANIES];

  return (
    <section id="partners" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Trusted Partnerships</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight"
          >
            Partnering with Industry Titans &amp; Academic Giants
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] text-base mt-3"
          >
            Empowering global workforces and granting university-backed certifications recognized worldwide.
          </motion.p>
        </div>

        {/* Academic Partners Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {academicPartners.map((academic, idx) => (
            <motion.div
              key={academic.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#168CFF]/50 shadow-sm flex items-center gap-5 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] shrink-0 group-hover:scale-105 transition-transform">
                <Landmark className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wide block mb-1">
                  Academic Certification Partner
                </span>
                <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#168CFF] transition-colors">
                  {academic.logoText}
                </h3>
                <p className="text-xs text-[#4B5563] mt-1">
                  Co-branded executive certificates and curriculum oversight.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Partners Logo Marquee */}
        <div className="relative overflow-hidden py-5 border-y border-slate-200 bg-[#F8FAFC] rounded-2xl">
          <div className="flex animate-marquee gap-6 items-center">
            {marqueeItems.map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex items-center justify-center px-7 py-4 rounded-xl bg-white border border-slate-200 shrink-0 hover:border-[#168CFF]/50 hover:shadow-md transition-all duration-300"
                style={{ minWidth: '150px', height: '68px' }}
              >
                <CompanyLogo name={company} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
