import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Animations/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['rectangular', 'circular', 'rounded'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
    variant: 'rounded',
  },
};

export const Circular: Story = {
  args: {
    width: 60,
    height: 60,
    variant: 'circular',
  },
};

export const Rectangular: Story = {
  args: {
    width: '100%',
    height: 150,
    variant: 'rectangular',
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-[300px] border border-neutral-200 rounded-xl p-4 flex flex-col gap-4 bg-white">
      <Skeleton variant="rectangular" height={160} className="rounded-lg" />
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 flex flex-col gap-2">
          <Skeleton width="70%" height={12} />
          <Skeleton width="40%" height={10} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton width="100%" height={10} />
        <Skeleton width="90%" height={10} />
        <Skeleton width="60%" height={10} />
      </div>
    </div>
  ),
};
