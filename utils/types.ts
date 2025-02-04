export type actionFunction = (
	prevState: any,
	formData: FormData
) => Promise<{ message: string }>

export type PropertyCardProps = {
	id: string
	name: string
	tagline: string
	country: string
	image: string
	price: number
}

export type Booking = {
	checkIn: Date
	checkOut: Date
}

export type DateRangeSelect = {
	startDate: Date
	endDate: Date
	key: string
}
