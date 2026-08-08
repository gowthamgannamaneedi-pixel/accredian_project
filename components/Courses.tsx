'use client';

import React, { useState } from 'react';
import { COURSES_DATA } from '@/lib/data';
import { CourseProgram } from '@/types';
import { Clock, CheckCircle2, Download, ArrowRight, Star, Sparkles, Filter, X, ShieldCheck, BookOpen, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Courses() {
  const [filterLevel, setFilterLevel] = useState<string>('All');
  const [selectedCourse, setSelectedCourse] = useState<CourseProgram | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredCourses = filterLevel === 'All'
    ? COURSES_DATA
    : COURSES_DATA.filter((course) => course.level === filterLevel);

  const handleDownloadBrochure = () => {
    if (!selectedCourse) return;
    setIsDownloading(true);

    setTimeout(() => {
      // Generate brochure content as a downloadable text file
      const content = [
        `ACCREDIAN ENTERPRISE — PROGRAM BROCHURE`,
        `${'='.repeat(50)}`,
        ``,
        `Program: ${selectedCourse.title}`,
        `Track:    ${selectedCourse.level}`,
        `Duration: ${selectedCourse.duration}`,
        `Format:   ${selectedCourse.format}`,
        ``,
        `OVERVIEW`,
        `-`.repeat(40),
        selectedCourse.description,
        ``,
        `KEY HIGHLIGHTS`,
        `-`.repeat(40),
        ...(selectedCourse.highlights || []).map((h: string) => `• ${h}`),
        ``,
        `TARGET AUDIENCE`,
        `-`.repeat(40),
        selectedCourse.targetAudience,
        ``,
        `MODULE BREAKDOWN`,
        `-`.repeat(40),
        `Module 1: Foundations & Architecture Baseline          (Weeks 1–2)`,
        `Module 2: Advanced Hands-on Labs & Custom Codebases    (Weeks 3–4)`,
        `Module 3: Enterprise Integration & Production Deploy   (Weeks 5–6)`,
        `Module 4: Real-world Capstone & Executive Review       (Weeks 7–8)`,
        ``,
        `${'='.repeat(50)}`,
        `Accredian Enterprise | enterprise@accredian.com`,
        `https://enterprise.accredian.com`,
      ].join('\n');

      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedCourse.title.replace(/[^a-z0-9]/gi, '_')}_Brochure.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 800);
  };


  return (
    <section id="programs" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            Enterprise Training Programs & Tracks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] text-base sm:text-lg mt-4"
          >
            Modular, high-impact programs designed for executive leaders, technical teams, and cross-functional professionals.
          </motion.p>
        </div>

        {/* Level Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <span className="text-xs text-[#6B7280] font-bold mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#0284C7]" /> Filter Track:
          </span>
          {['All', 'Executive', 'Professional', 'Enterprise Custom'].map((level) => (
            <button
              key={level}
              onClick={() => setFilterLevel(level)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterLevel === level
                  ? 'bg-[#168CFF] text-white shadow-sm'
                  : 'bg-white text-[#374151] hover:text-[#168CFF] border border-slate-200'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`p-7 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between relative group ${
                  course.isPopular
                    ? 'border-[#168CFF] shadow-md'
                    : 'border-slate-200 hover:border-[#168CFF]/50 shadow-sm'
                }`}
              >
                {course.isPopular && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-extrabold flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>POPULAR ENTERPRISE CHOICE</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-[#0284C7] border border-sky-200 text-[11px] font-bold">
                      {course.level}
                    </span>
                    <span className="text-xs text-[#6B7280] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#6B7280]" /> {course.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#168CFF] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-[#6B7280] font-bold">Key Highlights:</h4>
                    {course.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#111827] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#168CFF] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-[#4B5563] mb-6">
                    <strong className="text-[#111827] block mb-0.5">Target Audience:</strong>
                    {course.targetAudience}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Full Syllabus</span>
                    <BookOpen className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="#enquiry"
                    className="py-2.5 px-3 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 text-[#111827] border border-slate-200 text-xs font-semibold transition-colors flex items-center justify-center"
                    aria-label="Enquire about course"
                  >
                    <ArrowRight className="w-4 h-4 text-[#4B5563]" />
                  </a>
                </div>

              </motion.div>
            ))}
          </div>
        </AnimatePresence>

      </div>

      {/* Interactive Syllabus Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F8FAFC] text-[#6B7280] hover:text-[#111827] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 text-xs font-bold inline-flex items-center gap-1 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                {selectedCourse.level} Program Track
              </span>

              <h3 className="text-2xl font-extrabold text-[#111827] mb-2">
                {selectedCourse.title}
              </h3>
              <p className="text-xs text-[#6B7280] mb-6 flex items-center gap-3">
                <span>⏱ Duration: {selectedCourse.duration}</span>
                <span>📅 Format: {selectedCourse.format}</span>
              </p>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-[#111827] mb-6 leading-relaxed">
                {selectedCourse.description}
              </div>

              <h4 className="text-xs uppercase tracking-wider text-[#0284C7] font-bold mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Detailed Module Breakdown:
              </h4>

              <div className="space-y-3 mb-6">
                {[
                  'Module 1: Foundations & Architecture Baseline',
                  'Module 2: Advanced Hands-on Labs & Custom Codebases',
                  'Module 3: Enterprise Integration & Production Deployment',
                  'Module 4: Real-world Corporate Capstone & Executive Review'
                ].map((mod, index) => (
                  <div key={index} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111827]">{mod}</span>
                    <span className="text-[10px] text-[#0284C7] font-bold bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      Weeks {index * 2 + 1}-{index * 2 + 2}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={handleDownloadBrochure}
                  disabled={isDownloading}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#168CFF] hover:bg-[#0284C7] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  {isDownloading ? (
                    <span>Generating Enterprise PDF...</span>
                  ) : downloadSuccess ? (
                    <span className="text-white flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Syllabus Downloaded!
                    </span>
                  ) : (
                    <>
                      <span>Download Full PDF Brochure</span>
                      <Download className="w-4 h-4" />
                    </>
                  )}
                </button>

                <a
                  href="#enquiry"
                  onClick={() => setSelectedCourse(null)}
                  className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 text-[#111827] text-xs font-bold transition-colors border border-slate-200"
                >
                  Book Consultation for this Track
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
