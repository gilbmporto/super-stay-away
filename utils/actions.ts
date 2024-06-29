"use server"

import { profileSchema } from "./schemas"
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import db from "./db"

export const createProfileAction = async (
	prevState: any,
	formData: FormData
) => {
	try {
		const user = await currentUser()
		if (!user) throw new Error("Please, create a new profile first")

		const rawData = Object.fromEntries(formData.entries())
		const validatedData = profileSchema.parse(rawData)

		await db.profile.create({
			data: {
				clerkId: user.id,
				email: user.emailAddresses[0].emailAddress,
				profileImage: user.imageUrl ?? "",
				firstName: validatedData.firstName,
				lastName: validatedData.lastName,
				username: validatedData.username,
			},
		})

		await clerkClient.users.updateUserMetadata(user.id, {
			privateMetadata: {
				hasProfile: true,
			},
		})
	} catch (error: any) {
		console.log(error.message)
		const errorMessage = JSON.parse(error.message)
		console.log(errorMessage[0].message)
		return { message: errorMessage[0].message }
	}

	redirect("/")
}

export const getUserProfile = async () => {
	try {
		const user = await currentUser()
		if (!user) throw new Error("Please, create a new profile first")

		const profile = await db.profile.findFirst({
			where: {
				clerkId: user.id,
			},
		})

		if (!profile) throw new Error("Please, create a new profile first")

		return profile
	} catch (error: any) {
		console.log(error.message)
	}
}
