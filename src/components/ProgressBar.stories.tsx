import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Animations/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger', 'indido', 'sakura'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    rounding: {
      control: 'select',
      options: ['none', 'md', 'full'],
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 45,
    variant: 'default',
    size: 'md',
    rounding: 'full',
    showLabel: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <ProgressBar value={20} variant="default" showLabel />
      <ProgressBar value={40} variant="info" showLabel />
      <ProgressBar value={60} variant="success" showLabel />
      <ProgressBar value={80} variant="warning" showLabel />
      <ProgressBar value={95} variant="danger" showLabel />
      <ProgressBar value={50} variant="indido" showLabel />
      <ProgressBar value={75} variant="sakura" showLabel />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <ProgressBar value={60} size="sm" />
      <ProgressBar value={60} size="md" />
      <ProgressBar value={60} size="lg" />
    </div>
  ),
};

export const Rounding: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500 font-poppins">Full (default)</span>
        <ProgressBar value={60} rounding="full" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500 font-poppins">Medium</span>
        <ProgressBar value={60} rounding="md" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500 font-poppins">None</span>
        <ProgressBar value={60} rounding="none" />
      </div>
    </div>
  ),
};

export const Animated: Story = {
  args: {
    value: 70,
    animated: true,
    variant: 'info',
  },
};
