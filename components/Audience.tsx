'use client';

import React from 'react';
import { AUDIENCE_ROLES } from '@/lib/data';
import { Code2, LineChart, LayoutGrid, Briefcase, CheckCircle2, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  LineChart,
  LayoutGrid,
  Briefcase,
};

export default function Audience() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Target Cohorts</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            Who Should Join Accredian Enterprise?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] text-base sm:text-lg mt-4"
          >
            Tailored learning tracks engineered specifically for the responsibilities and challenges of distinct corporate profiles.
          </motion.p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AUDIENCE_ROLES.map((role, idx) => {
            const Icon = iconMap[role.icon] || Briefcase;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#168CFF]/50 transition-all duration-300 shadow-sm group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#168CFF] transition-colors">
                      {role.title}
                    </h3>
                    <span className="text-xs text-[#0284C7] font-bold">Corporate Upskilling Track</span>
                  </div>
                </div>

                <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
                  {role.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <h4 className="text-xs uppercase tracking-wider text-[#6B7280] font-bold mb-2">Key Outcomes:</h4>
                  {role.keyBenefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#111827] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#168CFF] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
