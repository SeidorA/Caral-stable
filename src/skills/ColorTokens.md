# Guía de Colores del Sistema de Diseño

## Objetivo
Garantizar que todos los componentes del sistema utilicen los colores definidos en el design system y no utilicen colores directos de Tailwind.

## Principios
- Priorizar siempre los tokens de color disponibles en el sistema de diseño.
- No usar clases directas de Tailwind como `red-500`, `sky-600`, `amber-50`, `emerald-900`, `blue-600`, etc.
- No definir colores personalizados en el componente si ya existe un token equivalente.
- Si no existe un token apropiado, solicitar su creación y agregarlo al sistema de color base.
- No usar clases `dark:` en componentes individuales; el modo oscuro debe gestionarse a nivel global por el sistema de diseño.

## Tokens de color válidos
Usar los tokens definidos en `tailwind.config.js` y `src/index.css`:
- `seidor.main`, `seidor.hard`, `seidor.light`, `seidor.main-text`
- `neutral.100`, `neutral.400`, `neutral.500`, `neutral.800`, `neutral.900`, `neutral.body`
- `info.main`, `info.hard`, `info.light`
- `success.main`, `success.hard`, `success.light`
- `danger.main`, `danger.hard`, `danger.light`
- `warning.main`, `warning.hard`, `warning.light`
- `indido.main`, `indido.hard`, `indido.light`
- `sakura.main`, `sakura.hard`, `sakura.light`

## Ejemplos correctos
- `bg-info-light`
- `border-danger-main`
- `text-success-hard`
- `bg-warning-light`
- `text-neutral-900`

## Ejemplos incorrectos
- `bg-red-500`
- `text-sky-600`
- `border-amber-300`
- `bg-emerald-50`
- `text-blue-700`

## Recomendaciones para desarrolladores
- Antes de usar un color, revisa si ya existe un token equivalente en `tailwind.config.js` o `src/index.css`.
- Si el componente necesita un color nuevo, pide agregar un nuevo token en la guía de diseño en lugar de usar un color directo.
- Mantén la consistencia en todos los componentes: los estados de color deben mapearse a los tokens `info`, `danger`, `warning`, `success`, `seidor`, `neutral`, etc.

## Nota
Esta guía es la referencia para todos los desarrolladores que creen nuevos componentes dentro de este sistema de diseño.
