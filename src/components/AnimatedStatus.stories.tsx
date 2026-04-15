import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AnimatedStatus } from './AnimatedStatus';
import { Button } from './Button';

const meta: Meta<typeof AnimatedStatus> = {
  title: 'Components/Animations/AnimatedStatus',
  component: AnimatedStatus,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
    },
    size: {
      control: { type: 'range', min: 20, max: 300, step: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: 'success',
    size: 150,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    size: 150,
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    size: 150,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 150,
  },
};

export const InteractiveShowcase: Story = {
  render: () => {
    const [key, setKey] = useState(0);
    const [variant, setVariant] = useState<'success' | 'error' | 'info' | 'warning'>('success');

    return (
      <div className="flex flex-col items-center gap-12 p-8 bg-neutral-100 rounded-2xl">
        <div key={key + variant}>
          <AnimatedStatus variant={variant} size={200} />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button onClick={() => setVariant('success')}>Success</Button>
          <Button variant="danger" onClick={() => setVariant('error')}>Error</Button>
          <Button variant="info" onClick={() => setVariant('info')}>Info</Button>
          <Button variant="warning" onClick={() => setVariant('warning')}>Warning</Button>
          <Button variant="ghost" className="ring-1 ring-neutral-400" onClick={() => setKey(prev => prev + 1)}>
            Replay Animation
          </Button>
        </div>
      </div>
    );
  },
};
