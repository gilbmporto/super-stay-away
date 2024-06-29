"use server"

import {
	profileImageSchema,
	profileSchema,
	validateWithZodSchema,
} from "./schemas"
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import db from "./db"

// helper function to get the current user
const getAuthUser = async () => {
	const user = await currentUser()
	if (!user) throw new Error("You must be logged in to create a profile")
	if (!user.privateMetadata.hasProfile) redirect("/profile/create")
	return user
}

const renderError = (error: unknown) => {
	return {
		message:
			error instanceof Error
				? `Error: ${error.message}`
				: "Error: Something went wrong",
	}
}

export const createProfileAction = async (
	prevState: any,
	formData: FormData
) => {
	try {
		const user = await currentUser()
		if (!user) throw new Error("Please, create a new profile first")

		const rawData = Object.fromEntries(formData.entries())
		const validatedData = validateWithZodSchema(profileSchema, rawData)

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
	} catch (error) {
		renderError(error)
	}

	redirect("/")
}

export const getUserProfile = async () => {
	try {
		const user = await getAuthUser()

		const profile = await db.profile.findFirst({
			where: {
				clerkId: user.id,
			},
		})

		if (!profile) redirect("/profile/create")

		return profile
	} catch (error) {
		renderError(error)
	}
}

export const fetchProfileImage = async () => {
	try {
		const user = await currentUser()
		if (!user) throw new Error("Please, create a new profile first")

		const profile = await db.profile.findUnique({
			where: {
				clerkId: user.id,
			},
			select: {
				profileImage: true,
			},
		})

		if (!profile) throw new Error("Please, create a new profile first")

		return profile?.profileImage
	} catch (error) {
		renderError(error)
	}
}

export const updateProfileAction = async (
	_: any,
	formData: FormData
): Promise<{ message: string }> => {
	try {
		const user = await getAuthUser()

		const rawData = Object.fromEntries(formData.entries())
		const validatedData = validateWithZodSchema(profileSchema, rawData)

		await db.profile.update({
			where: {
				clerkId: user.id,
			},
			data: {
				firstName: validatedData.firstName,
				lastName: validatedData.lastName,
				username: validatedData.username,
				profileImage: validatedData.profileImage,
			},
		})

		revalidatePath("/profile")
		return { message: "Profile updated successfully" }
	} catch (error) {
		return renderError(error)
	}
}

export const updateProfileImageAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const image = formData.get("image") as unknown as File
	const validatedData = validateWithZodSchema(profileImageSchema, { image })
	console.log(validatedData)

	return { message: "Profile image updated successfully" }
}
