import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Chip Component
 * 32px height, pill radius (9999px), accessible touch targets and states
 */
const Chip = ({
  children,
  variant = 'default',
  selected = false,
  icon: Icon,
  onClick,
  className = '',
  disabled = false,
  ...props
}) => {
  const isClickable = Boolean(onClick);

  const variants = {
    // Standard M3 tonal chip
    default: selected
      ? "bg-primary-container text-on-primary-container border-primary"
      : "bg-surface-variant text-on-surface-variant border-transparent hover:text-on-surface hover:bg-surface-variant/80",
    // Outlined filter chip
    outlined: selected
      ? "bg-primary-container text-on-primary-container border-primary font-medium"
      : "bg-surface text-on-surface-variant border-outline hover:border-on-surface-variant hover:text-on-surface",
    // Primary highlighted chip
    primary: "bg-primary text-on-primary border-transparent shadow-elevation-1",
    // Success status
    success: "bg-success-container text-on-success-container border-transparent",
    // Warning status
    warning: "bg-warning-container text-on-warning-container border-transparent",
  };

  const Component = isClickable ? 'button' : 'span';

  return (
    <Component
      type={isClickable ? 'button' : undefined}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 h-8 rounded-full text-xs font-medium border select-none transition-all duration-150",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
        isClickable && "cursor-pointer active:scale-95 touch-target-sm",
        disabled && "opacity-50 pointer-events-none",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {Icon && (
        <span className="shrink-0 inline-flex items-center justify-center">
          <Icon size={14} />
        </span>
      )}
      <span>{children}</span>
    </Component>
  );
};

export default Chip;
