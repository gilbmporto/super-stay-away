import * as z from "zod"
import { ZodSchema } from "zod"

type UserProps = {
  firstName: string
  lastName: string
  username: string
}

export const profileSchema: ZodSchema<UserProps> = z.object({
  firstName: z.string().min(2, "Min length is 2").max(10, "Max length is 10"),
  lastName: z.string().min(2, "Min length is 2").max(10, "Max length is 10"),
  username: z.string().min(2, "Min length is 2").max(20, "Max length is 10"),
})
