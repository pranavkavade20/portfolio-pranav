import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Accessible ArrowLeft/ArrowRight/Home/End roving keyboard navigation for role="tablist".
 */
export function handleTabListKeyDown(e, currentIndex, count, onSelect) {
  if (count <= 1) return;
  let nextIndex = null;

  if (e.key === 'ArrowRight') {
    nextIndex = (currentIndex + 1) % count;
  } else if (e.key === 'ArrowLeft') {
    nextIndex = (currentIndex - 1 + count) % count;
  } else if (e.key === 'Home') {
    nextIndex = 0;
  } else if (e.key === 'End') {
    nextIndex = count - 1;
  }

  if (nextIndex === null) return;
  e.preventDefault();
  onSelect(nextIndex);

  const tablist = e.currentTarget.closest('[role="tablist"]');
  const tabs = tablist?.querySelectorAll('[role="tab"]');
  tabs?.[nextIndex]?.focus();
}

/**
 * Returns theme-aware styling classes for skill brand SVGs so dark-ink marks remain legible.
 */
export function getSkillLogoClass(name) {
  const key = String(name || '').toLowerCase().trim();
  if (key === 'django' || key === 'github') {
    return 'dark:brightness-0 dark:invert';
  }
  if (key === 'django rest framework' || key === 'drf') {
    return 'scale-[1.28] dark:bg-white/95 dark:rounded-xs dark:p-[2px]';
  }
  return '';
}
