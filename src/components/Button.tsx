import React from 'react';
import '../index.css';
import { CaralIcon } from 'iconcaral2';
import type { Icons } from './icons';
import { Spinner } from './Spinner';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'indido' | 'sakura' | 'light' | 'carbon' | 'ghost' | 'tab';
  size?: 'sm' | 'md' | 'lg';
  iconName?: Icons;
  isDropdown?: boolean;
  isOpen?: boolean;
  isIconButton?: boolean;
  isPill?: boolean;
  hasBorder?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  disabled,
  iconName,
  isDropdown,
  isOpen,
  isIconButton,
  isPill = false,
  hasBorder = false,
  isLoading = false,
  ...props
}) => {
  const baseClasses = "font-poppins transition-all duration-300 font-semibold inline-flex items-center justify-center focus:outline-none gap-2 group relative";

  const roundingClass = isPill ? "rounded-full" : "rounded-md";

  const sizeStyles = {
    sm: "h-8 px-3 text-small",
    md: "h-10 px-4 text-p",
    lg: "h-12 px-6 text-large",
  };

  const squareStyles = {
    sm: "w-8 h-8 px-0",
    md: "w-10 h-10 px-0",
    lg: "w-12 h-12 px-0",
  };

  // Estilos Sólidos (Default)
  const variantStyles = {
    default: "bg-seidor-main hover:bg-seidor-light active:bg-seidor-hard focus:bg-seidor-hard text-seidor-main-text hover:text-seidor-main",
    info: "bg-info-main hover:bg-info-light active:bg-info-hard focus:bg-info-hard text-neutral-100",
    success: "bg-success-main hover:bg-success-light active:bg-success-hard focus:bg-success-hard text-neutral-100",
    warning: "bg-warning-main hover:bg-warning-light active:bg-warning-hard focus:bg-warning-hard text-neutral-100",
    danger: "bg-danger-main hover:bg-danger-light active:bg-danger-hard focus:bg-danger-hard text-neutral-100",
    indido: "bg-indido-main hover:bg-indido-light active:bg-indido-hard focus:bg-indido-hard text-neutral-100",
    sakura: "bg-sakura-main hover:bg-sakura-light active:bg-sakura-hard focus:bg-sakura-hard text-neutral-100",
    light: "bg-neutral-100 text-neutral-900 active:bg-neutral-400 focus:bg-neutral-400",
    carbon: "bg-neutral-900 text-neutral-100 active:bg-neutral-800 focus:bg-neutral-800",
    ghost: "bg-transparent text-neutral-900 ",
    disabled: "bg-neutral-800 text-neutral-500 cursor-not-allowed",
    tab: "bg-neutral-800 text-neutral-100 hover:bg-neutral-700 ",
  };

  // Estilos con Borde (Light Background + External Border)
  const lightVariantStyles = {
    default: "bg-seidor-light text-seidor-main !ring-2 ring-seidor-hard hover:opacity-80 active:opacity-100",
    info: "bg-info-light text-info-hard !ring-2 ring-info-hard hover:opacity-80 active:opacity-100",
    success: "bg-success-light text-success-hard !ring-2 ring-success-hard hover:opacity-80 active:opacity-100",
    warning: "bg-warning-light text-warning-hard !ring-2 ring-warning-hard hover:opacity-80 active:opacity-100",
    danger: "bg-danger-light text-danger-hard !ring-2 ring-danger-hard hover:opacity-80 active:opacity-100",
    indido: "bg-indido-light text-indido-hard !ring-2 ring-indido-hard hover:opacity-80 active:opacity-100",
    sakura: "bg-sakura-light text-sakura-hard !ring-2 ring-sakura-hard hover:opacity-80 active:opacity-100",
    light: "bg-neutral-100 text-neutral-900 !ring-2 ring-neutral-400 hover:bg-white active:bg-neutral-200",
    carbon: "bg-neutral-800 text-neutral-100 !ring-2 ring-neutral-900 hover:bg-neutral-900 active:bg-black",
    ghost: "bg-transparent text-neutral-900 ",
    disabled: "bg-neutral-800 text-neutral-500 cursor-not-allowed",
    tab: "bg-neutral-500 text-neutral-900 hover:bg-neutral-300  focus:bg-neutral-800",
  };

  const currentVariantClass = disabled
    ? variantStyles.disabled
    : (hasBorder
      ? (lightVariantStyles[variant] || lightVariantStyles.default)
      : (variantStyles[variant] || variantStyles.default));
  const currentSizeClass = isIconButton ? squareStyles[size] : sizeStyles[size] || sizeStyles.md;

  const iconScale: { [key: string]: "s" | "m" | "l" } = {
    sm: "s",
    md: "s",
    lg: "m"
  };

  const currentIconSize = iconScale[size];

  return (
    <button
      className={`${baseClasses} ${roundingClass} ${currentSizeClass} ${currentVariantClass} ${className} ${isLoading ? 'cursor-not-allowed opacity-80' : ''}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Spinner size={size === 'lg' ? 24 : 18} variant="light" className="mr-1" />}
      
      {iconName && !isLoading && <CaralIcon name={iconName} size={currentIconSize} />}

      {children && !isIconButton && children}

      {children && isIconButton && (
        <span className="absolute bottom-full mb-3 hidden group-hover:block bg-neutral-900 text-neutral-100 text-[12px] px-2 py-1 rounded-md whitespace-nowrap z-50 shadow-xl left-1/2 -translate-x-1/2">
          {children}
          {/* Triangulo del tooltip */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-neutral-900"></span>
        </span>
      )}

      {isDropdown && !isIconButton && (
        <CaralIcon
          name={isOpen ? 'chevronUp' : 'chevronDown'}
          size={currentIconSize}
        />
      )}
    </button>
  );
};
