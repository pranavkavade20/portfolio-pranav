import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define nav items in an array to map over them for both Desktop and Mobile
  const navItems = [
    { name: 'Home', path: '' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' }
  ];

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Optional: Close menu on scroll
      if (window.scrollY > 50) setIsMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>

      {/* Glass Container (The Pill) - Updated for Light Mode */}
      <div className={`
        relative flex items-center justify-between 
        bg-white/70 backdrop-blur-xl border border-slate-200/50 
        px-6 py-3 rounded-full transition-all duration-300
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        ${scrolled ? 'w-[90%] md:w-[60%] py-2' : 'w-[95%] md:w-[70%]'}
      `}>

        {/* 1. Logo Section */}
        <Link to="/" className="group flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <span className="font-['Anton'] text-xl tracking-wide text-slate-900 group-hover:text-emerald-600 transition-colors">
            PK.py
          </span>
        </Link>

        {/* 2. Desktop Links (Hidden on Mobile) - Updated for Light Mode */}
        <div className="hidden md:flex items-center gap-8 bg-slate-100/50 px-6 py-2 rounded-full border border-slate-200/50">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                text-sm font-medium transition-colors relative group
                ${isActive ? 'text-emerald-600 font-semibold' : 'text-slate-600 hover:text-emerald-600'}
              `}
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-emerald-500 transition-all duration-300
                    ${isActive ? 'w-1/2 left-1/4' : 'w-0 group-hover:w-1/2 group-hover:left-1/4'}
                  `}></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* 3. Right Side: Resume Button & Hamburger - Updated to Neo-Brutalist */}
        <div className="flex items-center gap-4">
          <a href="https://drive.google.com/file/d/1K20rqHpu2FzyHIUqyrFIwdzACNQsUcYt/view" target="_blank" rel="noreferrer"
            className="hidden sm:flex group relative px-5 py-2 rounded-full bg-white text-slate-900 border-2 border-slate-900 text-xs font-bold uppercase tracking-wider overflow-hidden hover:bg-slate-50 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Resume <i className="fas fa-download group-hover:translate-y-0.5 transition-transform"></i>
            </span>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-900 hover:text-emerald-600 transition-colors focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown - Updated for Light Mode */}
      <div className={`
        md:hidden 
        absolute top-full left-0 right-0 mt-4 mx-4
        bg-white/95 backdrop-blur-xl border border-slate-200 
        rounded-2xl overflow-hidden transition-all duration-300 origin-top
        shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]
        ${isMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}
      `}>
        <div className="flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `
                px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive
                  ? 'bg-emerald-50 text-emerald-600 pl-6 border border-emerald-100'
                  : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50 hover:pl-6'}
              `}
            >
              {item.name}
            </NavLink>
          ))}

          <a href="https://drive.google.com/file/d/1XQUy886tqAbG2ttQnP7HvIbN_inoXmCZ/preview" target="_blank" rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border-2 border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-all sm:hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] active:translate-x-1 active:translate-y-1"
          >
            Download Resume <i className="fas fa-download"></i>
          </a>
        </div>
      </div>

    </nav>
  );
}

export default Header;