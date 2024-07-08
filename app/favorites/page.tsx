import EmptyList from "@/components/home/EmptyList"
import PropertiesList from "@/components/home/PropertiesList"
import { fetchFavorites } from "@/utils/actions"
import { PropertyCardProps } from "@/utils/types"
import React from "react"

export const dynamic = "force-dynamic"

async function FavoritesPage() {
	const favorites = (await fetchFavorites()) as PropertyCardProps[]

	if (favorites?.length === 0) {
		return <EmptyList />
	}

	return <PropertiesList properties={favorites} />
}

export default FavoritesPage
