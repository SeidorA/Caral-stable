import React, { useState } from 'react';
import { CaralIcon, Brand } from 'iconcaral2';
import type { Icons } from './icons';
import Avatar from './avatar/Avatar';
import '../index.css';

export interface SidebarItem {
  id: string;
  label: string;
  icon: Icons;
  onClick?: () => void;
  active?: boolean;
}

export interface NavbarVerticalProps {
  /** Nombre del Icono de marca (Brand) */
  brandName?: string;
  /** Título principal de la barra */
  title?: string;
  /** Items de navegación secundarios */
  items?: SidebarItem[];
  /** Información del usuario logueado */
  user?: {
    email: string;
    avatarInitials: string;
  };
  /** Contenido del menú desplegable del usuario */
  userMenuContent?: React.ReactNode;
  /** Estado inicial de colapso */
  defaultCollapsed?: boolean;
  /** Clase CSS adicional para el contenedor */
  className?: string;
}

/**
 * NavbarVertical Component (Sidebar)
 * 
 * Barra de navegación lateral premium y colapsable.
 * Los botones utilizan un fondo neutral-500 y alineación a la izquierda.
 */
export const NavbarVertical: React.FC<NavbarVerticalProps> = ({
  brandName = 'SAP',
  title = 'Crestone',
  items = [],
  user = { email: 'user@example.com', avatarInitials: 'MW' },
  userMenuContent,
  defaultCollapsed = false,
  className = '',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <div
      className={`
        h-full flex flex-col bg-container border-r border-neutral-800/10 
        transition-all duration-300 ease-in-out relative
        ${isCollapsed ? 'w-[80px]' : 'w-[240px]'}
        ${className}
      `}
    >
      {/* Header: Logo + Title */}
      <div className="flex items-center gap-3 p-5 h-[80px]">
        <div className="bg-neutral-400 p-1.5 rounded-lg flex items-center justify-center shrink-0">
          <Brand name={brandName as any} size={28} />
        </div>
        {!isCollapsed && (
          <h3 className="font-poppins font-semibold text-h3  tracking-tight truncate text-neutral-900">
            {title}
          </h3>
        )}
      </div>

      {/* Toggle Button (Absolute position) */}
      {!isCollapsed && (
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-20 bg-info-main text-white rounded-full p-1 border-4 border-neutral-body shadow-md hover:scale-110 transition-transform z-10"
        >
          <CaralIcon name="chevronLeft" size={14} />
        </button>
      )}
      {isCollapsed && (
        <button
          onClick={toggleSidebar}
          className="mx-auto mb-4 bg-info-main text-white rounded-full p-1 shadow-md hover:scale-110 transition-transform"
        >
          <CaralIcon name="chevronRigth" size={14} />
        </button>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-2 px-3 py-4 overflow-y-auto">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={item.onClick}
            className={`
              flex items-center transition-all duration-200 min-h-[44px] rounded-full group relative
              ${isCollapsed ? 'justify-center w-full px-0' : 'justify-start w-full px-6'}
              ${item.active
                ? 'bg-neutral-500 text-neutral-900 shadow-sm'
                : 'bg-transparent text-neutral-800 hover:bg-neutral-500/50 hover:text-neutral-900'}
            `}
          >
            <div className={`shrink-0 flex items-center justify-center ${isCollapsed ? '' : 'mr-3'}`}>
              <CaralIcon name={item.icon} size="s" />
            </div>
            {!isCollapsed && (
              <span className="font-poppins text-p truncate">
                {item.label}
              </span>
            )}

            {/* Tooltip for collapsed state */}
            {isCollapsed && (
              <span className="absolute left-full ml-4 hidden group-hover:block bg-neutral-900 text-white text-small px-3 py-1.5 rounded-md whitespace-nowrap z-50 shadow-xl pointer-events-none lowercase first-letter:uppercase">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer: User Info + Popover Menu */}
      <div className="relative p-4 border-t border-neutral-800/10">
        {isUserMenuOpen && userMenuContent && (
          <div
            className={`
              absolute z-50 bg-neutral-body border border-neutral-800/10 shadow-2xl rounded-xl p-2 min-w-[200px]
              animate-scale-up
              ${isCollapsed ? 'left-full bottom-4 ml-4' : 'bottom-full left-4 mb-2 w-[calc(100%-32px)]'}
            `}
          >
            {userMenuContent}
          </div>
        )}

        <button
          onClick={toggleUserMenu}
          className={`
            w-full flex items-center gap-3 p-2 rounded-xl transition-colors
            hover:bg-neutral-500/30
            ${isCollapsed ? 'justify-center' : 'justify-start'}
            ${isUserMenuOpen ? 'bg-neutral-500/40' : ''}
          `}
        >
          <Avatar
            text={user.avatarInitials}
            property1="info"
            size="sm"
            className="shrink-0"
          />
          {!isCollapsed && (
            <div className="flex flex-col truncate text-left">
              <span className="font-poppins text-small text-seidor-main font-medium truncate">
                {user.email}
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
