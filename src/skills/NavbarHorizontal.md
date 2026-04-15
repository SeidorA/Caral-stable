---
name: NavbarHorizontalSkill
description: Documentation for the Horizontal Navbar component in the Caral design system.
---

## Overview
The **NavbarHorizontal** is a premium header component designed to be pinned to the top of the application. It supports complex navigation, branding, and a unique contextual collapsible area.

## Figma Reference
- **Figma Node ID**: `4547:1758`
- **Branding**: Flexible brand logo via the `Brand` component.
- **Sticky**: Defaults to `sticky top-0`.

## Component Properties

| React Prop | Type | Description |
|------------|------|-------------|
| `brandName` | `string` | Name of the brand icon (from `Brand` icons list). |
| `title` | `string` | Text title displayed next to the logo. |
| `navItems` | `NavItem[]` | Array of `{ label, icon, onClick, active }` for the center links. |
| `variant` | `string` | Background color variant: `default`, `info`, `success`, `warning`, `danger`, `indigo`, `sakura`, `carbon`. |
| `isSticky` | `boolean` | Toggles `sticky top-0` behavior. |
| `collapsibleContent` | `ReactNode` | Content rendered below the main bar when expanded. |
| `user` | `object` | `{ initials, variant }` to configure the user Avatar. |

## Layout Structure
1.  **Main Bar**: 
    *   **Left**: Menu trigger, Brand logo (in a rounded light container), and Title (H3).
    *   **Center**: Horizontal list of ghost-styled buttons with icons.
    *   **Right**: Optional icons (bell, message) + Collapse toggle + User Avatar.
2.  **Collapsible Area**: 
    *   An animated container that slides down to show contextual information (filters, status bars, etc.).
    *   Visibility is toggled by a chevron button on the far right of the main bar (only if content is present).

## Usage Example
```tsx
import { NavbarHorizontal } from 'caral-design-system';

<NavbarHorizontal
  title="Analytics Dashboard"
  brandName="SAP"
  variant="indigo"
  navItems={[
    { label: 'Workspaces', icon: 'grid', active: true },
    { label: 'Reports', icon: 'file' }
  ]}
  collapsibleContent={
    <div className="bg-success-light p-4 text-success-hard">
      Filter applied: Project A
    </div>
  }
/>
```

## Validation Checklist
- [ ] Brand logo is centered within its rounded container.
- [ ] Middle buttons change style on hover and show active state.
- [ ] Collapsible area has a smooth transition (max-height and opacity).
- [ ] Sticky property works correctly when scrolling.
- [ ] Avatar initials match the user object provided.
