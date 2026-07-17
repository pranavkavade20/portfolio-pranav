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
      className={`bg-brand-primary/5 dark:bg-brand-primary/10 backdrop-blur-md rounded-2xl md:rounded-3xl border border-brand-primary/10 dark:border-brand-primary/20 shadow-sm hover:shadow-xl hover:shadow-brand-primary/10 dark:hover:shadow-black/50 transition-shadow duration-300 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
