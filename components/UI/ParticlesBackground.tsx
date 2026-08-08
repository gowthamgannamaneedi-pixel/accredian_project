'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ParticlesBackground() {
  const particles = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2; // 2px to 6px
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = Math.random() * 10 + 10; // 10s to 20s

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/30 blur-[1px]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              y: ['0%', '-150%'],
              x: ['0%', `${(Math.random() - 0.5) * 40}%`],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
}
