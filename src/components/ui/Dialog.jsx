import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Dialog / Bottom Sheet
 * Desktop: Centered modal dialog with backdrop scrim
 * Mobile: Bottom sheet sliding up from screen bottom
 */
const Dialog = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  className = '',
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Dialog / Bottom Sheet Window */}
          <motion.div
            initial={{ y: '100%', opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "dialog-title" : undefined}
            className={cn(
              "relative w-full sm:max-w-lg bg-surface text-on-surface",
              "rounded-t-3xl sm:rounded-2xl border border-outline-variant shadow-elevation-3",
              "p-6 max-h-[90vh] overflow-y-auto z-10",
              className
            )}
          >
            {/* Mobile Sheet Drag Handle Pill */}
            <div className="w-12 h-1 bg-outline rounded-full mx-auto mb-4 sm:hidden" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                {title && (
                  <h2 id="dialog-title" className="text-lg sm:text-xl font-bold tracking-tight text-on-surface">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
