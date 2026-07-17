import React, { useState, useEffect } from 'react';
import { Download, ChevronRight, Contrast } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import GooeyNav from '../ui/GooeyNav';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsMenuOpen(false);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  const gooeyItems = navItems.map(item => ({ label: item.name, href: item.path }));

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // trigger when section crosses middle of viewport
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
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-[400ms] ease-in-out ${scrolled
          ? 'bg-white/90 backdrop-blur-md dark:bg-brand-bg-dark/90'
          : 'bg-transparent'
        }`}
    >
      <div className="w-full max-w-[1200px] h-[80px] mx-auto px-[20px]">
        <div className="flex justify-between items-center h-full relative">

          <a href="#about" className="flex items-center gap-2 group z-50 font-mono" onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <motion.span
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, x: 2 }}
              className="text-brand-primary dark:text-brand-secondary text-xl font-bold transition-all duration-200"
            >
              &gt;
            </motion.span>
            <motion.div
              whileHover={{ x: 2 }}
              className="text-xl font-semibold tracking-tight flex items-center transition-transform duration-200"
            >
              <span className="text-neutral-800 dark:text-neutral-200">
                Pranav
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-brand-secondary dark:to-brand-secondary/80 ml-px">
                .py
              </span>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-2.5 h-5 bg-brand-primary/80 dark:bg-brand-secondary/80 ml-1.5 rounded-[1px]"
              />
            </motion.div>
          </a>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
            <GooeyNav
              items={gooeyItems}
              activeIndex={activeIndex}
              onActiveIndexChange={setActiveIndex}
            />
          </div>

          <div className="flex items-center gap-4 z-50">
            <button
              onClick={toggleTheme}
              className="relative inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 h-10 w-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 overflow-hidden"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="flex items-center justify-center"
              >
                <Contrast size={20} strokeWidth={2} />
              </motion.div>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-zinc-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <motion.span
                  className="absolute h-[2px] w-6 bg-current rounded-full"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 0 : -8
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute h-[2px] w-6 bg-current rounded-full"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute h-[2px] w-6 bg-current rounded-full"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? 0 : 8
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white dark:bg-brand-bg-dark absolute top-full left-0 w-full"
          >
            <div className="px-[20px] py-6 flex flex-col gap-2">
              {navItems.map((item, i) => {
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3, ease: "easeInOut" }}
                  >
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' });
                        setActiveIndex(i);
                      }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                        activeIndex === i 
                          ? 'bg-brand-primary/10 text-brand-primary dark:bg-brand-secondary/10 dark:text-brand-secondary' 
                          : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50 dark:text-zinc-400 dark:hover:text-brand-secondary dark:hover:bg-zinc-800/50'
                      }`}
                    >
                      {item.name}
                      <ChevronRight size={18} className={`transition-transform duration-300 ${activeIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 hover:opacity-100 hover:translate-x-0'}`} />
                    </a>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.3, ease: "easeInOut" }}
                className="mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800 flex flex-col gap-4"
              >
                <div className="flex justify-center gap-6 py-2">
                  <a href="https://github.com/pranavkavade20" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-primary dark:text-zinc-400 dark:hover:text-brand-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/pranavkavade20" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-primary dark:text-zinc-400 dark:hover:text-brand-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-primary dark:text-zinc-400 dark:hover:text-brand-secondary" aria-label="Resume">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;