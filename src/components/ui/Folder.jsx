import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Folder = ({ color = '#E67E22', title = '', items = [], className = '' }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const startAutoClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 3500); // 3.5 seconds
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (!open) {
      setOpen(true);
      startAutoClose();
    } else {
      setOpen(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // If open and they hover, stop the auto close so they can read
    if (open && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Resume auto-close if they leave
    if (open) {
      startAutoClose();
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Calculate arc positions
  const radius = 90; // Decreased radius since the folder will be scaled up larger
  
  return (
    <div 
      className={`${className} relative ${open ? 'z-50' : 'z-10 hover:z-40'} transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
        onClick={handleClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e);
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={open}
        aria-label={open ? 'Close folder' : 'Open folder'}
      >
        {/* Main Folder Container */}
        <div className="relative w-[100px] h-[80px] rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[var(--folder-color)] overflow-visible z-0 shadow-lg"
             style={{ '--folder-color': color }}
        >
          {/* Back flap dark overlay */}
          <div className="absolute inset-0 bg-black/10 rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] z-0"></div>
          
          {/* Top tab */}
          <span className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-none rounded-br-none bg-[var(--folder-color)]">
            <div className="absolute inset-0 bg-black/10 rounded-tl-[5px] rounded-tr-[5px] rounded-bl-none rounded-br-none" />
          </span>

          {/* Cards container - positioned centrally inside the folder */}
          <div className="absolute top-[30%] left-[50%] w-0 h-0 z-20">
            {items.map((item, i) => {
              // Calculate perfect half-circle arc math (180 degrees)
              let angle = 90;
              if (items.length > 1) {
                // From 180 (left) to 0 (right)
                angle = 180 - (i * (180 / (items.length - 1)));
              }
              const rad = angle * (Math.PI / 180);
              const x = radius * Math.cos(rad);
              const y = -radius * Math.sin(rad) - 5; // offset slightly higher
              // Peek math for hover state
              const offsetIndex = i - ((items.length - 1) / 2);
              const peekX = -25 + (offsetIndex * 8); // spread horizontally slightly
              const peekY = -35 + Math.abs(offsetIndex * 2); // middle peaks highest
              const peekRotate = offsetIndex * 6; // fan tilt

              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={
                    open
                      ? { x: x - 25, y: y - 20, scale: 1, opacity: 1, rotate: 0 } 
                      : isHovered
                        ? { x: peekX, y: peekY, scale: 0.65, opacity: 1, rotate: peekRotate }
                        : { x: -25, y: -10, scale: 0.2, opacity: 0, rotate: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                    mass: 0.8,
                    delay: open ? i * 0.05 : 0 // Stagger fan out
                  }}
                  className={`absolute w-[50px] h-[40px] bg-transparent rounded-[6px] flex flex-col items-center justify-center p-1 text-center overflow-visible`}
                >
                  <motion.div
                    animate={open ? { y: [0, -4, 0], rotate: [0, (i % 2 === 0 ? 2 : -2), 0] } : { y: 0, rotate: 0 }}
                    transition={{ duration: 3.5 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full flex flex-col items-center justify-center pointer-events-none"
                  >
                    {item}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Front flap skews */}
          <motion.div
            initial={false}
            animate={{ 
              skewX: open ? 15 : isHovered ? 3 : 0, 
              scaleY: open ? 0.6 : isHovered ? 0.95 : 1 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute z-30 w-full h-full origin-bottom bg-[var(--folder-color)] rounded-tl-[5px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          ></motion.div>
          
          <motion.div
            initial={false}
            animate={{ 
              skewX: open ? -15 : isHovered ? -3 : 0, 
              scaleY: open ? 0.6 : isHovered ? 0.95 : 1 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute z-30 w-full h-full origin-bottom bg-[var(--folder-color)] rounded-tl-[5px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] flex items-center justify-center"
          >
            {title && (
              <span className="text-white/90 font-bold text-[10px] px-2 text-center drop-shadow-md select-none pointer-events-none transition-opacity duration-200">
                {title}
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
