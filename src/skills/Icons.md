---
name: IconSkill
description: Documentation for CaralIcon and Brand icon components from the iconcaral2 library.
---

## Overview
The Caral Design System uses the `iconcaral2` library for all iconography. It provides two main components: `CaralIcon` for general UI icons and `Brand` for company and technology logos.

## Components

### 1. CaralIcon
The primary component for UI icons. It contains over 300 icons.

| Property    | Type               | Description |
|-------------|--------------------|-------------|
| `name`      | `Icons` (string)   | The name of the icon to display. |
| `size`      | `string` \| `number` | Size of the icon (e.g., "s", "m", "l" or numeric pixels like 14, 18). |
| `color`     | `string`           | Optional color (hex, rgb, or CSS variable). |
| `className` | `string`           | Additional CSS classes for custom styling. |

### 2. Brand
Specifically used for corporate and technology brand logos (approx. 25 icons).

| Property    | Type               | Description |
|-------------|--------------------|-------------|
| `name`      | `string`           | The name of the brand icon (e.g., "SAP", "AWS", "Google"). |
| `size`      | `string` \| `number` | Size of the logo. |
| `className` | `string`           | Additional CSS classes. |

## Usage Examples

### Generic UI Icon
```tsx
import { CaralIcon } from 'iconcaral2';

// Standard usage
<CaralIcon name="search" size="s" color="#000" />

// Using numeric size and className for styling
<CaralIcon 
  name="chevronDown" 
  size={14} 
  className="text-seidor-main hover:opacity-80 transition-opacity" 
/>
```

### Brand Logo
```tsx
import { Brand } from 'iconcaral2';

<Brand name="SAP" size="m" />
<Brand name="AWS" size="l" className="grayscale hover:grayscale-0" />
```

## Implementation Notes
- **Icon Names (Source of Truth)**: The complete list of names available for `CaralIcon` is defined in [icons.ts](file:///c:/Users/Seidor/.gemini/antigravity/scratch/caral-stable/src/components/icons.ts) via the `Icons` type. Always check this file to verify available icons.
- **Sizing logic**:
  - `s`: 16px (approx)
  - `m`: 20px (approx)
  - `l`: 24px (approx)
- **Styling**: `className` can be used to apply Tailwind classes or custom CSS to affect internal properties like `fill` or `stroke` if the component supports it.

## Validation Checklist
- [ ] Verify `iconName` exists in the `Icons` type.
- [ ] Check if `Brand` name is correctly spelled (e.g., "SAP" vs "Sap").
- [ ] Ensure `size` matches the context (compact UIs usually use 14-16px).
- [ ] If using `color`, verify it doesn't conflict with `className` styles.
