import React from 'react';
import { useDrag } from 'react-use-gesture';
import { noop } from '../../utils';
import { ResizerView, DragHandleView } from './ViewportFrame.style';

function Resizer({
	direction = 'left',
	onResizeEnd = noop,
	onResizeStart = noop,
	onResize = noop,
	isDragging,
	viewport,
}) {
	const dragGestures = useDrag(({ delta, args, dragging }) => {
		const [x, y] = delta;
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
		const baseValue = direction === 'down' ? y : x;
		let multiplier = direction === 'left' ? -2 : 2;
		if (direction === 'down') {
			multiplier = 1;
		}

		const nextViewport = currentViewport + baseValue * multiplier;

		onResize(nextViewport);
	});

	return (
		<ResizerView {...dragGestures(direction)} direction={direction}>
			<DragHandleView direction={direction} />
		</ResizerView>
	);
}

export default Resizer;
