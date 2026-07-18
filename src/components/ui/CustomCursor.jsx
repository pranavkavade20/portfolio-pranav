import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.group') ||
        window.getComputedStyle(e.target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-normal"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 25,
        mass: 0.5
      }}
      style={{
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <div className="relative w-[400px] h-[400px] flex items-center justify-center">
        {/* Consistent Animated Background Blobs applied to Cursor */}
        <div className="absolute w-64 h-64 bg-amber-200/50 dark:bg-amber-900/20 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute w-72 h-72 bg-brand-secondary/50 dark:bg-brand-primary/20 rounded-full blur-[90px] animate-pulse ml-12 mt-12" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>
    </motion.div>
  );
}

export default CustomCursor;
