import React from 'react';
import '../index.css';
import { CaralIcon } from 'iconcaral2';

export interface DrawerProps {
  /** Si el drawer está abierto o cerrado */
  isOpen: boolean;
  /** Función para cerrar el drawer */
  onClose: () => void;
  /** Título del encabezado */
  title: string;
  /** 
   * Tamaño del drawer:
   * sm: 15% de la pantalla
   * md: 25% de la pantalla
   * lg: 50% de la pantalla
   */
  size?: 'sm' | 'md' | 'lg';
  /** Contenido personalizado */
  children?: React.ReactNode;
  /** Clases adicionales para el contenedor */
  className?: string;
}

/**
 * Drawer Component
 * 
 * Un panel lateral deslizante premium que aparece desde la derecha.
 * Utiliza desenfoque de fondo y animaciones fluidas basadas en el sistema Caral.
 */
export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  children,
  className = '',
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'w-[15%] min-w-[250px]',
    md: 'w-1/4 min-w-[350px]',
    lg: 'w-1/2 min-w-[500px]',
  };

  return (
    <div className="fixed inset-0 z-[120] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[2px] animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div
        className={`relative h-full bg-neutral-body shadow-2xl flex flex-col rounded-l-[8px] border-l border-neutral-800/10 animate-drawer-slide-right ${sizeClasses[size]} ${className}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-neutral-500 flex items-center justify-between px-[15px] py-[20px] border-b border-neutral-800/20 shrink-0">
          <h2 className="font-poppins font-semibold text-[18px] leading-[28px] text-neutral-900">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-neutral-800 hover:text-danger-main transition-colors duration-200"
            aria-label="Cerrar"
          >
            <CaralIcon name="xCircle" size={24} />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-[20px]">
          {children}
        </div>
      </div>
    </div>
  );
};
