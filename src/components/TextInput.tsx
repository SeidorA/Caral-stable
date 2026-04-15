import React from 'react';
import '../index.css';
import { CaralIcon } from 'iconcaral2';
import type { Icons } from './icons';

type TextInputControlProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'rows'>;

export interface TextInputProps extends TextInputControlProps {
  label?: string;
  helperText?: string;
  requiredMessage?: string;
  iconName?: Icons;
  iconPosition?: 'left' | 'right';
  multiline?: boolean;
  rows?: number;
  variant?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'light';
  className?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const variantStyles: Record<NonNullable<TextInputProps['variant']>, string> = {
  default: 'border-neutral-300 focus:border-seidor-main focus:ring-seidor-main/20',
  info: 'border-info-main focus:border-info-main focus:ring-info-main/20 shadow-[0_0_0_7px_rgba(var(--color-info-light-rgb),0.12)]',
  success: 'border-success-main focus:border-success-main focus:ring-success-main/20 shadow-[0_0_0_7px_rgba(var(--color-success-light-rgb),0.12)]',
  warning: 'border-warning-main focus:border-warning-main focus:ring-warning-main/20 shadow-[0_0_0_7px_rgba(var(--color-warning-light-rgb),0.12)]',
  danger: 'border-danger-main focus:border-danger-main focus:ring-danger-main/20 shadow-[0_0_0_7px_rgba(var(--color-danger-light-rgb),0.30)]',
  light: 'border-neutral-300 focus:border-seidor-main focus:ring-seidor-main/20',
};

export function TextInput({
  label,
  helperText,
  requiredMessage,
  iconName,
  iconPosition = 'left',
  multiline = false,
  rows = 4,
  variant = 'default',
  className = '',
  id,
  placeholder,
  value,
  onChange,
  ...props
}: TextInputProps) {
  const hasIcon = Boolean(iconName);
  const inputClasses = [
    'block w-full rounded-lg bg-white dark:bg-neutral-400 border px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 transition-all duration-200 outline-none',
    variantStyles[variant],
    hasIcon && iconPosition === 'left' ? 'pl-10' : '',
    hasIcon && iconPosition === 'right' ? 'pr-10' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const fieldId = id || `textinput-${Math.random().toString(36).slice(2, 8)}`;
  const inputProps = props as React.InputHTMLAttributes<HTMLInputElement>;
  const textareaProps = props as React.TextareaHTMLAttributes<HTMLTextAreaElement>;

  return (
    <div className={`w-full ${className}`.trim()}>
      {(label || requiredMessage) && (
        <div className="mb-2 flex flex-wrap items-baseline gap-2">
          {label && (
            <label htmlFor={fieldId} className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {label}
            </label>
          )}

          {requiredMessage && (
            <span className="text-xs font-semibold text-danger-main">{requiredMessage}</span>
          )}
        </div>
      )}

      <div className="relative">
        {hasIcon && iconPosition === 'left' && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-500 dark:text-neutral-800">
            <CaralIcon name={iconName!} size="s" />
          </span>
        )}

        {multiline ? (
          <textarea
            id={fieldId}
            className={inputClasses}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
            {...textareaProps}
          />
        ) : (
          <input
            id={fieldId}
            type="text"
            className={inputClasses}
            placeholder={placeholder}
            value={value}
            onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
            {...inputProps}
          />
        )}

        {hasIcon && iconPosition === 'right' && (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-neutral-500 dark:text-neutral-800">
            <CaralIcon name={iconName!} size="s" />
          </span>
        )}
      </div>

      {helperText && (
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-800">{helperText}</p>)}

      
    </div>
  );
}
