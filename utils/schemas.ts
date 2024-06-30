import * as z from "zod"
import { ZodSchema } from "zod"

type UserProps = {
	firstName: string
	lastName: string
	username: string
	profileImage?: string
}

export const imageSchema = z.object({
	profileImage: validateFile(),
})

export const profileSchema: ZodSchema<UserProps> = z.object({
	firstName: z.string().min(2, "First name must be at least 2 characters"),
	lastName: z.string().min(2, "First name must be at least 2 characters"),
	username: z.string().min(2, "First name must be at least 2 characters"),
})

export function validateWithZodSchema<T>(
	schema: ZodSchema<T>,
	data: unknown
): T {
	const result = schema.safeParse(data)

	if (!result.success) {
		const errors = result.error.errors.map((error) => error.message)
		throw new Error(errors.join(", "))
	}

	return result.data
}

function validateFile() {
	const maxUploadSize = 1024 * 1024 * 5 // 5 MB
	const acceptedTypes = ["image/png", "image/jpeg", "image/jpg"]

	return z.object({
		size: z.number().max(maxUploadSize, "File size must be less than 5 MB"),
		type: z
			.string()
			.refine(
				(type) => acceptedTypes.includes(type),
				"File type must be png, jpeg, or jpg"
			),
		name: z.string(),
		lastModified: z.number(),
	})
}

// function validateFile() {
// 	const maxUploadSize = 1024 * 1024 * 5
// 	const acceptedFilesTypes = ["image/"]
// 	return z
// 		.instanceof(File)
// 		.refine((file) => {
// 			return !file || file.size <= maxUploadSize
// 		}, "File size must be less than 5 MB")
// 		.refine((file) => {
// 			return (
// 				!file || acceptedFilesTypes.some((type) => file.type.startsWith(type))
// 			)
// 		}, "File must be an image")
// }
