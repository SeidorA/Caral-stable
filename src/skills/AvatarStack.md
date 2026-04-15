---
name: AvatarStackComponentSkill
description: Mapping between the Figma Avatar Stack component and the React implementation in Caral design system.
---

## Overview
This skill defines how the **Avatar Stack** pattern designed in Figma should be translated into the React component `AvatarStack.tsx`.

## Figma Reference
- **Figma File**: https://www.figma.com/design/Y9lqYeyumuZeot0hg2glwV/Caral-Seidor
- **Figma Node ID**: `2436:346`
- **Component Name**: `Avatar Stack`
- **Pattern**: overlapping avatars with optional overflow counter

## Properties
- `avatars` – list of avatar entries to render in the stack.
- `maxVisible` – maximum number of visible avatars before showing a `+N` overflow badge.
- `size` – avatar size across the stack: `sm`, `md`, `lg`.
- `overlap` – horizontal overlap between avatar items.
- `className` – custom wrapper classes.

## Code Mapping
| Figma Property | React Prop | Description |
|----------------|------------|-------------|
| Avatar list    | `avatars`   | Array of avatar objects containing `text`, `iconName`, and `property1`. |
| Visible limit  | `maxVisible`| Controls how many avatars are shown before overflow badge appears. |
| Size           | `size`      | Applies the same avatar size to all items in the stack. |
| Overlap        | `overlap`   | Adjusts horizontal negative spacing between avatars. |
| Overflow badge | N/A         | Renders a gray `Avatar` with `+N` text when there are more items than `maxVisible`. |

## Usage Example
```tsx
<AvatarStack
  avatars={[
    { id: '1', text: 'AL', property1: 'Default' },
    { id: '2', text: 'BM', property1: 'info' },
    { id: '3', iconName: 'camera', property1: 'Aprove' },
    { id: '4', text: 'DK', property1: 'Danger' },
  ]}
  size="md"
  maxVisible={3}
  overlap={10}
/>
```

## Validation Checklist
- [ ] Confirm the Figma node ID `2436:346` matches the Avatar Stack pattern in the design.
- [ ] Verify the overlap spacing matches the Figma visual layout.
- [ ] Ensure the overflow count badge renders correctly when `avatars.length > maxVisible`.
- [ ] Validate size variations for `sm`, `md`, and `lg` against the Avatar component.
- [ ] Check that `CaralIcon` avatars render properly using `iconName`.

## Maintenance
- Update this skill if the stack spacing or overflow style changes in Figma.
- Keep `AvatarStack.tsx` aligned with the `Avatar` component contract.
- Add new stories if the component gains additional behaviors or variants.
