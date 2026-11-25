import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { portfolioConfig } from '../../config/portfolio';

const PageNav = ({ prev, next }) => {
  return (
    <div className="mt-10 tablet:mt-14 w-full">
      <nav
        aria-label="Previous and Next Page Navigation"
        className="flex items-center justify-between gap-3 pt-6 border-t border-outline-variant text-sm font-medium w-full"
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

      <footer className="mt-6 pt-5 border-t border-outline-variant/60 flex flex-col tablet:flex-row tablet:items-center justify-between gap-3 text-xs text-on-surface-variant">
        <p>Pranav Kavade · Full Stack Engineer · Maharashtra, India</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href="https://github.com/pranavkavade20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-colors py-1"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pranavkavade20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-colors py-1"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pranavkavade9@gmail.com"
            className="hover:text-on-surface transition-colors py-1"
          >
            Email
          </a>
          <a
            href={portfolioConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-colors py-1"
          >
            Résumé
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PageNav;
