import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

const MotionButton = motion.button;
const MotionA = motion.a;

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
  ...props 
}) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!magnetic || disabled || isLoading || !ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const xPos = clientX - (left + width / 2);
    const yPos = clientY - (top + height / 2);
    x.set(xPos * 0.15); 
    y.set(yPos * 0.15);
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    x.set(0);
    y.set(0);
  };

  // Base Meta x Google Button styles: pill shape, 48dp touch-friendly target, accessible focus ring
  const baseStyles = cn(
    "relative inline-flex items-center justify-center font-medium tracking-tight rounded-full select-none cursor-pointer",
    "transition-all duration-200 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    (disabled || isLoading) && "opacity-50 cursor-not-allowed pointer-events-none"
  );
  
  // Semantic M3 / Meta role variants
  const variants = {
    // Primary filled action
    primary: "bg-primary text-on-primary hover:brightness-105 active:scale-[0.98] shadow-elevation-1",
    filled: "bg-primary text-on-primary hover:brightness-105 active:scale-[0.98] shadow-elevation-1",
    // Secondary tonal action
    secondary: "bg-primary-container text-on-primary-container hover:brightness-95 active:scale-[0.98]",
    tonal: "bg-primary-container text-on-primary-container hover:brightness-95 active:scale-[0.98]",
    // Outlined tertiary action
    outline: "border border-outline bg-surface text-on-surface hover:bg-surface-variant active:scale-[0.98]",
    outlined: "border border-outline bg-surface text-on-surface hover:bg-surface-variant active:scale-[0.98]",
    // Low-emphasis ghost / text action
    ghost: "bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/60 active:scale-[0.98]",
    text: "bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/60 active:scale-[0.98]"
  };

  const sizes = {
    sm: "min-h-[36px] px-3.5 py-1.5 text-xs gap-1.5",
    md: "min-h-[44px] px-5 py-2 text-sm gap-2",
    lg: "min-h-[48px] px-6 py-2.5 text-base gap-2.5"
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18
  };

  const content = (
    <>
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="opacity-90">{children}</span>
        </span>
      ) : (
        <span className="relative z-10 flex items-center justify-center w-full gap-2">
          {children}
          {Icon && (
            <span className="shrink-0 inline-flex items-center justify-center">
              <Icon size={iconSizes[size] || 16} />
            </span>
          )}
        </span>
      )}
    </>
  );

  const motionProps = magnetic
    ? {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: { x: springX, y: springY }
      }
    : {};

  if (Component === 'a') {
    return (
      <MotionA
        ref={ref}
        className={cn(baseStyles, variants[variant] || variants.primary, sizes[size] || sizes.md, className)}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        aria-disabled={disabled || isLoading}
        {...motionProps}
        {...props}
      >
        {content}
      </MotionA>
    );
  }

  return (
    <MotionButton 
      ref={ref}
      className={cn(baseStyles, variants[variant] || variants.primary, sizes[size] || sizes.md, className)}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...motionProps}
      {...props}
    >
      {content}
    </MotionButton>
  );
};

export default Button;
