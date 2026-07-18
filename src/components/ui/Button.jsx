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
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide rounded-[12px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary hover:bg-brand-primary/90 dark:hover:bg-brand-secondary/90 shadow-md hover:shadow-lg focus:ring-brand-primary dark:focus:ring-brand-secondary",
    secondary: "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white border border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 hover:bg-slate-50 dark:hover:bg-zinc-800 shadow-sm hover:shadow focus:ring-slate-200",
    ghost: "bg-transparent text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 focus:ring-slate-200"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20
  };

  return (
    <Component 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2"
      >
        {children}
        {Icon && <Icon size={iconSizes[size]} />}
      </motion.div>
    </Component>
  );
};

export default Button;
