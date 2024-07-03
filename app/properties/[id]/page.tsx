import React from "react"

async function PropertyPage({ params }: { params: { id: string } }) {
	return <div>{params.id}</div>
}

export default PropertyPage
