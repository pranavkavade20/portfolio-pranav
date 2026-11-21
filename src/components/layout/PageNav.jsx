import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const PageNav = ({ prev, next }) => {
  return (
    <nav
      aria-label="Previous and Next Page Navigation" 
      className="flex items-center justify-between pt-8 sm:pt-12 mt-12 sm:mt-16 border-t border-outline-variant text-sm font-medium w-full"
    >
      {prev ? (
        <Link
          to={prev.path}
          className={cn(
            "group inline-flex items-center gap-2 px-3 py-2 rounded-full",
            "text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          )}
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>{prev.name}</span>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          to={next.path}
          className={cn(
            "group inline-flex items-center gap-2 px-3 py-2 rounded-full ml-auto",
            "text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          )}
        >
          <span>{next.name}</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </nav>
  );
};

export default PageNav;
