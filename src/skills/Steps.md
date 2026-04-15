# Horizontal Steps

## Descripción
Componente de pasos horizontales para procesos lineales. Permite mostrar el paso actual, pasos completados y pasos aún bloqueados. Incluye una línea de conexión entre pasos, que se puede deshabilitar para el último paso o para pasos específicos.

## Estados
- `default`: paso activo o disponible para el usuario.
- `disabled`: paso posterior que no está disponible hasta completar el paso actual.
- `done`: paso anterior ya completado.

## Props

### StepsProps
| Prop | Tipo | Predeterminado | Descripción |
|------|------|----------------|-------------|
| `steps` | `StepItem[]` | Requerido | Lista de pasos con su estado, etiqueta y descripción opcional |
| `onStepClick` | `(index: number) => void` | Opcional | Callback cuando el usuario hace clic en un paso habilitado |
| `className` | `string` | Opcional | Clases CSS adicionales |

### StepItem
| Prop | Tipo | Descripción |
|------|------|-------------|
| `label` | `string` | Texto principal del paso |
| `status` | `'default'  'disabled'  'done'` | Estado visual del paso |
| `description` | `string` | Texto secundario opcional debajo del label |
| `hideConnector` | `boolean` | Si es `true`, no se renderiza la línea de conexión después de este paso |

## Comportamiento
- El último paso no debe mostrar línea de conexión por defecto.
- Los pasos `disabled` no deben ser interactivos.
- Los pasos `done` muestran un ícono de check y estilo de éxito.
- Los pasos `default` muestran estilo de acción disponible.

## Ejemplo
```tsx
<Steps
  steps=[
    { label: 'Información', status: 'done', description: 'Completado' },
    { label: 'Confirmar', status: 'default', description: 'En curso' },
    { label: 'Finalizar', status: 'disabled', description: 'Completar anterior' }
  ]
  onStepClick={(index) => console.log('clic paso', index)}
/>
```

## Notas de diseño
- Usar solo tokens de color del sistema de diseño.
- No aplicar colores directos de Tailwind como `red-500`, `sky-600`, `amber-50`.
- No usar `dark:` en el componente; el modo oscuro es controlado globalmente.
