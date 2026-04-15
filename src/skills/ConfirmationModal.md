---
name: ConfirmationModalSkill
description: Mapping between the Figma Confirmation Modal and the React implementation in Caral design system.
---

## Overview
This skill defines the **ConfirmationModal** component, a specialized modal for secure processes, multi-step actions, or critical confirmations.

## Figma Reference
- **Figma Node ID**: `2558:2176`
- **Component Name**: `Modal_confirmacion`
- **Variants**: `info`, `success`, `warning`, `error`
- **Key Features**:
  - Integrated `ProgressBar` at the top (full-width, no rounding).
  - Centered `AnimatedStatus` icon matching the modal's current status.
  - Verification slot (`children`) for user tasks (inputs, switches).
  - Auto-close functionality (5s) after completion message.

## Code Mapping
| Figma Property | React Prop | Description |
|----------------|------------|-------------|
| Progress Bar   | `progress` | Number (0-100) that fills the top bar. |
| Status         | `status`   | Controls theme color and `AnimatedStatus` variant. |
| Title / Desc   | `title` / `description` | Main modal heading and body text. |
| Completion     | `isCompleted` | Triggers the success UI and auto-close timer. |
| Success Msg    | `completionMessage` | Text displayed once `isCompleted` is true. |
| Step Content   | `children` | React slot for verification logic (inputs, etc.). |

## Behavior Logic
1. **Initial State**: Modal shows `title`, `description`, and the `children` verification task.
2. **Success Trigger**: Once the verification task is met, setting `isCompleted={true}` swaps the content with the success icon and message.
3. **Auto-Close**: After a successful completion, the modal will automatically call `onClose` after 5 seconds (configurable via `autoCloseDelay`).

## Usage Example
```tsx
<ConfirmationModal
  isOpen={true}
  onClose={handleClose}
  title="Safe Mode Confirm"
  status="warning"
  progress={50}
  isCompleted={verified}
  onConfirm={handleConfirm}
>
  <MySwitch onToggle={(v) => setVerified(v)} />
</ConfirmationModal>
```

## Validation Checklist
- [ ] Confirm top `ProgressBar` has no rounding (`rounding="none"`).
- [ ] Verify `AnimatedStatus` size is consistent with design (120px).
- [ ] Test auto-close timer behavior (standard 5 seconds).
- [ ] Ensure `status="error"` correctly maps to `danger` in ProgressBar for red coloring.
