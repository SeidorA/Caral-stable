import type { Meta, StoryObj } from '@storybook/react';
import { SemiCircleProgress } from './SemiCircleProgress';

const meta = {
  title: 'Components/SemiCircleProgress',
  component: SemiCircleProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    percentage: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    variant: {
      control: 'select',
      options: ['seidor', 'info', 'success', 'warning', 'danger', 'default'],
    },
    color: { control: 'color' },
    showPercentage: { control: 'boolean' },
    width: { control: 'text' },
  },
} satisfies Meta<typeof SemiCircleProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percentage: 65,
    variant: 'seidor',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-8 flex-wrap">
      <SemiCircleProgress percentage={25} variant="info" />
      <SemiCircleProgress percentage={50} variant="warning" />
      <SemiCircleProgress percentage={75} variant="success" />
      <SemiCircleProgress percentage={100} variant="danger" />
    </div>
  ),
};

export const CustomColorAndSize: Story = {
  args: {
    percentage: 82,
    color: '#8A2BE2',
    width: '250px',
  },
};

export const WithoutPercentage: Story = {
  args: {
    percentage: 45,
    variant: 'seidor',
    showPercentage: false,
  },
};
