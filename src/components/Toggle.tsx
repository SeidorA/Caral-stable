import React from 'react';
import '../index.css';

export interface ToggleProps {
  /** Estado del toggle (activado/desactivado) */
  checked: boolean;
  /** Callback que se dispara al cambiar el estado */
  onChange: (checked: boolean) => void;
  /** Etiqueta que se muestra al lado del toggle */
  label?: string;
  /** Deshabilita la interacción con el componente */
  disabled?: boolean;
  /** Clases CSS adicionales */
  className?: string;
}

/**
 * Toggle Component
 * 
 * Un interruptor simple y funcional para activar o desactivar opciones.
 * Sigue la estética de Caral con transiciones suaves y tipografía Poppins.
 */
export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      onClick={handleToggle}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      <div className="relative inline-block w-[44px] h-[24px] shrink-0">
        {/* Invisible Input for accessibility */}
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          disabled={disabled}
          readOnly
        />

        {/* Track */}
        <div
          className={`w-full h-full rounded-full transition-colors duration-300 ease-in-out ${checked ? 'bg-seidor-main' : 'bg-neutral-800'
            }`}
        >
          {/* Knob */}
          <div
            className={`absolute top-[2px] left-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out transform ${checked ? 'translate-x-[20px]' : 'translate-x-0'
              }`}
          />
        </div>
      </div>

      {label && (
        <span className="font-poppins font-medium text-[14px] leading-[14px] text-neutral-800 select-none">
          {label}
        </span>
      )}
    </div>
  );
};
