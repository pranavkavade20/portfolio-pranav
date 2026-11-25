import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function TextReveal({ text, type = 'word', delay = 0, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  if (typeof text !== 'string' || shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === 'char' ? 0.02 : 0.04,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.28,
        ease: [0.2, 0, 0, 1],
      },
    },
  };

  const elements = type === 'char' ? text.split('') : text.split(' ');

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={`inline-block ${className}`}
    >
      {elements.map((el, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden"
          style={{ marginRight: type === 'word' ? '0.25em' : '0' }}
        >
          <motion.span
            variants={childVariants}
            className="inline-block"
            style={{ whiteSpace: 'pre' }}
          >
            {el === ' ' ? '\u00A0' : el}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
