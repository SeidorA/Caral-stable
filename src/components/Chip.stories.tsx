import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'select',
      options: ['', 'check', 'search', 'robot', 'bolt', 'star', 'gear', 'assist'],
    },
    justIcon: {
      control: 'boolean',
      description: 'Muestra solo el icono en un formato circular 1:1',
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Chip Label',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'info',
    iconName: 'check',
    justIcon: true,
  },
};

export const CircularVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Chip variant="default" iconName="gear" justIcon />
      <Chip variant="info" iconName="check" justIcon />
      <Chip variant="success" iconName="star" justIcon />
      <Chip variant="warning" iconName="bolt" justIcon />
      <Chip variant="danger" iconName="x" justIcon />
      <Chip variant="default" iconName="gear" justIcon hasBorder />
      <Chip variant="info" iconName="check" justIcon hasBorder />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    variant: 'info',
    label: 'Status Active',
    iconName: 'check',
  },
};

export const WithInfo: Story = {
  args: {
    variant: 'success',
    label: 'Success Chip',
    showInfo: true,
  },
};

export const Full: Story = {
  args: {
    variant: 'warning',
    label: 'Warning Detail',
    iconName: 'triangleExclamation',
    showInfo: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Chip variant="default" label="Default" />
      <Chip variant="info" label="Info" />
      <Chip variant="success" label="Success" />
      <Chip variant="warning" label="Warning" />
      <Chip variant="danger" label="Danger" />
      <Chip variant="indido" label="Indigo" />
      <Chip variant="sakura" label="Sakura" />
      <Chip variant="light" label="Light" />
    </div>
  ),
};

export const Borders: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Chip variant="default" label="Default" hasBorder />
      <Chip variant="info" label="Info" hasBorder />
      <Chip variant="success" label="Success" hasBorder />
      <Chip variant="warning" label="Warning" hasBorder />
      <Chip variant="danger" label="Danger" hasBorder />
    </div>
  ),
};

export const StatusDots: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Chip variant="default" label="Success" status="success" hasBorder />
      <Chip variant="default" label="Warning" status="warning" hasBorder />
      <Chip variant="default" label="Error" status="danger" hasBorder />
      <Chip variant="default" label="Waiting" status="waiting" hasBorder />
    </div>
  ),
};

export const WithTooltip: Story = {
  args: {
    variant: 'info',
    label: 'Hover the i icon',
    showInfo: true,
    infoMessage: 'This is a custom message for the chip!',
    hasBorder: true,
  },
};
