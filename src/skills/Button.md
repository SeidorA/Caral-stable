---
name: ButtonComponentSkill
description: Mapping between the Figma Button component and the React implementation in Caral design system.
---

## Overview
This skill defines how the **Button** component designed in Figma should be translated into the React component `Button.tsx`.

## Figma Reference
- **Figma Node ID**: `5678:90` (replace with actual ID from the design file)
- **Component Name**: `Button`
- **Variants**: `default`, `info`, `success`, `warning`, `danger`, `indido`, `sakura`, `light`, `carbon`
- **Sizes**: `sm`, `md`, `lg`
- **Properties**:
  - `iconName` – maps to the `Icons` type exported from this file.
  - `variant` – determines background and text colors.
  - `size` – controls height, padding and font size.
  - `isIconButton` – renders a square icon‑only button.
  - `isPill` – makes the button fully rounded.
  - `hasBorder` – toggles light variant with external border.
  - `isDropdown` / `isOpen` – adds a chevron icon for dropdown toggles.
  - `disabled` – applies disabled styling.
  - `className` – additional CSS classes.

## Code Mapping
| Figma Property | React Prop | Description |
|----------------|------------|-------------|
| Variant        | `variant`  | Background / text colour scheme. |
| Size           | `size`     | `sm`, `md`, `lg` – sets height & padding. |
| Icon           | `iconName` | Uses `CaralIcon` with size based on button size. |
| Icon‑only      | `isIconButton` | Renders a square button with only the icon. |
| Pill shape     | `isPill`   | Applies `rounded-full` when true. |
| Border toggle  | `hasBorder`| Switches to light variant with external ring. |
| Dropdown arrow | `isDropdown` / `isOpen` | Shows chevron up/down when not an icon button. |
| Disabled state | `disabled` | Uses `variantStyles.disabled` styling. |
| Extra classes  | `className`| Allows custom styling from the consumer. |

## Usage Example
```tsx
<Button
  variant="success"
  size="lg"
  iconName="check"
  isPill={true}
  hasBorder={true}
  isDropdown={true}
  isOpen={false}
  disabled={false}
  className="my-custom-btn"
>
  Confirm
</Button>
```

## Validation Checklist
- [ ] Verify the Figma node ID matches the component in the design system.
- [ ] Ensure all variant colour variables exist in `index.css` (`--color-<variant>-light`, `--color-<variant>-hard`).
- [ ] Confirm size classes (`h-8`, `h-10`, `h-12`, etc.) match the Figma spacing specs.
- [ ] Test tooltip behaviour for `isIconButton` and dropdown icons in Storybook.
- [ ] Compare rendered button against the Figma mock for each variant and size.

## Maintenance
- When new variants or sizes are added in Figma, update `variantStyles`, `lightVariantStyles`, and `sizeStyles`/`squareStyles` in `Button.tsx`.
- Keep the `iconScale` mapping in sync with any changes to icon size guidelines.
- Update this skill file to reflect any design‑to‑code changes.
