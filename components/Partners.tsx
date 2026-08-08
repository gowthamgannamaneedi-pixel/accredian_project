'use client';

import React from 'react';
import { Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
// Import only the icons that actually exist in this version of simple-icons
import {
  siGoogle, siMeta, siApple, siSamsung, siNetflix,
  siWipro, siInfosys, siAccenture, siTcs,
} from 'simple-icons';

/* ─── Inline SVGs for brands NOT in simple-icons ─────────────────────── */
const HARDCODED_SVGS: Record<string, { path: string; hex: string }> = {
  Microsoft: {
    hex: '00A4EF',
    path: 'M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.628h11.377V24H0zm12.623 0H24V24H12.623z',
  },
  IBM: {
    hex: '1F70C1',
    // IBM 8-stripe wordmark rendered as simple bold paths
    path: 'M0 0h4v2H0zm0 3h4v2H0zm0 3h4v2H0zm0 3h4v2H0zm0 3h4v2H0zm0 3h4v2H0zM6 0h2v18H6zm4 0h4v2h-4zm0 4.5h5v2h-5zm0 4.5h4v2h-4zm0 4.5h5v2h-5zm0 4.5h4v2h-4zm7-18h2v18h-2zm4 0h4v2h-4zm0 3h3v2h-3zm0 3h2v2h-2zm0 3h3v2h-3zm0 3h4v2h-4zm0 3h4v2h-4z',
  },
  Oracle: {
    hex: 'F80000',
    path: 'M8.483 0C3.797 0 0 3.797 0 8.483c0 4.688 3.797 8.484 8.483 8.484h7.034C20.203 16.967 24 13.171 24 8.483 24 3.797 20.203 0 15.517 0H8.483zm-.18 3.116h7.394c3.007 0 5.369 2.362 5.369 5.367 0 3.007-2.362 5.368-5.369 5.368H8.303c-3.006 0-5.368-2.361-5.368-5.368 0-3.005 2.362-5.367 5.368-5.367z',
  },
  Amazon: {
    hex: 'FF9900',
    path: 'M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a18.5 18.5 0 0 1-4.963.646 19.02 19.02 0 0 1-9.49-2.514c-.37-.214-.692-.408-.955-.59-.18-.12-.23-.254-.08-.41zm2.467-3.297c.16-.207.37-.173.63.02 1.6 1.14 3.38 1.71 5.34 1.71 2.21 0 3.97-.62 5.28-1.86.22-.2.44-.19.66.04l.69.73c.19.21.18.42-.04.64-1.7 1.56-3.79 2.34-6.29 2.34-2.5 0-4.65-.73-6.46-2.2-.24-.19-.25-.4-.06-.62l.25-.8zm7.83-12.94c3.45 0 5.8 1.59 7.04 4.77.36.92.54 1.95.54 3.08 0 2.41-.66 4.39-1.97 5.92-.06.07-.12.1-.18.1-.06 0-.12-.03-.2-.1l-.73-.77c-.19-.2-.19-.41 0-.61 1.12-1.25 1.68-2.9 1.68-4.94 0-.92-.13-1.77-.38-2.55-.8-2.4-2.5-3.6-5.1-3.6-1.01 0-1.9.19-2.68.58-.75.37-1.37.91-1.86 1.6-.58.83-.87 1.83-.87 3 0 .86.16 1.66.47 2.4.55 1.31 1.56 2.19 3.03 2.63.6.18 1.22.27 1.87.27.72 0 1.38-.1 1.98-.3.18-.06.31-.02.4.12l.44.86c.1.19.04.34-.18.44-.77.29-1.62.43-2.55.43-2.35 0-4.2-.79-5.56-2.37-1.05-1.24-1.58-2.75-1.58-4.53 0-1.7.5-3.15 1.5-4.35 1.14-1.37 2.71-2.06 4.72-2.06h.12z',
  },
  Adobe: {
    hex: 'FA0F00',
    path: 'M13.966 22.624l-1.69-4.401H8.686l3.948-9.124 5.35 13.525zM7.286 1.559L.165 22.624H5.31l1.441-4.401h5.49L7.286 1.559zM18.714 1.559h-5.15l5.872 21.065h5.143z',
  },
};

/* ─── Company list ────────────────────────────────────────────────────── */
type CompanyEntry =
  | { name: string; type: 'si';      icon: { path: string; hex: string } }
  | { name: string; type: 'inline';  icon: { path: string; hex: string } }
  | { name: string; type: 'text';    textColor: string; bg: string };

const COMPANIES: CompanyEntry[] = [
  { name: 'Google',        type: 'si',     icon: siGoogle },
  { name: 'Meta',          type: 'si',     icon: siMeta },
  { name: 'Apple',         type: 'si',     icon: siApple },
  { name: 'Samsung',       type: 'si',     icon: siSamsung },
  { name: 'Netflix',       type: 'si',     icon: siNetflix },
  { name: 'Wipro',         type: 'si',     icon: siWipro },
  { name: 'Infosys',       type: 'si',     icon: siInfosys },
  { name: 'Accenture',     type: 'si',     icon: siAccenture },
  { name: 'TCS',           type: 'si',     icon: siTcs },
  { name: 'Microsoft',     type: 'inline', icon: HARDCODED_SVGS.Microsoft },
  { name: 'IBM',           type: 'inline', icon: HARDCODED_SVGS.IBM },
  { name: 'Oracle',        type: 'inline', icon: HARDCODED_SVGS.Oracle },
  { name: 'Amazon',        type: 'inline', icon: HARDCODED_SVGS.Amazon },
  { name: 'Adobe',         type: 'inline', icon: HARDCODED_SVGS.Adobe },
  { name: 'Capgemini',     type: 'text',   textColor: '#003B8E', bg: '#EEF4FF' },
  { name: 'Deloitte',      type: 'text',   textColor: '#86BC25', bg: '#F0FAF0' },
  { name: 'HCL Tech',      type: 'text',   textColor: '#0076C0', bg: '#EEF6FF' },
  { name: 'Cognizant',     type: 'text',   textColor: '#1263A3', bg: '#EEF4FF' },
  { name: 'JPMorgan',      type: 'text',   textColor: '#003087', bg: '#EEF4FF' },
  { name: 'Goldman Sachs', type: 'text',   textColor: '#6495C8', bg: '#F0F4FA' },
];

function CompanyLogo({ entry }: { entry: CompanyEntry }) {
  if (entry.type === 'si' || entry.type === 'inline') {
    return (
      <div className="flex flex-col items-center gap-2">
        <svg
          viewBox="0 0 24 24"
          width={28}
          height={28}
          aria-label={entry.name}
          fill={`#${entry.icon.hex}`}
        >
          <path d={entry.icon.path} />
        </svg>
        <span className="text-[10px] font-bold text-slate-600 tracking-wide">
          {entry.name}
        </span>
      </div>
    );
  }

  return (
    <span
      className="px-2.5 py-1.5 rounded-lg text-[11px] font-extrabold tracking-wide border text-center"
      style={{
        color: entry.textColor,
        background: entry.bg,
        borderColor: `${entry.textColor}33`,
      }}
    >
      {entry.name}
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

        {/* Academic Partners */}
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

        {/* Corporate Partners Marquee */}
        <div className="relative overflow-hidden py-6 border-y border-slate-200 bg-[#F8FAFC] rounded-2xl">
          <div className="flex animate-marquee gap-5 items-center">
            {marqueeItems.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center px-6 py-4 rounded-xl bg-white border border-slate-200 shrink-0 hover:border-[#168CFF]/50 hover:shadow-md transition-all duration-300"
                style={{ minWidth: '130px', height: '80px' }}
              >
                <CompanyLogo entry={company} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
