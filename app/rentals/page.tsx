import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

function RentalsPage() {
	return (
		<div>
			<h1 className="text-4xl">My Rentals</h1>
			<Button asChild variant="default">
				<Link href="/rentals/create" className="mt-4">
					Register Property
				</Link>
			</Button>
		</div>
	)
}

export default RentalsPage
