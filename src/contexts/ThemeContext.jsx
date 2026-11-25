import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  themeMode: 'system',
  setThemeMode: () => { },
  cycleTheme: () => { },
  toggleTheme: () => { },
});

const VALID_MODES = ['light', 'dark', 'system'];

function getSystemPreference() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeModeState] = useState(() => {
    if (typeof window === 'undefined') return 'system';
    try {
      const saved = localStorage.getItem('theme');
      if (saved && VALID_MODES.includes(saved)) {
        return saved;
      }
    } catch {
      // Ignore storage restrictions
    }
    return 'system';
  });

  const [systemTheme, setSystemTheme] = useState(getSystemPreference);

  // Sync with OS prefers-color-scheme changes live when in 'system' mode
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setSystemTheme(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const theme = themeMode === 'system' ? systemTheme : themeMode;

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    if (themeMode === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', themeMode);
    }

    try {
      localStorage.setItem('theme', themeMode);
    } catch {
      // Ignore storage errors
    }
  }, [theme, themeMode]);

  const setThemeMode = useCallback((mode) => {
    if (VALID_MODES.includes(mode)) {
      setThemeModeState(mode);
    }
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeModeState((prev) => {
      if (prev === 'system') return 'light';
      if (prev === 'light') return 'dark';
      return 'system';
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState((prev) => {
      const currentResolved = prev === 'system' ? getSystemPreference() : prev;
      return currentResolved === 'light' ? 'dark' : 'light';
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeMode, setThemeMode, cycleTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
