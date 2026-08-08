'use client';

import React, { useEffect, useState, useRef } from 'react';
import { STATS_DATA } from '@/lib/data';
import { Users, Building2, Award, GraduationCap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Building2,
  Award,
  GraduationCap,
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold text-4xl sm:text-5xl text-[#111827] tracking-tight">
      {count.toLocaleString()}
      <span className="text-[#168CFF] font-bold">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#0284C7] font-bold block mb-2">
            Proven Enterprise Impact
          </span>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Transforming Organizational Capabilities At Scale
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => {
            const Icon = iconMap[stat.iconName] || Users;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#168CFF]/50 transition-all duration-300 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <h3 className="text-base font-bold text-[#111827] mt-2 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed font-normal">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
