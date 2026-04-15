---
name: CalendarComponentSkill
description: Mapping between the Figma Calendar component and the React implementation in Caral design system.
---

## Overview
This skill defines how the **Calendar** pattern designed in Figma should be translated into the React component `Calendar.tsx`.

## Figma Reference
- **Figma File**: https://www.figma.com/design/Y9lqYeyumuZeot0hg2glwV/Caral-Seidor
- **Component Name**: `Calendar`
- **Pattern**: month navigation, day grid, selected dates, today highlight, disabled dates.

## Properties
- `mode` – selection mode: 'single', 'multiple', or 'range'.
- `selected` – currently selected date(s).
- `onSelect` – callback when selection changes.
- `showOutsideDays` – show days from previous/next month.
- `disabled` – array of disabled dates.
- `fromDate` / `toDate` – date range limits.

## Code Mapping
| Figma Element | React Prop | Description |
|---------------|------------|-------------|
| Month caption | `caption_label` | Month/year display. |
| Navigation arrows | `IconLeft` / `IconRight` | Prev/next month buttons. |
| Day grid | `day` | Individual day buttons. |
| Selected day | `day_selected` | Highlighted selected date. |
| Today | `day_today` | Highlighted current date. |
| Disabled day | `day_disabled` | Grayed out unavailable dates. |
| Outside day | `day_outside` | Days from other months. |

## Usage Example
```tsx
import { Calendar } from './Calendar';

// Single date selection
<Calendar
  mode="single"
  selected={selectedDate}
  onSelect={setSelectedDate}
/>

// Date range selection
<Calendar
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
/>

// Multiple dates
<Calendar
  mode="multiple"
  selected={selectedDates}
  onSelect={setSelectedDates}
/>
```

## Validation Checklist
- [ ] Confirm the Figma calendar matches the DayPicker layout.
- [ ] Verify navigation buttons use Button component with correct icons.
- [ ] Ensure selected dates use `bg-seidor-main` and `text-neutral-100`.
- [ ] Check today highlight uses neutral colors.
- [ ] Validate disabled dates are properly styled.

## Maintenance
- Update color mappings if new variants are added in Figma.
- Keep DayPicker version aligned with requirements.
- Add new stories for additional calendar features.
