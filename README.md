# Seidor Caral Design System 🎨

**Caral** es el sistema de diseño premium de SEIDOR Analytics, diseñado para ofrecer interfaces consistentes, accesibles y con una estética de vanguardia. Esta librería de componentes para React está construida con **Tailwind CSS**, **Figma Tokens** e **IconCaral2**.

---

## 🚀 Requisitos de Instalación

Para asegurar el correcto funcionamiento de los componentes, asegúrate de tener instaladas las dependencias necesarias:

```bash
npm install iconcaral2 react-day-picker
```

### Peer Dependencies
- React >= 18.0.0
- React DOM >= 18.0.0

---

## 💅 Configuración de Estilos (MANDATORIO)

### 1. Tipografía Poppins
El sistema utiliza la fuente **Poppins** de Google Fonts. Debes incluirla en tu proyecto (via CSS o HTML):

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### 2. Importar el CSS de Caral
Debes importar el archivo de estilos global que contiene los tokens de color y animaciones en el punto de entrada de tu aplicación (`index.tsx` o `App.tsx`):

```tsx
import 'caral-design-system/dist/index.css';
```

### 3. Configuración de Tailwind
Si estás utilizando Tailwind en tu proyecto base, asegúrate de extender el tema con los colores de Caral (ver `tailwind.config.js` en esta librería) o simplemente deja que el CSS de Caral maneje las variables de diseño.

---

## 🧩 Componentes Principales

La librería ofrece una amplia gama de componentes, incluyendo:

- **Navigation**: `NavbarHorizontal`, `NavbarVertical` (Sidebar).
- **Forms**: `Button`, `TextInput`, `Select`, `Toggle`, `Chip`.
- **Data**: `Table`, `Accordion`, `ProgressBar`.
- **Feedback**: `Alert`, `ConfirmationModal`, `Spinner`, `Skeleton`.
- **Templates**: `LoginScreen`.

---

## 🛠 Kit de Skills (Knowledge Items)

Una de las características únicas de este sistema es el directorio `src/skills/`. Estos archivos Markdown son **Knowledge Items** que sirven como puente entre el diseño de Figma y la implementación:

- **Mapeo Figma-Code**: Cada skill detalla qué propiedades de Figma (ej. "isPill", "variant") corresponden a qué props de React.
- **Checklist de Validación**: Puntos clave para asegurar que el componente renderizado sea idéntico al diseño original.
- **Uso Estándar**: Ejemplos de código base recomendados para mantener la consistencia.

*Se recomienda a los desarrolladores consultar el archivo `.md` correspondiente (ej: `Button.md`, `Icons.md`) antes de implementar nuevas pantallas.*

---

## 🏗 Desarrollo y Pruebas

Para visualizar los componentes en un entorno aislado, utiliza Storybook:

```bash
npm run storybook
```

Esto abrirá un servidor local (usualmente puerto 6006) donde podrás interactuar con todas las variantes de cada componente.

---

## 📦 Publicación

Para generar el bundle de producción listo para distribuir:

```bash
npm run build
```

El resultado se generará en la carpeta `dist/`, incluyendo tipos TypeScript y el CSS optimizado.

---

© 2026 SEIDOR Analytics - Humanizando la tecnologia.
