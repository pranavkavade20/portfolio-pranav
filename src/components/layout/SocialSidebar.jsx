import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolio';
import { cn } from '../../lib/utils';

const SocialSidebar = () => {
  const location = useLocation();
  const isContactActive = location.pathname === '/contact';

  const socialItems = [
    {
      href: 'https://github.com/pranavkavade20',
      aria: 'GitHub Profile',
      icon: <Github size={20} />,
      external: true,
    },
    {
      href: 'https://www.linkedin.com/in/pranavkavade20',
      aria: 'LinkedIn Profile',
      icon: <Linkedin size={20} />,
      external: true,
    },
    {
      to: '/contact',
      aria: 'Contact Page',
      icon: <Mail size={20} />,
      isInternal: true,
      active: isContactActive,
    },
    {
      href: portfolioConfig.resumeUrl,
      aria: 'View R&eacute;sum&eacute;',
      icon: <FileText size={20} />,
      external: true,
    },
  ];

  const renderLink = (item) => {
    const baseClasses = cn(
      "touch-target p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-all duration-200",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      item.active && "text-primary bg-primary-container"
    );

    if (item.isInternal) {
      return (
        <Link
          key={item.aria}
          to={item.to}
          className={baseClasses}
          aria-label={item.aria}
        >
          {item.icon}
        </Link>
      );
    }

    return (
      <a
        key={item.aria}
        href={item.href}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        aria-label={item.aria}
      >
        {item.icon}
      </a>
    );
  };

  return (
    // Only displayed on large desktop viewports (lg: 1024px+), avoiding collisions on mobile/tablets
    <aside 
      aria-label="Social Links"
      className="hidden lg:flex fixed left-6 top-0 h-full flex-col justify-center items-center z-30 pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="pointer-events-auto flex flex-col items-center gap-3 p-2 rounded-full bg-surface/80 backdrop-blur-md border border-outline-variant shadow-elevation-1"
      >
        {socialItems.slice(0, 3).map(renderLink)}
        <div className="w-5 h-px bg-outline-variant my-1" />
        {renderLink(socialItems[3])}
      </motion.div>
    </aside>
  );
};

export default SocialSidebar;
