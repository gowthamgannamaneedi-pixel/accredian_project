'use client';

import React, { useEffect, useRef } from 'react';
import { STATS_DATA } from '@/lib/data';
import { Users, Building2, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Building2,
  Award,
  GraduationCap,
};

// Pure vanilla counter — no framer-motion for counting to avoid 0+ on first frame
function AnimatedStat({
  targetNumber,
  suffix,
  displayValue,
}: {
  targetNumber: number;
  suffix: string;
  displayValue: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const didAnimate = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    const span = spanRef.current;
    if (!el || !span) return;

    function formatValue(n: number): string {
      if (displayValue.includes('K')) return `${n}K`;
      return n.toLocaleString();
    }

    // Set final value immediately so static/SSR render always shows correct value
    span.textContent = formatValue(targetNumber);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !didAnimate.current) {
          didAnimate.current = true;
          observer.disconnect();

          const duration = 1800; // ms
          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * targetNumber);
            if (span) span.textContent = formatValue(current);
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetNumber, displayValue]);

  return (
    <div ref={containerRef} className="inline-flex items-baseline">
      <span
        ref={spanRef}
        className="font-extrabold text-4xl sm:text-5xl text-[#111827] tracking-tight"
      >
        {displayValue}
      </span>
      <span className="text-[#168CFF] font-bold text-4xl sm:text-5xl">{suffix}</span>
    </div>
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
