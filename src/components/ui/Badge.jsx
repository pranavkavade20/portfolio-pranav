import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Badge Component
 * Semantic pill badge consuming design tokens (12px minimum text floor).
 */
const Badge = ({
  children,
  variant = 'default',
  icon: Icon,
  className = '',
}) => {
  const variants = {
    default: 'bg-surface-variant text-on-surface-variant border border-outline-variant',
    primary: 'bg-primary text-on-primary border border-transparent shadow-elevation-1',
    tonal: 'bg-primary-container text-on-primary-container border border-transparent',
    secondary: 'bg-secondary-container text-on-secondary-container border border-outline-variant/60',
    tertiary: 'bg-tertiary-container text-on-tertiary-container border border-transparent',
    accent: 'bg-accent-container text-on-accent-container border border-transparent',
    info: 'bg-info-container text-on-info-container border border-transparent',
    success: 'bg-success-container text-on-success-container border border-transparent',
    warning: 'bg-warning-container text-on-warning-container border border-transparent',
    error: 'bg-error-container text-on-error-container border border-transparent',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide select-none',
        variants[variant] || variants.default,
        className
      )}
    >
      {Icon && <Icon size={13} className="shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
