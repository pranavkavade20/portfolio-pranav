import React, { useState, useEffect } from 'react';
import { Menu, X, Contrast } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex(item => item.path === `#${entry.target.id}`);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach(item => {
      const sectionId = item.path.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 px-4 py-4 md:py-6 flex justify-center pointer-events-none">
      
      {/* Desktop Pill Nav */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`pointer-events-auto hidden md:flex items-center gap-2 p-1.5 rounded-full transition-all duration-500 ${scrolled ? 'glass-panel shadow-lg' : 'bg-transparent'}`}
      >
        <a href="#about" className="px-3 flex items-center justify-center mr-2">
           <img src="/logo.svg" alt="Logo" className="w-6 h-6 dark:invert opacity-80 hover:opacity-100 transition-opacity" />
        </a>

        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.path}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' });
              setActiveIndex(index);
            }}
            className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            {activeIndex === index && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-black/[0.04] dark:bg-white/[0.08] rounded-full"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className={`relative z-10 ${activeIndex === index ? 'text-black dark:text-white font-semibold' : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'}`}>
              {item.name}
            </span>
          </a>
        ))}
        
        <div className="w-[1px] h-4 bg-black/10 dark:bg-white/10 mx-2" />
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-slate-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          aria-label="Toggle Theme"
        >
          <motion.div animate={{ rotate: theme === 'dark' ? 180 : 0 }} transition={{ duration: 0.5, type: "spring" }}>
            <Contrast size={18} />
          </motion.div>
        </button>
      </motion.div>

      {/* Mobile Nav Header */}
      <div className={`md:hidden pointer-events-auto w-full max-w-md mx-auto flex items-center justify-between p-3 rounded-2xl glass-panel ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <a href="#about" className="px-2">
           <img src="/logo.svg" alt="Logo" className="w-6 h-6 dark:invert opacity-90" />
        </a>
        <div className="flex items-center gap-1">
          <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-zinc-400">
            <Contrast size={20} />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 dark:text-zinc-400">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden pointer-events-auto absolute top-20 left-4 right-4 glass-panel rounded-2xl overflow-hidden shadow-2xl flex flex-col p-2"
          >
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  setTimeout(() => document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' }), 100);
                  setActiveIndex(i);
                }}
                className={`p-4 rounded-xl text-center font-medium transition-colors ${activeIndex === i ? 'bg-black/[0.04] dark:bg-white/[0.08] text-black dark:text-white' : 'text-slate-600 dark:text-zinc-400'}`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
