import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Animations/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger', 'indido', 'sakura', 'light', 'carbon'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-neutral-500">sm (20px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs text-neutral-500">md (32px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-neutral-500">lg (48px)</span>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-8 bg-neutral-100 p-8 rounded-xl">
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="default" />
        <span className="text-xs">default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="info" />
        <span className="text-xs">info</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="success" />
        <span className="text-xs">success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="warning" />
        <span className="text-xs">warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="danger" />
        <span className="text-xs">danger</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="indido" />
        <span className="text-xs">indido</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="sakura" />
        <span className="text-xs">sakura</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="carbon" />
        <span className="text-xs">carbon</span>
      </div>
      <div className="flex flex-col items-center gap-2 bg-neutral-900 p-2 rounded">
        <Spinner variant="light" />
        <span className="text-xs text-white">light</span>
      </div>
    </div>
  ),
};

export const CustomSpeed: Story = {
  args: {
    speed: 1.5,
    size: 'lg',
  },
};
