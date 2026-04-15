---
name: ChipComponentSkill
description: Mapping between the Figma Chip component and the React implementation in Caral design system.
---

## Overview
This skill defines how the **Chip** component designed in Figma should be translated into the React component `Chip.tsx`.

## Figma Reference
- **Figma Node ID**: `1234:56` (replace with actual ID from the design file)
- **Component Name**: `Chip`
- **Variants**: `default`, `info`, `success`, `warning`, `danger`, `indido`, `sakura`, `light`, `alwayslight`, `outlight`
- **Properties**:
  - `iconName` – maps to the `Icons` type.
  - `label` – text content displayed inside the chip.
  - `showInfo` / `infoMessage` – tooltip behavior.
  - `hasBorder` – toggles light/pastel styling.
  - `status` – small status indicator (dot).
  - `justIcon` – toggles circular 1:1 format (icon only).
  - `className` – additional CSS classes.

## Code Mapping
| Figma Property | React Prop | Description |
|----------------|------------|-------------|
| Variant        | `variant`  | Determines background/color scheme. |
| Icon           | `iconName` | Uses `CaralIcon` component. |
| Label          | `label`    | Direct text content. |
| Info Tooltip   | `showInfo` / `infoMessage` | Shows an info icon with hover tooltip. |
| Border Toggle  | `hasBorder`| When true, applies light variant styles. |
| Status Dot     | `status`   | Renders a small colored dot based on status. |
| Just Icon      | `justIcon` | Circular 1:1 mode. Hides label and sub-elements. |
| Extra Classes  | `className`| Allows custom styling from the consumer. |

## Usage Examples

### Standard Chip
```tsx
<Chip
  variant="success"
  iconName="check"
  label="Approved"
/>
```

### Icon-Only Circular Chip (New)
```tsx
<Chip
  variant="info"
  iconName="gear"
  justIcon={true}
/>
```

## Validation Checklist
- [ ] Verify circular aspect ratio (width == height == 34px) when `justIcon` is true.
- [ ] Ensure `label` is hidden in `justIcon` mode even if provided.
- [ ] Confirm `borderRadius` is `999px` (full rounded).
- [ ] Check icon scaling (increases to 20px in circular mode).

## Maintenance
- When new variants are added in Figma, update the `variantStyles` and `lightVariantStyles` objects in `Chip.tsx`.
- Keep the `colorKey` logic in sync with any changes to the naming convention of design tokens.
