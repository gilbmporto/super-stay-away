import Image from "next/image"
import Link from "next/link"
import React from "react"

function Logo() {
	return (
		<Link href="/">
			<Image src="/img/logo.png" alt="logo" width="100" height="100" />
		</Link>
	)
}

export default Logo
