import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		fullWidth: {
			type: 'boolean',
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
	intent: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	intent: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
	intent: 'danger',
};
