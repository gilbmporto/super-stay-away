import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import { LuAlignLeft } from "react-icons/lu"
import { Button } from "../ui/button"
import { links } from "@/utils/links"
import Link from "next/link"
import UserIcon from "./UserIcon"
import SignOutLink from "./SignOutLink"
import { auth } from "@clerk/nextjs/server"

function LinksDropdown() {
	const { userId } = auth()
	let navLinks = [...links]

	if (userId && userId !== process.env.ADMIN_USER_ID) {
		navLinks = navLinks.filter((link) => link.label !== "Admin")
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex gap-4 max-w-[100px]">
					<LuAlignLeft className="w-6 h-6" />
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-52" align="start" sideOffset={10}>
				<SignedOut>
					<DropdownMenuItem>
						<SignInButton mode="modal">
							<button className="w-full text-left">Login</button>
						</SignInButton>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<SignUpButton mode="modal">
							<button className="w-full text-left ">Register</button>
						</SignUpButton>
					</DropdownMenuItem>
				</SignedOut>
				<SignedIn>
					{navLinks.map((link) => {
						return (
							<DropdownMenuItem key={link.href}>
								<Link href={link.href} className="capitalize w-full">
									{link.label}
								</Link>
							</DropdownMenuItem>
						)
					})}
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignOutLink />
					</DropdownMenuItem>
				</SignedIn>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LinksDropdown
