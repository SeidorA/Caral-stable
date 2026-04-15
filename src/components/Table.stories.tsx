import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, Column } from './Table';
import { Chip } from './Chip';
import { Button } from './Button';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
}

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    hasBorder: { control: 'boolean' },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData: UserData[] = [
  { id: 1, name: 'Juan David Torres', email: 'jdtorres@seidoranalytics.com', role: 'Administrador', status: 'active', lastLogin: '07 Jan, 2026' },
  { id: 2, name: 'Maria Garcia', email: 'mgarcia@seidor.com', role: 'Editor', status: 'active', lastLogin: '10 Jan, 2026' },
  { id: 3, name: 'Carlos Ruiz', email: 'cruiz@seidor.com', role: 'Usuario', status: 'pending', lastLogin: '12 Jan, 2026' },
  { id: 4, name: 'Ana Lopez', email: 'alopez@seidor.com', role: 'Invitado', status: 'inactive', lastLogin: '15 Jan, 2026' },
];

const columns: Column<UserData>[] = [
  { 
    key: 'name', 
    header: 'Nombre', 
    sortable: true,
    render: (item) => (
      <div className="flex flex-col">
        <span className="font-semibold text-neutral-900">{item.name}</span>
        <span className="text-[12px] text-neutral-800">{item.email}</span>
      </div>
    )
  },
  { 
    key: 'role', 
    header: 'Rol',
    sortable: true,
    width: '150px' 
  },
  { 
    key: 'status', 
    header: 'Estado', 
    align: 'center',
    render: (item) => {
      const variantMap = {
        active: 'success',
        pending: 'warning',
        inactive: 'error',
      } as const;
      return <Chip variant={variantMap[item.status]} text={item.status.toUpperCase()} hasBorder={true} />;
    }
  },
  { 
    key: 'lastLogin', 
    header: 'Último Ingreso', 
    sortable: true,
    align: 'right' 
  },
  {
    key: 'actions',
    header: '',
    align: 'right',
    render: () => (
      <div className="flex justify-end gap-2">
        <Button variant="light" hasBorder size="small">Editar</Button>
      </div>
    )
  }
];

export const Default: Story = {
  args: {
    data: mockData,
    columns: columns,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: columns,
  },
};

export const interactive: Story = {
    render: () => {
        return (
            <div className="p-4 bg-neutral-500 min-h-[400px]">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-h3 mb-6">Gestión de Usuarios</h3>
                    <Table 
                        data={mockData} 
                        columns={columns} 
                        onRowClick={(item) => alert(`Click en fila: ${item.name}`)}
                    />
                </div>
            </div>
        )
    }
}
