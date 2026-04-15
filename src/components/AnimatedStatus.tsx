import React from 'react';

/**
 * AnimatedStatus Component
 * 
 * A premium animated status indicator that draws its stroke and scales up.
 * Based on the Caral Design System.
 */

export interface AnimatedStatusProps {
  /**
   * The type of status to display.
   * @default 'success'
   */
  variant?: 'success' | 'error' | 'info' | 'warning';
  /**
   * Size of the indicator in pixels.
   * @default 100
   */
  size?: number;
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string;
}

export const AnimatedStatus: React.FC<AnimatedStatusProps> = ({
  variant = 'success',
  size = 100,
  className = '',
}) => {
  const colorMap = {
    success: 'text-success-main',
    error: 'text-danger-main',
    info: 'text-info-main',
    warning: 'text-warning-main',
  };

  const colorClass = colorMap[variant];

  // Path data for the icons inside the 100x100 viewBox
  const icons = {
    success: (
      <path
        d="M32 52L44 64L68 36"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="60"
        strokeDashoffset="60"
        className="animate-draw"
        style={{ animationDelay: '0.4s' }}
      />
    ),
    error: (
      <>
        <path
          d="M35 35L65 65"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="60"
          className="animate-draw"
          style={{ animationDelay: '0.4s' }}
        />
        <path
          d="M65 35L35 65"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="60"
          className="animate-draw"
          style={{ animationDelay: '0.6s' }}
        />
      </>
    ),
    info: (
      <>
        <circle cx="50" cy="35" r="3" fill="currentColor" className="animate-fade-in" style={{ animationDelay: '0.4s' }} />
        <path
          d="M50 45V68"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="30"
          strokeDashoffset="30"
          className="animate-draw"
          style={{ animationDelay: '0.5s' }}
        />
      </>
    ),
    warning: (
      <>
        <path
          d="M50 25L22 72H78L50 25Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="200"
          strokeDashoffset="200"
          className="animate-draw"
          style={{ animationDelay: '0.4s' }}
        />
        <path
          d="M50 42V58"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="20"
          strokeDashoffset="20"
          className="animate-draw"
          style={{ animationDelay: '0.8s' }}
        />
        <circle cx="50" cy="65" r="2.5" fill="currentColor" className="animate-fade-in" style={{ animationDelay: '1s' }} />
      </>
    ),
  };

  return (
    <div 
      className={`inline-flex items-center justify-center animate-scale-up ${colorClass} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          strokeDasharray="283"
          strokeDashoffset="283"
          className="animate-draw"
        />
        {/* Inner Icon */}
        {icons[variant]}
      </svg>
    </div>
  );
};
