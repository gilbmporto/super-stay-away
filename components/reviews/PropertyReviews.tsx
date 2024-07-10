// server actions
import { fetchPropertyReviews } from "@/utils/actions"

// components
import Title from "../properties/Title"
import ReviewCard from "./ReviewCard"

async function PropertyReviews({ propertyId }: { propertyId: string }) {
	const reviews = await fetchPropertyReviews(propertyId)

	if (reviews?.length === 0) {
		return null
	}

	return (
		<div className="mt-8">
			<Title text="Reviews" />
			<div className="grid md:grid-cols-2 gap-8 mt-4">
				{reviews &&
					reviews.map((review) => {
						const { comment, rating } = review
						const { firstName, profileImage } = review.profile
						const reviewData = { comment, rating, firstName, profileImage }

						return <ReviewCard key={review.id} reviewData={reviewData} />
					})}
			</div>
		</div>
	)
}

export default PropertyReviews
