'use client';

import React, { useEffect, useState, useRef } from 'react';
import { STATS_DATA } from '@/lib/data';
import { Users, Building2, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Building2,
  Award,
  GraduationCap,
};

function Counter({
  targetNumber,
  suffix,
  displayValue
}: {
  targetNumber: number;
  suffix: string;
  displayValue: string;
}) {
  const [count, setCount] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Safety fallback ensures animation runs reliably even on static hydration
    const fallbackTimer = setTimeout(() => {
      setHasStarted(true);
    }, 150);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;
    const duration = 1800; // 1.8 seconds smooth count up animation

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Smooth ease-out cubic curve
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * targetNumber));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, targetNumber]);

  // Format count string output
  const formattedCount = displayValue.includes('K')
    ? `${count}K`
    : count.toLocaleString();

  return (
    <span ref={elementRef} className="font-extrabold text-4xl sm:text-5xl text-[#111827] tracking-tight">
      {hasStarted ? formattedCount : '0'}
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
            const targetNum = stat.targetNumber || stat.value;
            const dispVal = stat.displayValue || stat.value.toString();

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
                  <Counter targetNumber={targetNum} displayValue={dispVal} suffix={stat.suffix} />
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
