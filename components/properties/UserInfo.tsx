import Image from "next/image"

type UserInfoProps = {
	profile: {
		profileImage: string
		firstName: string
	}
}

function UserInfo({ profile: { profileImage, firstName } }: UserInfoProps) {
	return (
		<article className="grid grid-cols-[auto,1fr] gap-4 mt-4">
			<Image
				src={profileImage}
				alt={`${firstName}'s Profile Picture`}
				width={40}
				height={40}
				className="rounded-full w-12 h-12 object-cover"
			/>
			<div className="flex flex-col">
				<p>
					Hosted by <span className="font-bold">{firstName}</span>
				</p>
				<p className="text-muted-foreground font-light">
					Superhost &middot; 3 years hosting
				</p>
			</div>
		</article>
	)
}

export default UserInfo
