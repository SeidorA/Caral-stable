import type { Meta, StoryObj } from '@storybook/react-vite';
import Avatar from './Avatar';

const meta = {
  title: 'Components/Avatar/Base',
  component: Avatar,
  position: 1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: 'select',
      options: ['Default', 'info', 'Aprove', 'Danger', 'Warning', 'gray', 'Image'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    iconName: {
      control: 'select',
      options: ['', 'bolt', 'camera', 'user', 'robot', 'search', 'shieldHalved'],
    },
    text: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    property1: 'Default',
    size: 'md',
    text: 'JS',
  },
};

export const Info: Story = {
  args: {
    property1: 'info',
    size: 'md',
    text: 'IN',
  },
};

export const Approve: Story = {
  args: {
    property1: 'Aprove',
    size: 'md',
    text: 'OK',
  },
};

export const Danger: Story = {
  args: {
    property1: 'Danger',
    size: 'md',
    text: 'ER',
  },
};

export const Warning: Story = {
  args: {
    property1: 'Warning',
    size: 'md',
    text: '!',
  },
};

export const Gray: Story = {
  args: {
    property1: 'gray',
    size: 'md',
    text: 'GR',
  },
};

export const Image: Story = {
  args: {
    property1: 'Image',
    size: 'md',
  },
};

export const Icon: Story = {
  args: {
    property1: 'Default',
    size: 'md',
    iconName: 'bolt',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar property1="Default" size="sm" text="SM" />
      <Avatar property1="Default" size="md" text="MD" />
      <Avatar property1="Default" size="lg" text="LG" />
    </div>
  ),
};