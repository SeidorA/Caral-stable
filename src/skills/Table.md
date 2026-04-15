---
name: TableComponentSkill
description: Documentation for the Table component in the Caral design system, mapping Figma structures to code.
---

## Overview
The **Table** component provides a structured way to display large datasets with support for custom content, sorting indicators, and interaction.

## Figma Reference
- **Figma Node ID**: `3026:2559`
- **Header Background**: `var(--neutral/gray-500)` (#e2e8f0)
- **Cell Divider**: `var(--neutral/gray-500)` bottom border.
- **Typography**:
  - Header: Poppins SemiBold, 20px (h4).
  - Body: Poppins Regular, 16px (p).

## Code Mapping
| Figma Element | React Implementation | Description |
|---------------|----------------------|-------------|
| Table Header  | `<thead>` + `columns` | Rendered with `neutral-500` background. |
| Table Row     | `data.map` + `<tr>`   | Each data item generates one row. |
| Table Cell    | `<td>` + `render()`  | Supports custom components via `render` prop. |
| Row Click     | `onRowClick`         | Enable interactions at row level. |
| Outer Border  | `hasBorder`          | Conditionally shows the outer border and shadow. |

## Interactive Features
- **Custom Renderers**: Highly flexible. You can inject `Chip`, `Avatar`, or `Button` into any cell.
- **Alignment**: Column-level control (`left`, `center`, `right`).
- **Sorting**: Visual indicator (`chevronDown`) via `sortable` prop.

## Usage Example
```tsx
const columns = [
  { key: 'name', header: 'Nombre' },
  { 
    key: 'status', 
    header: 'Estado', 
    render: (item) => <Chip text={item.status} /> 
  }
];

<Table data={users} columns={columns} onRowClick={handleEdit} />
```

## Validation Checklist
- [ ] Header background is light blue-grey (`neutral-500`).
- [ ] Top corners are rounded (`6px`).
- [ ] Row separators are subtle (`neutral-800/10`).
- [ ] Content is vertically centered in cells.
- [ ] Checkbox/Sort icons match Figma's `chevronDown`.
