import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolio';

const SocialSidebar = () => {
  const socialItems = [
    {
      href: 'https://github.com/pranavkavade20',
      aria: 'GitHub',
      icon: <Github size={24} />,
    },
    {
      href: 'https://www.linkedin.com/in/pranavkavade20',
      aria: 'LinkedIn',
      icon: <Linkedin size={24} />,
    },
    {
      href: '#contact',
      aria: 'Contact',
      icon: <Mail size={24} />,
      onClick: (e) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      href: portfolioConfig.resumeUrl,
      aria: 'Resume',
      icon: <FileText size={24} />,
      external: true,
    },
  ];

  const renderLink = ({ href, aria, icon, onClick, external }) => (
    <a
      key={aria}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className="text-slate-500 hover:text-brand-primary dark:text-zinc-400 dark:hover:text-brand-secondary transition-all hover:-translate-y-1"
      aria-label={aria}
    >
      {icon}
    </a>
  );

  return (
    <>
      <div className="hidden lg:flex fixed left-6 top-0 h-full flex-col justify-center items-center gap-6 z-40">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          {socialItems.slice(0, 3).map(renderLink)}
          <div className="w-px h-8 bg-slate-300 dark:bg-zinc-700 my-2"></div>
          {renderLink(socialItems[3])}
        </motion.div>
      </div>

      <div className="flex lg:hidden fixed bottom-4 left-0 right-0 justify-center z-40 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="glass-panel w-full max-w-xs mx-auto rounded-full px-4 py-3 flex items-center justify-center gap-5 shadow-xl"
        >
          {socialItems.map(renderLink)}
        </motion.div>
      </div>
    </>
  );
};

export default SocialSidebar;
