import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Download, Menu as MenuIcon, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 20) setIsMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-3' 
        : 'bg-transparent border-b border-transparent py-5'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="group flex items-center gap-2 select-none" onClick={() => setIsMenuOpen(false)}>
            <motion.div whileHover={{ scale: 1.05 }} className="font-extrabold text-xl md:text-2xl tracking-tight text-blue-600">
              PK.py
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-white/50 border border-slate-200/50 backdrop-blur-md rounded-full px-2 py-1.5 shadow-sm">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    relative px-4 py-2 text-sm font-medium transition-colors rounded-full
                    ${isActive ? 'text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-blue-100/80 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://drive.google.com/file/d/1UJFtjrqLMRabcow8qf4pVWUT1ljf06fJ/view" target="_blank" rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold tracking-wide shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Resume <Download size={16} />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 -mr-2 text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200/50 rounded-2xl shadow-xl overflow-hidden md:hidden z-40 p-2"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between
                      ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}
                    `}
                  >
                    {item.name}
                    <ChevronRight size={16} className={`transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                  </Link>
                );
              })}
              <div className="h-px bg-slate-100 my-1 mx-2"></div>
              <a href="https://drive.google.com/file/d/1UJFtjrqLMRabcow8qf4pVWUT1ljf06fJ/view" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 mx-1 mt-1 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors sm:hidden"
              >
                Resume <Download size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Header;