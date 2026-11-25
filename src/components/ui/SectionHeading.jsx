import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import TextReveal from './TextReveal';
import { cn } from '../../lib/utils';

const SectionHeading = ({
  title,
  subtitle,
  description,
  action,
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
    <div
      className={cn(
        'mb-6 tablet:mb-8 w-full flex flex-col tablet:flex-row tablet:items-end justify-between gap-4',
        className
      )}
    >
      <div className={cn('min-w-0 flex-1', aligns[align] || aligns.left)}>
        {subtitle && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, ease: [0.2, 0, 0, 1] }}
            className="text-xs font-mono font-medium text-on-surface-variant mb-2"
          >
            {subtitle}
          </motion.p>
        )}
        <h1 className="text-[clamp(1.75rem,1.35rem+1.1vw,2.25rem)] font-semibold tracking-[-0.025em] leading-[1.15] text-on-surface">
          <TextReveal text={title} type="word" />
        </h1>
        {description && (
          <p className="text-base text-on-surface-variant mt-2.5 leading-relaxed max-w-[65ch]">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0">
          {action}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
