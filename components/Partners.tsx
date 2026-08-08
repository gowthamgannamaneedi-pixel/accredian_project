'use client';

import React, { useState } from 'react';
import { Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Clearbit Logo API — industry-standard, highly reliable logo CDN
// Falls back to branded text if image fails to load
const COMPANIES: { name: string; domain: string; textColor: string; textStyle?: string }[] = [
  { name: 'Google',     domain: 'google.com',     textColor: '#4285F4' },
  { name: 'Microsoft',  domain: 'microsoft.com',  textColor: '#00A4EF' },
  { name: 'Amazon',     domain: 'amazon.com',      textColor: '#FF9900' },
  { name: 'Meta',       domain: 'meta.com',        textColor: '#0668E1' },
  { name: 'IBM',        domain: 'ibm.com',         textColor: '#1F70C1' },
  { name: 'Accenture',  domain: 'accenture.com',   textColor: '#A100FF' },
  { name: 'TCS',        domain: 'tcs.com',         textColor: '#003087' },
  { name: 'Wipro',      domain: 'wipro.com',       textColor: '#341571' },
  { name: 'Infosys',    domain: 'infosys.com',     textColor: '#007CC3' },
  { name: 'Oracle',     domain: 'oracle.com',      textColor: '#F80000' },
  { name: 'Deloitte',   domain: 'deloitte.com',    textColor: '#86BC25', textStyle: 'font-bold text-slate-800 text-sm' },
  { name: 'Samsung',    domain: 'samsung.com',     textColor: '#1428A0' },
];

function CompanyLogo({ name, domain, textColor, textStyle }: {
  name: string;
  domain: string;
  textColor: string;
  textStyle?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={textStyle ?? 'font-bold text-sm tracking-tight'}
        style={{ color: textColor }}
      >
        {name}
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={`${name} logo`}
      width={96}
      height={32}
      className="object-contain"
      style={{ maxHeight: '32px', width: 'auto', maxWidth: '100px' }}
      onError={() => setFailed(true)}
    />
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
        <div className="relative overflow-hidden py-5 border-y border-slate-200 bg-[#F8FAFC] rounded-2xl">
          <div className="flex animate-marquee gap-6 items-center">
            {marqueeItems.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center px-8 py-4 rounded-xl bg-white border border-slate-200 shrink-0 hover:border-[#168CFF]/50 hover:shadow-md transition-all duration-300"
                style={{ minWidth: '150px', height: '72px' }}
              >
                <CompanyLogo
                  name={company.name}
                  domain={company.domain}
                  textColor={company.textColor}
                  textStyle={company.textStyle}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
