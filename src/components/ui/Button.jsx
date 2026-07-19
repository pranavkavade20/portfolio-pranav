import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  as: Component = 'button',
  magnetic = true,
  ...props 
}) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!magnetic || !ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const xPos = clientX - (left + width / 2);
    const yPos = clientY - (top + height / 2);
    x.set(xPos * 0.2); 
    y.set(yPos * 0.2);
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-tight rounded-btn transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 dark:focus-visible:ring-zinc-400 focus-visible:ring-offset-brand-bg-light dark:focus-visible:ring-offset-brand-bg-dark select-none group";
  
  const variants = {
    primary: "bg-black dark:bg-white text-white dark:text-black shadow-[var(--shadow-premium-light)] dark:shadow-[var(--shadow-premium-dark)] hover:bg-slate-800 dark:hover:bg-zinc-200",
    secondary: "bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-zinc-100 border border-black/10 dark:border-white/10 shadow-sm hover:bg-slate-50 dark:hover:bg-zinc-800/50",
    ghost: "bg-transparent text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-black/5 dark:hover:bg-white/10"
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

  const MotionComponent = Component === 'button' ? motion.button : motion.create(Component);

  return (
    <MotionComponent 
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ x: springX, y: springY }}
      {...props}
    >
      <span className={cn("relative z-10 flex items-center justify-center w-full", sizes[size].includes('gap-') ? sizes[size].split(' ').find(c => c.startsWith('gap-')) : '')}>
        {children}
        {Icon && (
          <motion.span
            className="shrink-0 inline-flex"
            whileHover={{ x: 3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
             <Icon size={iconSizes[size]} />
          </motion.span>
        )}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 rounded-btn bg-white/20 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </MotionComponent>
  );
};

export default Button;
