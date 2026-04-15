import React from 'react';
import '../index.css';
import { CaralIcon } from 'iconcaral2';

export type StepStatus = 'default' | 'disabled' | 'done';

export interface StepItem {
  label: string;
  status?: StepStatus;
  description?: string;
  hideConnector?: boolean;
}

export interface StepsProps {
  steps: StepItem[];
  onStepClick?: (index: number) => void;
  className?: string;
}

export const Steps: React.FC<StepsProps> = ({
  steps,
  onStepClick,
  className = '',
}) => {
  const getStatus = (status?: StepStatus): StepStatus => status || 'default';

  const statusStyles: Record<StepStatus, { wrapper: string; circle: string; label: string; description: string; connector: string }> = {
    default: {
      wrapper: '',
      circle: 'bg-transparent text-neutral-800 border-2 border-neutral-500',
      label: 'text-neutral-900',
      description: 'text-neutral-800',
      connector: 'bg-info-main/30',
    },
    disabled: {
      wrapper: '',
      circle: 'bg-neutral-800 text-neutral-100 border border-neutral-400',
      label: 'text-neutral-500',
      description: 'text-neutral-500',
      connector: 'bg-neutral-300',
    },
    done: {
      wrapper: '',
      circle: 'bg-success-main  text-neutral-100 border border-success-hard',
      label: 'text-success-hard',
      description: 'text-success-main',
      connector: 'bg-success-main',
    },
  };

  return (
    <div className={`flex items-center gap-0 w-[100vh] ${className}`}>
      {steps.map((step, index) => {
        const status = getStatus(step.status);
        const styles = statusStyles[status];
        const isClickable = Boolean(onStepClick && status !== 'disabled');
        const isLast = index === steps.length - 1;
        const showConnector = !step.hideConnector && !isLast;

        const StepElement = (
          <div className="flex w-full  content-center items-center gap-4">
            <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm ${styles.circle}`}>
              {status === 'done' ? <CaralIcon name="check" size="s" /> : <span >{index + 1}</span>}
            </div>

            <div className="min-w-fit">
              <p className={`text-sm font-semibold ${styles.label} leading-5`}>
                {step.label}
              </p>
              {step.description && (
                <p className={`text-xs ${styles.description} mt-1 leading-4`}>
                  {step.description}
                </p>
              )}
            </div>
            {!isLast && <div className='h-[1px] w-full bg-neutral-300 inline-block'></div>}
          </div>
        );

        return (
          <div key={index} className="flex items-center flex-1 min-w-0">
            <div className={`flex items-center  w-full ${styles.wrapper}`}>
              {isClickable ? (
                <button
                  type="button"
                  className="w-full text-left content-center"
                  onClick={() => onStepClick?.(index)}
                >
                  {StepElement}
                </button>
              ) : (
                <div className="w-full text-left">{StepElement}</div>
              )}
            </div>

            {showConnector ? (
              <div className={`h-[2px] flex-1 ${styles.connector}`} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
