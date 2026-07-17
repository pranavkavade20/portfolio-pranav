import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolio';

const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-6 top-0 h-full flex-col justify-center items-center gap-6 z-40">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <a
          href="https://github.com/pranavkavade20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-brand-primary dark:text-zinc-400 dark:hover:text-brand-secondary transition-all hover:-translate-y-1"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        
        <a
          href="https://www.linkedin.com/in/pranavkavade20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-brand-primary dark:text-zinc-400 dark:hover:text-brand-secondary transition-all hover:-translate-y-1"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        
        <a
          href="#contact"
          className="text-slate-500 hover:text-brand-primary dark:text-zinc-400 dark:hover:text-brand-secondary transition-all hover:-translate-y-1"
          aria-label="Contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Mail size={24} />
        </a>

        <div className="w-px h-8 bg-slate-300 dark:bg-zinc-700 my-2"></div>
        
        <a
          href={portfolioConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-brand-primary dark:text-zinc-400 dark:hover:text-brand-secondary transition-all hover:-translate-y-1"
          aria-label="Resume"
        >
          <FileText size={24} />
        </a>
      </motion.div>
    </div>
  );
};

export default SocialSidebar;
