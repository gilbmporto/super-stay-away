import { FaStar } from "react-icons/fa"

function PropertyRating({
	propertyId,
	inPage,
}: {
	propertyId: string
	inPage: boolean
}) {
	// temp values
	const rating = 4.7
	const count = 98

	const className = `flex gap-1 items-center ${inPage ? "text-md" : "text-sm"}`

	const countText = count > 1 ? "reviews" : "review"
	const countValue = `(${count}) ${inPage ? countText : ""}`

	return (
		<span className={className}>
			<FaStar className="w-4 h-4" />
			{rating} {countValue}
		</span>
	)
}

export default PropertyRating
