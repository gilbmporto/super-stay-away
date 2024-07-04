import FavoriteToggleButton from "@/components/card/FavoriteToggleButton"
import BreadCrumbs from "@/components/properties/BreadCrumbs"
import { fetchProperty } from "@/utils/actions"
import Image from "next/image"
import { redirect } from "next/navigation"
import React from "react"

async function PropertyPage({ params }: { params: { id: string } }) {
	const property = await fetchProperty(params.id)

	if (!property) redirect("/")

	const { baths, bedrooms, beds, guests } = property
	const details = { baths, bedrooms, beds, guests }

	return (
		<section>
			<BreadCrumbs name={property.name} />
			<header className="flex justify-between items-center mt-4">
				<h1 className="text-4xl font-bold">{property.tagline}</h1>
				<div className="flex items-center gap-x-4">
					{/* Share Button */}
					<FavoriteToggleButton propertyId={property.id} />
				</div>
			</header>
		</section>
	)
}

export default PropertyPage
