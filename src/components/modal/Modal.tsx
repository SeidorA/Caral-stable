import React from 'react';
import '../../index.css';
import { Button } from '../Button';
import { Chip } from '../Chip';
import type { Icons } from '../icons';

export interface ModalProps {
  /** Modales están abiertos o cerrados */
  isOpen: boolean;
  /** Función para cerrar el modal */
  onClose: () => void;
  /** Título del modal */
  title: string;
  /** Descripción o cuerpo del texto */
  description?: string;
  /** Nombre del icono para el Chip superior */
  iconName?: Icons;
  /** Variante de color para el Chip (info, danger, success, etc.) */
  chipVariant?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'indido' | 'sakura' | 'light' | 'alwayslight' | 'outlight';
  /** Alineación del contenido (izquierdo por defecto) */
  alignment?: 'left' | 'center';
  /** Tipo de acciones (una o dos) */
  actions?: 'single' | 'double';
  /** Texto del botón principal */
  primaryActionText?: string;
  /** Variante de color del botón principal */
  primaryActionVariant?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'indido' | 'sakura' | 'light' | 'carbon' | 'ghost' | 'tab';
  /** Función al hacer clic en el botón principal */
  onPrimaryAction?: () => void;
  /** Texto del botón secundario */
  secondaryActionText?: string;
  /** Función al hacer clic en el botón secundario */
  onSecondaryAction?: () => void;
  /** Contenido extra (formularios, etc.) */
  children?: React.ReactNode;
  /** Clases adicionales */
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  iconName,
  chipVariant = 'default',
  alignment = 'left',
  actions = 'double',
  primaryActionText = 'Continue',
  primaryActionVariant = 'default',
  onPrimaryAction,
  secondaryActionText = 'Cancel',
  onSecondaryAction,
  children,
  className = '',
}) => {
  if (!isOpen) return null;

  const isCenter = alignment === 'center';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop/Overlay */}
      <div 
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[2px] animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div 
        className={`relative bg-neutral-body border border-neutral-800 rounded-[6px] shadow-2xl w-full max-w-[474px] overflow-hidden flex flex-col animate-modal-slide-up ${className}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header & Body Section */}
        <div className={`flex flex-col gap-[8px] p-[20px] ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
          {iconName && (
            <div className="mb-[2px]">
              <Chip 
                variant={chipVariant} 
                iconName={iconName} 
                justIcon 
                hasBorder 
              />
            </div>
          )}

          <div className="flex flex-col gap-1 w-full">
            <h2 className="font-poppins font-semibold text-[18px] leading-[28px] text-neutral-900">
              {title}
            </h2>
            {description && (
              <p className="font-poppins text-p text-neutral-900 leading-[24px] opacity-90">
                {description}
              </p>
            )}
          </div>

          {children && (
            <div className="w-full mt-[5px]">
              {children}
            </div>
          )}
        </div>

        {/* Actions Footer */}
        <div 
          className={`flex items-center p-[15px] gap-[10px] shrink-0 w-full ${
            isCenter 
              ? 'justify-center bg-transparent border-none pb-[20px]' 
              : 'justify-end bg-neutral-500 border-t border-neutral-800/30'
          }`}
        >
          {actions === 'double' && (
            <Button 
              variant="light"
              hasBorder
              onClick={onSecondaryAction || onClose}
              className="px-[16px] h-[44px] min-w-[100px]"
            >
              {secondaryActionText}
            </Button>
          )}
          
          <Button 
            variant={primaryActionVariant} 
            onClick={onPrimaryAction}
            className={`h-[44px] ${actions === 'single' ? 'px-[30px] w-full md:w-auto' : 'px-[16px] min-w-[100px]'}`}
          >
            {primaryActionText}
          </Button>
        </div>
      </div>
    </div>
  );
};
