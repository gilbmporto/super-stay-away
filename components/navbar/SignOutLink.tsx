"use client"

import { useToast } from "../ui/use-toast"
import { SignOutButton } from "@clerk/nextjs"

function SignOutLink() {
	const { toast } = useToast()

	const handleLogout = () => {
		toast({
			title: "Signed out",
			description: "You've been signed out",
		})
	}

	return (
		<SignOutButton redirectUrl="/">
			<button className="w-full text-left p-2" onClick={handleLogout}>
				Logout
			</button>
		</SignOutButton>
	)
}

export default SignOutLink
