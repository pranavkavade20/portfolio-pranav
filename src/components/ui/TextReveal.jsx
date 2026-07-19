import React from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({ text, type = 'word', delay = 0, className = '' }) {
  if (typeof text !== 'string') {
    return <span className={className}>{text}</span>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === 'char' ? 0.02 : 0.05,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
      rotate: 2,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
        mass: 0.8,
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
