# Alert Component

## Descripción
El componente Alert es un componente de notificación que se utiliza para mostrar mensajes informativos, de advertencia, de éxito o de error al usuario. Proporciona dos estilos visuales principales (`default` y `toast`) y 4 variantes cromáticas.

## Características
- **2 Tipos de Estilo**: `default` (con barra lateral de color) y `toast` (estilo premium centrado con separador vertical).
- **4 Variantes Cromáticas**: `info`, `danger`, `warning`, `success`.
- **Micro-animaciones**: Utiliza `AnimatedStatus` para iconos animados en las variantes estándar.
- **4 Posiciones**: `top-left`, `top-right`, `bottom-left`, `bottom-right`.
- **Botón "See More" Opcional**: (Solo en tipo `default`) Para acciones adicionales.
- **Cierre Automático**: Opción de cerrar automáticamente después de x milisegundos.
- **Botón de Cierre**: Botón para cerrar manualmente la alerta.
- **Colores del Sistema**: Usa tokens de estilo (`info`, `success`, `danger`, `warning`).

## Convenciones de estilo
- Priorizar siempre las clases basadas en tokens definidos en `tailwind.config.js`.
- No usar colores directos de Tailwind como `red-500`.
- El tipo `toast` utiliza un diseño más espacioso con `rounded-[10px]` y sombras `xl`.

## Props

### AlertProps

| Prop | Tipo | Predeterminado | Descripción |
|------|------|-----------------|-------------|
| `type` | `'default' \| 'toast'` | `'default'` | El estilo visual de la alerta. `default` es el formato clásico, `toast` es el formato centrado premium. |
| `variant` | `'info' \| 'danger' \| 'warning' \| 'success'` | `'info'` | El esquema cromático de la alerta. |
| `position` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top-right'` | La posición de la alerta en la pantalla. |
| `title` | `string` | Requerido | El título de la alerta. En `toast` el tamaño es 20px. |
| `description` | `string` | Opcional | La descripción adicional de la alerta. |
| `iconName` | `Icons` | Automático | Nombre del icono personalizado. Ignorado para variantes estándar en favor de `AnimatedStatus`. |
| `onClose` | `() => void` | Opcional | Callback al cerrar la alerta. |
| `onSeeMore` | `() => void` | Opcional | Callback para el botón "See more" (solo `default`). |
| `showSeeMore` | `boolean` | `false` | Mostrar el botón "See more" (solo `default`). |
| `autoClose` | `number` | Opcional | Tiempo en ms para cierre automático. |

## Ejemplos de uso

### Alert Toast (Nuevo)
```tsx
<Alert
  type="toast"
  variant="success"
  title="¡Guardado!"
  description="Tus cambios se han sincronizado correctamente."
  onClose={() => console.log('Cerrado')}
/>
```

### Alert Default (Clásico)
```tsx
<Alert
  variant="info"
  title="Actualización"
  description="Hay una nueva versión disponible."
  onClose={() => {}}
/>
```

## Variantes y Animaciones

El componente ahora integra **AnimatedStatus** para las variantes estándar:
- **Success**: Círculo animado con check verde.
- **Danger**: Círculo animado con X roja (mapeado de `error`).
- **Warning**: Triángulo animado de advertencia.
- **Info**: Círculo animado con "i".

## Notas de Desarrollo
- Se ha eliminado el uso de iconos estáticos para las variantes estándar para mejorar la experiencia de usuario con micro-interacciones.
- El tipo `toast` ignora el botón "See More" para mantener su diseño minimalista.
- El cierre en `toast` muestra el texto "Close" con un separador vertical.
