import React from 'react';
import '../../index.css';
import { CaralIcon } from 'iconcaral2';
import { Button } from '../Button';
import type { Icons } from '../icons';
import { AnimatedStatus } from '../AnimatedStatus';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'danger' | 'warning' | 'success';
  type?: 'default' | 'toast';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  title: string;
  description?: string;
  iconName?: Icons;
  onClose?: () => void;
  onSeeMore?: () => void;
  showSeeMore?: boolean;
  autoClose?: number;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  type = 'default',
  position = 'top-right',
  title,
  description,
  iconName,
  onClose,
  onSeeMore,
  showSeeMore = false,
  autoClose,
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (autoClose && typeof autoClose === 'number') {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  // Mapeo de variante para AnimatedStatus
  const statusVariantMap: Record<string, 'info' | 'error' | 'warning' | 'success'> = {
    info: 'info',
    danger: 'error',
    warning: 'warning',
    success: 'success',
  };

  // Estilos por variante para tipo Default
  const defaultVariantStyles = {
    info: {
      bg: 'bg-info-light',
      border: 'border-info-main',
      iconContainer: 'bg-info-main text-neutral-100',
      title: 'text-info-hard',
      description: 'text-info-main',
      button: 'text-info-main',
      close: 'text-info-main hover:text-info-hard',
      borderL: 'border-l-info-main',
    },
    danger: {
      bg: 'bg-danger-light',
      border: 'border-danger-main',
      iconContainer: 'bg-danger-main text-neutral-100',
      title: 'text-danger-hard',
      description: 'text-danger-main',
      button: 'text-danger-hard',
      close: 'text-danger-main hover:text-danger-hard',
      borderL: 'border-l-danger-main',
    },
    warning: {
      bg: 'bg-warning-light',
      border: 'border-warning-main',
      iconContainer: 'bg-warning-main text-neutral-100',
      title: 'text-warning-hard',
      description: 'text-warning-main',
      button: 'text-warning-main',
      close: 'text-warning-main hover:text-warning-hard',
      borderL: 'border-l-warning-main',
    },
    success: {
      bg: 'bg-success-light',
      border: 'border-success-main',
      iconContainer: 'bg-success-main text-neutral-100',
      title: 'text-success-hard',
      description: 'text-success-main',
      button: 'text-success-main',
      close: 'text-success-main hover:text-success-hard',
      borderL: 'border-l-success-main',
    },
  };

  // Estilos por variante para tipo Toast
  const toastVariantStyles = {
    info: {
      title: 'text-neutral-900',
      border: 'border-neutral-800',
      close: 'text-info-main',
    },
    danger: {
      title: 'text-danger-main',
      border: 'border-danger-main',
      close: 'text-danger-main',
    },
    warning: {
      title: 'text-warning-main',
      border: 'border-neutral-800',
      close: 'text-info-main',
    },
    success: {
      title: 'text-success-main',
      border: 'border-neutral-800',
      close: 'text-info-main',
    },
  };

  // Estilos de posición
  const positionStyles = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  const posClass = positionStyles[position];

  const renderIcon = (size: number, isToast: boolean) => {
    // Si es una variante estándar, usamos la animación por defecto
    if (['info', 'danger', 'warning', 'success'].includes(variant)) {
      return (
        <AnimatedStatus 
          variant={statusVariantMap[variant]} 
          size={size} 
          className={!isToast ? 'text-neutral-100' : ''} 
        />
      );
    }
    
    // Si no es variante estándar y hay un icono personalizado, lo usamos
    if (iconName) {
      return <CaralIcon name={iconName} size={size * 0.8} />;
    }

    return null;
  };

  if (type === 'toast') {
    const styles = toastVariantStyles[variant];

    return (
      <div
        className={`fixed z-50 flex items-stretch overflow-hidden rounded-[10px] border border-solid bg-neutral-400 shadow-xl ${styles.border} ${posClass} w-[565px] max-w-[95vw] animate-in fade-in slide-in-from-top-2 duration-300 ${className}`}
        role="alert"
        {...props}
      >
        <div className="flex flex-1 items-center gap-[15px] px-[24px] py-[16px]">
          <div className="flex-shrink-0 flex items-center justify-center">
            {renderIcon(32, true)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={`font-poppins font-semibold text-[20px] leading-[24px] tracking-[-0.1px] ${styles.title}`}>
              {title}
            </h3>
            {description && (
              <p className="mt-1 font-poppins text-neutral-900 text-[16px] leading-[22px] opacity-90">
                {description}
              </p>
            )}
          </div>
        </div>

        {onClose && (
          <button
            onClick={handleClose}
            className={`flex items-center justify-center border-l px-[24px] py-[16px] self-stretch transition-colors hover:bg-neutral-500/10 ${styles.border} ${styles.close}`}
            aria-label="Close alert"
          >
            <span className="font-poppins font-medium text-[16px] leading-[20px]">Close</span>
          </button>
        )}
      </div>
    );
  }

  // Layout Default
  const styles = defaultVariantStyles[variant];
  const baseClasses = 'fixed z-50 max-w-md w-full md:w-96 rounded-lg border-l-4 shadow-lg backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300';

  return (
    <div
      className={`${baseClasses} ${posClass} ${styles.bg} ${styles.border} ${styles.borderL} ${className}`}
      role="alert"
      {...props}
    >
      <div className="flex gap-3">
        {/* Icon Container */}
        <div className={`flex-shrink-0 flex items-center justify-center px-2.5 ${styles.iconContainer}`}>
          {renderIcon(24, false)}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 p-2">
          <h3 className={`font-semibold text-sm md:text-base ${styles.title}`}>
            {title}
          </h3>
          {description && (
            <p className={`text-xs md:text-sm mt-1 ${styles.description}`}>
              {description}
            </p>
          )}

          {/* Actions */}
          {showSeeMore || onSeeMore ? (
            <div className="flex gap-2 mt-3">
              <Button
                variant="ghost"
                className={`text-xs md:text-sm px-3 py-1.5 rounded font-medium transition-colors ${styles.button}`}
                onClick={onSeeMore}
              >
                See more
              </Button>
            </div>
          ) : null}
        </div>

        {/* Close Button */}
        {onClose && (
          <button
            onClick={handleClose}
            className={`flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-md transition-colors mt-2 mr-2 ${styles.close}`}
            aria-label="Close alert"
          >
            <CaralIcon name="x" size={16} />
          </button>
        )}
      </div>
    </div>
  );
};
