// components
import PropertiesList from "./PropertiesList"
import EmptyList from "./EmptyList"

// server actions
import { fetchProperties } from "@/utils/actions"

// types
import type { PropertyCardProps } from "@/utils/types"

async function PropertiesContainer({
	category,
	search,
}: {
	category?: string
	search?: string
}) {
	const properties = (await fetchProperties({
		category,
		search,
	})) as PropertyCardProps[]

	if (properties?.length === 0) {
		return <EmptyList />
	}

	return <PropertiesList properties={properties} />
}

export default PropertiesContainer
