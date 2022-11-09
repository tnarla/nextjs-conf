import { ComponentProps, forwardRef } from 'react';
import { FieldError } from './Form';

interface Props extends ComponentProps<'textarea'> {
	label: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
	function TextArea({ label, ...props }, ref) {
		return (
			<label>
				<div className="font-medium text-gray-800 dark:text-gray-200 mb-1">
					{label}
				</div>
				<textarea
					className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 w-full rounded-md px-4 py-2 border focus:border-brand-600 focus:ring-brand-500 disabled:opacity-60 disabled:opacity-60 disabled:bg-gray-500 disabled:bg-opacity-20"
					ref={ref}
					{...props}
				/>

				<FieldError name={props.name} />
			</label>
		);
	},
);
