import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavbarHorizontal } from './NavbarHorizontal';
import { CaralIcon } from 'iconcaral2';

const meta: Meta<typeof NavbarHorizontal> = {
  title: 'Components/NavbarHorizontal',
  component: NavbarHorizontal,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger', 'indigo', 'sakura', 'carbon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavbarHorizontal>;

const defaultNavItems = [
  { label: 'Connections', icon: 'cube' as any, active: true },
  { label: 'Nodes', icon: 'cubeInCube' as any },
  { label: 'Network', icon: 'network' as any },
  { label: 'Information', icon: 'charScreen' as any },
  { label: 'Usage', icon: 'gear' as any },
];

export const Default: Story = {
  args: {
    title: 'Seidor Analytics',
    brandName: 'SAP',
    navItems: defaultNavItems,
    rightActions: (
      <div className="flex items-center gap-2">
        <button className="w-11 h-11 flex items-center justify-center text-white hover:bg-white/10 rounded-md">
          <CaralIcon name="message" size="s" />
        </button>
        <button className="w-11 h-11 flex items-center justify-center text-white hover:bg-white/10 rounded-md">
          <CaralIcon name="bell" size="s" />
        </button>
      </div>
    ),
  },
};

export const WithCollapsible: Story = {
  args: {
    ...Default.args,
    title: 'Crestone Project',
    brandName: 'Azure',
    collapsibleContent: (
      <div className="bg-success-main h-[100px] flex items-center justify-center text-white font-poppins font-semibold shadow-inner">
        Este es el contenido colapsable contextual (pueden ser filtros, tabs, breadcrumbs, etc.)
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-full">
      <NavbarHorizontal variant="indigo" title="Indigo Navbar" navItems={defaultNavItems} />
      <NavbarHorizontal variant="success" title="Success Navbar" navItems={defaultNavItems} />
      <NavbarHorizontal variant="danger" title="Danger Navbar" navItems={defaultNavItems} />
      <NavbarHorizontal variant="carbon" title="Carbon Navbar" navItems={defaultNavItems} />
    </div>
  ),
};
