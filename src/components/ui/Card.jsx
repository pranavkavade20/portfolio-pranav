import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  ...props 
}) => {
  return (
    <motion.div 
      whileHover={hoverEffect ? { y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`backdrop-blur-md bg-white/70 dark:bg-brand-bg-dark/70 rounded-[20px] border border-slate-100 dark:border-zinc-800/50 shadow-sm transition-all duration-[400ms] overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
