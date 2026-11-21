import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Skeleton Component
 * Shimmering placeholder matching component dimensions
 */
const Skeleton = ({
  className = '',
  variant = 'rectangular', // 'text' | 'circular' | 'rectangular' | 'card'
  ...props
}) => {
  const variants = {
    text: "h-4 w-3/4 rounded-md",
    circular: "rounded-full aspect-square",
    rectangular: "rounded-xl",
    card: "h-48 w-full rounded-2xl"
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-surface-variant/80 border border-outline-variant/30",
        variants[variant] || variants.rectangular,
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Skeleton;
