import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = ''
}) => {
  const aligns = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 md:mb-24 ${aligns[align]} max-w-2xl ${className}`}
    >
      {subtitle && (
        <p className="text-sm md:text-base font-bold tracking-widest uppercase text-blue-600 mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
