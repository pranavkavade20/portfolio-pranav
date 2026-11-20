import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PageNav = ({ prev, next }) => {
  return (
    <div className="flex items-center justify-between pt-12 mt-12 border-t border-black/[0.08] dark:border-white/[0.08] text-sm font-medium">
      {prev ? (
        <Link
          to={prev.path}
          className="group inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
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
          className="group inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white transition-colors ml-auto"
        >
          <span>{next.name}</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export default PageNav;
