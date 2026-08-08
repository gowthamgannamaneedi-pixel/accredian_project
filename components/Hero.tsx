'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Building, ShieldCheck, Cpu, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from '@/components/UI/TiltCard';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.8) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold tracking-wide mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#0284C7]" />
              <span>Next-Gen Enterprise Upskilling Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
              <span className="text-[#4B5563] font-medium">AI, Data & Executive Tech</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.12] mb-6"
            >
              Accelerate Enterprise <br />
              <span className="text-[#168CFF]">
                AI & Digital Transformation
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#4B5563] leading-relaxed font-normal mb-8 max-w-2xl"
            >
              Empower your teams with high-impact corporate upskilling in <strong className="text-[#111827] font-semibold">Generative AI, Data Science, Product Leadership & MLOps</strong>. Co-certified with premier institutions like <span className="text-[#0284C7] font-semibold">E&ICT Academy, IIT Guwahati</span>.
            </motion.p>

            {/* Key Value Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl"
            >
              {[
                'Concept-to-Context Learning Framework',
                '500+ Industry Mentor Practitioners',
                '100% Customized Enterprise Sandboxes',
                'Verifiable Skill Mastery & ROI Metrics'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-[#374151]">
                  <CheckCircle2 className="w-4 h-4 text-[#168CFF] shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold text-base shadow-lg shadow-[#168CFF]/20 transition-all duration-300 hover:-translate-y-0.5 animate-shimmer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 text-[#111827] border border-slate-200 font-bold text-base transition-all duration-300"
              >
                <span>Explore Programs</span>
              </a>
            </motion.div>

            {/* Trust Partner Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-200 w-full"
            >
              <p className="text-xs uppercase tracking-wider text-[#6B7280] font-bold mb-3 flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-[#168CFF]" />
                Trusted by 200+ Global Tech Giants & Enterprises
              </p>
              <div className="flex flex-wrap items-center gap-6 opacity-80">
                <span className="text-sm font-extrabold tracking-widest text-[#4B5563]">GOOGLE</span>
                <span className="text-sm font-extrabold tracking-widest text-[#4B5563]">MICROSOFT</span>
                <span className="text-sm font-extrabold tracking-widest text-[#4B5563]">ADP</span>
                <span className="text-sm font-extrabold tracking-widest text-[#4B5563]">BAYER</span>
                <span className="text-sm font-extrabold tracking-widest text-[#4B5563]">TCS</span>
              </div>
            </motion.div>

          </div>

          {/* Right Dashboard Mockup Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-lg"
            >
              <TiltCard className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xl">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">Enterprise L&D Dashboard</h4>
                      <p className="text-xs text-[#6B7280]">Accredian Skill Mastery Telemetry</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Live Cohort
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <span className="text-xs text-[#6B7280] block mb-1">Active AI Modules</span>
                    <span className="text-xl font-extrabold text-[#111827]">12 / 12 Active</span>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#168CFF] h-full w-[100%]" />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <span className="text-xs text-[#6B7280] block mb-1">Team Upskill Index</span>
                    <span className="text-xl font-extrabold text-emerald-600">+42.8%</span>
                    <span className="text-[10px] text-[#6B7280] block mt-1">Vs baseline benchmark</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#168CFF]" />
                      <span className="text-xs font-bold text-[#111827]">RAG & Agentic AI Capstone</span>
                    </div>
                    <span className="text-xs text-[#0284C7] font-bold">Week 6 of 8</span>
                  </div>
                  <p className="text-xs text-[#4B5563] mb-3">
                    Building enterprise vector search engine with LangGraph architecture.
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-[#4B5563]">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#168CFF]" /> 45 Engineers Enrolled</span>
                    <span className="text-emerald-600 font-bold">98.4% On Track</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="font-bold text-[#111827]">Co-Certified with IIT Guwahati</p>
                      <p className="text-[10px] text-[#6B7280]">Verifiable Enterprise Credential</p>
                    </div>
                  </div>
                  <span className="text-[#168CFF] font-bold text-xs">Certified</span>
                </div>
              </TiltCard>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
