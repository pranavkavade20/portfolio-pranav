import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Badge Component
 * Semantic pill badge for categorization and status indicators
 */
const Badge = ({ 
  children, 
  variant = 'default',
  icon: Icon,
  className = '' 
}) => {
  const variants = {
    default: "bg-surface-variant text-on-surface-variant border border-outline-variant",
    primary: "bg-primary text-on-primary border border-transparent shadow-elevation-1",
    tonal: "bg-primary-container text-on-primary-container border border-primary/20",
    success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20",
    error: "bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20",
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide select-none",
      variants[variant] || variants.default,
      className
    )}>
      {Icon && <Icon size={12} className="shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
