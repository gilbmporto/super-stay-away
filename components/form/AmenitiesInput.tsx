"use client"

// hooks
import { useState } from "react"

// ui components
import { Checkbox } from "../ui/checkbox"

// amenities data
import { amenities, Amenity } from "@/utils/amenities"

function AmenitiesInput({ defaultValue }: { defaultValue?: Amenity[] }) {
	const amenitiesWithIcons = defaultValue?.map(({ name, selected }) => {
		return {
			name,
			selected,
			icon: amenities.find((a) => a.name === name)!.icon,
		}
	})

	const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
		amenitiesWithIcons ?? amenities
	)

	const handleChange = (amenity: Amenity) => {
		setSelectedAmenities((prevSelectedAmenities) => {
			return prevSelectedAmenities.map((prevAmenity) => {
				if (prevAmenity.name === amenity.name) {
					return {
						...prevAmenity,
						selected: !prevAmenity.selected,
					}
				}
				return prevAmenity
			})
		})
	}

	return (
		<section>
			<input
				type="hidden"
				name="amenities"
				value={JSON.stringify(selectedAmenities)}
			/>
			<div className="grid grid-cols-2 gap-4">
				{selectedAmenities.map((amenity) => (
					<div key={amenity.name} className="flex items-center space-x-2">
						<Checkbox
							id={amenity.name}
							name={amenity.name}
							checked={amenity.selected}
							onCheckedChange={() => handleChange(amenity)}
						/>
						<label
							htmlFor={amenity.name}
							className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center"
						>
							{amenity.name} <amenity.icon className="w-4 h-4" />
						</label>
					</div>
				))}
			</div>
		</section>
	)
}

export default AmenitiesInput
