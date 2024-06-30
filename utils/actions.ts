"use server"

import { imageSchema, profileSchema, validateWithZodSchema } from "./schemas"
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import db from "./db"
import { uploadImage } from "./supabase"

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
				profileImage: validatedData.profileImage || "",
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
	const user = await getAuthUser()

	try {
		const image = formData.get("image") as File

		if (!image) {
			throw new Error("No image file found in form data")
		}

		validateWithZodSchema(imageSchema, {
			profileImage: {
				size: image.size,
				type: image.type,
				name: image.name,
				lastModified: image.lastModified,
			},
		})

		const fullPath = await uploadImage(image)

		await db.profile.update({
			where: {
				clerkId: user.id,
			},
			data: {
				profileImage: fullPath,
			},
		})

		revalidatePath("/profile")

		return { message: "Profile image updated successfully" }
	} catch (error) {
		return renderError(error)
	}
}
