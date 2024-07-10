"use client"

// hooks
import { useEffect, useState } from "react"
import { useToast } from "../ui/use-toast"

// zustand
import { useProperty } from "@/utils/store"

// components
import { Calendar } from "../ui/calendar"
import { DateRange } from "react-day-picker"

// utils
import {
	generateDisabledDates,
	generateDateRange,
	generateBlockedPeriods,
	defaultSelected,
} from "@/utils/calendar"

function BookingCalendar() {
	const currentDate = new Date()
	const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

	useEffect(() => {
		useProperty.setState({
			range,
		})
	}, [range])

	return (
		<Calendar
			mode="range"
			defaultMonth={currentDate}
			selected={range}
			onSelect={setRange}
			className="mb-4"
		/>
	)
}

export default BookingCalendar
