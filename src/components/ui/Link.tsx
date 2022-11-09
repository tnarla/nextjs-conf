import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';

export interface Props extends ButtonOrLinkProps {}

export function Link(props: Props) {
	return (
		<ButtonOrLink
			className="text-gray-900 dark:text-gray-100 underline font-medium focus:outline-none hover:text-opacity-80 focus:ring-2 focus:ring-gray-500"
			{...props}
		/>
	);
}
