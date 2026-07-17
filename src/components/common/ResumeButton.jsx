import React, { memo } from 'react';
import { Download } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';

export const ResumeButton = memo(({ 
  variant = 'primary', 
  className = '', 
  showIcon = true,
  children = 'My Resume' 
}) => {
  const baseStyles = "group inline-flex items-center justify-center gap-2 px-6 py-2.5 text-[15px] font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary dark:focus-visible:ring-offset-zinc-900 active:scale-95";
  
  const variants = {
    primary: "bg-brand-primary hover:bg-brand-primary/90 text-white dark:bg-brand-secondary dark:hover:bg-brand-secondary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700 dark:hover:bg-zinc-800 dark:text-zinc-300"
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <a
      href={portfolioConfig.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${selectedVariant} ${className}`}
      aria-label="Download Resume"
    >
      <span>{children}</span>
      {showIcon && (
        <span className="transition-transform duration-300 group-hover:translate-y-0.5">
          <Download size={18} strokeWidth={2.5} className="animate-bounce" />
        </span>
      )}
    </a>
  );
});

ResumeButton.displayName = 'ResumeButton';
