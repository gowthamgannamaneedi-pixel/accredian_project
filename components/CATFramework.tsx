'use client';

import React, { useState } from 'react';
import { CAT_STEPS } from '@/lib/data';
import { SearchCheck, Compass, Rocket, CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  SearchCheck,
  Compass,
  Rocket,
};

export default function CATFramework() {
  const [activeStepNum, setActiveStepNum] = useState<number>(1);

  const activeStep = CAT_STEPS.find((s) => s.step === activeStepNum) || CAT_STEPS[0];
  const StepIcon = iconMap[activeStep.icon] || SearchCheck;

  return (
    <section id="framework" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            The Accredian CAT Framework
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] text-base sm:text-lg mt-4 leading-relaxed"
          >
            Our proven three-stage enterprise learning methodology engineered to align corporate objectives with hands-on technical execution.
          </motion.p>
        </div>

        {/* Step Selector Horizontal Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {CAT_STEPS.map((step) => {
            const isActive = step.step === activeStepNum;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepNum(step.step)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border flex items-center gap-4 ${
                  isActive
                    ? 'bg-white border-[#168CFF] shadow-md'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-[#4B5563]'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-lg shrink-0 ${
                    isActive
                      ? 'bg-[#168CFF] text-white shadow-sm'
                      : 'bg-[#F8FAFC] text-[#111827] border border-slate-200'
                  }`}
                >
                  0{step.step}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wide block mb-0.5">
                    {step.subtitle}
                  </span>
                  <h3 className={`text-base font-bold ${isActive ? 'text-[#111827]' : 'text-[#4B5563]'}`}>
                    {step.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Content View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-lg relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7]">
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest">
                      STAGE 0{activeStep.step} IN DETAIL
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[#4B5563] text-base leading-relaxed mb-6">
                  {activeStep.description}
                </p>

                <h4 className="text-xs uppercase tracking-wider text-[#6B7280] font-bold mb-3">
                  Stage Deliverables & Artifacts:
                </h4>

                <div className="space-y-3 mb-8">
                  {activeStep.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#168CFF] shrink-0" />
                      <span className="text-sm font-bold text-[#111827]">{del}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Request Stage 0{activeStep.step} Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center relative">
                  <div className="w-20 h-20 rounded-full bg-sky-50 border border-sky-200 mx-auto mb-4 flex items-center justify-center text-[#0284C7]">
                    <StepIcon className="w-10 h-10 animate-pulse" />
                  </div>
                  <h4 className="text-lg font-bold text-[#111827] mb-2">CAT Framework Milestone</h4>
                  <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                    Ensuring zero knowledge degradation through continuous feedback loops and executive reporting.
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    100% Measurable ROI Guarantee
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
