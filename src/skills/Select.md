---
name: SelectComponentSkill
description: Mapping between the Figma dropdown select pattern and the React implementation in Caral design system.
---

## Overview
This skill defines how the **Select** dropdown pattern from Figma should be translated into the React component `Select.tsx`.

## Figma Reference
- **Figma File**: https://www.figma.com/design/Y9lqYeyumuZeot0hg2glwV/Caral-Seidor
- **Component Name**: `Select`
- **Pattern**: label, select field, optional icon, dropdown arrow, optional helper text, optional required message.

## Properties
- `label` – the field label shown above the select.
- `placeholder` – optional hint shown when no option is selected.
- `helperText` – optional gray helper text shown below the field.
- `requiredMessage` – optional validation text shown in danger color.
- `iconName` – optional `CaralIcon` shown inside the field.
- `iconPosition` – if the icon should appear `left` or `right`.
- `variant` – visual style for the field border and focus state.
- `options` – list of options shown in the dropdown.
- `value` – current selected option value.
- `onChange` – callback fired when the selected option changes.
- `dropdown` – shows the dropdown arrow icon when true.

## Code Mapping
| Figma Element | React Prop | Description |
|---------------|------------|-------------|
| Label         | `label`    | Displayed above the select field. |
| Dropdown      | `dropdown` | Shows the dropdown arrow icon. |
| Select field  | `options` / `value` | Select input contents and selected value. |
| Icon          | `iconName` | Optional `CaralIcon` inside the select field. |
| Helper text   | `helperText` | Gray text below the field. |
| Required text | `requiredMessage` | Red text below the field when validation fails. |
| Variant       | `variant` | Field border colors and focus behavior. |

## Usage Example
```tsx
<Select
  label="Fruit"
  placeholder="Select a fruit"
  helperText="Choose one of the available options."
  options={[
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ]}
  value={selected}
  onChange={(event) => setSelected(event.target.value)}
/>

<Select
  label="Country"
  placeholder="Select a country"
  iconName="search"
  iconPosition="left"
  options={[
    { value: 'mx', label: 'Mexico' },
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
  ]}
/>
```

## Validation Checklist
- [ ] Confirm the Figma dropdown select matches the TextInput style with `Dropdown=true`.
- [ ] Verify label spacing, icon placement, and dropdown arrow alignment.
- [ ] Ensure the select field renders consistently across variants and dark mode.
- [ ] Validate helper text and required message styling.

## Maintenance
- Keep the `options` shape aligned with the select component.
- Update the `variant` mappings if new input states are added in Figma.
- Add stories for any new select states or accessibility cases.
