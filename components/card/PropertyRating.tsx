// ui components
import { FaStar } from "react-icons/fa"

// server actions
import { fetchPropertyRating } from "@/utils/actions"

async function PropertyRating({
	propertyId,
	inPage,
}: {
	propertyId: string
	inPage: boolean
}) {
	// temp values
	const { rating, count } = await fetchPropertyRating(propertyId)

	if (count === 0) return null

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
