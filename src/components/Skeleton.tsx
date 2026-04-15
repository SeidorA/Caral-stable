import React from 'react';

/**
 * Skeleton Component
 * 
 * Used to display a placeholder while content is loading.
 * Features a subtle pulse animation for a premium feel.
 */

export interface SkeletonProps {
  /**
   * Width of the skeleton. Can be any valid CSS width value.
   */
  width?: string | number;
  /**
   * Height of the skeleton. Can be any valid CSS height value.
   */
  height?: string | number;
  /**
   * Shape of the skeleton.
   * @default 'rounded'
   */
  variant?: 'rectangular' | 'circular' | 'rounded';
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'rounded',
  className = '',
}) => {
  const baseClasses = "bg-neutral-500/10 animate-pulse relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";
  
  const variantClasses = {
    rectangular: "rounded-none",
    circular: "rounded-full",
    rounded: "rounded-md",
  };

  const style: React.CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      style={style}
    />
  );
};
