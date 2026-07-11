import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Darkens a hex color by `percent` (negative = darker), used to build a
// subtle gradient so the folder reads as a dimensional object, not a flat tile.
function shade(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const clamp = (v) => Math.max(0, Math.min(255, v));
  const R = clamp((num >> 16) + amt);
  const G = clamp(((num >> 8) & 0x00ff) + amt);
  const B = clamp((num & 0x0000ff) + amt);
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

const Folder = ({ color = '#E67E22', title = '', items = [], className = '' }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const gradient = `linear-gradient(135deg, ${shade(color, 8)} 0%, ${color} 45%, ${shade(color, -18)} 100%)`;

  const startAutoClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpen(false), 4000);
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
    if (open && timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (open) startAutoClose();
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const radius = 74;

  return (
    <div
      className={`${className} relative ${open ? 'z-50' : 'z-10 hover:z-40'} transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gentle idle float so the folder feels alive before anyone interacts with it */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          whileHover={{ scale: 1.06, rotate: -1.5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 320, damping: 16 }}
          className="group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{ '--tw-ring-color': color }}
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleClick(e);
            }
          }}
          tabIndex={0}
          role="button"
          aria-expanded={open}
          aria-label={open ? 'Collapse skill list' : 'Expand skill list'}
        >
          {/* Ambient glow pool beneath the folder */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[70px] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"
            style={{ backgroundColor: color }}
          />

          {/* Folder body */}
          <div className="relative w-[110px] h-[86px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-xl overflow-visible shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            {/* Back panel — gradient gives it depth instead of a flat fill */}
            <div
              className="absolute inset-0 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-xl z-0 overflow-hidden"
              style={{ backgroundImage: gradient }}
            >
              <div className="absolute inset-0 bg-black/15 dark:bg-black/30" />
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:8px_8px]" />
            </div>

            {/* Tab */}
            <span
              className="absolute z-0 bottom-[98%] left-0 w-[32px] h-[11px] rounded-t-md overflow-hidden"
              style={{ backgroundImage: gradient }}
            >
              <div className="absolute inset-0 bg-black/20" />
            </span>

            {/* Fanned-out skill chips — peek a little even at rest, hinting at contents */}
            <div className="absolute top-[28%] left-[50%] w-0 h-0 z-20">
              {items.map((item, i) => {
                let angle = 90;
                if (items.length > 1) {
                  angle = 180 - i * (180 / (items.length - 1));
                }
                const rad = angle * (Math.PI / 180);
                const x = radius * Math.cos(rad);
                const y = -radius * Math.sin(rad) - 8;

                const offsetIndex = i - (items.length - 1) / 2;
                const peekX = -20 + offsetIndex * 8;
                const peekY = -30 + Math.abs(offsetIndex * 2);
                const peekRotate = offsetIndex * 6;

                const restX = offsetIndex * 5;
                const restY = -16 - Math.abs(offsetIndex) * 2;
                const restRotate = offsetIndex * 5;

                return (
                  <motion.div
                    key={i}
                    drag={open}
                    dragSnapToOrigin={true}
                    dragElastic={0.4}
                    whileDrag={{ scale: 1.2, zIndex: 60, cursor: 'grabbing' }}
                    whileHover={open ? { scale: 1.12, zIndex: 50, cursor: 'grab' } : {}}
                    initial={false}
                    animate={
                      open
                        ? { x: x - 22, y: y - 24, scale: 1, opacity: 1, rotate: 0 }
                        : isHovered
                          ? { x: peekX, y: peekY, scale: 0.62, opacity: 1, rotate: peekRotate }
                          : { x: restX, y: restY, scale: 0.32, opacity: 0.85, rotate: restRotate }
                    }
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      mass: 0.7,
                      delay: open ? i * 0.035 : 0,
                    }}
                    className="absolute w-11 h-12 rounded-lg bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/10 shadow-md flex items-center justify-center p-1"
                  >
                    {item}
                  </motion.div>
                );
              })}
            </div>

            {/* Front flap — left half */}
            <motion.div
              initial={false}
              animate={{
                skewX: open ? 16 : isHovered ? 3 : 0,
                scaleY: open ? 0.55 : isHovered ? 0.96 : 1,
              }}
              transition={{ type: 'spring', stiffness: 170, damping: 18, mass: 1 }}
              className="absolute z-30 w-full h-full origin-bottom rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-xl overflow-hidden"
              style={{ backgroundImage: gradient }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20" />
              <div className="absolute inset-0 border-t border-white/25" />
            </motion.div>

            {/* Front flap — right half, carries the count + state indicator */}
            <motion.div
              initial={false}
              animate={{
                skewX: open ? -16 : isHovered ? -3 : 0,
                scaleY: open ? 0.55 : isHovered ? 0.96 : 1,
              }}
              transition={{ type: 'spring', stiffness: 170, damping: 18, mass: 1 }}
              className="absolute z-30 w-full h-full origin-bottom rounded-tl-lg rounded-tr-xl rounded-br-xl rounded-bl-xl flex flex-col justify-center items-center gap-1 overflow-hidden"
              style={{ backgroundImage: gradient }}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-white/20" />
              <div className="absolute inset-0 border-t border-white/25" />
              {title && (
                <span className="relative z-10 font-mono text-[9px] tracking-widest uppercase text-white drop-shadow-sm select-none pointer-events-none">
                  {title}
                </span>
              )}
              <motion.svg
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                className="relative z-10 opacity-80"
              >
                <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Folder;