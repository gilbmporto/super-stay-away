import FormInput from "@/components/form/FormInput"
import FormContainer from "@/components/form/FormContainer"
import { createPropertyAction } from "@/utils/actions"
import { SubmitButton } from "@/components/form/Buttons"
import PriceInput from "@/components/form/PriceInput"

function CreatePropertyPage() {
	return (
		<section>
			<h1 className="text-2xl font-semibold mb-8 capitalize">
				Create Property
			</h1>
			<div className="border p-8 rounded-md">
				<h3 className="text-lg mb-4 font-medium">General Info</h3>
				<FormContainer action={createPropertyAction}>
					<div className="grid md:grid-cols-2 gap-8 mb-4">
						<FormInput
							name="name"
							label="Property Name"
							placeholder="Property Name"
							type="text"
							defaultValue="Cabin in Brazil"
						/>
						<FormInput
							name="tagline"
							label="Tagline"
							placeholder=""
							type="text"
							defaultValue="Dream Escape Awaits You Here"
						/>
						{/* price */}
						<PriceInput />
						{/* categories */}
					</div>
					{/* description */}
					<SubmitButton text="Create Rental" className="mt-8" />
				</FormContainer>
			</div>
		</section>
	)
}

export default CreatePropertyPage
