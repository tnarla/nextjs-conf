// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     // "storybook-addon-next",
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions"
//   ],
//   "framework": "@storybook/react",
//   "core": {
//     "builder": "@storybook/builder-webpack5"
//   }
// }

// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	staticDirs: ['../public'],
	addons: [
		'storybook-addon-next',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		// {
		// 	name: '@storybook/addon-postcss',
		// 	options: {
		// 		postcssLoaderOptions: {
		// 			implementation: require('postcss'),
		// 		},
		// 	},
		// }
	],
	core: { builder: 'webpack5' },
	framework: '@storybook/react',
	// webpackFinal: async (config) => {
	// 	config.resolve.plugins = [
	// 		...(config.resolve.plugins || []),
	// 		new TsconfigPathsPlugin(),
	// 	];

	// 	return config;
	// },
};
