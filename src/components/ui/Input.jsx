import React, { forwardRef, useId } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Meta x Google Input Component
 * Persistent label, optional leading icon, clear button, helper text, inline error with icon,
 * 48dp touch target, and accessible aria-describedby / aria-invalid wiring.
 */
const Input = forwardRef(({
  label,
  helperText,
  error,
  icon: Icon,
  onClear,
  value,
  shape = 'rounded', // 'rounded' | 'pill'
  multiline = false,
  rows = 3,
  className = '',
  containerClassName = '',
  id,
  type = 'text',
  disabled = false,
  ...props
}, ref) => {
  const generatedId = useId();
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : generatedId);
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;
  const showClear = Boolean(onClear && value && !disabled);

  const radiusClass = shape === 'pill' ? 'rounded-full' : 'rounded-md';
  const FieldTag = multiline ? 'textarea' : 'input';

  return (
    <div className={cn('w-full flex flex-col gap-1.5 text-left', containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-on-surface"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center w-full">
        {Icon && (
          <div
            className={cn(
              'absolute left-3.5 text-on-surface-variant pointer-events-none flex items-center justify-center',
              multiline && 'top-3.5'
            )}
            aria-hidden="true"
          >
            <Icon size={18} />
          </div>
        )}

        <FieldTag
          ref={ref}
          id={inputId}
          type={multiline ? undefined : type}
          rows={multiline ? rows : undefined}
          value={value}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            'w-full min-h-[48px] px-4 py-2.5 text-base bg-surface text-on-surface border',
            'placeholder:text-on-surface-variant/80',
            'transition-[border-color,box-shadow] duration-fast ease-standard',
            'border-outline hover:border-on-surface-variant',
            'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-0 focus:border-primary',
            radiusClass,
            Icon && 'pl-11',
            showClear && 'pr-12',
            error && 'border-error focus:border-error focus-visible:outline-error',
            disabled && 'opacity-50 cursor-not-allowed bg-surface-variant',
            multiline && 'resize-y min-h-[96px]',
            className
          )}
          {...props}
        />

        {showClear && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear input"
            className="touch-target absolute right-1 text-on-surface-variant hover:text-on-surface rounded-full state-layer cursor-pointer"
          >
            <X size={16} aria-hidden="true" />
          </button>
        )}
      </div>

      {error ? (
        <p id={errorId} role="alert" className="flex items-center gap-1.5 text-xs text-error font-medium mt-0.5">
          <AlertCircle size={14} className="shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-xs text-on-surface-variant mt-0.5">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
