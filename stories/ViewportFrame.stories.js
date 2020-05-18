import React from 'react';
import { ViewportFrame } from '../src/components';

export default {
	title: 'ViewportFrame',
	component: ViewportFrame,
};

export const _default = () => (
	<ViewportFrame>
		<h1>This Content is in an iFrame</h1>
	</ViewportFrame>
);
