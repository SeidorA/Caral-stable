import React from 'react';
import '../index.css';
import { CaralIcon } from 'iconcaral2';
import type { Icons } from './icons';

export interface ChipProps {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'indido' | 'sakura' | 'light' | 'alwayslight' | 'outlight';
  iconName?: Icons;
  label?: string;
  showInfo?: boolean;
  infoMessage?: string;
  hasBorder?: boolean;
  status?: 'none' | 'success' | 'warning' | 'danger' | 'waiting';
  className?: string;
  justIcon?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  variant = 'default',
  iconName,
  label,
  showInfo = false,
  infoMessage = '',
  hasBorder = false,
  status = 'none',
  className = '',
  justIcon = false,
}) => {
  const baseClasses = "inline-flex items-center justify-center relative whitespace-nowrap transition-all duration-200 font-poppins";

  const statusStyles = {
    success: "bg-success-main",
    warning: "bg-warning-main",
    danger: "bg-danger-main",
    waiting: "bg-neutral-500",
    none: "hidden"
  };

  // Estilos cuando NO hay borde (Sólidos)
  const variantStyles = {
    default: "bg-seidor-main text-neutral-100",
    info: "bg-info-main text-neutral-100",
    success: "bg-success-main text-neutral-100",
    warning: "bg-warning-main text-neutral-100",
    danger: "bg-danger-main text-neutral-100",
    indido: "bg-indido-main text-neutral-100",
    sakura: "bg-sakura-main text-neutral-100",
    light: "bg-neutral-800 text-neutral-100",
    alwayslight: "bg-neutral-100 text-seidor-main",
    outlight: "bg-neutral-body border border-neutral-800 text-seidor-main",
  };

  const colorKey = variant === 'indido' ? 'indido' : variant === 'default' ? 'seidor' : variant;

  const currentStyles = hasBorder
    ? ""
    : variantStyles[variant] || variantStyles.default;

  const isJustIcon = justIcon && iconName;

  return (
    <span
      className={`${baseClasses} ${currentStyles} ${className}`}
      style={{
        borderRadius: '999px',
        height: '34px',
        width: isJustIcon ? '34px' : 'auto',
        aspectRatio: isJustIcon ? '1 / 1' : 'auto',
        boxSizing: 'border-box',
        padding: isJustIcon ? '0' : '10px 20px',
        gap: '10px',
        margin: hasBorder ? '2px' : '0', // Espacio para el ring
        ...(hasBorder ? {
          backgroundColor: `var(--color-${colorKey}-light)`,
          boxShadow: `0 0 0 2px var(--color-${colorKey}-hard)`,
          color: `var(--color-${colorKey}-hard)`
        } : {})
      }}
    >
      {iconName && (
        <span className="flex items-center justify-center">
          <CaralIcon name={iconName} size={isJustIcon ? 20 : "s"} />
        </span>
      )}

      {!isJustIcon && (
        <>
          {status !== 'none' && (
            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${statusStyles[status]}`} />
          )}

          {label && (
            <span className="text-[14px] font-medium leading-[14px]">
              {label}
            </span>
          )}

          {showInfo && (
            <span className="flex items-center relative group">
              <CaralIcon name="circleInfo" size="s" />
              {infoMessage && (
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-neutral-900 text-neutral-100 text-[10px] rounded invisible group-hover:visible transition-all pointer-events-none whitespace-nowrap z-50">
                  {infoMessage}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-neutral-900" />
                </span>
              )}
            </span>
          )}
        </>
      )}
    </span>
  );
};

