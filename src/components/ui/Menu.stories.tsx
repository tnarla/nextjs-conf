import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menu, MenuButton, MenuItems, MenuItem } from './Menu';
import { Button } from './Button';

export default {
	title: 'UI/Menu',
	component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Menu {...args}>
		<MenuButton as={Button}>Menu Button</MenuButton>
		<MenuItems>
			<MenuItem>Item 1</MenuItem>
			<MenuItem>Item 2</MenuItem>
			<MenuItem>Item 3</MenuItem>
		</MenuItems>
	</Menu>
);

export const Example = Template.bind({});
