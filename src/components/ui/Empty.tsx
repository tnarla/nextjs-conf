export function Empty() {
	return (
		<div className="flex flex-col justify-center items-center space-y-2 text-gray-500 my-12">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-12 w-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
				/>
			</svg>
			<div className="font-bold">There&rsquo;s nothing here yet.</div>
		</div>
	);
}
