"use client"

// hooks
import { useState } from "react"

// components
import Title from "./Title"
import { Button } from "../ui/button"

function Description({ description }: { description: string }) {
	const [isFullDescriptionBeingViewed, setIsFullDescriptionBeingViewed] =
		useState(false)
	const words = description.split(" ")
	const isLongDescription = words.length > 100

	function toggleFullDescription() {
		setIsFullDescriptionBeingViewed(!isFullDescriptionBeingViewed)
	}

	const displayedDescription =
		isFullDescriptionBeingViewed && !isLongDescription
			? description
			: words.slice(0, 100).join(" ") + "..."

	return (
		<article className="mt-4">
			<Title text="Description" />
			<p className="text-muted-foreground font-light leading-loose">
				{displayedDescription}
			</p>
			{isLongDescription && (
				<Button variant="link" className="pl-0" onClick={toggleFullDescription}>
					{isFullDescriptionBeingViewed ? "Show less" : "Show more"}
				</Button>
			)}
		</article>
	)
}

export default Description
