// components
import Navbar from "@/components/navbar/Navbar"
import Providers from "./providers"
import { ClerkProvider } from "@clerk/nextjs"

// metadata
import type { Metadata } from "next"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

// css
import "./globals.css"

export const metadata: Metadata = {
	title: "Super Stay Away",
	description:
		"When you're ready to travel, Super Stay Away is where you'll feel at home.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<Providers>
						<Navbar />
						<main className="container py-10">{children}</main>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	)
}
