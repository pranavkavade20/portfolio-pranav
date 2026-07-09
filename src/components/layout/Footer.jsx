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
    <footer className="bg-brand-bg-light dark:bg-brand-bg-dark border-t border-slate-200 dark:border-zinc-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-2 group z-50 font-mono" onClick={() => setIsMenuOpen(false)}>
              {/* Animated Terminal Prompt */}
              <motion.span
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, x: 2 }}
                className="text-brand-primary dark:text-brand-secondary text-xl font-bold transition-all duration-200"
              >
                &gt;
              </motion.span>

              <motion.div
                whileHover={{ x: 2 }}
                className="text-xl font-semibold tracking-tight flex items-center transition-transform duration-200"
              >
                <span className="text-neutral-800 dark:text-neutral-200">
                  Pranav
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-brand-secondary dark:to-brand-secondary/80 ml-px">
                  .py
                </span>

                {/* Authentic Terminal Block Cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-2.5 h-5 bg-brand-primary/80 dark:bg-brand-secondary/80 ml-1.5 rounded-[1px]"
                />
              </motion.div>
            </Link>
            <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
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
                  className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:text-brand-primary dark:hover:text-brand-secondary hover:border-brand-primary/30 dark:hover:border-brand-secondary/30 hover:bg-brand-primary/10 dark:hover:bg-brand-secondary/10 transition-colors"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm tracking-wide mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 dark:text-zinc-400 hover:text-brand-primary dark:hover:text-brand-secondary text-sm font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm tracking-wide mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-zinc-400 font-medium">
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center group-hover:bg-brand-primary/10 dark:group-hover:bg-brand-secondary/10 group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors">
                  <Mail size={14} />
                </div>
                <a href="mailto:pranavkavade9@gmail.com" className="hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">
                  pranavkavade9@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span>Ichalkaranji, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left transition-colors duration-300">
          <p className="text-slate-400 dark:text-zinc-500 text-sm">
            © {currentYear} Pranav Kavade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;