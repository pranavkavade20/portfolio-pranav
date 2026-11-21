import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';
import { cn } from '../../lib/utils';

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
    <div className={cn("mb-12 md:mb-16 max-w-2xl", aligns[align] || aligns.center, className)}>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-2.5"
        >
          {subtitle}
        </motion.p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
        <TextReveal text={title} type="word" />
      </h2>
    </div>
  );
};

export default SectionHeading;
