// ui components
import { Card, CardContent, CardHeader } from "../ui/card"

// components
import Rating from "./Rating"
import Comment from "./Comment"
import { getUserProfile } from "@/utils/actions"

type ReviewCardProps = {
	reviewData: {
		comment: string
		rating: number
		name?: string
		image?: string
		firstName?: string
		profileImage?: string
	}
	children?: React.ReactNode
}

async function ReviewCard({ reviewData, children }: ReviewCardProps) {
	const user = await getUserProfile()

	return (
		<Card className="relative">
			<CardHeader>
				<div className="flex items-center">
					<img
						src={user?.profileImage}
						alt="profile image"
						className="w-12 h-12 rounded-full object-cover"
					/>
					<div className="ml-4">
						<h3 className="text-sm font-bold">{user?.firstName}</h3>
						<Rating rating={reviewData.rating} />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<Comment comment={reviewData.comment} />
			</CardContent>
			<div className="absolute top-3 right-3">{children}</div>
		</Card>
	)
}

export default ReviewCard
