import { object, string } from 'zod';
import { Container } from '@ui/Container';
import { Form, useZodForm } from '@ui/Form';
import { SubmitButton } from '@ui/SubmitButton';
import { TextArea } from '@ui/TextArea';

const newNoteSchema = object({
	text: string().min(1),
});

export function NewNote() {
	const form = useZodForm({
		schema: newNoteSchema,
	});

	return (
		<Container title="New Note">
			<Form form={form} onSubmit={({ text }) => alert('create')}>
				<TextArea label="Text" {...form.register('text')} />
				<SubmitButton>Create Note</SubmitButton>
			</Form>
		</Container>
	);
}
