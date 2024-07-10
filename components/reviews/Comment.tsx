"use client"

// hooks
import { useState } from "react"

// ui components
import { Button } from "../ui/button"

function Comment({ comment }: { comment: string }) {
	const [isExpanded, setIsExpanded] = useState(false)

	function toggleExpansion() {
		setIsExpanded(!isExpanded)
	}

	const longComment = comment.length > 130
	const displayedComment =
		longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment

	return (
		<div>
			<p className="text-sm">{displayedComment}</p>
			{longComment && (
				<Button
					variant="link"
					className="pl-0 text-muted-foreground"
					onClick={toggleExpansion}
				>
					{isExpanded ? "Show less" : "Show more"}
				</Button>
			)}
		</div>
	)
}

export default Comment
