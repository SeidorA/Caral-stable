---
name: ToggleComponentSkill
description: Guidelines for implementing and using the Toggle (switch) component in the Caral design system.
---

## Overview
The **Toggle** is a selection control that allows users to switch between two mutually exclusive states (on/off).

## Figma Reference
- **Figma Node ID**: `2385:522`
- **Track Dimensions**: 44px x 24px
- **Colors**:
  - **On**: `var(--seidor-main)` (#07153a)
  - **Off**: `var(--neutral-800)` at 30% opacity.
  - **Handle**: White (#FFFFFF)
- **Label**: Poppins Medium, 14px.

## Code Mapping
| Figma State | Property / Value | CSS Implementation |
|-------------|-------------------|--------------------|
| Default (Off) | `property1="Default"` | Background grey-blue, handle at left. |
| Active (On) | `property1="Variant3"` | Background Seidor-Main, handle at 20px offset. |
| Disabled | N/A | 50% opacity, `cursor-not-allowed`. |

## Interactive Logic
- **Controlled Component**: Requires `checked` and `onChange` props.
- **Accessibility**: Includes `role="switch"` and keyboard support (Space/Enter).

## Usage Example
```tsx
const [darkMode, setDarkMode] = useState(false);

<Toggle 
  checked={darkMode} 
  onChange={setDarkMode} 
  label="Habilitar Modo Oscuro"
/>
```

## Validation Checklist
- [ ] Toggle track changes color smoothly (300ms duration).
- [ ] Handle slides smoothly to the right when active.
- [ ] Label is correctly aligned and uses `neutral-800`.
- [ ] Component is keyboard accessible.
- [ ] Disabled state prevents clicks and shows reduced opacity.
