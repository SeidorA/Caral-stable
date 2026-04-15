---
name: TextInputComponentSkill
description: Mapping between the Figma Text Input component and the React implementation in Caral design system.
---

## Overview
This skill defines how the **Text Input** pattern designed in Figma should be translated into the React component `TextInput.tsx`.

## Figma Reference
- **Figma File**: https://www.figma.com/design/Y9lqYeyumuZeot0hg2glwV/Caral-Seidor
- **Figma Node ID**: `2755:1965`
- **Component Name**: `Text Input`
- **Pattern**: label, input field, optional icon, optional helper text, optional required message, textarea variant

## Properties
- `label` – the field label shown above the input.
- `placeholder` – placeholder text displayed inside the field.
- `helperText` – optional gray helper text shown below the input.
- `requiredMessage` – optional validation message shown in danger color.
- `iconName` – optional `CaralIcon` icon shown inside the input.
- `iconPosition` – if the icon should appear `left` or `right`.
- `variant` – visual style for the input border and focus state.
- `multiline` – renders a textarea instead of a text input.
- `rows` – textarea row count when `multiline=true`.

## Code Mapping
| Figma Element | React Prop | Description |
|---------------|------------|-------------|
| Label         | `label`    | Displayed above the input field. |
| Input field   | `placeholder` / `value` | Standard input content and hint text. |
| Icon          | `iconName` | Optional CaralIcon inside the input field. |
| Helper text   | `helperText` | Gray text below the input. |
| Required text | `requiredMessage` | Red text below the input when validation fails. |
| Text area     | `multiline` | Uses a `textarea` element and row count. |
| Variant       | `variant` | Input border colours and focus states. |

## Usage Example
```tsx
<TextInput
  label="Email"
  placeholder="you@example.com"
  helperText="We will use this email to contact you."
  iconName="mail"
  iconPosition="left"
  variant="info"
/>

<TextInput
  label="Notes"
  placeholder="Write your notes here"
  multiline
  rows={5}
  helperText="Optional explanation or instructions."
/>
```

## Validation Checklist
- [ ] Confirm the Figma node ID `2755:1965` matches the Text Input component.
- [ ] Verify label spacing, font size, and text colors against the Figma spec.
- [ ] Ensure icon positioning and padding are consistent with the design.
- [ ] Validate helper text and required message styling.
- [ ] Check the textarea variant for proper height and border treatment.

## Maintenance
- Update the `variant` mappings if new input states are added in Figma.
- Keep the icon set aligned with `Icons` and `CaralIcon` names.
- Add new stories for any additional validation or form states.
