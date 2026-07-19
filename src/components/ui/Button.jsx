import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  as: Component = 'button',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-tight rounded-btn transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 dark:focus-visible:ring-zinc-400 focus-visible:ring-offset-brand-bg-light dark:focus-visible:ring-offset-brand-bg-dark select-none";
  
  const variants = {
    primary: "bg-black dark:bg-white text-white dark:text-black shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:bg-slate-800 dark:hover:bg-zinc-200 active:scale-[0.98]",
    secondary: "bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-zinc-100 border border-black/10 dark:border-white/10 shadow-sm hover:bg-slate-50 dark:hover:bg-zinc-800/50 active:scale-[0.98]",
    ghost: "bg-transparent text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-100/50 dark:hover:bg-zinc-800/50 active:scale-[0.98]"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5"
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18
  };

  const isMotion = Component === 'button';
  const MotionComponent = isMotion ? motion.button : Component;

  return (
    <MotionComponent 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileTap={isMotion ? { scale: 0.98 } : undefined}
      {...props}
    >
      {children}
      {Icon && <Icon size={iconSizes[size]} className="shrink-0" />}
    </MotionComponent>
  );
};

export default Button;

