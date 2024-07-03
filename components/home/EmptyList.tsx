import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"

function EmptyList({
	heading = "No items in the list",
	message = "Keep exploring our properties",
	btnText = "Back Home",
}: {
	heading?: string
	message?: string
	btnText?: string
}) {
	return (
		<div className="mt-4">
			<h2 className="text-xl font-bold">{heading}</h2>
			<p className="textlg">{message}</p>
			<Button asChild className="mt-4 capitalize" size="lg">
				<Link href="/">{btnText}</Link>
			</Button>
		</div>
	)
}

export default EmptyList
