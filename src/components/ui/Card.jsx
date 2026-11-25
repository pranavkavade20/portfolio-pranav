import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * Architectural Card Primitive
 * Supports surface, tonal (recessed), and flat (borderless hairline-ready) variants
 * to create hierarchy through material and ground instead of uniform boxes.
 */
const Card = ({
  children,
  className = '',
  variant = 'surface', // 'surface' | 'tonal' | 'flat'
  hoverEffect = false,
  interactive = false,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isHoverable = hoverEffect || interactive;

  const surfaceStyles = {
    surface: 'bg-surface border border-outline-variant shadow-elevation-1',
    tonal: 'bg-surface-variant/75 border border-outline-variant/80 shadow-none',
    flat: 'bg-surface border border-transparent shadow-none',
  };

  return (
    <motion.div
      whileHover={isHoverable && !shouldReduceMotion ? { y: -2 } : undefined}
      transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
      className={cn(
        'text-on-surface rounded-lg',
        'transition-[border-color,box-shadow,background-color] duration-base ease-standard',
        surfaceStyles[variant] || surfaceStyles.surface,
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
  <h3 className={cn('font-semibold text-lg text-on-surface tracking-tight leading-snug', className)} {...props}>
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
