'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rY = ((mouseX - width / 2) / (width / 2)) * 8; // max 8 deg
    const rX = -((mouseY - height / 2) / (height / 2)) * 8;

    setRotateX(rX);
    setRotateY(rY);
    setSpotlightPos({
      x: Math.round((mouseX / width) * 100),
      y: Math.round((mouseY / height) * 100),
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-40 transition-opacity duration-300 z-10 rounded-inherit"
          style={{
            background: `radial-gradient(600px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(0, 210, 255, 0.25), transparent 40%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
