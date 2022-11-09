import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, ReactNode } from 'react';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';

export const MenuButton = HeadlessMenu.Button;

interface MenuProps {
	children: ReactNode;
}

export function Menu({ children }: MenuProps) {
	return (
		<HeadlessMenu as="div" className="relative">
			{children}
		</HeadlessMenu>
	);
}

export interface MenuItemProps extends ButtonOrLinkProps {}

export function MenuItem({ children, ...props }: MenuItemProps) {
	return (
		<HeadlessMenu.Item>
			{({ active }) => (
				<ButtonOrLink
					className={clsx(
						active ? 'dark:bg-gray-600 bg-gray-300 text-primary' : '',
						'px-4 py-2 text-sm text-secondary flex items-center gap-2 w-full',
					)}
					{...props}
				>
					{children}
				</ButtonOrLink>
			)}
		</HeadlessMenu.Item>
	);
}

interface MenuItemsProps {
	children: ReactNode;
}

export function MenuItems({ children }: MenuItemsProps) {
	return (
		<Transition
			as={Fragment}
			enter="transition ease-out duration-100"
			enterFrom="transform opacity-0 scale-95"
			enterTo="transform opacity-100 scale-100"
			leave="transition ease-in duration-75"
			leaveFrom="transform opacity-100 scale-100"
			leaveTo="transform opacity-0 scale-95"
		>
			<HeadlessMenu.Items className="z-20 origin-top-left absolute left-0 mt-2 w-56 rounded-lg shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
				{children}
			</HeadlessMenu.Items>
		</Transition>
	);
}
