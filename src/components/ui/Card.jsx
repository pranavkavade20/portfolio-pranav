import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  ...props 
}) => {
  return (
    <motion.div 
      whileHover={hoverEffect ? { y: -2, scale: 1.005 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`glass-panel rounded-card overflow-hidden transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
