"use client"

// hooks
import { useState } from "react"

// components
import Image from "next/image"
import { Button } from "../ui/button"
import FormContainer from "./FormContainer"
import ImageInput from "./ImageInput"
import { SubmitButton } from "./Buttons"
import { LuUser2 } from "react-icons/lu"

// types
import { type actionFunction } from "@/utils/types"

type ImageInputContainerProps = {
	image: string
	name: string
	action: actionFunction
	text: string
	children?: React.ReactNode
}

function ImageInputContainer(props: ImageInputContainerProps) {
	const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false)

	const { image, name, action, text } = props

	const userIcon = (
		<LuUser2 className="h-24 w-24 bg-primary rounded text-white mb-4" />
	)

	return (
		<div>
			{image ? (
				<Image
					src={image}
					alt={name}
					width={100}
					height={100}
					className="object-cover mb-4 w-24 h-24 rounded-lg"
				/>
			) : (
				userIcon
			)}
			<Button
				variant="outline"
				size="sm"
				onClick={() => setIsUpdateFormVisible((prev) => !prev)}
			>
				{text}
			</Button>
			{isUpdateFormVisible && (
				<div className="max-w-lg mt-4">
					<FormContainer action={action}>
						{props.children}
						<ImageInput />
						<SubmitButton text="Update" size="sm" />
					</FormContainer>
				</div>
			)}
		</div>
	)
}

export default ImageInputContainer
