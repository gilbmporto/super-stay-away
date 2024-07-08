// utils
import { formatQuantity } from "@/utils/format"

type PropertyDetailsProps = {
	details: {
		bedrooms: number
		beds: number
		baths: number
		guests: number
	}
}

function PropertyDetails({
	details: { bedrooms, beds, baths, guests },
}: PropertyDetailsProps) {
	return (
		<p className="text-sm font-light">
			<span>{formatQuantity(bedrooms, "bedroom")} &middot;</span>
			<span>{formatQuantity(baths, "bath")} &middot;</span>
			<span>{formatQuantity(guests, "guest")} &middot;</span>
			<span>{formatQuantity(beds, "bed")}</span>
		</p>
	)
}

export default PropertyDetails
