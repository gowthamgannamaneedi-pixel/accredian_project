'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, Zap, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState<number>(25);
  const [domain, setDomain] = useState<string>('Generative AI & Agentic Systems');
  const [currentLevel, setCurrentLevel] = useState<string>('Intermediate');

  const levelMultiplier = currentLevel === 'Foundational' ? 1.0 : currentLevel === 'Intermediate' ? 1.3 : 1.6;
  const estimatedUpskillGain = Math.min(75, Math.round((25 + teamSize * 0.4 + (domain.includes('GenAI') ? 15 : 10)) * levelMultiplier));
  const timeToProductionMultiplier = domain.includes('GenAI')
    ? currentLevel === 'Advanced' ? '5.2x' : currentLevel === 'Intermediate' ? '3.8x' : '2.4x'
    : domain.includes('Data Science')
    ? currentLevel === 'Advanced' ? '4.1x' : currentLevel === 'Intermediate' ? '3.2x' : '2.0x'
    : currentLevel === 'Advanced' ? '3.5x' : currentLevel === 'Intermediate' ? '2.5x' : '1.8x';
  const estimatedHoursSavedPerEngineer = Math.round(teamSize * 14.5 * (currentLevel === 'Advanced' ? 1.4 : currentLevel === 'Intermediate' ? 1.0 : 0.7));
  const totalAnnualValueAdd = (teamSize * 18500 * (currentLevel === 'Advanced' ? 1.5 : currentLevel === 'Intermediate' ? 1.0 : 0.65)).toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <section id="calculator" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            Enterprise Skill & ROI Calculator
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] text-base sm:text-lg mt-3"
          >
            Calculate your organization&apos;s expected efficiency gains and productivity ROI with Accredian corporate upskilling.
          </motion.p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Controls Card */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-lg">
            <h3 className="text-lg font-bold text-[#111827] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#0284C7]" />
              Input Team Parameters
            </h3>

            {/* Team Size Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#111827]">Engineering / Team Size:</label>
                <span className="text-[#0284C7] font-extrabold text-sm px-2.5 py-0.5 rounded bg-sky-50 border border-sky-200">
                  {teamSize} Employees
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#168CFF]"
              />
              <div className="flex justify-between text-[10px] text-[#6B7280] mt-1">
                <span>5 Small Team</span>
                <span>50 Cohort</span>
                <span>200+ Enterprise</span>
              </div>
            </div>

            {/* Target Domain Select */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#111827] mb-2">Target Training Domain:</label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#111827] text-xs font-semibold focus:outline-none focus:border-[#168CFF]"
              >
                <option value="Generative AI & Agentic Systems">Generative AI & Agentic Systems</option>
                <option value="Data Science & Advanced Analytics">Data Science & Advanced Analytics</option>
                <option value="Digital Product Management">Digital Product Management</option>
                <option value="Executive C-Suite AI Strategy">Executive C-Suite AI Strategy</option>
                <option value="Cloud Security & DevSecOps">Cloud Security & DevSecOps</option>
              </select>
            </div>

            {/* Baseline Skill Level */}
            <div>
              <label className="block text-xs font-bold text-[#111827] mb-2">Current Baseline Team Level:</label>
              <div className="grid grid-cols-3 gap-2">
                {['Foundational', 'Intermediate', 'Advanced'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setCurrentLevel(lvl)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                      currentLevel === lvl
                        ? 'bg-[#168CFF] text-white border-[#168CFF]'
                        : 'bg-[#F8FAFC] text-[#374151] border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Visual Card */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-lg relative">
            
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold inline-flex items-center gap-1.5 mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Calculated ROI Projection
            </span>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-1">
                  <TrendingUp className="w-4 h-4 text-[#168CFF]" />
                  <span>Upskill Efficiency Gain</span>
                </div>
                <span className="text-3xl font-extrabold text-emerald-600">+{estimatedUpskillGain}%</span>
                <span className="text-[10px] text-[#6B7280] block mt-1">Productivity velocity increase</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-1">
                  <Zap className="w-4 h-4 text-[#168CFF]" />
                  <span>AI Deployment Speed</span>
                </div>
                <span className="text-3xl font-extrabold text-[#168CFF]">{timeToProductionMultiplier}</span>
                <span className="text-[10px] text-[#6B7280] block mt-1">Faster time-to-market</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-6">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#168CFF]" /> Annual Team Hours Saved:
                </span>
                <span className="text-lg font-extrabold text-[#111827]">{estimatedHoursSavedPerEngineer.toLocaleString()} hrs</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#111827]">Estimated Business Value:</span>
                <span className="text-lg font-extrabold text-[#168CFF]">${totalAnnualValueAdd} USD</span>
              </div>
            </div>

            <a
              href="#enquiry"
              className="w-full py-3.5 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <span>Get Detailed ROI Proposal for {teamSize} Members</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
