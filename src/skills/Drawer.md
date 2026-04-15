---
name: DrawerComponentSkill
description: Mapping between the Figma Drawer component and the React implementation in Caral design system.
---

## Overview
This skill defines the **Drawer** component, a sliding side panel for secondary content, forms, or detailed views.

## Figma Reference
- **Figma Node ID**: `4532:11081`
- **Component Name**: `Drawer`
- **Variants**: `sm`, `md`, `lg`
- **Key Features**:
  - Header with `bg-neutral-500` and `xCircle` close button.
  - Body container supporting `children`.
  - Shadow-2xl and backdrop blur for focus.
  - Smooth slide-in animation from the right.

## Code Mapping
| Figma Property | React Prop | Description |
|----------------|------------|-------------|
| Title          | `title`    | Main heading of the drawer. |
| Size (sm)      | `size="sm"`| 15% width of the screen. |
| Size (md)      | `size="md"`| 25% width of the screen. |
| Size (lg)      | `size="lg"`| 50% width of the screen. |
| Children       | `children` | Content injected into the main body. |

## Animation Details
The Drawer uses the `animate-drawer-slide-right` class which performs a horizontal translation from `100%` to `0` with a smooth cubic-bezier curve.

## Usage Example
```tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="User Details"
  size="md"
>
  <UserDetailsForm data={selectedUser} />
</Drawer>
```

## Validation Checklist
- [ ] Header background matches `var(--neutral/gray-500)`.
- [ ] Close button uses `CaralIcon` with `xCircle`.
- [ ] Widths are accurate: LG (50%), MD (25%), SM (15%).
- [ ] Verify horizontal slide-in animation from right to left.
- [ ] Ensure backdrop blur and overlay are present.
