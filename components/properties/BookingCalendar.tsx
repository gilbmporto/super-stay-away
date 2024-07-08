"use client"

// hooks
import { useState } from "react"

// components
import { Calendar } from "../ui/calendar"
import { DateRange } from "react-day-picker"

function BookingCalendar() {
	const currentDate = new Date()
	const defaultSelected: DateRange = {
		from: undefined,
		to: undefined,
	}

	const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

	return (
		<Calendar
			mode="range"
			defaultMonth={currentDate}
			selected={range}
			onSelect={setRange}
			className="-mt-1"
		/>
	)
}

export default BookingCalendar
