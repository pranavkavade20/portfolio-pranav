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
    <footer className="bg-slate-50 pt-20 pb-10 relative overflow-hidden border-t border-slate-200">

      {/* Top Gradient Line - Softened for light mode */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-emerald-400/50 to-transparent"></div>

      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="font-['Anton'] text-3xl text-slate-900 tracking-wide hover:text-emerald-500 transition-colors">
              PK.py
            </Link>
            <p className="text-slate-600 leading-relaxed max-w-sm">
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
                  className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center text-slate-900 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <i className={`fab ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest mb-6 text-sm">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest mb-6 text-sm">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-3">
                <i className="far fa-envelope text-emerald-500 text-lg"></i>
                <a href="mailto:pranavkavade9@gmail.com" className="hover:text-emerald-600 transition-colors">
                  pranavkavade9@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-emerald-500 text-lg"></i>
                <span>Ichalkaranji, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-circle text-[8px] text-emerald-500 animate-pulse"></i>
                <span className="text-emerald-600 font-bold">Open to opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-mono">
            © {currentYear} Pranav Kavade. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;