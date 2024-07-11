"use client"

import LoadingTable from "@/components/booking/LoadingTable"

export const dynamic = "force-dynamic"

function loading() {
	return <LoadingTable rows={5} />
}

export default loading
