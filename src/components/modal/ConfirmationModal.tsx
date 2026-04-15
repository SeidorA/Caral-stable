import React, { useEffect, useState } from 'react';
import '../../index.css';
import { Button } from '../Button';
import { ProgressBar } from '../ProgressBar';
import { AnimatedStatus } from '../AnimatedStatus';

export interface ConfirmationModalProps {
  /** Si el modal está abierto o cerrado */
  isOpen: boolean;
  /** Función para cerrar el modal */
  onClose: () => void;
  /** Título principal del modal */
  title: string;
  /** Descripción o instrucciones del modal */
  description?: React.ReactNode;
  /** Estado general que define el color y el icono animado */
  status?: 'info' | 'success' | 'warning' | 'error';
  /** Progreso actual del proceso (0 a 100) */
  progress?: number;
  /** Texto del botón de confirmación */
  confirmText?: string;
  /** Texto del botón de cancelación */
  cancelText?: string;
  /** Función al hacer clic en confirmar */
  onConfirm?: () => void;
  /** Indica si la prueba o proceso se ha completado */
  isCompleted?: boolean;
  /** Mensaje que se muestra al completar la prueba */
  completionMessage?: string;
  /** Tiempo en ms para el auto-cierre después de completado */
  autoCloseDelay?: number;
  /** Contenido de la "prueba" (inputs, switches, etc.) */
  children?: React.ReactNode;
  /** Clases adicionales para el contenedor */
  className?: string;
}

/**
 * ConfirmationModal Component
 * 
 * Un modal especializado para procesos de confirmación con pasos, 
 * barra de progreso superior y estados animados.
 */
export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  status = 'info',
  progress = 0,
  confirmText = 'Continuar',
  cancelText = 'Cancelar',
  onConfirm,
  isCompleted = false,
  completionMessage = 'El proceso se ha completado exitosamente.',
  autoCloseDelay = 5000,
  children,
  className = '',
}) => {
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    if (isCompleted) {
      setShowCompletion(true);
      const timer = setTimeout(() => {
        onClose();
        // Reset state for next time it opens
        setTimeout(() => setShowCompletion(false), 300);
      }, autoCloseDelay);
      return () => clearTimeout(timer);
    } else {
      setShowCompletion(false);
    }
  }, [isCompleted, autoCloseDelay, onClose]);

  if (!isOpen) return null;

  // Mapeo de variantes para ProgressBar
  const variantMap: Record<string, 'info' | 'success' | 'warning' | 'danger'> = {
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'danger',
  };

  const statusVariant = status === 'error' ? 'error' : status;
  const barVariant = variantMap[status] || 'info';

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[2px] animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div 
        className={`relative bg-neutral-body border border-neutral-800 rounded-[6px] shadow-2xl w-full max-w-[500px] overflow-hidden flex flex-col animate-modal-slide-up ${className}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Progress Bar Top */}
        <ProgressBar 
          value={progress} 
          variant={barVariant} 
          rounding="none" 
          size="md" 
          className="w-full shrink-0"
        />

        <div className="flex flex-col items-center p-8 gap-6 overflow-y-auto">
          {/* Animated Status Icon */}
          <div className="flex justify-center shrink-0">
            <AnimatedStatus 
              variant={showCompletion ? 'success' : statusVariant} 
              size={120} 
            />
          </div>

          {/* Header Content */}
          <div className="flex flex-col gap-2 text-center w-full">
            <h2 className="font-poppins font-semibold text-h2 text-neutral-900 leading-tight">
              {showCompletion ? '¡Acción Completada!' : title}
            </h2>
            <div className="font-poppins text-p text-neutral-900 opacity-80 leading-relaxed">
              {showCompletion ? completionMessage : description}
            </div>
          </div>

          {/* Step / Test Content Slot */}
          {!showCompletion && children && (
            <div className="w-full flex flex-col items-center">
              {children}
            </div>
          )}
        </div>

        {/* Actions Footer */}
        {!showCompletion && (
          <div className="flex items-center p-4 gap-3 bg-neutral-500 border-t border-neutral-800/30 justify-center shrink-0">
            <Button 
              variant="light"
              hasBorder
              onClick={onClose}
              className="px-6 h-[44px] min-w-[120px]"
            >
              {cancelText}
            </Button>
            
            <Button 
              variant={barVariant} 
              onClick={onConfirm}
              className="px-6 h-[44px] min-w-[120px]"
            >
              {confirmText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
