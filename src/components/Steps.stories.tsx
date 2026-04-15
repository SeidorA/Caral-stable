import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Steps } from './Steps';

const meta = {
  title: 'Components/Steps',
  component: Steps,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onStepClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      { label: 'Paso 1', status: 'done', description: 'Completado' },
      { label: 'Paso 2', status: 'default', description: 'En curso' },
      { label: 'Paso 3', status: 'disabled', description: 'Bloqueado' },
    ],
    onStepClick: () => undefined,
  },
};

export const WithoutLastConnector: Story = {
  args: {
    steps: [
      { label: 'Paso 1', status: 'done', description: 'Completado' },
      { label: 'Paso 2', status: 'default', description: 'En curso' },
      { label: 'Paso 3', status: 'disabled', description: 'Bloqueado', hideConnector: true },
    ],
  },
};

export const AllStatuses: Story = {
  render: () => (
    <Steps
      steps={[
        { label: 'Inicio', status: 'done', description: 'Ya completado' },
        { label: 'Validación', status: 'default', description: 'Activo' },
        { label: 'Finalizar', status: 'disabled', description: 'Completar anterior', hideConnector: true },
      ]}
      onStepClick={(index) => console.log('Paso clicado', index)}
    />
  ),
};
