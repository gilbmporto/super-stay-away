"use client"

import { Input } from "../ui/input"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { useState, useEffect } from "react"

function NavSearch() {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const [search, setSearch] = useState(
		searchParams.get("search")?.toString() ?? ""
	)

	useEffect(() => {
		if (!searchParams.get("search")) {
			setSearch("")
		}
	}, [searchParams.get("search")])

	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams)

		if (value.length > 0) {
			params.set("search", value)
		} else {
			params.delete("search")
		}

		replace(`/?${params.toString()}`)
	}, 400)

	return (
		<Input
			type="text"
			placeholder="Find a property..."
			className="max-w-xs dark:bg-muted w-full"
			value={search}
			onChange={(e) => {
				setSearch(e.target.value)
				handleSearch(e.target.value)
			}}
		/>
	)
}

export default NavSearch
