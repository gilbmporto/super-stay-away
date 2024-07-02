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

	function decreaseCount() {
		setCount((prevCount) => {
			if (prevCount > 0) {
				return prevCount - 1
			}
			return prevCount
		})
	}

	return (
		<Card className="mb-4">
			{/* hidden input */}
			<input type="hidden" name={detail} value={count} />
			<CardHeader className="flex flex-col gap-y-5">
				<div className="flex items-center justify-between flex-wrap gap-4 sm:gap-0">
					<div className="flex flex-col sm:gap-0">
						<h2 className="font-medium capitalize">{detail}</h2>
						<p className="text-muted-foreground text-sm">
							Specify number of {detail.toLowerCase()}
						</p>
					</div>
					<div className="flex items-center gap-4">
						<Button
							variant="outline"
							size="icon"
							type="button"
							onClick={decreaseCount}
						>
							<LuMinus className="h-5 w-5 text-primary" />
						</Button>
						<span className="text-xl font-bold w-5 text-center">{count}</span>
						<Button
							variant="outline"
							size="icon"
							type="button"
							onClick={increaseCount}
						>
							<LuPlus className="h-5 w-5 text-primary" />
						</Button>
					</div>
				</div>
			</CardHeader>
		</Card>
	)
}

export default CounterInput
