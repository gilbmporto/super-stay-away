// components
import Link from "next/link"
import EmptyList from "@/components/home/EmptyList"
import { IconButton } from "@/components/form/Buttons"
import FormContainer from "@/components/form/FormContainer"

// ui components
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

// server actions
import { fetchRentals, deleteRentalAction } from "@/utils/actions"

// utils
import { formatCurrency } from "@/utils/format"

async function RentalsPage() {
	const rentals = await fetchRentals()

	if (rentals?.length === 0) {
		return (
			<EmptyList
				heading="No rentals yet"
				message="Create your first rental now!"
			/>
		)
	}

	return (
		<div className="mt-16">
			<h4 className="mb-4 capitalize">Active Properties: {rentals?.length}</h4>
			<Table>
				<TableCaption>A list of your active rentals</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Property Name</TableHead>
						<TableHead>Nightly Rate</TableHead>
						<TableHead>Nights Booked</TableHead>
						<TableHead>Total Income</TableHead>
						<TableHead>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{rentals &&
						rentals.map((rental) => {
							const {
								id: propertyId,
								name,
								price,
								totalNightsSum,
								orderTotalSum,
							} = rental

							return (
								<TableRow key={propertyId}>
									<TableCell>
										<Link
											href={`/properties/${propertyId}`}
											className="underline text-muted-foreground tracking-wide"
										>
											{name}
										</Link>
									</TableCell>
									<TableCell>{formatCurrency(price)}</TableCell>
									<TableCell>{totalNightsSum ?? 0}</TableCell>
									<TableCell>{formatCurrency(orderTotalSum)}</TableCell>
									<TableCell className="flex items-center gap-x-2">
										<Link href={`/rentals/${propertyId}/edit`}>
											<IconButton actionType="edit" />
										</Link>
										<DeleteRental propertyId={propertyId} />
									</TableCell>
								</TableRow>
							)
						})}
				</TableBody>
			</Table>
		</div>
	)
}

function DeleteRental({ propertyId }: { propertyId: string }) {
	const handleDelete = deleteRentalAction.bind(null, { propertyId })

	return (
		<FormContainer action={handleDelete}>
			<IconButton actionType="delete" />
		</FormContainer>
	)
}

export default RentalsPage
