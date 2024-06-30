"use client"

// hooks
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { useToast } from "../ui/use-toast"

// server actions
import { actionFunction } from "@/utils/types"

// state is a message to be sent to user
const initialState = {
	message: "",
}

function FormContainer({
	action,
	children,
}: {
	action: actionFunction
	children: React.ReactNode
}) {
	const [state, formAction] = useFormState(action, initialState)
	const { toast } = useToast()

	useEffect(() => {
		if (state.message) {
			if (state.message.includes("Error")) {
				toast({ description: state.message, variant: "destructive" })
				return
			}
			toast({ description: state.message })
		}
	}, [state])

	return <form action={formAction}>{children}</form>
}

export default FormContainer
