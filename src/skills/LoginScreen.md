---
name: LoginScreenSkill
description: Documentation for the Login screen template in the Caral design system.
---

## Overview
The **LoginScreen** is a full-page template designed for user authentication. It features a two-column layout with a decorative splash area and a clean, accessible form area.

## Figma Reference
- **Figma Node ID**: `188:2730`
- **Branding**: Uses `seidor-main` for the primary splash and buttons.
- **Components Used**:
  - `TextInput` for User and Password fields.
  - `Button` for the login action.

## Layout Structure
1.  **Splash (LG screens only)**: 
    *   Decorative background with abstract patterns.
    *   Main welcome message and subtext.
    *   Backdrop blur effects for a premium feel.
2.  **Form Container**:
    *   Responsive width with a maximum of `509px` for the content.
    *   Header with H1 title and sign-up link.
    *   Integrated validation styles via `TextInput`.

## Usage Example
This is a page-level component, typically used in a route:
```tsx
import { LoginScreen } from 'caral-design-system';

function App() {
  return <LoginScreen />;
}
```

## Validation Checklist
- [ ] Left splash column disappears on mobile/tablet.
- [ ] Title "Log in" uses Poppins ExtraBold 48px.
- [ ] Buttons and links use the correct `info-main` or `seidor-main` colors.
- [ ] Background is `neutral-body` (#f1f5f9) on the form side.
- [ ] Verify hover states for links and buttons.
