"use client"

// ui components
import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"
import { SignInButton } from "@clerk/nextjs"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { LuTrash2, LuPenSquare } from "react-icons/lu"

// hooks
import { useFormStatus } from "react-dom"

type BtnSize = "default" | "sm" | "lg"

type SubmitButtonProps = {
	className?: string
	text?: string
	size?: BtnSize
}

export function SubmitButton({
	className = "",
	text = "submit",
	size = "lg",
}: SubmitButtonProps) {
	const { pending } = useFormStatus()

	return (
		<Button
			type="submit"
			size={size}
			className={`${className} capitalize`}
			disabled={pending}
		>
			{pending ? (
				<>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					Please wait...
				</>
			) : (
				text
			)}
		</Button>
	)
}

export const CardSignInButton = () => {
	return (
		<SignInButton mode="modal">
			<Button
				type="button"
				size="icon"
				variant="outline"
				className="p-2 cursor-pointer"
				asChild
			>
				<FaRegHeart />
			</Button>
		</SignInButton>
	)
}

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
	const { pending } = useFormStatus()

	return (
		<Button
			type="submit"
			size="icon"
			variant="outline"
			className="p-2 cursor-pointer"
		>
			{pending ? (
				<Loader2 className="h-4 w-4 animate-spin" />
			) : isFavorite ? (
				<FaHeart />
			) : (
				<FaRegHeart />
			)}
		</Button>
	)
}

type ActionType = "edit" | "delete"

export const IconButton = ({ actionType }: { actionType: ActionType }) => {
	const { pending } = useFormStatus()

	const renderIcon = () => {
		switch (actionType) {
			case "edit":
				return <LuPenSquare size={24} />
			case "delete":
				return <LuTrash2 size={24} />
			default:
				const never: never = actionType
				throw new Error(`Invalid action type: ${never}`)
		}
	}

	return (
		<Button
			type="submit"
			size="icon"
			variant="link"
			className="p-2 cursor-pointer"
		>
			{pending ? <Loader2 className="h-4 w-4 animate-spin" /> : renderIcon()}
		</Button>
	)
}
