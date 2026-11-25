import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Card Component
 * Tonal surface with 1px outline-variant border and optional interactive elevation.
 */
const Card = ({
  children,
  className = '',
  hoverEffect = false,
  interactive = false,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isHoverable = hoverEffect || interactive;

  return (
    <motion.div
      whileHover={isHoverable && !shouldReduceMotion ? { y: -2 } : undefined}
      transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
      className={cn(
        'bg-surface text-on-surface rounded-lg border border-outline-variant shadow-elevation-1',
        'transition-[border-color,box-shadow] duration-base ease-standard',
        isHoverable && 'hover:border-outline hover:shadow-elevation-2',
        interactive && 'state-layer cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ className = '', children, ...props }) => (
  <div className={cn('flex flex-col gap-1.5 p-4 tablet:p-6 pb-3 tablet:pb-4', className)} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className = '', children, ...props }) => (
  <h3 className={cn('font-semibold text-lg text-on-surface tracking-tight', className)} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ className = '', children, ...props }) => (
  <p className={cn('text-sm text-on-surface-variant leading-relaxed', className)} {...props}>
    {children}
  </p>
);

const CardContent = ({ className = '', children, ...props }) => (
  <div className={cn('p-4 tablet:p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ className = '', children, ...props }) => (
  <div className={cn('flex items-center flex-wrap p-4 tablet:p-6 pt-0 gap-3', className)} {...props}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
