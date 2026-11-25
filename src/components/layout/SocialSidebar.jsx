import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSnackbar } from '../ui/Snackbar';

const EMAIL = 'pranavkavade9@gmail.com';

/**
 * Large+ (>=1200px) Right Contextual Column.
 * Calm architectural rail providing live availability, quick email copy,
 * external profiles, and keyboard navigation hint without duplicating the Home hero.
 */
const SocialSidebar = () => {
  const location = useLocation();
  const { showSnackbar } = useSnackbar();
  const [copied, setCopied] = useState(false);
  const isContactActive = location.pathname === '/contact';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      showSnackbar({
        message: `Email copied: ${EMAIL}`,
        type: 'success',
        duration: 3500,
      });
      setTimeout(() => setCopied(false), 2200);
    } catch {
      showSnackbar({
        message: 'Could not copy automatically. Use the Contact page instead.',
        type: 'error',
      });
    }
  };

  return (
    <aside
      aria-label="Availability and Quick Links"
      className="hidden wide:flex flex-col justify-between shrink-0 w-[var(--context-rail-width)] sticky top-[var(--appbar-height)] h-[calc(100dvh-var(--appbar-height))] py-6 pr-5 pl-4 border-l border-outline-variant/70 overflow-y-auto"
    >
      <div className="flex flex-col gap-6">
        {/* Status & Current Focus */}
        <div className="flex flex-col gap-2.5">
          <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded-full bg-success-container text-on-success-container text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-success shrink-0" aria-hidden="true" />
            <span>Open to opportunities</span>
          </div>

          <div className="pt-1">
            <p className="text-xs font-mono text-on-surface-variant">Current role</p>
            <p className="text-sm font-semibold text-on-surface mt-0.5">
              Software Engineer
            </p>
            <p className="text-xs text-on-surface-variant">
              DASP Digital Pvt. Ltd.
            </p>
          </div>

          <p className="text-xs text-on-surface-variant flex items-center gap-1.5 pt-0.5">
            <MapPin size={13} className="text-on-surface-variant shrink-0" aria-hidden="true" />
            <span>Maharashtra, India</span>
          </p>
        </div>

        {/* Direct Email Copy */}
        <div className="pt-5 border-t border-outline-variant/70 flex flex-col gap-2">
          <p className="text-xs font-medium text-on-surface-variant">Direct reach</p>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="state-layer group flex items-center justify-between gap-2 px-3 min-h-[44px] rounded-md bg-surface border border-outline-variant hover:border-outline text-left cursor-pointer transition-colors"
            aria-label={`Copy email address ${EMAIL}`}
          >
            <span className="text-[11px] font-mono text-on-surface truncate">
              {copied ? 'Copied to clipboard' : EMAIL}
            </span>
            {copied ? (
              <Check size={14} className="text-success shrink-0" aria-hidden="true" />
            ) : (
              <Copy size={14} className="text-on-surface-variant group-hover:text-on-surface shrink-0" aria-hidden="true" />
            )}
          </button>

          {!isContactActive && (
            <Link
              to="/contact"
              className="state-layer flex items-center justify-between gap-2 px-3 min-h-[44px] rounded-md text-xs font-medium text-primary hover:bg-primary-container/40 transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <Mail size={14} aria-hidden="true" />
                <span>Open contact form</span>
              </span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          )}
        </div>

        {/* Profiles */}
        <div className="pt-5 border-t border-outline-variant/70 flex flex-col gap-1">
          <p className="px-1 pb-1 text-xs font-medium text-on-surface-variant">
            Profiles
          </p>
          <a
            href="https://github.com/pranavkavade20"
            target="_blank"
            rel="noopener noreferrer"
            className="state-layer flex items-center justify-between gap-2 px-2.5 min-h-[44px] rounded-md text-on-surface hover:bg-surface-variant/70 transition-colors"
            aria-label="GitHub profile"
          >
            <span className="flex items-center gap-2.5 min-w-0">
              <Github size={16} className="text-on-surface-variant shrink-0" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-sm font-medium leading-tight">GitHub</span>
                <span className="block text-xs text-on-surface-variant truncate">@pranavkavade20</span>
              </span>
            </span>
            <ArrowUpRight size={14} className="text-on-surface-variant shrink-0" aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/pranavkavade20"
            target="_blank"
            rel="noopener noreferrer"
            className="state-layer flex items-center justify-between gap-2 px-2.5 min-h-[44px] rounded-md text-on-surface hover:bg-surface-variant/70 transition-colors"
            aria-label="LinkedIn profile"
          >
            <span className="flex items-center gap-2.5 min-w-0">
              <Linkedin size={16} className="text-on-surface-variant shrink-0" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-sm font-medium leading-tight">LinkedIn</span>
                <span className="block text-xs text-on-surface-variant truncate">in/pranavkavade20</span>
              </span>
            </span>
            <ArrowUpRight size={14} className="text-on-surface-variant shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Subtle Keyboard Shortcut Hint */}
      <div className="pt-4 border-t border-outline-variant/60 flex items-center justify-between text-xs text-on-surface-variant">
        <span>Switch views</span>
        <span className="inline-flex items-center gap-1" aria-hidden="true">
          <kbd className="px-1.5 py-0.5 rounded-xs bg-surface border border-outline-variant font-mono text-[11px] leading-none">
            ←
          </kbd>
          <kbd className="px-1.5 py-0.5 rounded-xs bg-surface border border-outline-variant font-mono text-[11px] leading-none">
            →
          </kbd>
        </span>
      </div>
    </aside>
  );
};

export default SocialSidebar;
