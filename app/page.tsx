// import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HomePage() {
	return (
		<main>
			<h1 className="text-7xl">Home Page</h1>
			<Button variant="outline" size="lg" className="capitalize m-8">
				Click me
			</Button>
		</main>
	)
}
