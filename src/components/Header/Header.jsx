import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoIcon from '../../assets/profile.jpg';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define nav items in an array to map over them for both Desktop and Mobile
  const navItems = [
    { name: 'Home', path: '' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
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

      {/* Glass Container (The Pill) */}
      <div className={`
        relative flex items-center justify-between 
        bg-slate-900/60 backdrop-blur-xl border border-white/10 
        px-6 py-3 rounded-full transition-all duration-300
        shadow-lg shadow-black/5
        ${scrolled ? 'w-[90%] md:w-[60%] py-2' : 'w-[95%] md:w-[70%]'}
      `}>

        {/* 1. Logo Section */}
        <Link to="/" className="group flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <div className="w-9 h-9 rounded-lg bg-linear-to-br from-emerald-500 to-cyan-500 p-0.5 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-slate-900 rounded-md flex items-center justify-center overflow-hidden">
              <img
                src={logoIcon}
                alt="Logo"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          <span className="font-['Anton'] text-xl tracking-wide text-slate-200 group-hover:text-white transition-colors">
            PK.py
          </span>
        </Link>

        {/* 2. Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 bg-slate-950/30 px-6 py-2 rounded-full border border-white/5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                text-sm font-medium transition-colors relative group
                ${isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-emerald-400'}
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

        {/* 3. Right Side: Resume Button & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Resume Button - Hidden on very small screens if needed, currently kept visible */}
          <a href="https://drive.google.com/file/d/1JqxfetroR6n7NhdPeuBzFysJfJ0TJbB3/preview" target="_blank" rel="noreferrer"
            className="hidden sm:flex group relative px-5 py-2 rounded-full bg-slate-800 text-slate-200 text-xs font-bold uppercase tracking-wider overflow-hidden hover:text-white transition-colors border border-white/5 hover:border-emerald-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Resume <i className="fas fa-download group-hover:translate-y-0.5 transition-transform"></i>
            </span>
            <div className="absolute inset-0 bg-emerald-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          {/* Hamburger Menu Button (Visible on Mobile) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-emerald-400 transition-colors focus:outline-none"
          >
            {isMenuOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      <div className={`
        md:hidden 
        absolute top-full left-0 right-0 mt-4 mx-4
        bg-slate-900/90 backdrop-blur-xl border border-white/10 
        rounded-2xl overflow-hidden transition-all duration-300 origin-top
        shadow-xl shadow-black/20
        ${isMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}
      `}>
        <div className="flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className={({ isActive }) => `
                px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-emerald-500/10 text-emerald-400 pl-6' 
                  : 'text-slate-400 hover:text-emerald-300 hover:bg-white/5 hover:pl-6'}
              `}
            >
              {item.name}
            </NavLink>
          ))}
          
          {/* Mobile Only: Resume Button (if you want it inside the dropdown for very small screens) */}
          <a href="https://drive.google.com/file/d/1XQUy886tqAbG2ttQnP7HvIbN_inoXmCZ/preview" target="_blank" rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold uppercase tracking-wider hover:bg-slate-700 transition-colors sm:hidden"
          >
            Download Resume <i className="fas fa-download"></i>
          </a>
        </div>
      </div>

    </nav>
  );
}

export default Header;