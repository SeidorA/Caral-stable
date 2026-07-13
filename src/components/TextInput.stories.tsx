import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    requiredMessage: { control: 'text' },
    iconName: {
      control: 'select',
      options: ['bolt', 'camera', 'user', 'search', 'shieldHalved', 'infoFile'],
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    multiline: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger', 'light'],
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    helperText: 'This is the display name shown on your profile.',
    variant: 'default',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: 'Use a valid email address.',
    iconName: 'search',
    iconPosition: 'left',
    variant: 'info',
  },
};

export const RequiredMessage: Story = {
  args: {
    label: 'First name',
    placeholder: 'Enter your first name',
    requiredMessage: 'This field is required.',
    variant: 'danger',
  },
};

export const TextArea: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    helperText: 'Write a short bio here.',
    multiline: true,
    rows: 5,
    variant: 'default',
  },
};
