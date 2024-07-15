"use client"

// recharts components
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts"

type ChartProps = {
	data: {
		date: string
		count: number
	}[]
}

function Chart({ data }: ChartProps) {
	return (
		<section className="mt-24">
			<h1 className="text-4xl font-semibold text-center">Monthly Bookings</h1>
			<ResponsiveContainer width="100%" height={500}>
				<BarChart data={data} margin={{ top: 50 }}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis allowDecimals={false} />
					<Tooltip />
					<Bar dataKey="count" fill="#EA5814" barSize={75} />
				</BarChart>
			</ResponsiveContainer>
		</section>
	)
}

export default Chart
