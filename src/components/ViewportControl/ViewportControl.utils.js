const VIEWPORTS_LEFT = [
	{
		value: 'Full',
		flex: 1,
		size: Infinity,
	},
	{
		value: 'Laptop L - 1440px',
		width: 205,
		size: 1440,
	},
	{
		value: 'Laptop - 1024px',
		width: 126,
		size: 1024,
	},
	{
		value: 'Tablet - 768px',
		width: 170,
		size: 768,
	},
	{
		value: 'Mobile L - 425px',
		width: 23,
		size: 425,
	},
	{
		value: 'Mobile M - 375px',
		width: 25,
		size: 375,
	},
];

const VIEWPORTS_RIGHT = [...VIEWPORTS_LEFT].reverse();

export const VIEWPORTS = [
	...VIEWPORTS_LEFT,
	{
		value: 'Mobile - 320px',
		width: 320,
		size: 320,
		isCenter: true,
	},
	...VIEWPORTS_RIGHT,
];
