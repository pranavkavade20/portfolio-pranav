import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Skeleton Component
 * Layout-matched placeholder with optional 150ms reveal delay to prevent flash on fast loads.
 */
const Skeleton = ({
  className = '',
  variant = 'rectangular', // 'text' | 'circular' | 'rectangular' | 'card'
  delayMs = 0,
  ...props
}) => {
  const [visible, setVisible] = useState(delayMs <= 0);

  useEffect(() => {
    if (delayMs <= 0) return;
    const timer = setTimeout(() => setVisible(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  const variants = {
    text: 'h-4 w-3/4 rounded-xs',
    circular: 'rounded-full aspect-square',
    rectangular: 'rounded-md',
    card: 'h-48 w-full rounded-lg',
  };

  return (
    <div
      className={cn(
        'bg-surface-variant border border-outline-variant/40 transition-opacity duration-fast',
        visible ? 'opacity-100 motion-safe:animate-pulse' : 'opacity-0',
        variants[variant] || variants.rectangular,
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Skeleton;
