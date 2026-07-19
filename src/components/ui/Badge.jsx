import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variants = {
    default: "bg-slate-100 dark:bg-zinc-800/50 text-slate-700 dark:text-zinc-300 border border-black/5 dark:border-white/10",
    primary: "bg-black dark:bg-white text-white dark:text-black border border-transparent",
    success: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-500/20",
    warning: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200/50 dark:border-amber-500/20",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-pill text-[11px] font-medium tracking-wide uppercase ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
