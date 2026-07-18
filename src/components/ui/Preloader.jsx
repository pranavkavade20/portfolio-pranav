import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-bg-light dark:bg-brand-bg-dark"
    >
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E67E22" />
            <stop offset="100%" stopColor="#F6B26B" />
          </linearGradient>
        </defs>

        {/* Outer rotating ring */}
        <circle
          cx="90"
          cy="90"
          r="68"
          fill="none"
          stroke="#F6B26B"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="320"
          strokeDashoffset="80"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 90 90"
            to="360 90 90"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Letter P */}
        <path
          d="M70 45 V135 M70 45 H100 C120 45 132 58 132 78 C132 98 120 110 100 110 H70"
          fill="none"
          stroke="url(#brandGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,300;300,0;0,300"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </motion.div>
  );
};

export default Preloader;
