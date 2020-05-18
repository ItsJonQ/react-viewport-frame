import React from 'react';
import { SegmentControl } from '../src/components';

export default {
	title: 'SegmentControl',
	component: SegmentControl,
};

export const _default = () => {
	const options = [
		{ value: 'one', label: 'One' },
		{ value: 'two', label: 'Two' },
		{ value: 'three', label: 'Three' },
	];

	return <SegmentControl options={options} />;
};
