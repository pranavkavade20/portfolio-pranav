import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';
import Card from './Card';
import Button from './Button';
import { cn } from '../../lib/utils';

/**
 * Meta x Google ErrorState
 * Friendly error message explaining what happened, next step, and Retry action.
 */
const ErrorState = ({
  title = 'Something went wrong',
  message = 'We could not load this section right now. Please try again.',
  onRetry,
  retryLabel = 'Retry',
  className = '',
}) => {
  return (
    <Card className={cn('p-6 tablet:p-8 text-center flex flex-col items-center justify-center', className)} role="alert">
      <div className="w-12 h-12 rounded-full bg-error-container text-on-error-container flex items-center justify-center mb-4" aria-hidden="true">
        <AlertCircle size={22} />
      </div>
      <h2 className="text-lg font-semibold text-on-surface mb-1">{title}</h2>
      <p className="text-sm text-on-surface-variant mb-6 max-w-sm leading-relaxed">
        {message}
      </p>
      {onRetry && (
        <Button variant="primary" size="md" icon={RotateCcw} onClick={onRetry}>
          {retryLabel}
        </Button>
      )}
    </Card>
  );
};

export default ErrorState;
