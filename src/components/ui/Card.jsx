import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  interactive = false,
  ...props 
}) => {
  return (
    <motion.div 
      whileHover={hoverEffect || interactive ? { y: -2, scale: 1.005 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        "bg-surface text-on-surface rounded-2xl border border-outline-variant shadow-elevation-1",
        "transition-all duration-200 ease-out",
        hoverEffect && "hover:border-outline hover:shadow-elevation-2",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ className = '', children, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className = '', children, ...props }) => (
  <h3 className={cn("font-semibold text-lg sm:text-xl text-on-surface tracking-tight", className)} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ className = '', children, ...props }) => (
  <p className={cn("text-sm text-on-surface-variant leading-relaxed", className)} {...props}>
    {children}
  </p>
);

const CardContent = ({ className = '', children, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ className = '', children, ...props }) => (
  <div className={cn("flex items-center p-6 pt-0 gap-3", className)} {...props}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
