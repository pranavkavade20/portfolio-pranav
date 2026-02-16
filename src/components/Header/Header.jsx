import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define nav items in an array to map over them for both Desktop and Mobile
  const navItems = [
    { name: 'About', path: '' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Close menu on scroll to keep view clean
      if (window.scrollY > 20) setIsMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300 ${scrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-6'}`}>

      {/* Glass Container (The Pill) */}
      <div className={`
        relative flex items-center justify-between 
        bg-white/80 backdrop-blur-md border border-slate-200/60 
        rounded-full transition-all duration-300 z-50
        shadow-[0_4px_20px_rgb(0,0,0,0.03)]
        ${scrolled ? 'w-[95%] md:w-[70%] py-2 px-4 md:px-6' : 'w-[92%] md:w-[75%] px-5 py-3'}
      `}>

        {/* 1. Logo Section */}
        <Link to="/" className="group flex items-center gap-2 select-none" onClick={() => setIsMenuOpen(false)}>
          <span className="font-['Anton'] text-xl md:text-2xl tracking-wide text-slate-900 group-hover:text-amber-600 transition-colors">
            PK.py
          </span>
        </Link>

        {/* 2. Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 bg-slate-50/50 px-6 py-2 rounded-full border border-slate-200/50">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                text-xs lg:text-sm font-medium transition-colors relative group
                ${isActive ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-amber-600'}
              `}
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-amber-500 transition-all duration-300
                    ${isActive ? 'w-1/2 left-1/4' : 'w-0 group-hover:w-1/2 group-hover:left-1/4'}
                  `}></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* 3. Right Side: Resume Button & Hamburger */}
        <div className="flex items-center gap-3">
          <a href="https://drive.google.com/file/d/1K20rqHpu2FzyHIUqyrFIwdzACNQsUcYt/view" target="_blank" rel="noreferrer"
            className="hidden sm:flex group relative px-4 py-2 md:px-5 md:py-2 rounded-full bg-white text-slate-900 border-2 border-slate-900 text-[10px] md:text-xs font-bold uppercase tracking-wider overflow-hidden hover:bg-slate-50 transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Resume <i className="fas fa-download group-hover:translate-y-0.5 transition-transform"></i>
            </span>
          </a>

          {/* Hamburger Menu Button */}
          {/* Increased touch target size for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-900 hover:text-amber-600 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
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

      {/* 4. Mobile Menu Dropdown */}
      {/* Positioned relative to the nav container to align width better */}
      <div className={`
        md:hidden 
        absolute top-full mt-2 w-[95%]
        bg-white/95 backdrop-blur-xl border border-slate-200 
        rounded-2xl overflow-hidden transition-all duration-300 origin-top z-40
        shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]
        ${isMenuOpen ? 'max-h-[500px] opacity-100 scale-100 translate-y-0' : 'max-h-0 opacity-0 scale-95 -translate-y-4'}
      `}>
        <div className="flex flex-col p-3 gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `
                px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between group
                ${isActive
                  ? 'bg-amber-50 text-amber-700 border border-amber-100'
                  : 'text-slate-600 hover:text-amber-600 hover:bg-slate-50'}
              `}
            >
              {item.name}
              {/* Subtle arrow for active/hover state */}
              <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </NavLink>
          ))}

          <div className="h-px bg-slate-100 my-2"></div>

          <a href="https://drive.google.com/file/d/1XQUy886tqAbG2ttQnP7HvIbN_inoXmCZ/preview" target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 mx-1 mb-1 rounded-xl bg-white border-2 border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-all sm:hidden shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            Download Resume <i className="fas fa-download"></i>
          </a>
        </div>
      </div>

    </nav>
  );
}

export default Header;