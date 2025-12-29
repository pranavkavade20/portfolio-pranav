import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoIcon from '../../assets/profile.jpg';
function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>

      {/* Glass Container */}
      <div className={`
        relative flex items-center justify-between 
        bg-slate-900/60 backdrop-blur-xl border border-white/10 
        px-6 py-3 rounded-full transition-all duration-300
        shadow-lg shadow-black/5
        ${scrolled ? 'w-[90%] md:w-[60%] py-2' : 'w-[95%] md:w-[70%]'}
      `}>

        <Link to="/" className="group flex items-center gap-2">

          {/* Logo Icon Container */}
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

        {/* Desktop Links - Uses NavLink for active styling */}
        <div className="hidden md:flex items-center gap-8 bg-slate-950/30 px-6 py-2 rounded-full border border-white/5">
          {[
            { name: 'Home', path: '' },
            { name: 'Skills', path: '/skills' },
            { name: 'Projects', path: '/projects' },
            { name: 'Experience', path: '/experience' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
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
                  {/* Underline: Visible if Active OR Hovered */}
                  <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-emerald-500 transition-all duration-300
                    ${isActive ? 'w-1/2 left-1/4' : 'w-0 group-hover:w-1/2 group-hover:left-1/4'}
                  `}></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA Button & Socials */}
        <div className="flex items-center gap-4">
          <a href="https://drive.google.com/file/d/1XQUy886tqAbG2ttQnP7HvIbN_inoXmCZ/preview" target="_blank" rel="noreferrer"
            className="group relative px-5 py-2 rounded-full bg-slate-800 text-slate-200 text-xs font-bold uppercase tracking-wider overflow-hidden hover:text-white transition-colors border border-white/5 hover:border-emerald-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Resume <i className="fas fa-download group-hover:translate-y-0.5 transition-transform"></i>
            </span>
            <div className="absolute inset-0 bg-emerald-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Header