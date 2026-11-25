import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const MotionButton = motion.button;
const MotionA = motion.a;

/**
 * Meta x Google Button Component
 * Pill shape, Material state layers (8% hover, 12% pressed), 48dp mobile touch target,
 * stable-width loading spinner, and reduced-motion support.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  as: Component = 'button',
  magnetic = false,
  isLoading = false,
  disabled = false,
  type,
  ...props
}) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const canMagnet = magnetic && !shouldReduceMotion && !disabled && !isLoading;

  const handleMouseMove = (e) => {
    if (!canMagnet || !ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.15);
    y.set((clientY - (top + height / 2)) * 0.15);
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    x.set(0);
    y.set(0);
  };

  const baseStyles = cn(
    'state-layer relative inline-flex items-center justify-center font-semibold tracking-tight rounded-full select-none cursor-pointer',
    'transition-[transform,box-shadow,border-color,background-color] duration-fast ease-standard',
    'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
    (disabled || isLoading) && 'opacity-50 cursor-not-allowed pointer-events-none'
  );

  const variants = {
    primary: 'bg-primary text-on-primary shadow-elevation-1',
    filled: 'bg-primary text-on-primary shadow-elevation-1',
    secondary: 'bg-primary-container text-on-primary-container',
    tonal: 'bg-primary-container text-on-primary-container',
    outline: 'border border-outline bg-surface text-on-surface',
    outlined: 'border border-outline bg-surface text-on-surface',
    ghost: 'bg-transparent text-on-surface-variant hover:text-on-surface',
    text: 'bg-transparent text-on-surface-variant hover:text-on-surface',
  };

  // Enforce >=48dp touch target on compact mobile screens; refined heights on tablet+
  const sizes = {
    sm: 'min-h-[48px] tablet:min-h-[36px] px-4 py-1.5 text-sm gap-1.5',
    md: 'min-h-[48px] tablet:min-h-[42px] px-5 py-2 text-sm gap-2',
    lg: 'min-h-[48px] px-6 py-2.5 text-base gap-2.5',
  };

  const iconSizes = {
    sm: 15,
    md: 17,
    lg: 18,
  };

  const innerContent = (
    <>
      <span
        className={cn(
          'relative z-10 inline-flex items-center justify-center gap-2',
          isLoading && 'invisible'
        )}
      >
        <span>{children}</span>
        {Icon && (
          <span className="shrink-0 inline-flex items-center justify-center" aria-hidden="true">
            <Icon size={iconSizes[size] || 17} />
          </span>
        )}
      </span>
      {isLoading && (
        <span className="absolute inset-0 z-10 inline-flex items-center justify-center gap-2">
          <Loader2
            size={iconSizes[size] || 17}
            className="animate-spin shrink-0"
            aria-hidden="true"
          />
          <span className="sr-only">Loading</span>
        </span>
      )}
    </>
  );

  const motionProps = canMagnet
    ? {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: { x: springX, y: springY },
      }
    : {};

  const tapMotion = shouldReduceMotion || disabled || isLoading ? undefined : { scale: 0.98 };
  const classes = cn(
    baseStyles,
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className
  );

  if (Component === 'a') {
    return (
      <MotionA
        ref={ref}
        className={classes}
        whileTap={tapMotion}
        aria-disabled={disabled || isLoading || undefined}
        {...motionProps}
        {...props}
      >
        {innerContent}
      </MotionA>
    );
  }

  if (Component !== 'button') {
    const CustomComponent = Component;
    return (
      <CustomComponent
        ref={ref}
        className={classes}
        aria-disabled={disabled || isLoading || undefined}
        {...props}
      >
        {innerContent}
      </CustomComponent>
    );
  }

  return (
    <MotionButton
      ref={ref}
      type={type || 'button'}
      className={classes}
      whileTap={tapMotion}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...motionProps}
      {...props}
    >
      {innerContent}
    </MotionButton>
  );
};

export default Button;
