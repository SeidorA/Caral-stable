import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    chipVariant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger', 'indido', 'sakura', 'light', 'alwayslight', 'outlight'],
    },
    alignment: {
      control: 'radio',
      options: ['left', 'center'],
    },
    actions: {
      control: 'radio',
      options: ['single', 'double'],
    },
    primaryActionVariant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger', 'indido', 'sakura', 'light', 'carbon', 'ghost', 'tab'],
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DangerModal: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>Open Danger Modal</Button>
        <Modal 
          {...args} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          onPrimaryAction={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    title: 'Are you absolutely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    iconName: 'triangleExclamation',
    chipVariant: 'danger',
    alignment: 'left',
    actions: 'double',
    primaryActionText: 'Delete Account',
    secondaryActionText: 'Cancel',
  },
};

export const SuccessModal: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="success" onClick={() => setIsOpen(true)}>Open Success Modal</Button>
        <Modal 
          {...args} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          onPrimaryAction={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    title: 'Payment successful',
    description: 'Your payment has been processed successfully. You can now access your new subscription features.',
    iconName: 'check',
    chipVariant: 'success',
    alignment: 'center',
    actions: 'single',
    primaryActionText: 'Go to Dashboard',
  },
};

export const FormModal: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="info" onClick={() => setIsOpen(true)}>Open Form Modal</Button>
        <Modal 
          {...args} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          onPrimaryAction={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-small font-semibold text-neutral-900">Name</label>
              <input 
                type="text" 
                className="h-10 px-3 bg-neutral-100 border border-neutral-800 rounded-md focus:ring-2 focus:ring-seidor-main outline-none" 
                placeholder="Pedro Duarte"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-small font-semibold text-neutral-900">Username</label>
              <input 
                type="text" 
                className="h-10 px-3 bg-neutral-100 border border-neutral-800 rounded-md focus:ring-2 focus:ring-seidor-main outline-none" 
                placeholder="@peduarte"
              />
            </div>
          </div>
        </Modal>
      </>
    );
  },
  args: {
    title: 'Edit profile',
    description: "Make changes to your profile here. Click save when you're done.",
    iconName: 'robot',
    chipVariant: 'info',
    alignment: 'left',
    actions: 'double',
    primaryActionText: 'Save Changes',
    secondaryActionText: 'Cancel',
  },
};
