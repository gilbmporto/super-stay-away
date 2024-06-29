"use client"

import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"
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
