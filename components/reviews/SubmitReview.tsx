"use client"

// hooks
import { useState } from "react"

// server actions
import { createReviewAction } from "@/utils/actions"

// components
import { SubmitButton } from "../form/Buttons"
import FormContainer from "../form/FormContainer"
import { Card } from "../ui/card"
import RatingInput from "../form/RatingInput"
import TextAreaInput from "../form/TextAreaInput"
import { Button } from "../ui/button"

function SubmitReview({ propertyId }: { propertyId: string }) {
	const [isReviewFormOpen, setIsReviewFormOpen] = useState(false)

	return (
		<div className="mt-8">
			<Button onClick={() => setIsReviewFormOpen((prev) => !prev)}>
				Leave a Review
			</Button>
			{isReviewFormOpen && (
				<Card className="p-8 mt-8">
					<FormContainer action={createReviewAction}>
						<input type="hidden" name="propertyId" value={propertyId} />
						<RatingInput name="rating" labelText="Rating" />
						<TextAreaInput
							name="comment"
							labelText="Your thoughts on this property"
							defaultValue="Amazing experience!"
						/>
						<SubmitButton text="Submit Review" className="mt-4" />
					</FormContainer>
				</Card>
			)}
		</div>
	)
}

export default SubmitReview
