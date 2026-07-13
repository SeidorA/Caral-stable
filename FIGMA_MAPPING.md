# Figma to Code Component Mapping

This document maps the UI components defined in the Figma design library to their corresponding React components in the `caral-stable` codebase.

| Figma Component Name | React Component Name | File Path |
| :--- | :--- | :--- |
| **Accordion** | `Accordion` | `src/components/Accordion.tsx` |
| **Alert / Toast** | `Alert` | `src/components/alert/Alert.tsx` |
| **Animated Status** | `AnimatedStatus` | `src/components/AnimatedStatus.tsx` |
| **Avatar** | `Avatar` | `src/components/avatar/Avatar.tsx` |
| **Button** | `Button` | `src/components/Button.tsx` |
| **Chip / Tag / Badge** | `Chip` | `src/components/Chip.tsx` |
| **Drawer / Sidebar** | `Drawer` | `src/components/Drawer.tsx` |
| **Modal / Dialog** | `Modal` | `src/components/modal/Modal.tsx` |
| **Confirmation Modal** | `ConfirmationModal` | `src/components/modal/ConfirmationModal.tsx` |
| **Navbar (Horizontal)** | `NavbarHorizontal` | `src/components/NavbarHorizontal.tsx` |
| **Sidebar (Vertical Nav)**| `NavbarVertical` | `src/components/NavbarVertical.tsx` |
| **Progress Bar** | `ProgressBar` | `src/components/ProgressBar.tsx` |
| **Select / Dropdown** | `Select` | `src/components/Select.tsx` |
| **Skeleton Loader** | `Skeleton` | `src/components/Skeleton.tsx` |
| **Spinner / Loader** | `Spinner` | `src/components/Spinner.tsx` |
| **Stepper / Steps** | `Steps` | `src/components/Steps.tsx` |
| **Table / Data Grid** | `Table` | `src/components/Table.tsx` |
| **Tabs** | `Tabs` | `src/components/Tabs.tsx` |
| **Text Input / Field** | `TextInput` | `src/components/TextInput.tsx` |
| **Timeline** | `Timeline` | `src/components/Timeline.tsx` |
| **Toggle / Switch** | `Toggle` | `src/components/Toggle.tsx` |
| **Half Pie Chart / Semi Circle** | `SemiCircleProgress` | `src/components/SemiCircleProgress.tsx` |
| **Radial Progress / Full Donut** | `RadialProgress` | `src/components/RadialProgress.tsx` |

## Design Tokens & Foundations

| Figma Element | Corresponding Code Element | File Path |
| :--- | :--- | :--- |
| **Colors** | Tailwind Configuration / CSS Variables | `src/index.css` & `tailwind.config.js` |
| **Typography** | Global Styles | `src/index.css` |
| **Icons (CaralIcon)** | `CaralIcon` (iconcaral2 library) | `src/components/icons.ts` |

---
*Note: This list is intended to be kept up to date as new components are designed in Figma and implemented in the React library.*
