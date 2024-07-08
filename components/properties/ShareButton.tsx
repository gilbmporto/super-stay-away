"use client"

// ui components
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { LuShare2 } from "react-icons/lu"

// react share library
import {
	TwitterShareButton,
	EmailShareButton,
	LinkedinShareButton,
	TwitterIcon,
	EmailIcon,
	LinkedinIcon,
} from "react-share"

function ShareButton({
	propertyId,
	name,
}: {
	propertyId: string
	name: string
}) {
	const url = process.env.NEXT_PUBLIC_WEBSITE_URL
	const shareUrl = `${url}/properties/${propertyId}`

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button size="icon" variant="outline" className="p-2">
					<LuShare2 />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				side="top"
				align="end"
				sideOffset={10}
				className="flex items-center gap-x-2 justify-center w-full"
			>
				<TwitterShareButton url={shareUrl} title={name}>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
				<EmailShareButton url={shareUrl} subject={name}>
					<EmailIcon size={32} round />
				</EmailShareButton>
				<LinkedinShareButton url={shareUrl} title={name}>
					<LinkedinIcon size={32} round />
				</LinkedinShareButton>
			</PopoverContent>
		</Popover>
	)
}

export default ShareButton
