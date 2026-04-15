import React, { useEffect, useRef, useState } from 'react';
import { CaralIcon } from 'iconcaral2';
import type { Icons } from './icons';

type SelectControlProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectControlProps {
  label?: string;
  helperText?: string;
  requiredMessage?: string;
  iconName?: Icons;
  iconPosition?: 'left' | 'right';
  variant?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'light';
  className?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  options: SelectOption[];
  placeholder?: string;
  dropdown?: boolean;
}

const variantStyles: Record<NonNullable<SelectProps['variant']>, string> = {
  default: 'border-neutral-300 focus:border-seidor-main focus:ring-seidor-main/20',
  info: 'border-info-main focus:border-info-main focus:ring-info-main/20 shadow-[0_0_0_7px_rgba(var(--color-info-light-rgb),0.12)]',
  success: 'border-success-main focus:border-success-main focus:ring-success-main/20 shadow-[0_0_0_7px_rgba(var(--color-success-light-rgb),0.12)]',
  warning: 'border-warning-main focus:border-warning-main focus:ring-warning-main/20 shadow-[0_0_0_7px_rgba(var(--color-warning-light-rgb),0.12)]',
  danger: 'border-danger-main focus:border-danger-main focus:ring-danger-main/20 shadow-[0_0_0_7px_rgba(var(--color-danger-light-rgb),0.30)]',
  light: 'border-neutral-300 focus:border-seidor-main focus:ring-seidor-main/20',
};

export function Select({
  label,
  helperText,
  requiredMessage,
  iconName,
  iconPosition = 'left',
  variant = 'default',
  className = '',
  value,
  onChange,
  options,
  placeholder,
  dropdown = true,
  id,
  disabled,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasIcon = Boolean(iconName);
  const iconLeft = hasIcon && iconPosition === 'left';
  const iconRight = hasIcon && iconPosition === 'right';
  const selectedOption = options.find((option) => option.value === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder || 'Select an option';
  const isPlaceholder = !selectedOption;

  useEffect(() => {
    if (!dropdown) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [dropdown]);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: SelectOption) => {
    if (disabled) return;
    const event = {
      target: { value: option.value },
    } as React.ChangeEvent<HTMLSelectElement>;

    onChange?.(event);
    setIsOpen(false);
  };

  const fieldId = id || `select-${Math.random().toString(36).slice(2, 8)}`;
  const selectClasses = [
    'w-full rounded-lg bg-neutral-400 border px-4 min-h-[3.25rem] text-sm text-neutral-900 dark:text-neutral-100 transition-all duration-200 outline-none flex items-center justify-between gap-3',
    variantStyles[variant],
    iconLeft ? 'pl-12' : '',
    iconRight ? 'pr-16' : 'pr-12',
    disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer',
  ]
    .filter(Boolean)
    .join(' ');

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

      <div ref={wrapperRef} className="relative">
        {iconLeft && (
          <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center  dark:text-neutral-800">
            <CaralIcon name={iconName!} size="s" />
          </span>
        )}

        <button
          type="button"
          id={fieldId}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={handleToggle}
          disabled={disabled}
          className={selectClasses}
        >
          <span className={`truncate text-base ${isPlaceholder ? 'text-neutral-800' : 'text-neutral-900'}`}>
            {displayLabel}
          </span>
        </button>

        {dropdown && (
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-800">
            <CaralIcon name={isOpen ? 'chevronUp' : 'chevronDown'} size="s"  />
          </span>
        )}

        {isOpen && (
          <ul className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-lg border border-neutral-200 bg-neutral-400 dark:border-neutral-700 dark:bg-neutral-700 shadow-2xl">
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                className={`cursor-pointer px-4 py-3 text-base text-neutral-900 dark:text-neutral-100 transition-colors duration-150 ${
                  option.value === value ? 'border-y-neutral-200' : 'hover:bg-neutral-200'
                }`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {helperText && (
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-800">{helperText}</p>
      )}
    </div>
  );
}
