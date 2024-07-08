"use client"

// I won't describe these imports =P
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { icon } from "leaflet"
const iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png"
const markerIcon = icon({
	iconUrl,
	iconSize: [25, 41],
})

// utils
import { findCountryByCode } from "@/utils/countries"

// components
import CountryFlagAndName from "../card/CountryFlagAndName"
import Title from "./Title"

function PropertyMap({ countryCode }: { countryCode: string }) {
	const defaultLocation = [51.505, -0.09] as [number, number]
	const location =
		(findCountryByCode(countryCode)?.location as [number, number]) ||
		defaultLocation

	return (
		<div className="mt-4">
			<div className="mb-4">
				<Title text="Locatiom where you'll be staying" />
				<CountryFlagAndName countryCode={countryCode} />
			</div>
			<MapContainer
				scrollWheelZoom={false}
				zoomControl={false}
				className="h-[50vh] rounded-lg relative z-0"
				center={location || defaultLocation}
				zoom={7}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<ZoomControl position="bottomright" />
				<Marker position={location || defaultLocation} icon={markerIcon} />
			</MapContainer>
		</div>
	)
}

export default PropertyMap
