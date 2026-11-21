import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Briefcase, Cpu, FolderGit2, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Mobile Bottom Navigation Bar (<600px)
 * 5 primary destinations with icon + label, active pill highlight, 48dp touch targets, safe-area padding
 */
const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Skills', path: '/skills', icon: Cpu },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const isItemActive = (path) => {
    if (path === '/') {
      return currentPath === '/' || currentPath === '/home';
    }
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  return (
    <nav
      aria-label="Bottom Navigation"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 sm:hidden",
        "bg-surface/95 backdrop-blur-xl border-t border-outline-variant shadow-elevation-2",
        "pb-[calc(env(safe-area-inset-bottom)+4px)] pt-1.5 px-2"
      )}
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const active = isItemActive(item.path);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "relative flex flex-col items-center justify-center flex-1 min-h-[48px] py-1 px-1 rounded-xl",
                "text-xs font-medium transition-colors select-none",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                active 
                  ? "text-primary font-semibold" 
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {/* Active pill indicator layer */}
              <div className="relative flex items-center justify-center w-12 h-7 rounded-full transition-colors mb-0.5">
                {active && (
                  <motion.div
                    layoutId="mobile-nav-active-pill"
                    className="absolute inset-0 bg-primary-container rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon 
                  size={19} 
                  className={cn(
                    "relative z-10 transition-transform duration-200",
                    active ? "text-on-primary-container scale-105" : "text-on-surface-variant"
                  )} 
                />
              </div>

              <span className="text-[10px] leading-tight tracking-tight">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
