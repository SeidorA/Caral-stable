import React from 'react';
import '../index.css';

export interface RadialProgressProps {
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
  /** Custom size for the component (width and height). Defaults to '100px' */
  size?: string | number;
}

const variantColors: Record<NonNullable<RadialProgressProps['variant']>, string> = {
  seidor: 'text-seidor-main',
  info: 'text-info-main',
  success: 'text-success-main',
  warning: 'text-warning-main',
  danger: 'text-danger-main',
  default: 'text-neutral-500',
};

export function RadialProgress({
  percentage,
  variant = 'seidor',
  color,
  showPercentage = true,
  className = '',
  size = '100px',
}: RadialProgressProps) {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
  const radius = 40;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  // Calculate offset. 0% means fully offset (invisible), 100% means 0 offset (fully visible)
  const strokeDashoffset = circumference - (clampedPercentage / 100) * circumference;

  return (
    <div 
      className={`relative flex items-center justify-center ${className}`.trim()} 
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible -rotate-90"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-neutral-200 dark:text-neutral-700"
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
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
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">{clampedPercentage}%</span>
        </div>
      )}
    </div>
  );
}
