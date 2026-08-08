'use client';

import React from 'react';
import { ACCREDIAN_EDGE } from '@/lib/data';
import { Target, Sliders, Users, Briefcase, TrendingUp, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from '@/components/UI/TiltCard';

const iconMap: Record<string, React.ElementType> = {
  Target,
  Sliders,
  Users,
  Briefcase,
  TrendingUp,
  CheckCircle2,
};

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Enterprises Choose Us</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            The Accredian Enterprise Edge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] text-base sm:text-lg mt-4 leading-relaxed"
          >
            Moving beyond generic online courses. We deliver contextualized, production-aligned capability building designed explicitly for corporate impact.
          </motion.p>
        </div>

        {/* 6 Feature Pillars 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACCREDIAN_EDGE.map((edge, index) => {
            const Icon = iconMap[edge.icon] || Target;
            return (
              <motion.div
                key={edge.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard className="h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#168CFF]/50 transition-all duration-300 shadow-sm flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-50 text-[#0284C7] border border-sky-200">
                        {edge.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#168CFF] transition-colors">
                      {edge.title}
                    </h3>

                    <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
                      {edge.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#0284C7] group-hover:text-[#168CFF]">
                    <span>Learn how this works</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
