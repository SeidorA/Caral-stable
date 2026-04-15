import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoginScreen } from './LoginScreen';

const meta = {
  title: 'Screens/LoginScreen',
  component: LoginScreen,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
