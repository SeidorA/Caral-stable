import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { CaralIcon } from 'iconcaral2';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'select',
      options: ['menu', 'dots', 'list', 'pause', 'x', 'arrowDownToLine', 'bluetooth', 'bluetoothSlash', 'bolt', 'boltSlash', 'camera', 'cameraSecurity', 'cameraSecurityRoof', 'charBarScreen', 'charScreen', 'chartFile', 'chartSimple', 'circles', 'clickCheck', 'clickCursor', 'clickTab', 'cloud', 'cloudFly', 'cloudSync', 'cloudUp', 'code', 'command', 'comments', 'commentsServer', 'cube', 'dron', 'fileDown', 'fileZip', 'gear', 'image', 'job', 'laptop', 'link', 'magic', 'mapBranch', 'mensagePc', 'mobile', 'mouseCalendar', 'network', 'pc', 'qr', 'robot', 'satellite', 'shakePhone', 'shieldHalved', 'sliderHorizontal', 'sliderVertical', 'sms', 'squareFace', 'storage', 'sunBright', 'sunMoon', 'tab', 'toggleOff', 'toggleOn', 'upRightFromSquare', 'video', 'volume', 'wifi', 'wifiLeft', 'wrench', 'wrenchPrice', 'airplane', 'anchor', 'bus', 'car', 'dispenser', 'flag', 'globe', 'globeMap', 'helicopter', 'locationPin', 'map', 'moto', 'motorcycle', 'oilWell', 'planeArrival', 'planeDeparture', 'plane', 'scraper', 'signsPost', 'skateboard', 'skateboardElectric', 'trailer', 'train', 'truckMedical', 'truck', 'accessible', 'arrowsLeftRight', 'arrowsLeftRightToLine', 'arrowsMaximize', 'arrowsMinimize', 'arrowsMove', 'arrowsUpDown', 'arrowDown', 'arrowLeft', 'arrowPointer', 'arrowRight', 'arrowUp', 'arrowUpArrowDown', 'assist', 'AWS', 'Azure', 'AzureSql', 'badgeArrowUp', 'badgeSync', 'bank', 'barbell', 'bars', 'basketShopping', 'bell', 'book', 'bookmark', 'box', 'building', 'businessTime', 'calculator', 'calendar', 'calendarTime', 'calendaEuro', 'cartShopping', 'cartShoppingCircle', 'cartShoppingPin', 'cartShoppingPlus', 'cartShoppingSlash', 'certificate', 'chats', 'check', 'checkBox', 'checkFile', 'checkList', 'checkSearch', 'chevronsDown', 'chevronsLeft', 'chevronsRigth', 'chevronsUp', 'chevronDown', 'chevronDownBox', 'chevronDownCircle', 'chevronLeft', 'chevronLeftBox', 'chevronLeftCircle', 'chevronRigth', 'chevronRigthCircle', 'chevronUp', 'chevronUpBox', 'chevronUpCircle', 'circleInfo', 'circleBars', 'city', 'clock', 'cloudStorage', 'coffee', 'creditCard', 'cubeInCube', 'cupeUpView', 'dislike', 'dislikeFile', 'dolar', 'dolarReceipt', 'dolarScreen', 'downStairs', 'dropBox', 'edit', 'editFile', 'editScreen', 'envelope', 'envelopeOpen', 'envelopeSend', 'euro', 'eye', 'female', 'eyeSlash', 'file', 'fileClick', 'fileShare', 'filter', 'flagPointer', 'fullJoin', 'fullJoinW', 'GoogleStorage', 'healtFile', 'historyChart', 'hospital', 'house', 'iD', 'infoFile', 'innerJoin', 'key', 'leaf', 'leafPlant', 'learn', 'leftJoin', 'ligthOn', 'like', 'likeFile', 'lockOpen', 'lock', 'lockSlash', 'lockSquare', 'lockSync', 'male', 'megaphone', 'mesagge', 'message', 'messagePhone', 'moneyBills', 'moneyBill', 'moneySlash', 'newspaper', 'newFile', 'note', 'noFound', 'oracle', 'peopleDress', 'percent', 'percentCircle', 'personCopy', 'piggyBank', 'pin', 'portafolio', 'presentationScreenBar', 'presentationScreenChart', 'price', 'print', 'puzzle', 'puzzleOut', 'quote', 'receipt', 'redshift', 'refreshPresentation', 'rigthJoin', 'rigthJoinW', 'Saleforce', 'SAP', 'save', 'scaleBalanced', 'schedule', 'screenBar', 'screenChart', 'screenView', 'search', 'searchPerson', 'eeedling', 'seedlingBottle', 'seedlingPot', 'shop', 'Snowflake', 'star', 'store', 'sync', 'trash', 'triangleExclamation', 'upStairs', 'user', 'users', 'usersMap', 'usersWifi', 'userConfig', 'virus', 'waveScreen', 'wheat', 'window', 'xCircle', 'zoomIn', 'zoomOut', 'cancelExecution', 'continueExecution', 'database', 'folder', 'Cloudera', 'Teradata', 'arrowUpToLine', 'Whatsapp', 'Google', 'Databricks', 'OData', 'play', 'plus', 'less', 'SapOdata', 'AmazonRedshift', 'GoogleBigquery', 'Teams', 'closeSidebarLeft', 'closeSidebarRigt', 'copy', 'Deepseek', 'Gemini', 'OpenAI', 'SAPHanaC', 'S3', 'Harbinger', 'Doxa', 'Daiana', 'Crestone', 'CloudCosting', 'Feelings', 'IBMDb2', 'MSSQL', 'mySQL', 'PostgreSQL', 'OneDrive', 'Sharepoint', 'PDF', 'DOC', 'DOCX', 'CSV', 'XLSX', 'Json', 'TXT', 'HTML', 'Fabric', 'Sybase', 'Ollama', 'Windows', 'DataEngineering', 'OneLake', 'DataActivator', 'DataFactory', 'Synapse', 'PowerBI', 'Database', 'IQ'],
    },
    disabled: {
      control: 'boolean'
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Button',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info Action',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Action',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Action',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Action',
  },
};

export const Indido: Story = {
  args: {
    variant: 'indido',
    children: 'Indido Action',
  },
};

export const Sakura: Story = {
  args: {
    variant: 'sakura',
    children: 'Sakura Action',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light Button',
  },
};

export const Carbon: Story = {
  args: {
    variant: 'carbon',
    children: 'Carbon Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    variant: 'default',
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Large Button',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'default',
    children: 'Confirm Action',
    iconName: 'check',
  },
};

export const Dropdown: Story = {
  args: {
    variant: 'default',
    children: 'Options',
    isDropdown: true,
    isOpen: false,
  },
};

export const DropdownOpen: Story = {
  args: {
    variant: 'default',
    children: 'Options',
    isDropdown: true,
    isOpen: true,
  },
};

export const IconButtonWithTooltip: Story = {
  args: {
    variant: 'info',
    children: 'Action Tooltip',
    iconName: 'robot',
    isIconButton: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Pill: Story = {
  args: {
    variant: 'default',
    children: 'Pill Button',
    isPill: true,
  },
};

export const Borders: Story = {
  args: {},
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default" hasBorder>Default</Button>
      <Button variant="info" hasBorder>Info</Button>
      <Button variant="success" hasBorder>Success</Button>
      <Button variant="warning" hasBorder>Warning</Button>
      <Button variant="danger" hasBorder>Danger</Button>
    </div>
  ),
};
