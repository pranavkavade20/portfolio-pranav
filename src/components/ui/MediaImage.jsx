import React, { useState } from 'react';
import { ImageOff, RotateCcw } from 'lucide-react';
import Skeleton from './Skeleton';
import Button from './Button';
import { cn } from '../../lib/utils';

/**
 * Meta x Google MediaImage
 * Renders a delayed skeleton placeholder while loading and an accessible
 * fallback with Retry on image load failure.
 */
const MediaImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  compactFallback = false,
}) => {
  const [status, setStatus] = useState('loading'); // 'loading' | 'loaded' | 'error'
  const [retryCount, setRetryCount] = useState(0);
  const [prevSrc, setPrevSrc] = useState(src);

  if (prevSrc !== src) {
    setPrevSrc(src);
    setStatus('loading');
  }

  const handleRetry = (e) => {
    e.stopPropagation();
    setStatus('loading');
    setRetryCount((c) => c + 1);
  };

  const resolvedSrc =
    retryCount > 0 && src
      ? `${src}${src.includes('?') ? '&' : '?'}retry=${retryCount}`
      : src;

  return (
    <div className={cn('relative w-full h-full overflow-hidden bg-surface-variant/40', containerClassName)}>
      {status === 'loading' && (
        <Skeleton
          variant="rectangular"
          delayMs={150}
          className="absolute inset-0 w-full h-full rounded-none border-0"
        />
      )}

      {status === 'error' ? (
        <div
          role="alert"
          className="w-full h-full min-h-[120px] flex flex-col items-center justify-center gap-2 p-4 text-center bg-surface-variant text-on-surface-variant"
        >
          <ImageOff size={compactFallback ? 18 : 24} className="text-on-surface-variant" aria-hidden="true" />
          {!compactFallback && (
            <>
              <p className="text-xs font-medium text-on-surface">
                Unable to load image
              </p>
              <Button
                variant="tonal"
                size="sm"
                icon={RotateCcw}
                onClick={handleRetry}
              >
                Retry
              </Button>
            </>
          )}
        </div>
      ) : (
        <img
          key={`${src}-${retryCount}`}
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={cn(
            'transition-opacity duration-base ease-standard',
            status === 'loaded' ? 'opacity-100' : 'opacity-0',
            className
          )}
        />
      )}
    </div>
  );
};

export default MediaImage;
