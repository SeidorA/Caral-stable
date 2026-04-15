---
name: NavbarVerticalSkill
description: Documentation for the Vertical Navbar (Sidebar) component in the Caral design system.
---

## Overview
The **NavbarVertical** is a side navigation component (Sidebar) designed to organize application sections. It is highly focus on accessibility and space efficiency via its collapsible state.

## Figma Reference
- **Figma Node ID**: `4551:2986`
- **Background**: `neutral-body` (Container color).
- **Buttons**: `neutral-500` background with rounded pill shape.

## Component Properties

| React Prop | Type | Description |
|------------|------|-------------|
| `brandName` | `string` | Name of the brand icon. |
| `title` | `string` | Project or App title. |
| `items` | `SidebarItem[]` | Navigation items `{ id, label, icon, onClick, active }`. |
| `user` | `object` | `{ email, avatarInitials }` for the footer section. |
| `defaultCollapsed` | `boolean` | Initial state of the sidebar. |

## Layout Structure
1.  **Header**: 
    *   Brand logo and Title.
    *   Transition-aware text visibility.
2.  **Navigation Links**:
    *   Alginment: Left-aligned content.
    *   Padding: Fixed left padding (`px-6`) to compensate for curve aesthetics.
    *   Interaction: Tooltips appear automatically when hovering items in collapsed mode.
3.  **Toggle Mechanism**:
    *   An arrow button that changes direction and position depending on the collapse state.
4.  **Footer**:
    *   Displays user avatar and email (email hidden when collapsed).

## Usage Example
```tsx
import { NavbarVertical } from 'caral-design-system';

const navItems = [
  { id: '1', label: 'Monitor', icon: 'charScreen', active: true },
  { id: '2', label: 'Settings', icon: 'gear' }
];

function Layout() {
  return (
    <div className="flex h-screen">
      <NavbarVertical 
        title="Admin Portal" 
        items={navItems} 
        user={{ email: 'admin@caral.com', avatarInitials: 'AD' }}
      />
      <main className="flex-1 overflow-auto">
        {/* Page Content */}
      </main>
    </div>
  );
}
```

## Validation Checklist
- [ ] Sidebar background matches `neutral-body` (#F1F5F9).
- [ ] Active items use `neutral-500` (#E2E8F0) and dark text.
- [ ] Transition between collapsed and expanded states is smooth (300ms).
- [ ] Icons are perfectly centered in collapsed mode.
- [ ] Tooltips show the label when hovering over icons in collapsed mode.
