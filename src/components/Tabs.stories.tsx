import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTabs: TabItem[] = [
  { label: 'Tab 1' },
  { label: 'Tab 2' },
  { label: 'Tab 3' },
];

const tabsWithIcons: TabItem[] = [
  { label: 'Home', iconName: 'home' },
  { label: 'Settings', iconName: 'settings' },
  { label: 'Profile', iconName: 'user' },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
  },
  render: (args) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    return (
      <Tabs
        {...args}
        activeIndex={activeIndex}
        onChange={(index) => {
          setActiveIndex(index);
          args.onChange?.(index);
        }}
      />
    );
  },
};

export const WithIcons: Story = {
  args: {
    tabs: tabsWithIcons,
  },
  render: (args) => {
    const [activeIndex, setActiveIndex] = React.useState(1);
    return (
      <Tabs
        {...args}
        activeIndex={activeIndex}
        onChange={(index) => {
          setActiveIndex(index);
          args.onChange?.(index);
        }}
      />
    );
  },
};

export const Uncontrolled: Story = {
  args: {
    tabs: sampleTabs,
  },
};