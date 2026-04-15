# Tabs

The Tabs component provides a horizontal tab navigation bar using Button components in small size with the tab variant. It supports active and inactive states with appropriate styling and optional icons.

## Design System Integration

- **Background**: Uses `neutral-500` for the container background
- **Active State**: `hasBorder=false` (solid background `neutral-800`, light text)
- **Inactive State**: `hasBorder=true` (light background `neutral-500`, dark text)
- **Size**: Small buttons (`size="sm"`)
- **Icons**: Supports CaralIcon integration via `iconName` prop

## Props

### TabsProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabItem[]` | - | Array of tab items |
| `activeIndex` | `number` | - | Index of the currently active tab |
| `onChange` | `(index: number) => void` | - | Callback function called when a tab is clicked |
| `className` | `string` | `''` | Additional CSS classes for the container |

### TabItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | The text label for the tab |
| `iconName` | `Icons` | `undefined` | Optional icon name from the CaralIcon library |

## Usage

```tsx
import { Tabs } from 'caral-stable';

const MyComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Overview' },
    { label: 'Settings', iconName: 'settings' },
    { label: 'Analytics' }
  ];

  return (
    <Tabs
      tabs={tabs}
      activeIndex={activeTab}
      onChange={setActiveTab}
    />
  );
};
```

## States

- **Active Tab**: No border, darker background (`neutral-800`), light text
- **Inactive Tab**: With border, lighter background (`neutral-500`), dark text
- **Hover**: Changes background color as defined in Button tab variant
- **Focus**: Accessible focus states

## Accessibility

- Uses semantic button elements
- Supports keyboard navigation
- Maintains focus management

## Figma Reference

Component designed based on Figma designs: [Caral-Seidor Tabs](https://www.figma.com/design/Y9lqYeyumuZeot0hg2glwV/Caral-Seidor?node-id=4507-2718&t=4wUG9fa6WmV09c4V-4)

## Related Components

- **Button**: Base component used for individual tabs
- **CaralIcon**: Icon library for tab icons