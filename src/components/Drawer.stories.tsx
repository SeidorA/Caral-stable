import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from './Button';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-10">
        <Button onClick={() => setIsOpen(true)}>Abrir Drawer (MD)</Button>
        <Drawer 
          {...args} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-6">
            <p className="text-p text-neutral-800">
              Usa este panel lateral para editar información detallada sin perder el contexto de la pantalla principal.
            </p>
            <div className="flex flex-col gap-4">
               <TextInput label="Nombre Completo" placeholder="Ej: Juan Pérez" />
               <TextInput label="Correo Electrónico" placeholder="juan.perez@empresa.com" />
               <TextInput label="Cargo" placeholder="Desarrollador Senior" />
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <Button variant="light" hasBorder onClick={() => setIsOpen(false)}>Cancelar</Button>
              <Button onClick={() => setIsOpen(false)}>Guardar Cambios</Button>
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Editar Usuario',
    size: 'md',
  },
};

export const LargeSize: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-10">
        <Button onClick={() => setIsOpen(true)}>Abrir Drawer Grande (LG)</Button>
        <Drawer 
          {...args} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-6">
            <div className="bg-neutral-500 p-8 rounded-lg border border-neutral-800/20 text-center">
              <h3 className="text-h3 mb-2">Vista de Configuración</h3>
              <p className="text-small text-neutral-800">Configura los parámetros avanzados de tu proyecto aquí.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="h-32 bg-indigo-50 rounded-lg border border-indigo-200" />
               <div className="h-32 bg-pink-50 rounded-lg border border-pink-200" />
               <div className="h-32 bg-green-50 rounded-lg border border-green-200" />
               <div className="h-32 bg-blue-50 rounded-lg border border-blue-200" />
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Configuraciones Avanzadas',
    size: 'lg',
  },
};

export const SmallSize: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-10">
        <Button onClick={() => setIsOpen(true)}>Abrir Drawer Pequeño (SM)</Button>
        <Drawer 
          {...args} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-4">
            <p className="text-small font-medium text-neutral-800">Filtros rápidos</p>
            <div className="flex flex-col gap-2">
              {['Activos', 'Inactivos', 'Pendientes', 'Archivados'].map(f => (
                <div key={f} className="p-3 border border-neutral-800/10 rounded hover:bg-neutral-500 cursor-pointer transition-colors">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Filtros',
    size: 'sm',
  },
};
