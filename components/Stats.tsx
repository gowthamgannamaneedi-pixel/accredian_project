'use client';

import React, { useEffect, useState, useRef } from 'react';
import { STATS_DATA } from '@/lib/data';
import { Users, Building2, Award, GraduationCap } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Building2,
  Award,
  GraduationCap,
};

function AnimatedStat({
  targetNumber,
  suffix,
  displayValue,
}: {
  targetNumber: number;
  suffix: string;
  displayValue: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayNumber, setDisplayNumber] = useState<number | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(0, targetNumber, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic ease-out
        onUpdate(value) {
          setDisplayNumber(Math.floor(value));
        },
        onComplete() {
          setDisplayNumber(targetNumber);
        },
      });

      return () => controls.stop();
    }
  }, [isInView, targetNumber]);

  // Output text:
  // - If displayNumber is active, render count-up number formatted (e.g. 0 -> 10K)
  // - If displayNumber is null (initial SSR or before scroll), fallback to displayValue so it never shows 0+
  const outputText =
    displayNumber !== null
      ? displayValue.includes('K')
        ? `${displayNumber}K`
        : displayNumber.toLocaleString()
      : displayValue;

  return (
    <span ref={ref} className="font-extrabold text-4xl sm:text-5xl text-[#111827] tracking-tight">
      {outputText}
      <span className="text-[#168CFF] font-bold">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-16 bg-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#0284C7] font-bold block mb-2">
            Proven Enterprise Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Transforming Organizational Capabilities At Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => {
            const Icon = iconMap[stat.iconName] || Users;
            const targetNum = stat.targetNumber ?? stat.value ?? 0;
            const dispVal = stat.displayValue ?? stat.value?.toString() ?? '0';
            const suff = stat.suffix ?? '+';

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
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <AnimatedStat targetNumber={targetNum} displayValue={dispVal} suffix={suff} />
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
