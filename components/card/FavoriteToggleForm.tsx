"use client"

// next utils
import { usePathname } from "next/navigation"

// components
import FormContainer from "../form/FormContainer"
import { CardSubmitButton } from "../form/Buttons"

// server actions
import { toggleFavoriteAction } from "@/utils/actions"

// types
type FavoriteToggleFormProps = {
	propertyId: string
	favoriteId: string | null
}

function FavoriteToggleForm({
	propertyId,
	favoriteId,
}: {
	propertyId: string
	favoriteId: string
}) {
	const pathname = usePathname()
	const toggleAction = toggleFavoriteAction.bind(null, {
		propertyId,
		favoriteId,
		pathname,
	})

	return (
		<FormContainer action={toggleAction}>
			<CardSubmitButton
				isFavorite={favoriteId ? true : false}
			></CardSubmitButton>
		</FormContainer>
	)
}

export default FavoriteToggleForm
