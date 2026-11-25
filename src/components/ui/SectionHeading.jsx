import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import TextReveal from './TextReveal';
import { cn } from '../../lib/utils';

const SectionHeading = ({
  title,
  subtitle,
  description,
  align = 'left',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const aligns = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={cn('mb-6 tablet:mb-8 max-w-2xl', aligns[align] || aligns.left, className)}>
      {subtitle && (
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.24, ease: [0.2, 0, 0, 1] }}
          className="text-xs font-semibold tracking-wider uppercase text-primary mb-2"
        >
          {subtitle}
        </motion.p>
      )}
      <h1 className="text-2xl tablet:text-3xl font-semibold tracking-tight text-on-surface">
        <TextReveal text={title} type="word" />
      </h1>
      {description && (
        <p className="text-base text-on-surface-variant mt-2 leading-relaxed prose-measure">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
