import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  const social = [
    { icon: <Github size={18} />, href: 'https://github.com/pranavkavade20', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/pranavkavade20', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="font-extrabold text-2xl text-blue-600 tracking-tight inline-block">
              PK.py
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Crafting scalable web applications with Python & React.
              Focused on performance, elegant design, and robust architecture.
            </p>
            <div className="flex gap-3">
              {social.map((item, index) => (
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-bold text-sm tracking-wide mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-slate-900 font-bold text-sm tracking-wide mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <Mail size={14} />
                </div>
                <a href="mailto:pranavkavade9@gmail.com" className="hover:text-blue-600 transition-colors">
                  pranavkavade9@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span>Ichalkaranji, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-400 text-sm">
            © {currentYear} Pranav Kavade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;