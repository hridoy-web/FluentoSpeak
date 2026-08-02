'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function RoadmapPath({ totalItems = 5 }) {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Center node to center node perfect tight alignment
  const generateTightSPath = () => {
    let path = "M 400 50";
    
    for (let i = 0; i < totalItems - 1; i++) {
      const currentY = 50 + i * 380;
      const nextY = currentY + 380;
      const isEven = i % 2 === 0;

      if (isEven) {
        // Controlled smooth Curve rightwards
        path += ` C 580 ${currentY + 140}, 580 ${nextY - 140}, 400 ${nextY}`;
      } else {
        // Controlled smooth Curve leftwards
        path += ` C 220 ${currentY + 140}, 220 ${nextY - 140}, 400 ${nextY}`;
      }
    }
    return path;
  };

  const svgPath = generateTightSPath();

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
      <svg
        className="w-full h-full"
        viewBox={`0 0 800 ${totalItems * 380}`}
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* Soft Background Dotted Guide Line */}
        <path
          d={svgPath}
          stroke="#E2E8F0"
          strokeWidth="4"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />

        {/*  Soft Vibrant Animated Path */}
        <motion.path
          d={svgPath}
          stroke="url(#soft-purple-gradient)"
          strokeWidth="5"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {/* Eye-friendly Gradient Palette */}
        <defs>
          <linearGradient id="soft-purple-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="50%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}