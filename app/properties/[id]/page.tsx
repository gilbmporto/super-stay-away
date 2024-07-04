import { fetchProperty } from "@/utils/actions"
import Image from "next/image"
import React from "react"

async function PropertyPage({ params }: { params: { id: string } }) {
	const property = await fetchProperty(params.id)

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl">{property && `${property.name}`}</h1>
			{property && (
				<Image
					src={property.image}
					alt={property.name}
					width={400}
					height={400}
					className="object-cover mx-auto my-8 rounded-lg shadow-lg"
				/>
			)}
			<p>{property && `${property.description}`}</p>
		</div>
	)
}

export default PropertyPage
