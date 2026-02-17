import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Internal Routes (Use Link)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  // External Links (Use <a>) - Updated with Lucide icons
  const social = [
    { icon: <Github size={20} />, href: 'https://github.com/pranavkavade20' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/pranavkavade20' },
  ];

  return (
    <footer className="bg-slate-50 pt-12 pb-8 md:pt-20 md:pb-10 relative overflow-hidden border-t border-slate-200">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Grid Layout: Stacks on mobile (gap-8), 4 columns on desktop (gap-12) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">

          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4 md:space-y-6">
            <Link to="/" className="font-['Anton'] text-2xl md:text-3xl text-slate-900 tracking-wide hover:text-amber-500 transition-colors inline-block">
              PK.py
            </Link>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm">
              Crafting scalable web applications with Python & React.
              Focused on performance, security, and clean architecture.
            </p>
            <div className="flex gap-4 pt-2">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center text-slate-900 hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs md:text-sm border-b border-slate-200 pb-2 md:border-none md:pb-0 w-max">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-600 hover:text-amber-600 transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Mini */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs md:text-sm border-b border-slate-200 pb-2 md:border-none md:pb-0 w-max">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-3">
                <Mail className="text-amber-500 mt-0.5" size={16} />
                <a href="mailto:pranavkavade9@gmail.com" className="hover:text-amber-600 transition-colors break-all">
                  pranavkavade9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-500 mt-0.5" size={16} />
                <span>Ichalkaranji, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                <span className="text-amber-700 font-bold text-xs uppercase tracking-wide">Open to opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-xs md:text-sm font-mono">
            © {currentYear} Pranav Kavade. All rights reserved.
          </p>
          <div className="flex gap-6 md:gap-8">
            <Link to="/privacy" className="text-slate-500 hover:text-slate-800 text-xs md:text-sm font-medium transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-slate-800 text-xs md:text-sm font-medium transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;