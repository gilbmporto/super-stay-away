"use client"

// ui components
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

function loading() {
	return (
		<section className="grid md:grid-cols-2 gap-8 mt-4">
			<ReviewLoadingCard />
			<ReviewLoadingCard />
		</section>
	)
}

function ReviewLoadingCard() {
	return (
		<Card className="relative">
			<CardHeader>
				<Skeleton className="w-12 h-12 rounded-full object-cover" />
				<div className="ml-4">
					<Skeleton className="text-sm font-bold" />
					<Skeleton className="h-4 w-4 inline-block" />
				</div>
			</CardHeader>
			<CardContent>
				<Skeleton className="h-12" />
			</CardContent>
			<div className="absolute top-3 right-3">
				<Skeleton className="h-6 w-6 inline-block" />
			</div>
		</Card>
	)
}

export default loading
