import React from 'react';
import { Github, Linkedin, Mail, FileText, MapPin, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioConfig } from '../../config/portfolio';
import { cn } from '../../lib/utils';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

/**
 * Large+ (>=1200px) Right Contextual Column.
 * Surfaces quick profile context, availability status, and direct links alongside the centered feed.
 */
const SocialSidebar = () => {
  const location = useLocation();
  const isContactActive = location.pathname === '/contact';

  const quickLinks = [
    {
      href: 'https://github.com/pranavkavade20',
      label: 'GitHub',
      meta: '@pranavkavade20',
      icon: Github,
      external: true,
    },
    {
      href: 'https://www.linkedin.com/in/pranavkavade20',
      label: 'LinkedIn',
      meta: 'Connect on LinkedIn',
      icon: Linkedin,
      external: true,
    },
    {
      to: '/contact',
      label: 'Contact',
      meta: 'pranavkavade9@gmail.com',
      icon: Mail,
      external: false,
      active: isContactActive,
    },
  ];

  return (
    <aside
      aria-label="Contextual Profile & Social Links"
      className="hidden wide:flex flex-col gap-4 shrink-0 w-[var(--context-rail-width)] sticky top-[var(--appbar-height)] h-[calc(100dvh-var(--appbar-height))] py-6 pr-6 pl-0 overflow-y-auto"
    >
      <Card className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="success">Open to opportunities</Badge>
        </div>
        <div>
          <h2 className="text-base font-semibold text-on-surface tracking-tight">
            Pranav Kavade
          </h2>
          <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
            <MapPin size={13} className="text-on-surface-variant shrink-0" aria-hidden="true" />
            <span>Maharashtra, India</span>
          </p>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Full Stack Engineer building resilient APIs and clean, responsive UIs.
        </p>
        <Button
          as="a"
          href={portfolioConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="tonal"
          size="sm"
          icon={FileText}
          className="w-full"
          aria-label="View Résumé PDF"
        >
          View Résumé
        </Button>
      </Card>

      <Card className="p-3 flex flex-col gap-1">
        <p className="px-2 pt-1 pb-1.5 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
          Quick Links
        </p>
        <ul className="flex flex-col gap-1">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const classes = cn(
              'state-layer flex items-center justify-between gap-2 px-3 min-h-[48px] rounded-md',
              'transition-colors text-left',
              item.active
                ? 'bg-primary-container text-on-primary-container font-semibold'
                : 'text-on-surface hover:bg-surface-variant'
            );

            const content = (
              <>
                <span className="flex items-center gap-3 min-w-0">
                  <Icon
                    size={18}
                    className={cn('shrink-0', item.active ? 'text-primary' : 'text-on-surface-variant')}
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium truncate">{item.label}</span>
                    <span className="block text-xs text-on-surface-variant truncate">{item.meta}</span>
                  </span>
                </span>
                {item.external && (
                  <ArrowUpRight size={14} className="shrink-0 text-on-surface-variant" aria-hidden="true" />
                )}
              </>
            );

            return (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes}
                    aria-label={`${item.label} profile`}
                  >
                    {content}
                  </a>
                ) : (
                  <Link to={item.to} className={classes} aria-label={item.label}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Card>
    </aside>
  );
};

export default SocialSidebar;
