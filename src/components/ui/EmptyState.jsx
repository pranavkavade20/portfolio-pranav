import React from 'react';
import { Inbox } from 'lucide-react';
import Card from './Card';
import Button from './Button';
import { cn } from '../../lib/utils';

/**
 * Meta x Google EmptyState
 * Icon + single clear sentence + single recovery action.
 */
const EmptyState = ({
  icon = Inbox,
  title = 'Nothing here yet',
  description,
  actionLabel,
  actionIcon,
  onAction,
  className = '',
}) => {
  const Icon = icon;
  return (
    <Card className={cn('p-6 tablet:p-8 text-center flex flex-col items-center justify-center', className)}>
      <div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center mb-4" aria-hidden="true">
        <Icon size={22} />
      </div>
      <h2 className="text-lg font-semibold text-on-surface mb-1">{title}</h2>
      {description && (
        <p className="text-sm text-on-surface-variant mb-6 max-w-sm leading-relaxed">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <Button variant="tonal" size="md" icon={actionIcon} onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </Card>
  );
};

export default EmptyState;
