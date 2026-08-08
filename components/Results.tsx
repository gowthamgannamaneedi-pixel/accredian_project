'use client';

import React from 'react';
import { RESULTS_DATA } from '@/lib/data';
import { TrendingUp, Building2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Results() {
  return (
    <section id="results" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Verifiable ROI & Success</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            Enterprise Case Studies & Measured Outcomes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] text-base sm:text-lg mt-4"
          >
            See how Fortune 500 tech leaders and enterprises transform business productivity through Accredian programs.
          </motion.p>
        </div>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESULTS_DATA.map((result, idx) => (
            <motion.div
              key={result.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#168CFF]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-extrabold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified ROI
                  </span>
                  <Building2 className="w-5 h-5 text-[#6B7280] group-hover:text-[#168CFF] transition-colors" />
                </div>

                <div className="text-4xl sm:text-5xl font-black text-[#168CFF] tracking-tight mb-2">
                  {result.value}
                </div>
                <h4 className="text-sm font-bold text-[#0284C7] mb-4 uppercase tracking-wide">
                  {result.label}
                </h4>

                <h3 className="text-lg font-bold text-[#111827] mb-3">
                  {result.title}
                </h3>

                <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
                  {result.story}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#6B7280]">
                <span className="font-bold text-[#111827]">{result.company}</span>
                <span className="text-[#0284C7] font-bold">Case Study</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
