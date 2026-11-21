import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const SnackbarContext = createContext({
  showSnackbar: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: '',
    type: 'success', // 'success' | 'error' | 'info'
    actionLabel: null,
    onAction: null,
    duration: 4000,
  });

  const showSnackbar = ({ message, type = 'success', actionLabel = null, onAction = null, duration = 4000 }) => {
    setSnackbar({
      isOpen: true,
      message,
      type,
      actionLabel,
      onAction,
      duration,
    });
  };

  const closeSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    if (!snackbar.isOpen || !snackbar.duration) return;
    const timer = setTimeout(() => {
      closeSnackbar();
    }, snackbar.duration);
    return () => clearTimeout(timer);
  }, [snackbar.isOpen, snackbar.duration]);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <AnimatePresence>
        {snackbar.isOpen && (
          <div 
            className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-md pointer-events-none"
            role="status"
            aria-live="polite"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="pointer-events-auto bg-surface text-on-surface border border-outline-variant shadow-elevation-3 rounded-full px-4 py-2.5 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {snackbar.type === 'success' && <CheckCircle2 size={18} className="text-success shrink-0" />}
                {snackbar.type === 'error' && <AlertCircle size={18} className="text-error shrink-0" />}
                {snackbar.type === 'info' && <Info size={18} className="text-primary shrink-0" />}
                <p className="text-xs sm:text-sm font-medium truncate">
                  {snackbar.message}
                </p>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {snackbar.actionLabel && (
                  <button
                    onClick={() => {
                      snackbar.onAction?.();
                      closeSnackbar();
                    }}
                    className="text-xs font-semibold text-primary px-2 py-1 rounded hover:underline cursor-pointer"
                  >
                    {snackbar.actionLabel}
                  </button>
                )}
                <button
                  onClick={closeSnackbar}
                  className="p-1 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors cursor-pointer"
                  aria-label="Dismiss message"
                >
                  <X size={15} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SnackbarContext.Provider>
  );
};
