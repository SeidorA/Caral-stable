import React, { useState, useMemo } from 'react';
import '../index.css';
import { CaralIcon } from 'iconcaral2';

export interface Column<T> {
  /** Identificador único de la columna */
  key: string;
  /** Texto que se mostrará en el encabezado */
  header: string;
  /** 
   * Función opcional para renderizar contenido personalizado en la celda.
   * Útil para mostrar Chips, Avatares, Botones, etc.
   */
  render?: (item: T) => React.ReactNode;
  /** Ancho de la columna (ej: '200px', '20%') */
  width?: string;
  /** Alineación del contenido */
  align?: 'left' | 'center' | 'right';
  /** Si permite ordenamiento (UI) */
  sortable?: boolean;
}

export interface TableProps<T> {
  /** Arreglo de datos a mostrar */
  data: T[];
  /** Configuración de las columnas */
  columns: Column<T>[];
  /** Clases adicionales para el contenedor de la tabla */
  className?: string;
  /** Si debe mostrar borde exterior */
  hasBorder?: boolean;
  /** Callback opcional para cuando se hace clic en una fila */
  onRowClick?: (item: T) => void;
}

/**
 * Table Component
 * 
 * Un componente de tabla premium y flexible que sigue el diseño de Caral.
 * Soporta renderizado dinámico de celdas, alineación personalizada y una estética limpia.
 */
export function Table<T extends { id?: string | number }>({
  data,
  columns,
  className = '',
  hasBorder = true,
  onRowClick,
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' | null }>({
    key: '',
    direction: null,
  });

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;

    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortConfig.key === column.key) {
      if (sortConfig.direction === 'asc') direction = 'desc';
      else if (sortConfig.direction === 'desc') direction = null;
    }

    setSortConfig({ key: column.key, direction });
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.direction || !sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof T];
      const bValue = b[sortConfig.key as keyof T];

      if (aValue == null) return 1;
      if (bValue == null) return -1;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);
  return (
    <div className={`w-full overflow-hidden rounded-[6px] ${hasBorder ? 'border border-neutral-800/10 shadow-sm' : ''} ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-neutral-500">
              {columns.map((column, idx) => (
                <th
                  key={column.key}
                  style={{ width: column.width }}
                  onClick={() => handleSort(column)}
                  className={`
                    px-5 py-[15px]
                    font-poppins font-semibold text-[16px] leading-[24px] text-neutral-900
                    border-neutral-800/10
                    ${column.sortable ? 'cursor-pointer hover:bg-neutral-800/5 select-none' : ''}
                    ${idx === 0 ? 'rounded-tl-[6px]' : ''}
                    ${idx === columns.length - 1 ? 'rounded-tr-[6px]' : ''}
                    ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                  `}
                >
                  <div className={`flex items-center gap-2 ${column.align === 'center' ? 'justify-center' :
                    column.align === 'right' ? 'justify-end' : 'justify-start'
                    }`}>
                    {column.header}
                    {column.sortable && (
                      <div className="flex flex-col text-neutral-800">
                        {sortConfig.key === column.key && sortConfig.direction === 'asc' ? (
                          <CaralIcon name="chevronUp" size={14} className="text-seidor-main" />
                        ) : sortConfig.key === column.key && sortConfig.direction === 'desc' ? (
                          <CaralIcon name="chevronDown" size={14} className="text-seidor-main" />
                        ) : (
                          <CaralIcon name="chevronDown" size={14} className="opacity-20" />
                        )}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-container">
            {sortedData.length > 0 ? (
              sortedData.map((item, rowIdx) => (
                <tr
                  key={item.id || rowIdx}
                  onClick={() => onRowClick?.(item)}
                  className={`
                    group transition-colors duration-200
                    border-b border-neutral-800/10 last:border-b-0
                    ${onRowClick ? 'cursor-pointer hover:bg-neutral-500/50' : ''}
                  `}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`
                        px-5 py-[15px]
                        font-poppins font-regular text-[14px] leading-[20px] text-neutral-900
                        ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                      `}
                    >
                      {column.render ? column.render(item) : (item[column.key as keyof T] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-5 py-10 text-center text-neutral-800 font-poppins text-small">
                  No se encontraron datos.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
