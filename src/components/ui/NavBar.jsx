import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Adaptive Navigation Bar / Rail / Sidebar Primitive
 * - variant="bottom": Mobile bottom tab bar (<600px)
 * - variant="rail": Tablet navigation rail (600-839px)
 * - variant="sidebar": Expanded desktop sidebar (>=840px)
 */
const NavBar = ({
  items = [],
  isActive,
  variant = 'sidebar', // 'bottom' | 'rail' | 'sidebar'
  footer,
  ariaLabel = 'Primary Navigation',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (variant === 'bottom') {
    return (
      <nav
        aria-label={ariaLabel}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-40 tablet:hidden',
          'bg-surface border-t border-outline-variant shadow-elevation-2',
          'pb-[max(var(--space-1),env(safe-area-inset-bottom))] pt-1 px-2',
          className
        )}
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {items.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative flex flex-col items-center justify-center flex-1 min-h-[48px] py-1 px-1 rounded-md',
                  'text-xs font-medium transition-colors select-none state-layer',
                  active ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
                )}
              >
                <span className="relative flex items-center justify-center w-12 h-7 rounded-full mb-0.5">
                  {active && (
                    <motion.span
                      layoutId={shouldReduceMotion ? undefined : 'bottom-nav-pill'}
                      className="absolute inset-0 bg-primary-container rounded-full"
                      transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
                    />
                  )}
                  <Icon
                    size={18}
                    strokeWidth={active ? 2.4 : 2}
                    className={cn(
                      'relative z-10',
                      active ? 'text-on-primary-container' : 'text-on-surface-variant'
                    )}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-xs leading-none tracking-tight">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }

  if (variant === 'rail') {
    return (
      <aside
        aria-label={ariaLabel}
        className={cn(
          'hidden tablet:flex expanded:hidden flex-col items-center justify-between shrink-0',
          'w-[var(--nav-rail-width)] sticky top-[var(--appbar-height)] h-[calc(100dvh-var(--appbar-height))]',
          'border-r border-outline-variant bg-surface py-4 px-1',
          className
        )}
      >
        <nav className="flex flex-col items-center gap-2 w-full" aria-label={ariaLabel}>
          {items.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'group flex flex-col items-center justify-center w-full min-h-[56px] py-1.5 rounded-md',
                  'text-xs font-medium transition-colors state-layer',
                  active ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
                )}
              >
                <span className="relative flex items-center justify-center w-14 h-8 rounded-full mb-1">
                  {active && (
                    <motion.span
                      layoutId={shouldReduceMotion ? undefined : 'rail-nav-pill'}
                      className="absolute inset-0 bg-primary-container rounded-full"
                      transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
                    />
                  )}
                  <Icon
                    size={20}
                    strokeWidth={active ? 2.4 : 2}
                    className={cn(
                      'relative z-10',
                      active ? 'text-on-primary-container' : 'text-on-surface-variant group-hover:text-on-surface'
                    )}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-xs leading-none truncate max-w-full px-1">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        {footer && <div className="flex flex-col items-center gap-2 pt-3 border-t border-outline-variant w-full">{footer}</div>}
      </aside>
    );
  }

  return (
    <aside
      aria-label={ariaLabel}
      className={cn(
        'hidden expanded:flex flex-col justify-between shrink-0',
        'w-[var(--sidebar-width)] sticky top-[var(--appbar-height)] h-[calc(100dvh-var(--appbar-height))]',
        'border-r border-outline-variant bg-surface p-4',
        className
      )}
    >
      <nav className="flex flex-col gap-1" aria-label={ariaLabel}>
        {items.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'relative flex items-center gap-3 px-4 min-h-[48px] rounded-full',
                'text-sm font-medium transition-colors state-layer',
                active
                  ? 'text-on-primary-container font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              )}
            >
              {active && (
                <motion.span
                  layoutId={shouldReduceMotion ? undefined : 'sidebar-nav-pill'}
                  className="absolute inset-0 bg-primary-container rounded-full"
                  transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
                />
              )}
              <Icon
                size={20}
                strokeWidth={active ? 2.3 : 2}
                className={cn(
                  'relative z-10 shrink-0',
                  active ? 'text-primary' : 'text-on-surface-variant'
                )}
                aria-hidden="true"
              />
              <span className="relative z-10 truncate">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      {footer && <div className="pt-4 border-t border-outline-variant">{footer}</div>}
    </aside>
  );
};

export default NavBar;
