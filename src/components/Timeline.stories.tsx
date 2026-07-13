import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    hideTopLine: { control: 'boolean' },
    hideBottomLine: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['default', 'seidor', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
    },
    circleColor: { control: 'color' },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold">Event Title</h3>
        <p className="text-neutral-500">Event description goes here.</p>
      </div>
    ),
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col">
      <Timeline variant="success" hideTopLine>
        <p className="font-semibold text-success-main">Completed Step</p>
      </Timeline>
      <Timeline variant="seidor">
        <p className="font-semibold text-seidor-main">Current Step</p>
      </Timeline>
      <Timeline variant="default">
        <p className="text-neutral-500">Upcoming Step</p>
      </Timeline>
      <Timeline variant="danger" hideBottomLine>
        <p className="text-danger-main">Error Step</p>
      </Timeline>
    </div>
  ),
};

export const CustomColor: Story = {
  args: {
    circleColor: '#FF00FF',
    children: (
      <div>
        <h3 className="text-lg font-bold">Custom Color</h3>
        <p className="text-neutral-500">This timeline circle uses a custom hex color.</p>
      </div>
    ),
  },
};
