"use client"

// ui components
import { Card, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import { LuMinus, LuPlus } from "react-icons/lu"

// hooks
import { useState } from "react"

function CounterInput({
	detail,
	defaultValue,
}: {
	detail: string
	defaultValue?: number
}) {
	const [count, setCount] = useState(defaultValue ?? 0)
	function increaseCount() {
		setCount((prevCount) => prevCount + 1)
	}

	return <div>CounterInput</div>
}

export default CounterInput
