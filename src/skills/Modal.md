---
name: ModalComponentSkill
description: Mapping between the Figma Modal component and the React implementation in Caral design system.
---

## Overview
This skill defines how the **Modal** component designed in Figma should be translated into the React component `Modal.tsx`.

## Figma Reference
- **Figma Node ID**: `2406:577`
- **Component Name**: `Modal`
- **Variants**: 
  - `alignment`: `left` | `center`
  - `actions`: `single` | `double`
- **Key Features**:
  - Uses `Chip` with `justIcon` for the header icon.
  - Transparent backdrop with blur.
  - Action footer with different alignments and backgrounds.
  - Supports `children` for complex content like forms.

## Code Mapping
| Figma Property | React Prop | Description |
|----------------|------------|-------------|
| Title          | `title`    | Main heading of the modal. |
| Description    | `description`| Sub-heading or body text. |
| Icon           | `iconName` | Passed to the `Chip` component. |
| Chip Variant   | `chipVariant`| Background color of the top icon chip. |
| Alignment      | `alignment` | Controls `left` or `center` layout. |
| Button Config  | `actions`   | `single` (centered) or `double` (right-aligned). |
| Primary Text   | `primaryActionText` | Text for the main action button. |
| Primary Variant| `primaryActionVariant`| Key behavior/color of the main button. |
| Secondary Text | `secondaryActionText` | Text for the secondary action button. |
| Form / Content | `children`  | Injected between description and actions. |

## Usage Examples

### Confirmation Modal (Left-Aligned, Double Action)
```tsx
<Modal
  isOpen={true}
  onClose={() => {}}
  title="Are you sure?"
  description="This action is permanent."
  iconName="triangleExclamation"
  chipVariant="danger"
  alignment="left"
  actions="double"
  primaryActionText="Delete"
  secondaryActionText="Cancel"
/>
```

### Success Modal (Centered, Single Action)
```tsx
<Modal
  isOpen={true}
  onClose={() => {}}
  title="Payment Success"
  description="Process completed."
  iconName="check"
  chipVariant="success"
  alignment="center"
  actions="single"
/>
```

## Validation Checklist
- [ ] Verify that the backdrop uses `backdrop-blur-[2px]` and `bg-neutral-900/40`.
- [ ] Ensure `Chip` uses `justIcon` and `hasBorder`.
- [ ] Confirm actions footer backgrounds: `bg-neutral-500` for left-aligned double actions.
- [ ] Test form submission within the `children` slot.
- [ ] Check enter/exit animations (zoom and fade).
