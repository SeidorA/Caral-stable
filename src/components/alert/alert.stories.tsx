import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Alert } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'danger', 'warning', 'success'],
      description: 'El tipo de alerta',
    },
    type: {
      control: 'select',
      options: ['default', 'toast'],
      description: 'El estilo visual de la alerta',
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'La posición de la alerta en la pantalla',
    },
    title: {
      control: 'text',
      description: 'El título de la alerta',
    },
    description: {
      control: 'text',
      description: 'La descripción adicional de la alerta (opcional)',
    },
    showSeeMore: {
      control: 'boolean',
      description: 'Mostrar el botón "See more"',
    },
    autoClose: {
      control: 'number',
      description: 'Tiempo en ms para cerrar la alerta automáticamente',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInfo: Story = {
  args: {
    type: 'default',
    variant: 'info',
    position: 'top-right',
    title: 'Information Alert',
    description: 'This is an informational message to help guide you through the process.',
    onClose: () => console.log('Closed'),
  },
};

export const ToastSuccess: Story = {
  args: {
    type: 'toast',
    variant: 'success',
    position: 'top-right',
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    onClose: () => console.log('Closed'),
  },
};

export const ToastDanger: Story = {
  args: {
    type: 'toast',
    variant: 'danger',
    position: 'top-right',
    title: 'Error Occurred',
    description: 'We could not complete your request. Please try again.',
    onClose: () => console.log('Closed'),
  },
};

export const ToastInfo: Story = {
  args: {
    type: 'toast',
    variant: 'info',
    position: 'top-right',
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    onClose: () => console.log('Closed'),
  },
};

export const ToastWarning: Story = {
  args: {
    type: 'toast',
    variant: 'warning',
    position: 'top-right',
    title: 'Attention Needed',
    description: 'Your subscription is about to expire in 3 days.',
    onClose: () => console.log('Closed'),
  },
};

export const AllToastVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8 bg-neutral-body min-h-screen">
      <Alert
        type="toast"
        variant="info"
        title="Heads up!"
        description="You can add components to your app using the cli."
        onClose={() => {}}
        style={{ position: 'relative', top: 0, right: 0 }}
      />
      <Alert
        type="toast"
        variant="success"
        title="Success!"
        description="Your action was completed successfully."
        onClose={() => {}}
        style={{ position: 'relative', top: 0, right: 0 }}
      />
      <Alert
        type="toast"
        variant="warning"
        title="Warning"
        description="Please be careful with this action."
        onClose={() => {}}
        style={{ position: 'relative', top: 0, right: 0 }}
      />
      <Alert
        type="toast"
        variant="danger"
        title="Error"
        description="Something went wrong. Please check again."
        onClose={() => {}}
        style={{ position: 'relative', top: 0, right: 0 }}
      />
    </div>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div className="w-full h-screen bg-neutral-body relative">
      <Alert
        variant="info"
        position="top-left"
        title="Top Left"
        description="This is the top-left position"
        onClose={() => {}}
      />
      <Alert
        variant="success"
        position="top-right"
        title="Top Right"
        description="This is the top-right position"
        onClose={() => {}}
      />
      <Alert
        variant="warning"
        position="bottom-left"
        title="Bottom Left"
        description="This is the bottom-left position"
        onClose={() => {}}
      />
      <Alert
        variant="danger"
        position="bottom-right"
        title="Bottom Right"
        description="This is the bottom-right position"
        onClose={() => {}}
      />
    </div>
  ),
};

export const AutoClose: Story = {
  args: {
    variant: 'success',
    position: 'top-right',
    title: 'Auto-closing Alert',
    description: 'This alert will close automatically in 3 seconds',
    autoClose: 3000,
  },
};

export const NoCloseButton: Story = {
  args: {
    variant: 'info',
    position: 'top-right',
    title: 'Alert without close button',
    description: 'This alert cannot be closed by the user',
  },
};
