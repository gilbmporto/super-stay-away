// ui components
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

type TextAreaInputProps = {
	name: string
	labelText?: string
	defaultValue?: string
}

const mockDefaultDescription =
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iusto odio aliquid neque laborum sunt molestias nesciunt maxime? Quidem fuga, illo nisi reprehenderit animi assumenda natus corporis dolores quae? Quae maiores qui veritatis aut deserunt molestiae magni quo soluta excepturi explicabo cumque praesentium beatae voluptatem, ex nam veniam corrupti iste!"

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
	return (
		<div className="mb-2">
			<Label htmlFor={name} className="capitalize">
				{labelText ?? name}
			</Label>
			<Textarea
				id={name}
				name={name}
				defaultValue={defaultValue ?? mockDefaultDescription}
				rows={5}
				required
				className="leading-loose"
			/>
		</div>
	)
}

export default TextAreaInput
