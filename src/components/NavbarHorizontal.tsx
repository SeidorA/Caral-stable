import React, { useState } from 'react';
import { CaralIcon, Brand } from 'iconcaral2';
import type { Icons } from './icons';
import Avatar from './avatar/Avatar';
import '../index.css';

export interface NavItem {
  label: string;
  icon: Icons;
  onClick?: () => void;
  active?: boolean;
}

export interface NavbarHorizontalProps {
  /** Nombre del Icono de marca (Brand) */
  brandName?: string;
  /** Título principal de la barra */
  title?: string;
  /** Items de navegación centrales */
  navItems?: NavItem[];
  /** Acciones opcionales en el lado derecho (iconos, botones extra) */
  rightActions?: React.ReactNode;
  /** Datos del avatar del usuario */
  user?: {
    initials: string;
    variant?: "Default" | "info" | "Aprove" | "Danger" | "Warning" | "gray" | "Image";
  };
  /** Contenido que se muestra/oculta en la parte inferior */
  collapsibleContent?: React.ReactNode;
  /** Color de fondo principal (token de CSS variable) */
  variant?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'indigo' | 'sakura' | 'carbon';
  /** Si la barra debe ser sticky top */
  isSticky?: boolean;
  /** Clase CSS adicional */
  className?: string;
}

/**
 * NavbarHorizontal Component
 * 
 * Barra de navegación superior premium y flexible.
 * Soporta branding personalizable, navegación central dinámica, acciones a la derecha
 * y un contenedor colapsable inferior para contenido contextual.
 */
export const NavbarHorizontal: React.FC<NavbarHorizontalProps> = ({
  brandName = 'SAP',
  title = 'Caral',
  navItems = [],
  rightActions,
  user = { initials: 'MW', variant: 'Warning' },
  collapsibleContent,
  variant = 'default',
  isSticky = true,
  className = '',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const backgroundVariants: Record<string, string> = {
    default: 'bg-seidor-main',
    info: 'bg-info-main',
    success: 'bg-success-main',
    warning: 'bg-warning-main',
    danger: 'bg-danger-main',
    indigo: 'bg-indido-main',
    sakura: 'bg-sakura-main',
    carbon: 'bg-neutral-900',
  };

  const bgClass = backgroundVariants[variant] || backgroundVariants.default;
  const stickyClass = isSticky ? 'sticky top-0 z-50' : 'relative';

  return (
    <div className={`w-full flex flex-col ${stickyClass} ${className}`}>
      {/* Main Bar */}
      <div className={`${bgClass} flex items-center justify-between px-4 py-3 min-h-[72px] shadow-lg transition-all duration-300`}>

        {/* Left Section: Menu + Brand + Title */}
        <div className="flex items-center gap-4">
          <button className="text-white hover:bg-white/10 p-2 rounded-md transition-colors">
            <CaralIcon name="menu" size="m" />
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-neutral-400 p-1.5 rounded-lg flex items-center justify-center shadow-inner">
              <Brand name={brandName as any} size={28} />
            </div>
            <h3 className="font-poppins font-semibold text-h3 text-white tracking-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Middle Section: Nav Items */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200
                font-poppins text-p text-white/90 hover:text-white hover:bg-white/10
                ${item.active ? 'bg-white/20 text-white font-semibold' : ''}
              `}
            >
              <CaralIcon name={item.icon} size="s" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Right Section: Actions + User */}
        <div className="flex items-center gap-3">
          {rightActions}

          {collapsibleContent && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-11 h-11 flex items-center justify-center text-white hover:bg-white/10 rounded-md transition-colors"
            >
              <CaralIcon
                name={isCollapsed ? 'chevronDown' : 'chevronUp'}
                size="s"
                {...({ className: "transition-transform duration-300" } as any)}
              />
            </button>
          )}

          <div className="flex items-center gap-3 ml-2">
            <Avatar
              text={user.initials}
              property1={user.variant as any}
              size="md"
              className="border-2 border-white/20 shadow-md transform hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Collapsible Content Area */}
      {collapsibleContent && (
        <div className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[500px] opacity-100'}
        `}>
          <div className="w-full">
            {collapsibleContent}
          </div>
        </div>
      )}
    </div>
  );
};
