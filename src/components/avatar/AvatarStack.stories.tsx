import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import AvatarStack from './AvatarStack';

const sampleAvatars = [
  { id: '1', text: 'AL', property1: 'Default' as const, title: 'Alice' },
  { id: '2', text: 'BM', property1: 'info' as const, title: 'Bruno' },
  { id: '3', iconName: 'camera' as const, property1: 'Aprove' as const, title: 'Camera user' },
  { id: '4', text: 'DK', property1: 'Danger' as const, title: 'Dana' },
  { id: '5', text: 'GR', property1: 'Warning' as const, title: 'Greta' },
];

const meta = {
  title: 'Components/Avatar/Stack',
  position: 2,
  component: AvatarStack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    maxVisible: {
      control: 'number',
      min: 1,
      max: 5,
    },
    overlap: {
      control: 'number',
      min: 0,
      max: 20,
    },
  },
} satisfies Meta<typeof AvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatars: sampleAvatars,
    size: 'md',
    maxVisible: 3,
    overlap: 10,
  },
  render: args => <AvatarStack {...args} />,
};

export const WithOverflow: Story = {
  args: {
    avatars: sampleAvatars,
    maxVisible: 3,
    overlap: 10,
    size: 'md',
  },
  render: args => <AvatarStack {...args} />,
};

export const IconStack: Story = {
  args: {
    avatars: [
      { id: '1', iconName: 'user', property1: 'Default' },
      { id: '2', iconName: 'robot', property1: 'info' },
      { id: '3', iconName: 'search', property1: 'Aprove' },
    ],
    maxVisible: 3,
    overlap: 10,
    size: 'md',
  },
  render: args => <AvatarStack {...args} />,
};
