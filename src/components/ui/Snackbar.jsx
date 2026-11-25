import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const SnackbarContext = createContext({
  showSnackbar: () => {},
  closeSnackbar: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useSnackbar = () => useContext(SnackbarContext);

/**
 * Meta x Google Snackbar Provider
 * 4-6s auto-dismiss, optional single action (e.g. Undo / Retry),
 * 48dp accessible controls, and safe-area positioning above mobile BottomNav.
 */
export const SnackbarProvider = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: '',
    type: 'success', // 'success' | 'error' | 'warning' | 'info'
    actionLabel: null,
    onAction: null,
    duration: 4500,
  });

  const showSnackbar = useCallback(
    ({ message, type = 'success', actionLabel = null, onAction = null, duration = 4500 }) => {
      setSnackbar({
        isOpen: true,
        message,
        type,
        actionLabel,
        onAction,
        duration,
      });
    },
    []
  );

  const closeSnackbar = useCallback(() => {
    setSnackbar((prev) => ({ ...prev, isOpen: false }));
  }, []);

  useEffect(() => {
    if (!snackbar.isOpen || !snackbar.duration) return;
    const timer = setTimeout(() => {
      closeSnackbar();
    }, snackbar.duration);
    return () => clearTimeout(timer);
  }, [snackbar.isOpen, snackbar.duration, snackbar.message, closeSnackbar]);

  const icons = {
    success: <CheckCircle2 size={18} className="text-success shrink-0" aria-hidden="true" />,
    error: <AlertCircle size={18} className="text-error shrink-0" aria-hidden="true" />,
    warning: <AlertTriangle size={18} className="text-warning shrink-0" aria-hidden="true" />,
    info: <Info size={18} className="text-primary shrink-0" aria-hidden="true" />,
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar, closeSnackbar }}>
      {children}
      <AnimatePresence>
        {snackbar.isOpen && (
          <div
            className="fixed bottom-[calc(var(--bottom-nav-height)+env(safe-area-inset-bottom)+var(--space-3))] tablet:bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-md pointer-events-none"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
              className="pointer-events-auto bg-surface text-on-surface border border-outline shadow-elevation-3 rounded-md pl-4 pr-1.5 py-1.5 flex items-center justify-between gap-2 min-h-[52px]"
            >
              <div className="flex items-center gap-3 min-w-0 py-1">
                {icons[snackbar.type] || icons.info}
                <p className="text-sm font-medium text-on-surface line-clamp-2">
                  {snackbar.message}
                </p>
              </div>

              <div className="flex items-center shrink-0">
                {snackbar.actionLabel && (
                  <button
                    type="button"
                    onClick={() => {
                      snackbar.onAction?.();
                      closeSnackbar();
                    }}
                    className={cn(
                      'min-h-[48px] px-3 rounded-full text-sm font-semibold text-primary',
                      'state-layer cursor-pointer whitespace-nowrap'
                    )}
                  >
                    {snackbar.actionLabel}
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeSnackbar}
                  className="touch-target rounded-full text-on-surface-variant hover:text-on-surface state-layer cursor-pointer"
                  aria-label="Dismiss notification"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SnackbarContext.Provider>
  );
};
