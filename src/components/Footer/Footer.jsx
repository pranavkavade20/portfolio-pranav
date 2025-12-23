import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Internal Routes (Use Link)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  // External Links (Use <a>)
  const social = [
    { icon: 'fa-github', href: 'https://github.com/pranavkavade20' },
    { icon: 'fa-linkedin-in', href: 'https://www.linkedin.com/in/pranavkavade20' },
  ];

  return (
    <footer className="bg-slate-950 pt-20 pb-10 relative overflow-hidden">
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="font-['Anton'] text-3xl text-white tracking-wide hover:text-emerald-400 transition-colors">
              PK.py
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Crafting scalable web applications with Python & React. 
              Focused on performance, security, and clean architecture.
            </p>
            <div className="flex gap-4">
              {social.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-slate-900 hover:border-emerald-500 transition-all duration-300"
                >
                  <i className={`fab ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <i className="far fa-envelope text-emerald-500"></i>
                <a href="mailto:pranavkavade9@gmail.com" className="hover:text-white transition-colors">
                  pranavkavade9@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-emerald-500"></i>
                <span>Ichalkaranji, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-circle text-[8px] text-green-500 animate-pulse"></i>
                <span className="text-green-400">Open to opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-mono">
            © {currentYear} Pranav Kavade. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-slate-600 hover:text-slate-400 text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-600 hover:text-slate-400 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;