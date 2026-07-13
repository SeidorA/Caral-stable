import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConfirmationModal } from './ConfirmationModal';
import { Button } from '../Button';

const meta = {
  title: 'Components/Modal/ConfirmationModal',
  component: ConfirmationModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof ConfirmationModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDelete: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [confirmInput, setConfirmInput] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [progress, setProgress] = useState(10);

    const handleConfirm = () => {
      if (confirmInput === 'ELIMINAR') {
        setProgress(100);
        setIsCompleted(true);
      }
    };

    useEffect(() => {
      if (!isOpen) {
        setConfirmInput('');
        setIsCompleted(false);
        setProgress(10);
      }
    }, [isOpen]);

    return (
      <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>Eliminar Sistema</Button>
        <ConfirmationModal 
          {...args} 
          isOpen={isOpen} 
          progress={progress}
          isCompleted={isCompleted}
          onClose={() => setIsOpen(false)}
          onConfirm={handleConfirm}
        >
          <div className="flex flex-col gap-3 w-full">
            <p className="text-small text-center text-neutral-800">Escribe <span className="font-bold text-danger-hard">ELIMINAR</span> para confirmar:</p>
            <input 
              type="text" 
              className="h-11 px-4 text-center bg-neutral-100 border border-neutral-800 rounded-md focus:ring-2 focus:ring-danger-main outline-none font-poppins text-large"
              value={confirmInput}
              onChange={(e) => {
                setConfirmInput(e.target.value);
                setProgress(e.target.value === 'ELIMINAR' ? 80 : 10);
              }}
              placeholder="Escribe aquí..."
            />
          </div>
        </ConfirmationModal>
      </>
    );
  },
  args: {
    title: '¿Estás completamente seguro?',
    description: 'Esta acción eliminará de forma permanente el sistema [PROD_SYST_V4] y cancelará todas las ejecuciones programadas.',
    status: 'error',
    confirmText: 'Eliminar Permanente',
    cancelText: 'Mejor no',
    completionMessage: 'El sistema ha sido eliminado correctamente de los servidores.',
  },
};

export const SwitchVerification: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSwitched, setIsSwitched] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleConfirm = () => {
      if (isSwitched) setIsCompleted(true);
    };

    return (
      <>
        <Button variant="warning" onClick={() => setIsOpen(true)}>Reiniciar Servidor</Button>
        <ConfirmationModal 
          {...args} 
          isOpen={isOpen} 
          progress={isSwitched ? 100 : 50}
          isCompleted={isCompleted}
          onClose={() => setIsOpen(false)}
          onConfirm={handleConfirm}
        >
          <div className="flex items-center gap-4 bg-neutral-500 p-4 rounded-lg border border-neutral-800/30">
             <span className="text-p font-medium flex-1">Activar modo de mantenimiento</span>
             <div 
               className={`w-14 h-8 rounded-full relative cursor-pointer transition-colors duration-300 ${isSwitched ? 'bg-success-main' : 'bg-neutral-800'}`}
               onClick={() => setIsSwitched(!isSwitched)}
             >
               <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${isSwitched ? 'translate-x-6' : 'translate-x-0'}`} />
             </div>
          </div>
        </ConfirmationModal>
      </>
    );
  },
  args: {
    title: 'Confirmar Reinicio',
    description: 'El servidor entrará en modo de mantenimiento antes de realizar el reinicio programado.',
    status: 'warning',
    confirmText: 'Reiniciar Ahora',
    completionMessage: 'Reinicio iniciado. El sistema volverá a estar online en 2 minutos.',
  },
};
