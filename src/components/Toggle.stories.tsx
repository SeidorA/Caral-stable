import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Toggle 
        {...args} 
        checked={checked} 
        onChange={(val) => setChecked(val)} 
      />
    );
  },
  args: {
    checked: false,
    label: 'Notificaciones por correo',
  },
};

export const Active: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Toggle 
        {...args} 
        checked={checked} 
        onChange={(val) => setChecked(val)} 
      />
    );
  },
  args: {
    checked: true,
    label: 'Modo Oscuro',
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Opción bloqueada',
  },
};

export const WithoutLabel: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle 
        {...args} 
        checked={checked} 
        onChange={(val) => setChecked(val)} 
      />
    );
  },
  args: {
    checked: false,
  },
};

export const MultipleToggles: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4 p-4 border border-neutral-800/10 rounded-lg max-w-sm">
        <h4 className="font-poppins font-semibold text-neutral-900 border-b pb-2">Preferencias de cuenta</h4>
        <Toggle checked={true} onChange={() => {}} label="Permitir cookies" />
        <Toggle checked={false} onChange={() => {}} label="Suscribirse al newsletter" />
        <Toggle checked={false} disabled onChange={() => {}} label="Autenticación en dos pasos (Pro)" />
      </div>
    );
  },
};
