---
name: AvatarComponentSkill
description: Mapping between the Figma Avatar component and the React implementation in Caral design system.
---

## Overview
This skill defines how the **Avatar** component designed in Figma should be translated into the React component `Avatar.tsx`.

## Figma Reference
- **Figma File**: https://www.figma.com/design/Y9lqYeyumuZeot0hg2glwV/Caral-Seidor
- **Figma Node ID**: `2395:76`
- **Component Name**: `Avatar`
- **States / Variants**: `Default`, `info`, `Aprove`, `Danger`, `Warning`, `gray`, `Image`
- **Sizes**: `sm`, `md`, `lg`

## Properties
- `property1` – selects the avatar visual variant.
- `size` – controls the avatar dimensions.
- `iconName` – when set, renders a `CaralIcon` inside the avatar.
- `icon` – optional override to render a custom React node instead of the default `CaralIcon`.
- `text` – initials or label text shown when icon mode is not active.
- `className` – allows custom styling overrides.

## Code Mapping
| Figma Property | React Prop | Description |
|----------------|------------|-------------|
| Variant        | `property1` | Controls background color and mode. `Image` uses a visual placeholder background. |
| Size           | `size`      | `sm`, `md`, `lg` sets fixed width/height. |
| Icon           | `iconName`  | Renders `CaralIcon` by name when set. |
| Custom icon    | `icon`      | Overrides default icon rendering with a custom node. |
| Text initials  | `text`      | Displays up to 2 uppercase characters in text mode. |
| Extra classes  | `className` | Adds extra Tailwind classes to the avatar container. |

## Usage Example
```tsx
<Avatar
  property1="info"
  size="md"
  iconName="user"
  text="JS"
  className="shadow-sm"
/>
```

## Validation Checklist
- [ ] Confirm the Figma Node ID `2395:76` matches the Avatar component in the design file.
- [ ] Validate that `property1` variants align with the design tokens and Figma colours.
- [ ] Ensure `iconName` renders the corresponding `CaralIcon` correctly at all sizes.
- [ ] Verify text initials sizing and alignment for `sm`, `md`, and `lg`.
- [ ] Compare the rendered component in Storybook against the Figma design for each variant.

## Maintenance
- Update this skill file when the Figma Avatar component adds new variants or layout changes.
- Keep the `Avatar.tsx` props aligned with the design system naming conventions.
- If the Avatar design evolves, add new stories and update the Storybook controls accordingly.
