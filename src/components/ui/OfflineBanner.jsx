import React, { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';

/**
 * Unobtrusive offline indicator banner per Meta x Google offline/slow-network UX.
 */
const OfflineBanner = () => {
  const [isOffline, setIsOffline] = useState(() =>
    typeof navigator !== 'undefined' ? !navigator.onLine : false
  );

  useEffect(() => {
    const goOffline = () => setIsOffline(true);
    const goOnline = () => setIsOffline(false);
    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);
    return () => {
      window.removeEventListener('offline', goOffline);
      window.removeEventListener('online', goOnline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-warning-container text-on-warning-container border-b border-outline-variant px-4 py-2 text-xs font-medium flex items-center justify-center gap-2"
    >
      <WifiOff size={14} className="shrink-0" aria-hidden="true" />
      <span>You appear to be offline. Showing cached portfolio content.</span>
    </div>
  );
};

export default OfflineBanner;
