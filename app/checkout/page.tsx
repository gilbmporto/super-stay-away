"use client"

// axios is better than fetch
import axios from "axios"

// nextjs | hooks imports
import { useSearchParams } from "next/navigation"
import React, { useCallback } from "react"

// stripe imports
import { loadStripe } from "@stripe/stripe-js"
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js"

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
)

function CheckoutPage() {
	const searchParams = useSearchParams()
	const bookingId = searchParams.get("bookingId")

	const fetchClientSecret = useCallback(async () => {
		// Create a new Checkout Session
		const res = await axios.post("/api/payment", {
			bookingId,
		})
		return res.data.clientSecret
	}, [])

	const options = { fetchClientSecret }

	return (
		<div id="checkout">
			{/* Stripe Checkout */}
			<EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
				<EmbeddedCheckout />
			</EmbeddedCheckoutProvider>
		</div>
	)
}

export default CheckoutPage
