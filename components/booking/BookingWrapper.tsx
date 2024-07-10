"use client"

// zustand
import { useProperty } from "@/utils/store"

// hooks
import { useEffect } from "react"

// components
import BookingContainer from "./BookingContainer"
import BookingCalendar from "./BookingCalendar"

// types
import { Booking } from "@/utils/types"

type BookingWrapperProps = {
	propertyId: string
	price: number
	bookings: Booking[]
}

function BookingWrapper({ propertyId, price, bookings }: BookingWrapperProps) {
	useEffect(() => {
		useProperty.setState({
			propertyId,
			price,
			bookings,
		})
	}, [])

	return (
		<>
			<BookingCalendar />
			<BookingContainer />
		</>
	)
}

export default BookingWrapper
