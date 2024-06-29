// components
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import { SubmitButton } from "@/components/form/Buttons"
import ImageInputContainer from "@/components/form/ImageInputContainer"

// server actions
import {
	updateProfileAction,
	getUserProfile,
	updateProfileImageAction,
} from "@/utils/actions"

async function ProfilePage() {
	const profile = await getUserProfile()

	return (
		<section>
			<h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
			<div className="border p-8 rounded-md">
				<ImageInputContainer
					image={profile?.profileImage!}
					name={profile?.username!}
					action={updateProfileImageAction}
					text="Update Profile Image"
				/>
				<FormContainer action={updateProfileAction}>
					<div className="grid md:grid-cols-2 gap-4 mt-4">
						<FormInput
							name="firstName"
							label="First Name"
							type="text"
							defaultValue={
								profile && profile.firstName ? profile.firstName : ""
							}
							placeholder="Your first name..."
						/>
						<FormInput
							name="lastName"
							label="Last Name"
							type="text"
							defaultValue={profile && profile.lastName ? profile.lastName : ""}
							placeholder="Your last name..."
						/>
						<FormInput
							name="username"
							label="User Name"
							type="text"
							defaultValue={profile && profile.username ? profile.username : ""}
							placeholder="Your username..."
						/>
					</div>
					<SubmitButton text="Update Profile" className="mt-8" />
				</FormContainer>
			</div>
		</section>
	)
}

export default ProfilePage
