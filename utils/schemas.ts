import * as z from "zod"
import { ZodSchema } from "zod"

type UserProps = {
	firstName: string
	lastName: string
	username: string
	profileImage?: string
}

export const profileImageSchema = z.object({
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
	const maxUploadSize = 1024 * 1024 * 5 // 5
	const acceptedTypes = ["image/png", "image/jpeg", "image/jpg"]

	return z
		.instanceof(File)
		.refine((file) => {
			return !file || file.size <= maxUploadSize
		}, "File size must be less than 5 MB")
		.refine((file) => {
			return !file || acceptedTypes.includes(file.type)
		}, "File type must be png, jpeg, or jpg")
}
