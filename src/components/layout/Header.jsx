import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CircleHalf from '../../assets/circle-half.svg';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
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
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo Section (Left) */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#about" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="w-6 h-6 opacity-90 hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Desktop Navigation (Center/Right) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
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
                <span className={`relative z-10 ${activeIndex === index
                    ? 'text-black dark:text-white font-semibold'
                    : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
                  }`}>
                  {item.name}
                </span>
              </a>
            ))}
          </nav>

          {/* Actions Section (Right) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.1] hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              <motion.div animate={{ rotate: theme === 'dark' ? 180 : 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <img src={CircleHalf} alt="Toggle theme" width={20} height={20} className="dark:invert" />
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.1] hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <motion.div animate={{ rotate: theme === 'dark' ? 180 : 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <img src={CircleHalf} alt="Toggle theme" width={20} height={20} className="dark:invert" />
              </motion.div>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 dark:text-zinc-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Glassmorphism */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/40 dark:bg-black/40 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item, i) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' }), 150);
                    setActiveIndex(i);
                  }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${activeIndex === i
                      ? 'bg-black/[0.04] dark:bg-white/[0.08] text-black dark:text-white'
                      : 'text-slate-600 dark:text-zinc-400'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;