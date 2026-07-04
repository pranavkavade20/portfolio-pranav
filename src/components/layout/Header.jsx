import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Transparent at very top, solid white with shadow after 50px
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide on scroll down, reveal on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsMenuOpen(false); // Close menu on hide
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-[400ms] ease-in-out ${
        scrolled 
          ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]' 
          : 'bg-transparent'
      }`}
    >
      {/* 100% width, max-width of 1200px, 80px height */}
      <div className="w-full max-w-[1200px] h-[80px] mx-auto px-[20px]">
        {/* Flexbox container with 'justify-between' and 'items-center' */}
        <div className="flex justify-between items-center h-full relative">
          
          {/* Logo Placement: Left-aligned */}
          <Link to="/" className="flex items-center gap-2 group z-50" onClick={() => setIsMenuOpen(false)}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-black tracking-tighter"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                PK.py
              </span>
            </motion.div>
          </Link>

          {/* Nav Links Placement: Centered, horizontally aligned with a 32px gap */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-[32px]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative py-2 text-[15px] font-medium group text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>{item.name}</span>
                  {/* Link Hover Effect: underline that scales from center out over 0.3s ease-in-out */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 origin-center"
                    initial={{ scaleX: isActive ? 1 : 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Right-aligned, primary brand color background */}
          <div className="flex items-center gap-4 z-50">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://drive.google.com/file/d/1UJFtjrqLMRabcow8qf4pVWUT1ljf06fJ/view" 
              target="_blank" 
              rel="noreferrer"
              className="hidden md:flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-medium rounded-xl shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
            >
              Resume 
              <motion.span
                initial={{ y: 0 }}
                whileHover={{ y: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Download size={16} strokeWidth={2.5} />
              </motion.span>
            </motion.a>

            {/* Mobile Menu Toggle: Hamburger icon animating to X */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors focus:outline-none"
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

      {/* Mobile Menu: Slide down from top, staggered fade-in */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white shadow-xl absolute top-full left-0 w-full"
          >
            <div className="px-[20px] py-6 flex flex-col gap-2">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3, ease: "easeInOut" }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all
                        ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}
                      `}
                    >
                      {item.name}
                      <ChevronRight size={18} className={`transition-transform duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.3, ease: "easeInOut" }}
                className="mt-4 pt-4 border-t border-gray-100"
              >
                <a 
                  href="https://drive.google.com/file/d/1UJFtjrqLMRabcow8qf4pVWUT1ljf06fJ/view" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white text-base font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Download Resume <Download size={18} strokeWidth={2} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;