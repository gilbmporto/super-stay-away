import { calculateDaysBetween } from "./calendar"

type BookingDetailsProps = {
	checkIn: Date
	checkOut: Date
	price: number
}

export const calculateTotals = ({
	checkIn,
	checkOut,
	price,
}: BookingDetailsProps) => {
	const totalNights = calculateDaysBetween({ checkIn, checkOut })
	const subTotal = totalNights * price
	const cleaning = 21
	const service = 30
	const tax = subTotal * 0.08
	const orderTotal = subTotal + cleaning + service + tax

	return { totalNights, subTotal, cleaning, service, tax, orderTotal }
}
