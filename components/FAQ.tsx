'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/lib/data';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Customization', 'Delivery', 'ROI & Impact'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] text-base sm:text-lg mt-4"
          >
            Everything you need to know about Accredian Enterprise corporate upskilling solutions.
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="w-5 h-5 text-[#6B7280] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by keyword (e.g. ROI, custom, live...)"
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-[#111827] placeholder-[#6B7280] text-sm focus:outline-none focus:border-[#168CFF] transition-colors shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#168CFF] text-white shadow-sm'
                  : 'bg-white text-[#374151] hover:text-[#168CFF] border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-[#6B7280]">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another term or contact our advisors.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#168CFF] shadow-sm'
                      : 'bg-white hover:border-[#168CFF]/50 border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#111827] text-base sm:text-lg focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#168CFF] shrink-0" />
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-lg bg-slate-50 text-[#0284C7] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-sky-50' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-[#4B5563] text-sm leading-relaxed border-t border-slate-100">
                          {faq.answer}
                          <div className="mt-3 flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-[#0284C7] border border-sky-200">
                              Category: {faq.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
