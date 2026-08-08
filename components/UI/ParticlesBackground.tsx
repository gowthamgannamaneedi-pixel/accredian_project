'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function ParticlesBackground() {
  // Deterministically pre-calculate particle positions to ensure React purity
  const particleData = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      // Pseudo-random deterministic values derived from index
      const seed = (i * 9301 + 49297) % 233280;
      const rnd1 = seed / 233280;
      const rnd2 = ((i * 1259 + 21401) % 32768) / 32768;
      const rnd3 = ((i * 3813 + 5119) % 65536) / 65536;

      return {
        id: i,
        size: rnd1 * 4 + 2,
        initialX: rnd2 * 100,
        initialY: rnd3 * 100,
        duration: rnd1 * 10 + 10,
        xShift: (rnd2 - 0.5) * 40,
        delay: rnd3 * 5,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particleData.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-sky-400/20 blur-[1px]"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.initialX}%`,
            top: `${p.initialY}%`,
          }}
          animate={{
            y: ['0%', '-150%'],
            x: ['0%', `${p.xShift}%`],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
