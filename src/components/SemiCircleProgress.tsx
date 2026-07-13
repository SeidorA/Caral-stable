import React from 'react';
import '../index.css';

export interface SemiCircleProgressProps {
  /** The progress percentage (0 to 100) */
  percentage: number;
  /** The color variant */
  variant?: 'seidor' | 'info' | 'success' | 'warning' | 'danger' | 'default';
  /** Custom color for the progress arc */
  color?: string;
  /** Show the percentage text inside */
  showPercentage?: boolean;
  /** Additional classes for the container */
  className?: string;
  /** Custom width for the component (e.g. '200px', '100%'). Defaults to '150px' */
  width?: string | number;
}

const variantColors: Record<NonNullable<SemiCircleProgressProps['variant']>, string> = {
  seidor: 'text-seidor-main',
  info: 'text-info-main',
  success: 'text-success-main',
  warning: 'text-warning-main',
  danger: 'text-danger-main',
  default: 'text-neutral-500',
};

export function SemiCircleProgress({
  percentage,
  variant = 'seidor',
  color,
  showPercentage = true,
  className = '',
  width = '150px',
}: SemiCircleProgressProps) {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
  const radius = 40;
  const strokeWidth = 10;
  const circumference = Math.PI * radius;
  // Calculate offset. 0% means fully offset (invisible), 100% means 0 offset (fully visible)
  const strokeDashoffset = circumference - (clampedPercentage / 100) * circumference;

  return (
    <div 
      className={`relative flex flex-col items-center justify-end ${className}`.trim()} 
      style={{ width }}
    >
      <svg
        viewBox="0 0 100 55"
        className="w-full h-auto overflow-visible"
      >
        {/* Background Arc */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="text-neutral-200 dark:text-neutral-700"
        />
        {/* Progress Arc */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke={color || 'currentColor'}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={!color ? variantColors[variant] : ''}
          style={{ transition: 'stroke-dashoffset 0.8s ease-in-out' }}
        />
      </svg>
      {showPercentage && (
        <div className="absolute bottom-2 left-0 right-0 flex flex-col items-center justify-end">
          <span className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">{clampedPercentage}%</span>
        </div>
      )}
    </div>
  );
}
