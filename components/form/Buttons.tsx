"use client"

import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

type SubmitButtonProps = {
  className?: string
  text?: string
}

export function SubmitButton({
  className = "",
  text = "submit",
}: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      size="lg"
      className={`${className} capitalize`}
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  )
}
