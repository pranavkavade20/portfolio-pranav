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
      className={`bg-white rounded-2xl md:rounded-3xl border border-slate-100/50 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-shadow duration-300 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
