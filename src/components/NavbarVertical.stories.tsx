import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavbarVertical } from './NavbarVertical';
import { CaralIcon, Brand } from 'iconcaral2';

const meta: Meta<typeof NavbarVertical> = {
  title: 'Components/NavbarVertical',
  component: NavbarVertical,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof NavbarVertical>;

const defaultItems = [
  { id: '1', label: 'Monitor', icon: 'charScreen' as any, active: true },
  { id: '2', label: 'Agentes', icon: 'message' as any },
  { id: '3', label: 'Gestión', icon: 'users' as any },
  { id: '4', label: 'Historial', icon: 'arrowDownToLine' as any },
  { id: '5', label: 'ExpressAI', icon: 'bolt' as any },
  { id: '6', label: 'Studio', icon: 'job' as any },
  { id: '7', label: 'Help', icon: 'book' as any },
];

export const DesktopExpanded: Story = {
  args: {
    title: 'Crestone Project',
    brandName: 'SAP',
    items: defaultItems,
    defaultCollapsed: false,
    user: {
      email: 'flippy@figma.com',
      avatarInitials: 'MW'
    },
    userMenuContent: (
      <div className="flex flex-col">
        <button className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-500/50 transition-colors text-left rounded-t-lg">
          <CaralIcon name="gear" size="s" />
          <span className="font-poppins text-p">Ajustes</span>
        </button>
        <div className="h-px bg-neutral-800/10 mx-2" />
        <button className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-500/50 transition-colors text-left">
          <CaralIcon name="book" size="s" />
          <span className="font-poppins text-p">Help</span>
        </button>
        <div className="h-px bg-neutral-800/10 mx-2" />
        <button className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-500/50 transition-colors text-left text-danger-main rounded-b-lg">
          <CaralIcon name="arrowLeft" size="s" />
          <span className="font-poppins text-p">Salir</span>
        </button>
      </div>
    )
  },
  render: (args) => (
    <div className="h-screen bg-neutral-body flex">
      <NavbarVertical {...args} />
      <div className="flex-1 p-10 font-poppins bg-full">
        <h1 className="text-h1">Main Content Area</h1>
        <p className="text-p mt-4 text-neutral-800">
          El contenido de la página se ajusta según el estado de la barra lateral.
        </p>
      </div>
    </div>
  )
};

export const Collapsed: Story = {
  args: {
    ...DesktopExpanded.args,
    defaultCollapsed: true,
  },
  render: DesktopExpanded.render,
};
