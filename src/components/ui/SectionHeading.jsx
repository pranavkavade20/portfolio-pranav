import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

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
    <div className={`mb-16 md:mb-20 ${aligns[align]} max-w-2xl ${className}`}>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base font-bold tracking-widest uppercase text-slate-500 dark:text-zinc-400 mb-4"
        >
          {subtitle}
        </motion.p>
      )}
      <h2 className="text-section-title text-slate-900 dark:text-white">
        <TextReveal text={title} type="word" />
      </h2>
    </div>
  );
};

export default SectionHeading;
