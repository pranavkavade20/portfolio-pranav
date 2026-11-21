import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { AlertCircle } from 'lucide-react';

/**
 * Meta x Google Input Component
 * Persistent label, helper text, inline error state with icon, 48dp touch target
 */
const Input = forwardRef(({
  label,
  helperText,
  error,
  icon: Icon,
  className = '',
  id,
  type = 'text',
  disabled = false,
  ...props
}, ref) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full flex flex-col gap-1.5 text-left">
      {label && (
        <label 
          htmlFor={inputId}
          className="text-xs font-semibold tracking-wide text-on-surface-variant uppercase"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center w-full">
        {Icon && (
          <div className="absolute left-3.5 text-on-surface-variant pointer-events-none flex items-center justify-center">
            <Icon size={18} />
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          className={cn(
            "w-full min-h-[48px] px-4 py-2.5 text-sm rounded-xl bg-surface text-on-surface border transition-colors",
            "border-outline hover:border-on-surface-variant",
            "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
            Icon && "pl-11",
            error && "border-error focus:border-error focus:ring-error/20",
            disabled && "opacity-50 cursor-not-allowed bg-surface-variant",
            className
          )}
          {...props}
        />
      </div>

      {error ? (
        <p className="flex items-center gap-1 text-xs text-error font-medium mt-0.5">
          <AlertCircle size={13} className="shrink-0" />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p className="text-xs text-on-surface-variant mt-0.5">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
