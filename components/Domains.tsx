'use client';

import React, { useState } from 'react';
import { DOMAIN_DATA } from '@/lib/data';
import { Brain, BarChart3, Layers, Crown, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  BarChart3,
  Layers,
  Crown,
  ShieldCheck,
};

export default function Domains() {
  const [activeDomainId, setActiveDomainId] = useState(DOMAIN_DATA[0].id);

  const activeDomain = DOMAIN_DATA.find((d) => d.id === activeDomainId) || DOMAIN_DATA[0];
  const ActiveIcon = iconMap[activeDomain.icon] || Brain;

  return (
    <section id="domains" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            Domain Expertise Across Critical Tech Frontiers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] text-base sm:text-lg mt-4"
          >
            Targeted capability tracks designed for immediate workforce application and business scaling.
          </motion.p>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {DOMAIN_DATA.map((domain) => {
            const Icon = iconMap[domain.icon] || Brain;
            const isActive = domain.id === activeDomainId;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveDomainId(domain.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#168CFF] text-white shadow-md shadow-[#168CFF]/20 scale-105'
                    : 'bg-white hover:bg-slate-50 text-[#374151] border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0284C7]'}`} />
                <span>{domain.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Preview Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg relative overflow-hidden max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-[#0284C7] text-xs font-bold mb-4 border border-sky-200">
                  <ActiveIcon className="w-4 h-4" />
                  <span>Domain Specification</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-4">
                  {activeDomain.title}
                </h3>
                <p className="text-[#4B5563] text-base leading-relaxed mb-6">
                  {activeDomain.description}
                </p>

                <h4 className="text-xs uppercase tracking-wider text-[#6B7280] font-bold mb-3">
                  Core Skills & Frameworks Covered:
                </h4>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {activeDomain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200 text-[#111827] text-xs font-semibold"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#168CFF]" />
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>View {activeDomain.title.split('&')[0]} Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-[#168CFF] mx-auto mb-4 flex items-center justify-center text-white shadow-md">
                    <ActiveIcon className="w-10 h-10" />
                  </div>
                  <h5 className="text-base font-bold text-[#111827] mb-1">Concept-to-Context Certified</h5>
                  <p className="text-xs text-[#6B7280] mb-4">
                    Aligned with enterprise production requirements & industry capstones.
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-[#111827] font-semibold">
                    ⚡ Custom enterprise modules available upon request
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
