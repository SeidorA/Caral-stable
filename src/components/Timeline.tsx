import React from 'react';
import '../index.css';

export interface TimelineProps {
  /**
   * If true, hides the top line. Useful for the first item in a timeline.
   */
  hideTopLine?: boolean;
  /**
   * If true, hides the bottom line. Useful for the last item in a timeline.
   */
  hideBottomLine?: boolean;
  /**
   * The color variant of the circle.
   */
  variant?: 'default' | 'seidor' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
  /**
   * Custom color for the circle (CSS color value), overrides variant if provided.
   */
  circleColor?: string;
  /**
   * Content to display next to the timeline indicator.
   */
  children?: React.ReactNode;
  /**
   * Additional classes for the container.
   */
  className?: string;
}

const variantColors: Record<NonNullable<TimelineProps['variant']>, string> = {
  default: 'bg-neutral-300',
  seidor: 'bg-seidor-main',
  info: 'bg-info-main',
  success: 'bg-success-main',
  warning: 'bg-warning-main',
  danger: 'bg-danger-main',
  light: 'bg-neutral-100 border border-neutral-300',
  dark: 'bg-neutral-800',
};

export function Timeline({
  hideTopLine = false,
  hideBottomLine = false,
  variant = 'default',
  circleColor,
  children,
  className = '',
}: TimelineProps) {
  return (
    <div className={`flex gap-4 min-h-[4rem] ${className}`.trim()}>
      <div className="flex flex-col items-center">
        {/* Top Line */}
        <div 
          className={`w-[2px] flex-1 ${hideTopLine ? 'bg-transparent' : 'bg-neutral-200 dark:bg-neutral-700'}`} 
        />
        
        {/* Circle */}
        <div 
          className={`w-4 h-4 rounded-full z-10 flex-shrink-0 my-1 ${!circleColor ? variantColors[variant] : ''}`}
          style={circleColor ? { backgroundColor: circleColor } : undefined}
        />
        
        {/* Bottom Line */}
        <div 
          className={`w-[2px] flex-1 ${hideBottomLine ? 'bg-transparent' : 'bg-neutral-200 dark:bg-neutral-700'}`} 
        />
      </div>
      
      {/* Content */}
      <div className="py-2 flex-1">
        {children}
      </div>
    </div>
  );
}
