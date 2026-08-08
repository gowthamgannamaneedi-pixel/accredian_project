'use client';

import React from 'react';
import { Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Simple Icons CDN — free, reliable, official brand SVGs
// Format: https://cdn.simpleicons.org/{slug}/{hex-color}
// Text badge fallback for companies not in Simple Icons

interface CompanyConfig {
  name: string;
  type: 'icon' | 'text';
  iconSlug?: string;
  textColor?: string;
  bg?: string;
}

const COMPANIES: CompanyConfig[] = [
  { name: 'Google',        type: 'icon', iconSlug: 'google' },
  { name: 'Microsoft',     type: 'icon', iconSlug: 'microsoft' },
  { name: 'Amazon',        type: 'icon', iconSlug: 'amazon' },
  { name: 'Meta',          type: 'icon', iconSlug: 'meta' },
  { name: 'Apple',         type: 'icon', iconSlug: 'apple' },
  { name: 'IBM',           type: 'icon', iconSlug: 'ibm' },
  { name: 'Oracle',        type: 'icon', iconSlug: 'oracle' },
  { name: 'Samsung',       type: 'icon', iconSlug: 'samsung' },
  { name: 'Netflix',       type: 'icon', iconSlug: 'netflix' },
  { name: 'Adobe',         type: 'icon', iconSlug: 'adobe' },
  { name: 'Wipro',         type: 'icon', iconSlug: 'wipro' },
  { name: 'Infosys',       type: 'icon', iconSlug: 'infosys' },
  { name: 'Capgemini',     type: 'icon', iconSlug: 'capgemini' },
  { name: 'Accenture',     type: 'icon', iconSlug: 'accenture' },
  { name: 'Deloitte',      type: 'icon', iconSlug: 'deloitte' },
  { name: 'TCS',           type: 'text', textColor: '#003087', bg: '#EEF4FF' },
  { name: 'HCL Tech',      type: 'text', textColor: '#0076C0', bg: '#EEF6FF' },
  { name: 'Cognizant',     type: 'text', textColor: '#1263A3', bg: '#EEF4FF' },
  { name: 'JPMorgan',      type: 'text', textColor: '#003087', bg: '#EEF4FF' },
  { name: 'Goldman Sachs', type: 'text', textColor: '#6495C8', bg: '#F0F4FA' },
];

function CompanyLogo({ company }: { company: CompanyConfig }) {
  if (company.type === 'icon' && company.iconSlug) {
    // Use Simple Icons CDN without color param — returns icon in brand's official color
    const src = `https://cdn.simpleicons.org/${company.iconSlug}`;
    return (
      <div className="flex flex-col items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${company.name} logo`}
          width={32}
          height={32}
          className="object-contain"
          style={{ width: '32px', height: '32px' }}
        />
        <span className="text-[10px] font-bold text-slate-600 tracking-wide">
          {company.name}
        </span>
      </div>
    );
  }

  // Text badge for companies not in Simple Icons
  return (
    <span
      className="px-3 py-1.5 rounded-lg text-xs font-extrabold tracking-wide border"
      style={{
        color: company.textColor,
        background: company.bg ?? '#F8FAFC',
        borderColor: `${company.textColor}33`,
      }}
    >
      {company.name}
    </span>
  );
}


const academicPartners = [
  { name: 'E&ICT Academy, IIT Guwahati', logoText: 'E&ICT Academy, IIT Guwahati' },
  { name: 'XLRI Executive Education',    logoText: 'XLRI Executive Education' },
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
        <div className="relative overflow-hidden py-6 border-y border-slate-200 bg-[#F8FAFC] rounded-2xl">
          <div className="flex animate-marquee gap-5 items-center">
            {marqueeItems.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center px-6 py-4 rounded-xl bg-white border border-slate-200 shrink-0 hover:border-[#168CFF]/50 hover:shadow-md transition-all duration-300"
                style={{ minWidth: '130px', height: '76px' }}
              >
                <CompanyLogo company={company} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
