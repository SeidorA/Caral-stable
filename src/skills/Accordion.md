---
name: AccordionSkill
description: Documentation for the Accordion component in the Caral design system.
---

## Overview
The **Accordion** component (or collapse) is a vertically collapsing container that allows users to hide or reveal sections of content. It is designed to be simple, accessible, and lightweight.

## Figma Reference
- **Figma Node ID**: `4559:9832`
- **Background**: Flexible background colors using design tokens.
- **Typography**: Uses `Poppins SemiBold` for titles and `Poppins Regular` for content.

## Component Properties

| React Prop | Type | Description |
|------------|------|-------------|
| `title` | `string` | The header text displayed on the accordion trigger. |
| `children` | `ReactNode` | Content displayed when expanded (any JSX). |
| `description` | `string` | Simple text alternative to children. |
| `variant` | `string` | Background color variant: `default`, `container`, `info`, `success`, `warning`, `danger`, `indigo`, `white`. |
| `defaultOpen` | `boolean` | If true, the accordion is open on mount. |

## Layout Structure
1.  **Header**: 
    *   Left: Title text (H3 variant equivalent).
    *   Right: Chevron icon that rotates 180° when expanded.
    *   Action: Clicking the header toggles the open state.
2.  **Content**: 
    *   Height-animated container (using `max-height` or dynamic calculation).
    *   A bottom border appears in the header only when the accordion is open.

## Usage Example
```tsx
import { Accordion } from 'caral-design-system';

<Accordion 
  title="Preguntas Frecuentes" 
  variant="white"
  defaultOpen={true}
>
  <p className="text-p text-neutral-800">
    En este espacio puedes detallar cualquier tipo de información.
  </p>
</Accordion>
```

## Validation Checklist
- [ ] Border radius is `6px`.
- [ ] Transition duration for expanding/collapsing is `300ms`.
- [ ] Hover effect on header is subtle (background opacity change).
- [ ] Chevron icon is properly aligned and rotates correctly.
- [ ] Active background color matches the selected `variant`.
