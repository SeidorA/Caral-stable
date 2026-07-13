import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Select } from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    requiredMessage: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger', 'light'],
    },
    iconName: {
      control: 'select',
      options: ['bolt', 'camera', 'user', 'search', 'shieldHalved', 'infoFile'],
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    dropdown: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const ControlledTemplate = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return <Select {...args} value={value} onChange={(event) => setValue(event.target.value)} />;
};

export const Default: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Fruit',
    placeholder: 'Select a fruit',
    helperText: 'Choose one of the available options.',
    options: defaultOptions,
    dropdown: true,
  },
};

export const WithIcon: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    helperText: 'This shows a left icon inside the field.',
    iconName: 'search',
    iconPosition: 'left',
    options: [
      { value: 'mx', label: 'Mexico' },
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
    ],
  },
};

export const RequiredMessage: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Status',
    placeholder: 'Select status',
    requiredMessage: 'Please choose an option.',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'pending', label: 'Pending' },
    ],
    variant: 'danger',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Plan',
    placeholder: 'Select a plan',
    helperText: 'This select is disabled.',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise' },
    ],
    value: 'free',
    disabled: true,
  },
};
