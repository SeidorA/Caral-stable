import React from 'react';

/**
 * Spinner Component
 * 
 * A premium animated spinner component based on the Caral Design System.
 * It uses a simple rotation animation of a circular track with a highlight.
 */

export interface SpinnerProps {
  /**
   * Size of the spinner. Can be 'sm', 'md', 'lg' or a numerical value in pixels.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | number;
  /**
   * Color variant from the design system tokens.
   * @default 'default'
   */
  variant?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'indido' | 'sakura' | 'light' | 'carbon';
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string;
  /**
   * Speed of the rotation in seconds.
   * @default 0.8
   */
  speed?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  speed = 0.8,
}) => {
  const sizeMap = {
    sm: 20,
    md: 32,
    lg: 48,
  };

  const pixelSize = typeof size === 'number' ? size : sizeMap[size];

  const colorMap = {
    default: 'text-seidor-main',
    info: 'text-info-main',
    success: 'text-success-main',
    warning: 'text-warning-main',
    danger: 'text-danger-main',
    indido: 'text-indido-main',
    sakura: 'text-sakura-main',
    light: 'text-neutral-100',
    carbon: 'text-neutral-900',
  };

  const colorClass = colorMap[variant] || colorMap.default;

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      role="status"
      style={{ width: pixelSize, height: pixelSize }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`animate-spin ${colorClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <circle
          className="opacity-20"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          className="opacity-90"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="15.7 100" // 1/4 of circumference
        />

      </svg>
      <span className="sr-only">Cargando...</span>
    </div>
  );
};
