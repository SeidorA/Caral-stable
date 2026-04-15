"use client"

import { CaralIcon } from "iconcaral2"
import * as React from "react"
import { DayPicker } from "react-day-picker"

import { Button } from "../Button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [showMonths, setShowMonths] = React.useState(false)
  const [displayDate, setDisplayDate] = React.useState<Date>(
    props.defaultMonth || new Date()
  )

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  const handleMonthSelect = (monthIndex: number) => {
    const newDate = new Date(displayDate.getFullYear(), monthIndex, 1)
    setDisplayDate(newDate)
    
    // Actualizar el mes en el DayPicker
    if (props.onMonthChange) {
      props.onMonthChange(newDate)
    }
    
    setShowMonths(false)
  }

  const handlePrevMonth = () => {
    const newDate = new Date(displayDate.getFullYear(), displayDate.getMonth() - 1, 1)
    setDisplayDate(newDate)
  }

  const handleNextMonth = () => {
    const newDate = new Date(displayDate.getFullYear(), displayDate.getMonth() + 1, 1)
    setDisplayDate(newDate)
  }

  const handlePrevYear = () => {
    const newDate = new Date(displayDate.getFullYear() - 1, displayDate.getMonth(), 1)
    setDisplayDate(newDate)
  }

  const handleNextYear = () => {
    const newDate = new Date(displayDate.getFullYear() + 1, displayDate.getMonth(), 1)
    setDisplayDate(newDate)
  }

  if (showMonths) {
    return (
      <div className={["p-p-2 bg-neutral-100 rounded-lg border-neutral-400 border-2 min-w-[243px]", className].filter(Boolean).join(' ')}>
        <div className="flex justify-between pt-1 relative items-center mb-4">
          <Button
            variant="light"
            size="sm"
            className="absolute left-1"
            onClick={handlePrevYear}
          >
            <CaralIcon name="chevronLeft" size="s" />
          </Button>
          <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {displayDate.getFullYear()}
          </div>
          <Button
            variant="light"
            size="sm"
            className="absolute right-1"
            onClick={handleNextYear}
          >
            <CaralIcon name="chevronRigth" size="s" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {months.map((month, index) => (
            <button
              key={month}
              onClick={() => handleMonthSelect(index)}
              className={`p-2 text-sm rounded-md transition-colors ${
                index === displayDate.getMonth()
                  ? "bg-seidor-main text-neutral-100 hover:bg-seidor-hard"
                  : "bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-600"
              }`}
            >
              {month.slice(0, 3)}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <Button
            variant="light"
            size="sm"
            className="w-full"
            onClick={() => setShowMonths(false)}
          >
            Volver a días
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={["p-2 bg-neutral-100 rounded-lg border-neutral-400 border-2 ", className].filter(Boolean).join(' ')}>
      <div className="flex items-center justify-between mb-3 bg-neutral-100 p-4 border-b-2 border-neutral-400">
        <Button
          variant="light"
          size="sm"
          onClick={handlePrevMonth}
        >
          <CaralIcon name="chevronLeft" size="s" />
        </Button>

        <button
          type="button"
          onClick={() => setShowMonths(true)}
          className="text-sm font-medium text-neutral-800"
        >
          {displayDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
        </button>

        <Button
          variant="light"
          size="sm"
          onClick={handleNextMonth}
        >
          
          <CaralIcon name="chevronRigth" size="s"/>
        </Button>
      </div>

      <DayPicker
        showOutsideDays={showOutsideDays}
        month={displayDate}
        onMonthChange={setDisplayDate}
        hideNavigation
        className="w-full"
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          month_caption: "hidden",
          caption_label: "sr-only",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-neutral-500 ",
          row: "flex w-full mt-2",
          cell: [
            "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-neutral-100 dark:[&:has([aria-selected])]:bg-neutral-700 [&:has([aria-selected].day-outside)]:bg-neutral-100/50 dark:[&:has([aria-selected].day-outside)]:bg-neutral-700/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
            props.mode === "range"
              ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
              : "[&:has([aria-selected])]:rounded-md"
          ].filter(Boolean).join(' '),
          day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-neutral-100 dark:hover:bg-neutral-700",
          day_range_start: "day-range-start",
          day_range_end: "day-range-end",
          day_selected:
            "bg-seidor-main text-neutral-100 hover:bg-seidor-hard hover:text-neutral-100 focus:bg-seidor-main focus:text-neutral-100",
          day_today: "bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100",
          day_outside:
            "day-outside text-neutral-100 ",
          day_disabled: "text-neutral-400 dark:text-neutral-600 opacity-50",
          day_range_middle:
            "aria-selected:bg-neutral-100 dark:aria-selected:bg-neutral-700 aria-selected:text-neutral-900 dark:aria-selected:text-neutral-100",
          day_hidden: "invisible",
          ...classNames,
        }}
        {...props}
      />
    </div>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
