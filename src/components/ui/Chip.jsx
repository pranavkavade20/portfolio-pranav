import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Chip Component
 * 32px visual pill height, >=48dp touch hit area on mobile when interactive,
 * supports button, anchor (as="a"), or static span semantics.
 */
const Chip = ({
  children,
  variant = 'default',
  selected = false,
  icon: Icon,
  onClick,
  as,
  className = '',
  disabled = false,
  ...props
}) => {
  const isAnchor = as === 'a' || Boolean(props.href);
  const isInteractive = isAnchor || Boolean(onClick) || as === 'button';

  const Component = as || (isAnchor ? 'a' : onClick ? 'button' : 'span');

  const variants = {
    default: selected
      ? 'bg-primary-container text-on-primary-container border-primary font-semibold'
      : 'bg-surface-variant text-on-surface-variant border-transparent hover:text-on-surface',
    outlined: selected
      ? 'bg-primary-container text-on-primary-container border-primary font-semibold'
      : 'bg-surface text-on-surface-variant border-outline hover:text-on-surface',
    primary: 'bg-primary text-on-primary border-transparent shadow-elevation-1 font-semibold',
    tonal: 'bg-primary-container text-on-primary-container border-transparent font-semibold',
    success: 'bg-success-container text-on-success-container border-transparent',
    warning: 'bg-warning-container text-on-warning-container border-transparent',
  };

  return (
    <Component
      type={Component === 'button' ? 'button' : undefined}
      onClick={disabled ? undefined : onClick}
      disabled={Component === 'button' ? disabled : undefined}
      aria-disabled={Component !== 'button' && disabled ? true : undefined}
      className={cn(
        'relative inline-flex items-center justify-center gap-1.5 px-3 h-8 rounded-full text-xs font-medium border select-none shrink-0',
        'transition-[color,background-color,border-color,transform] duration-fast ease-standard',
        'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
        isInteractive && [
          'state-layer cursor-pointer active:scale-[0.97]',
          // Extend invisible tap hit area to >=48dp on compact mobile without inflating 32px pill height
          'after:content-[""] after:absolute after:-inset-y-2 after:-inset-x-1 tablet:after:inset-0',
        ],
        disabled && 'opacity-50 pointer-events-none',
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {Icon && (
        <span className="shrink-0 inline-flex items-center justify-center" aria-hidden="true">
          <Icon size={14} />
        </span>
      )}
      <span>{children}</span>
    </Component>
  );
};

export default Chip;
