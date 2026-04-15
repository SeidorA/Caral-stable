import React from 'react';

/**
 * ProgressBar Component
 * 
 * A premium progress indicator with smooth transitions and a shimmer effect.
 */

export interface ProgressBarProps {
  /**
   * Current progress value between 0 and 100.
   */
  value: number;
  /**
   * Maximum value of the progress bar.
   * @default 100
   */
  max?: number;
  /**
   * Color variant from the design system tokens.
   * @default 'default'
   */
  variant?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'indido' | 'sakura';
  /**
   * Height of the progress bar.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether to show the percentage label.
   * @default false
   */
  showLabel?: boolean;
  /**
   * Border radius variant.
   * @default 'full'
   */
  rounding?: 'none' | 'md' | 'full';
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string;
  /**
   * Whether to show a pulse/animated effect on the bar.
   * @default true
   */
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  variant = 'default',
  size = 'md',
  rounding = 'full',
  showLabel = false,
  className = '',
  animated = true,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeStyles = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const variantStyles = {
    default: "bg-seidor-main",
    info: "bg-info-main",
    success: "bg-success-main",
    warning: "bg-warning-main",
    danger: "bg-danger-main",
    indido: "bg-indido-main",
    sakura: "bg-sakura-main",
  };

  const roundingStyles = {
    none: "rounded-none",
    md: "rounded-md",
    full: "rounded-full",
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-2">
          <span className="text-label text-neutral-800 font-medium">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full bg-neutral-500/10 ${roundingStyles[rounding]} overflow-hidden ${sizeStyles[size]}`}>
        <div 
          className={`h-full ${roundingStyles[rounding]} transition-all duration-500 ease-out relative ${variantStyles[variant]}`}
          style={{ width: `${percentage}%` }}
        >
          {animated && percentage > 0 && (
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
