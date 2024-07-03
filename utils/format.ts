export const formatCurrency = (price: number | null) => {
	const value = price || 0

	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(value)
}
