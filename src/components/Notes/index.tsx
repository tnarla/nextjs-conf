import Link from 'next/link';
import { Container } from '@ui/Container';
import { Button } from '@ui/Button';
import { Menu, MenuButton, MenuItem, MenuItems } from '@ui/Menu';
import { useFakeResource } from '../useFakeResource';

const createNote = () => ({
	id: Math.floor(Math.random() * 100000),
	text: 'This is a test note.',
});

function NewNoteButton() {
	return (
		<Menu>
			<MenuButton as={Button} intent="secondary">
				New Note
			</MenuButton>
			<MenuItems>
				<MenuItem href="/notes/new">Blank Note</MenuItem>
				<MenuItem href="/notes/new">From Template</MenuItem>
			</MenuItems>
		</Menu>
	);
}

export function Notes() {
	const { data, loading } = useFakeResource({
		me: {
			notes: Array.from({ length: 10 }, () => createNote()),
		},
	});

	const notes = data?.me?.notes ?? [];

	return (
		<Container title="Notes" action={<NewNoteButton />}>
			<div className="space-y-2 mt-2">
				{notes.map((note) => (
					<Link key={note.id} href={`/notes/${note.id}`}>
						<a className="flex items-center justify-between space-x-2 rounded p-4 hover:bg-gray-500 hover:bg-opacity-20 w-full">
							<div className="truncate">{note.text}</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 flex-shrink-0"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</a>
					</Link>
				))}

				{!loading && (
					<div className="flex justify-center">
						<Button intent="secondary" onClick={() => alert('Load more')}>
							Load More
						</Button>
					</div>
				)}
			</div>
		</Container>
	);
}
