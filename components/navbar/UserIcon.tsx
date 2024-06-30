import { LuUser2 } from "react-icons/lu"
import { fetchProfileImage } from "@/utils/actions"
import Image from "next/image"

async function UserIcon() {
	const profileImage = await fetchProfileImage()

	return (
		<>
			{profileImage ? (
				<Image
					src={profileImage}
					alt="Profile Image"
					width={24}
					height={24}
					className="object-cover rounded-full w-6 h-6"
				/>
			) : (
				<LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />
			)}
		</>
	)
}

export default UserIcon
