import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

import { redirect } from "next/navigation"

import { NextResponse, type NextRequest } from "next/server"

import db from "@/utils/db"

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url)
	const session_id = searchParams.get("session_id") as string

	try {
		const session = await stripe.checkout.sessions.retrieve(session_id)
		const bookingId = session.metadata?.bookingId

		if (!bookingId || session.status !== "complete") {
			throw new Error("Invalid session or booking")
		}

		await db.booking.update({
			where: { id: bookingId },
			data: { paymentStatus: true },
		})
	} catch (error: any) {
		console.log(`${error.name}: ${error.message}`)
		return NextResponse.json(
			{ error: error.message },
			{ status: 500, statusText: "Internal Server Error" }
		)
	}

	redirect("/bookings")
}
