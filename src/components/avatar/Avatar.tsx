import React from 'react';
import '../../index.css';
import { CaralIcon } from 'iconcaral2';
import type { Icons } from '../icons';

type AvatarProps = {
  className?: string;
  /**
   * Optional custom React node to render as an icon.
   * If provided, this node is shown instead of the default CaralIcon.
   */
  icon?: React.ReactNode | null;
  /**
   * Icon name from CaralIcon. When set, Avatar renders icon mode.
   */
  iconName?: Icons;
  /**
   * Determines the visual variant of the avatar.
   * - "Default", "info", "Aprove", "Danger", "Warning", "gray" → colored backgrounds with optional text or icon.
   * - "Image" → shows a background image.
   */
  property1?:
    | "Default"
    | "info"
    | "Aprove"
    | "Danger"
    | "Warning"
    | "gray"
    | "Image";
  /**
   * Size of the avatar. "lg" → 60px, "md" → 44px, "sm" → 24px.
   */
  size?: "lg" | "md" | "sm";
  /**
   * Text initials to display (max 2 characters). Used when not in icon mode.
   */
  text?: string;
};



export default function Avatar({
  className,
  icon = null,
  iconName,
  property1 = "Default",
  size = "sm",
  text,
}: AvatarProps) {
  const variantClasses: Record<Exclude<AvatarProps['property1'], undefined>, string> = {
    Default: 'bg-seidor-main',
    info: 'bg-info-main',
    Aprove: 'bg-success-main',
    Danger: 'bg-danger-main',
    Warning: 'bg-warning-main',
    gray: 'bg-neutral-800',
    Image: 'bg-transparent',
  };

  const sizeClasses: Record<NonNullable<AvatarProps['size']>, string> = {
    lg: 'h-[60px] w-[60px]',
    md: 'h-[44px] w-[44px]',
    sm: 'h-[24px] w-[24px]',
  };

  const iconScale: { [key: string]: "s" | "m" | "l" } = {
    sm: "s",
    md: "m",
    lg: "l"
  };

  const containerClasses = [
    'overflow-clip relative rounded-[30px] flex items-center justify-center',
    variantClasses[property1],
    sizeClasses[size],
  ].join(' ');

  const textableVariants = [
    'Default',
    'info',
    'Aprove',
    'Danger',
    'Warning',
    'gray',
  ];

  const isIconMode = Boolean((iconName || icon) && textableVariants.includes(property1));
  const isTextMode = !isIconMode && textableVariants.includes(property1);

  return (
    <div className={className ? `${containerClasses} ${className}` : containerClasses}>
      {isTextMode && (
        <p
          className={`not-italic relative shrink-0 text-neutral-100 whitespace-nowrap font-bold ${
            size === 'lg'
              ? 'leading-[24px] text-[24px]'
              : size === 'sm'
              ? 'leading-[var(--height/p,1px)] text-[10px]'
              : 'leading-[var(--height/p,24px)] text-[length:var(--size/p,16px)]'
          }`}
        >
          {text?.substring(0, 2).toUpperCase() || ''}
        </p>
      )}

      {isIconMode && (icon || <CaralIcon name={iconName ?? 'bolt'} size={iconScale[size]} color="#E2E8F0" />)}

      {property1 === 'Image' && !isIconMode && (
        <svg
          aria-hidden="true"
          viewBox="0 0 44 44"
          fill="currentColor"
          className="absolute inset-0 size-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="30" fill="#0191ff" opacity="0.1" />
          <circle cx="22" cy="16" r="6" fill="#0191ff" />
          <path d="M10 28c0-6 5.4-9 12-9s12 3 12 9" fill="#0191ff" opacity="0.5" />
        </svg>
      )}
    </div>
  );
}
