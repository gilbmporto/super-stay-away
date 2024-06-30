import { createClient } from "@supabase/supabase-js"

const bucket = "super-stay-away"

// Create a single supabase client
export const supabase = createClient(
	process.env.SUPABASE_URL as string,
	process.env.SUPABASE_KEY as string
)

export const uploadImage = async (image: File) => {
	const timestamp = Date.now().toString()
	const filename = `${timestamp}-${image.name}`

	const { data } = await supabase.storage.from(bucket).upload(filename, image, {
		cacheControl: "3600",
	})

	if (!data) throw new Error("Image upload failed")

	return supabase.storage.from(bucket).getPublicUrl(filename).data.publicUrl
}
