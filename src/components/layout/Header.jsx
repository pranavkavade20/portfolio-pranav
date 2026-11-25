import React from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { portfolioConfig } from '../../config/portfolio';
import { getRouteTitle } from '../../config/navigation';
import AppBar from '../ui/AppBar';
import Button from '../ui/Button';

/**
 * Top AppBar for all viewports (no hamburger menu on mobile).
 * Shows brand logo + current section title + at most 2 concise actions (Resume & Theme mode).
 */
function Header() {
  const { theme, themeMode, cycleTheme, toggleTheme } = useTheme();
  const location = useLocation();
  const routeTitle = getRouteTitle(location.pathname);

  const activeMode = themeMode || theme;
  const handleThemeAction = cycleTheme || toggleTheme;

  const ThemeIcon = activeMode === 'system' ? Monitor : activeMode === 'dark' ? Moon : Sun;
  const themeLabel =
    activeMode === 'system'
      ? `Theme: System (${theme})`
      : activeMode === 'dark'
      ? 'Theme: Dark'
      : 'Theme: Light';

  return (
    <AppBar
      brandHref="/"
      brandLabel="Pranav Kavade"
      logoSrc="/logo.svg"
      title={routeTitle}
      actions={
        <div className="flex items-center gap-1.5">
          <Button
            as="a"
            href={portfolioConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="tonal"
            size="sm"
            icon={FileText}
            className="hidden tablet:inline-flex"
            aria-label="Open Résumé PDF in new tab"
          >
            Résumé
          </Button>

          <button
            type="button"
            onClick={handleThemeAction}
            className="touch-target px-3 gap-2 rounded-full text-on-surface-variant hover:text-on-surface state-layer cursor-pointer"
            aria-label={`${themeLabel}. Click to switch theme mode.`}
            title={themeLabel}
          >
            <ThemeIcon size={18} aria-hidden="true" />
            <span className="hidden expanded:inline text-xs font-medium capitalize">
              {activeMode}
            </span>
          </button>
        </div>
      }
    />
  );
}

export default Header;
