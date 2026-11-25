import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const PageNav = ({ prev, next }) => {
  return (
    <nav
      aria-label="Previous and Next Page Navigation"
      className="flex items-center justify-between gap-3 pt-6 tablet:pt-8 mt-8 tablet:mt-12 border-t border-outline-variant text-sm font-medium w-full"
    >
      {prev ? (
        <Link
          to={prev.path}
          className={cn(
            'state-layer group inline-flex items-center gap-2 px-4 min-h-[48px] rounded-full',
            'text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors'
          )}
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5 shrink-0" aria-hidden="true" />
          <span>{prev.name}</span>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          to={next.path}
          className={cn(
            'state-layer group inline-flex items-center gap-2 px-4 min-h-[48px] rounded-full ml-auto',
            'text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors'
          )}
        >
          <span>{next.name}</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 shrink-0" aria-hidden="true" />
        </Link>
      )}
    </nav>
  );
};

export default PageNav;
