import React, { useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Meta x Google Dialog / Bottom Sheet
 * - Compact (<600px): Bottom sheet sliding up with drag pill + safe-area padding
 * - Tablet/Desktop (>=600px): Centered modal dialog with scale/fade transition
 * - Accessible: Focus trap, Escape to close, restores focus to trigger on close
 */
const Dialog = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md', // 'md' | 'lg' | 'xl'
  hideHeader = false,
  className = '',
}) => {
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef(null);
  const previousFocusRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isCompact, setIsCompact] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 600 : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 599px)');
    const update = () => setIsCompact(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Capture trigger focus, move focus inside dialog, trap Tab, and restore focus on close
  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = requestAnimationFrame(() => {
      if (!panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
      if (focusables.length > 0) {
        focusables[0].focus();
      } else {
        panelRef.current.focus();
      }
    });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }

      if (e.key === 'Tab' && panelRef.current) {
        const focusables = Array.from(panelRef.current.querySelectorAll(FOCUSABLE_SELECTOR));
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      cancelAnimationFrame(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  const sizes = {
    md: 'tablet:max-w-lg',
    lg: 'tablet:max-w-3xl',
    xl: 'tablet:max-w-5xl',
  };

  const panelMotion = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.12 },
      }
    : isCompact
    ? {
        initial: { y: '100%', opacity: 0.8 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '100%', opacity: 0 },
        transition: { duration: 0.28, ease: [0.2, 0, 0, 1] },
      }
    : {
        initial: { scale: 0.96, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.96, opacity: 0 },
        transition: { duration: 0.2, ease: [0.2, 0, 0, 1] },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end tablet:items-center justify-center p-0 tablet:p-6">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-scrim"
            aria-hidden="true"
          />

          {/* Dialog / Bottom Sheet Surface */}
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            {...panelMotion}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            aria-describedby={description ? descId : undefined}
            className={cn(
              'relative w-full bg-surface text-on-surface',
              'rounded-t-xl tablet:rounded-md border border-outline shadow-elevation-3',
              'p-4 tablet:p-6 pb-[max(var(--space-6),env(safe-area-inset-bottom))] max-h-[90dvh] overflow-y-auto z-10',
              'focus:outline-none',
              sizes[size] || sizes.md,
              className
            )}
          >
            {/* Mobile Sheet Drag Handle Pill */}
            <div className="w-10 h-1 bg-outline-variant rounded-full mx-auto mb-3 tablet:hidden" aria-hidden="true" />

            {!hideHeader && (
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  {title && (
                    <h2 id={titleId} className="text-lg font-semibold tracking-tight text-on-surface">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p id={descId} className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="touch-target rounded-full text-on-surface-variant hover:text-on-surface state-layer shrink-0 cursor-pointer -mr-2 -mt-2"
                  aria-label="Close dialog"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
            )}

            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
