// types
import type { PropertyCardProps } from "@/utils/types"

// components
import Image from "next/image"
import Link from "next/link"
import CountryFlagAndName from "./CountryFlagAndName"
import PropertyRating from "./PropertyRating"
import FavoriteToggleButton from "./FavoriteToggleButton"

// utils
import { formatCurrency } from "@/utils/format"

function PropertyCard({ property }: { property: PropertyCardProps }) {
	const { name, image, price, country, id: propertyId, tagline } = property

	return (
		<article className="group relative">
			<Link href={`/properties/${propertyId}`}>
				<div className="relative h-[300px] mb-2 overflow-hidden rounded-lg">
					<Image
						src={image}
						alt={name}
						fill
						sizes="(max-width:768px) 100vw, 50vw"
						className="object-cover rounded-md transform 
            group-hover:scale-110 transition-transform duration-500"
					/>
				</div>
				<div className="flex justify-between items-center">
					<h3 className="text-sm font-semibold mt-1">
						{name.substring(0, 30)}
					</h3>
					{/* Property Rating */}
				</div>
				<p className="text-sm mt-1 text-muted-foreground">
					{tagline.substring(0, 50)}
				</p>
				<div className="flex justify-between items-center mt-1">
					<p className="text-sm mt-1">
						<span className="font-semibold">{formatCurrency(price)}</span>
						/night
					</p>
					{/* Country and Flag */}
				</div>
			</Link>
			<div className="absolute top-5 right-5 z-5">
				{/* Favorite Toggle Button */}
			</div>
		</article>
	)
}

export default PropertyCard
