'use client';

import React from 'react';
import { PARTNERS_DATA } from '@/lib/data';
import { Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Authentic Vector SVG Brand Logos
function CorporateBrandLogo({ name }: { name: string }) {
  switch (name) {
    case 'Google':
      return (
        <div className="flex items-center gap-2 shrink-0">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.32 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.99 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.68 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
          <span className="font-bold text-slate-800 text-sm tracking-tight">Google</span>
        </div>
      );

    case 'Microsoft':
      return (
        <div className="flex items-center gap-2 shrink-0">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path fill="#F25022" d="M1 1h10v10H1z" />
            <path fill="#7FBA00" d="M13 1h10v10H1z" />
            <path fill="#00A4EF" d="M1 13h10v10H1z" />
            <path fill="#FFB900" d="M13 13h10v10H13z" />
          </svg>
          <span className="font-semibold text-slate-700 text-sm tracking-tight">Microsoft</span>
        </div>
      );

    case 'Amazon':
      return (
        <div className="flex flex-col items-start justify-center shrink-0 relative py-0.5 px-1">
          <span className="font-extrabold text-slate-900 text-sm tracking-tighter leading-none">amazon</span>
          <svg className="w-8 h-2.5 text-[#FF9900] mt-0.5" viewBox="0 0 40 12" fill="currentColor">
            <path d="M1 4c8 6 23 6 34 0l-3 4c-8 3-21 3-28 0z" />
            <path d="M33 2l6 4-4 4z" />
          </svg>
        </div>
      );

    case 'Meta':
      return (
        <div className="flex items-center gap-2 shrink-0">
          <svg className="w-6 h-4 shrink-0 text-[#0668E1]" viewBox="0 0 24 16" fill="currentColor">
            <path d="M16.4 0C14.2 0 12.4 1.3 11.4 3 10.4 1.3 8.6 0 6.4 0 2.9 0 0 3.6 0 8s2.9 8 6.4 8c2.2 0 4-1.3 5-3 1 1.7 2.8 3 5 3 3.5 0 6.4-3.6 6.4-8S19.9 0 16.4 0zm-10 12.8C4.1 12.8 2.2 10.6 2.2 8s1.9-4.8 4.2-4.8c1.9 0 3.5 1.5 4 3.5.1.4.1.8.1 1.3 0 .4 0 .8-.1 1.3-.5 2-2.1 3.5-4.2 3.5zm10 0c-2.1 0-3.7-1.5-4.2-3.5 0-.4-.1-.8-.1-1.3 0-.4 0-.8.1-1.3.5-2 2.1-3.5 4.2-3.5 2.3 0 4.2 2.2 4.2 4.8s-1.9 4.8-4.2 4.8z" />
          </svg>
          <span className="font-extrabold text-[#0668E1] text-sm tracking-tight">Meta</span>
        </div>
      );

    case 'ADP':
      return (
        <div className="flex items-center shrink-0">
          <span className="font-black text-red-600 text-lg tracking-tighter">ADP</span>
        </div>
      );

    case 'Bayer':
      return (
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-full bg-[#0091DF] text-white font-black text-[8px] flex items-center justify-center shadow-2xs">
            BAYER
          </div>
          <span className="font-bold text-[#0091DF] text-sm tracking-tight">Bayer</span>
        </div>
      );

    case 'TCS':
      return (
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 rounded bg-[#0A2540] flex items-center justify-center text-white font-extrabold text-[10px] tracking-tight shrink-0 shadow-2xs">
            tcs
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-extrabold text-[#0A2540] text-sm tracking-tight">tcs</span>
            <span className="text-[7px] font-bold text-slate-500 tracking-wider uppercase">TATA CONSULTANCY SERVICES</span>
          </div>
        </div>
      );

    case 'Accenture':
      return (
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="font-black text-purple-600 text-base leading-none">&gt;</span>
          <span className="font-bold text-slate-800 text-sm tracking-tight">accenture</span>
        </div>
      );

    case 'Reliance Industries':
      return (
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded bg-gradient-to-tr from-amber-700 via-amber-600 to-yellow-500 text-white font-black text-[10px] flex items-center justify-center shadow-2xs border border-amber-800">
            R
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-black text-amber-800 text-xs tracking-tight">Reliance</span>
            <span className="text-[8px] font-bold text-amber-600 tracking-widest uppercase">Industries Limited</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-slate-800 text-sm">{name}</span>
        </div>
      );
  }
}

export default function Partners() {
  const corporatePartners = PARTNERS_DATA.filter((p) => p.type === 'corporate');
  const academicPartners = PARTNERS_DATA.filter((p) => p.type === 'academic');

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
            Partnering with Industry Titans & Academic Giants
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
          <div className="flex animate-marquee gap-8 items-center">
            {[...corporatePartners, ...corporatePartners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-[#111827] font-bold text-sm shrink-0 hover:border-[#168CFF] transition-colors shadow-2xs group"
              >
                <CorporateBrandLogo name={partner.name} />
                <span className="text-[10px] font-medium text-[#6B7280] ml-1 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                  {partner.industry}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
