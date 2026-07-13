import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: 'Accordion Title',
    description: 'Este es el contenido predeterminado del acordeón. Puedes usar la prop description para texto simple o colocar cualquier JSX como children para contenidos más complejos.',
    variant: 'container',
  },
};

export const OpenByDefault: Story = {
  args: {
    ...Default.args,
    defaultOpen: true,
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-[500px]">
      <Accordion title="Sección 1: Información General" variant="white">
        <p className="font-poppins text-p text-neutral-800">
           Contenido detallado para la primera sección. Soporta cualquier tipo de componente React.
        </p>
      </Accordion>
      <Accordion title="Sección 2: Ajustes de Cuenta" variant="white">
        <div className="flex flex-col gap-2">
           <button className="text-left px-3 py-2 hover:bg-black/5 rounded font-poppins text-small text-info-main">Cambiar contraseña</button>
           <button className="text-left px-3 py-2 hover:bg-black/5 rounded font-poppins text-small text-info-main">Privacidad</button>
        </div>
      </Accordion>
      <Accordion title="Sección 3: Soporte Técnico" variant="info">
         <p className="font-poppins text-p text-info-hard">
            ¿Necesitas ayuda? Contacta con nuestro equipo de soporte disponible 24/7.
         </p>
      </Accordion>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 max-w-[1000px]">
      <Accordion title="Default (Container)" variant="container" description="Contenido de ejemplo." />
      <Accordion title="Success Variant" variant="success" description="Operación completada con éxito." />
      <Accordion title="Warning Variant" variant="warning" description="Atención requerida para esta configuración." />
      <Accordion title="Danger Variant" variant="danger" description="Error crítico detectado en el sistema." />
      <Accordion title="Indigo Variant" variant="indigo" description="Inspiración y elegancia para tus datos." />
      <Accordion title="White Variant" variant="white" description="Diseño minimalista sobre fondo blanco." />
    </div>
  ),
};
