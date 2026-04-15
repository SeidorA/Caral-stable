import React, { useState, useRef, useEffect } from 'react';
import { CaralIcon } from 'iconcaral2';
import '../index.css';

export interface AccordionProps {
  /** Título del acordeón */
  title: string;
  /** Contenido del acordeón */
  children?: React.ReactNode;
  /** Descripción corta (alternativa a children) */
  description?: string;
  /** Estado inicial */
  defaultOpen?: boolean;
  /** Variantes de color de fondo */
  variant?: 'default' | 'container' | 'info' | 'success' | 'warning' | 'danger' | 'indigo' | 'white';
  /** Clase CSS adicional */
  className?: string;
}

/**
 * Accordion Component
 * 
 * Un componente de acordeón simple y elegante con animaciones fluidas.
 * Permite personalizar el color de fondo y el contenido.
 */
export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  description,
  defaultOpen = false,
  variant = 'container',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | string>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight || 'auto');
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const backgroundVariants: Record<string, string> = {
    default: 'bg-neutral-body',
    container: 'bg-neutral-body',
    info: 'bg-info-light/30',
    success: 'bg-success-light/30',
    warning: 'bg-warning-light/30',
    danger: 'bg-danger-light/30',
    indigo: 'bg-indido-light/30',
    white: 'bg-white',
  };

  const bgClass = backgroundVariants[variant] || backgroundVariants.container;

  return (
    <div 
      className={`
        border border-neutral-800/20 rounded-[6px] overflow-hidden 
        transition-all duration-300 shadow-sm
        ${bgClass} ${className}
      `}
    >
      {/* Header */}
      <button
        onClick={toggleAccordion}
        className={`
          w-full flex items-center justify-between px-5 py-4 text-left
          hover:bg-black/5 transition-colors focus:outline-none
          ${isOpen ? 'border-b border-neutral-800/10' : ''}
        `}
      >
        <span className="font-poppins font-semibold text-large text-neutral-900 leading-tight">
          {title}
        </span>
        <div 
          className={`
            transition-transform duration-300 flex items-center justify-center text-neutral-800
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
        >
          <CaralIcon name="chevronDown" size="s" />
        </div>
      </button>

      {/* Content */}
      <div 
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="px-5 py-4">
          {children || (
            <p className="font-poppins font-regular text-p text-neutral-900 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
