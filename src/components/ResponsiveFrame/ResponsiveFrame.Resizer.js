import React from 'react';
import { useDrag } from 'react-use-gesture';
import { noop } from '../../utils';
import { ResizerView, DragHandleView } from './ResponsiveFrame.style';

function Resizer({
	direction = 'left',
	onResizeEnd = noop,
	onResizeStart = noop,
	onResize = noop,
	isDragging,
	viewport,
}) {
	const dragGestures = useDrag(({ delta, args, dragging }) => {
		const [x] = delta;
		const [direction] = args;

		if (!dragging) {
			onResizeEnd();
			return;
		}

		const currentViewport =
			viewport === Infinity ? window.innerWidth : viewport;

		if (!isDragging) {
			onResizeStart();
			onResize(currentViewport);
			return;
		}
		const multiplier = direction === 'left' ? -2 : 2;

		const nextViewport = currentViewport + x * multiplier;

		onResize(nextViewport);
	});

	return (
		<ResizerView {...dragGestures(direction)}>
			<DragHandleView />
		</ResizerView>
	);
}

export default Resizer;
