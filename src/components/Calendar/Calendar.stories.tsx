import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Calendar } from './index';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
    },
    showOutsideDays: { control: 'boolean' },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

const ControlledTemplate = (args: any) => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  return <Calendar {...args} selected={selected} onSelect={setSelected} />;
};

export const Default: Story = {
  render: ControlledTemplate,
  args: {
    mode: 'single',
    showOutsideDays: true,
  },
};

export const Range: Story = {
  render: (args: any) => {
    const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>();
    return <Calendar {...args} mode="range" selected={range} onSelect={setRange} />;
  },
  args: {
    showOutsideDays: true,
  },
};

export const Multiple: Story = {
  render: (args: any) => {
    const [multiple, setMultiple] = useState<Date[] | undefined>([]);
    return <Calendar {...args} mode="multiple" selected={multiple} onSelect={setMultiple} />;
  },
  args: {
    showOutsideDays: true,
  },
};
