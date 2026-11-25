import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Top AppBar Primitive
 * Clean tonal bar (64px) with brand/title slot and right-aligned actions (<= 2 controls).
 */
const AppBar = ({
  brandHref = '/',
  brandLabel = 'Pranav Kavade',
  logoSrc = '/logo.svg',
  title,
  actions,
  className = '',
}) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full h-[var(--appbar-height)]',
        'bg-surface/95 backdrop-blur-md border-b border-outline-variant',
        'pt-[env(safe-area-inset-top)]',
        className
      )}
    >
      <div className="h-full w-full px-4 tablet:px-6 expanded:px-8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            to={brandHref}
            className="touch-target -ml-2 px-2 rounded-full gap-2.5 state-layer focus-visible:outline-2 focus-visible:outline-primary"
            aria-label={`${brandLabel} — Home`}
          >
            {logoSrc && (
              <img
                src={logoSrc}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain shrink-0"
              />
            )}
            <span className="font-semibold text-base tracking-tight text-on-surface truncate hidden tablet:inline">
              {brandLabel}
            </span>
          </Link>

          {title && (
            <>
              <span className="text-outline-variant hidden tablet:inline" aria-hidden="true">/</span>
              <span className="text-sm font-semibold text-on-surface-variant truncate">
                {title}
              </span>
            </>
          )}
        </div>

        {actions && (
          <div className="flex items-center gap-1 shrink-0">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
};

export default AppBar;
