import { useRouter } from 'next/router';
import { Button } from '@ui/Button';
import { Container } from '@ui/Container';
import { useFakeResource } from '../useFakeResource';

export function ViewNote() {
	const router = useRouter();
	const { data, loading } = useFakeResource({
		note: {
			text: 'This is a test note',
		},
	});

	return (
		<Container
			title="Note"
			action={
				data && (
					<Button intent="danger" onClick={() => router.push('/notes')}>
						Delete Note
					</Button>
				)
			}
		>
			{data && <div className="prose-xl">{data?.note.text}</div>}
		</Container>
	);
}
