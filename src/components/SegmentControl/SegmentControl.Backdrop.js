import React, { useState, useEffect } from 'react';
import { BackdropView } from './SegmentControl.style';

export default function Backdrop({
	containerRef,
	currentId,
	items,
	state,
	...props
}) {
	const [left, setLeft] = useState(0);
	const [width, setWidth] = useState(0);
	const [canAnimate, setCanAnimate] = useState(false);

	useEffect(() => {
		const containerNode = containerRef?.current;
		if (!containerNode) return;

		/**
		 * Workaround for Reakit
		 */
		const targetNode = containerNode.querySelector(`[data-value=${state}]`);
		if (!targetNode) return;

		const { x: parentX } = containerNode.getBoundingClientRect();
		const { width: offsetWidth, x } = targetNode.getBoundingClientRect();
		const offsetLeft = x - parentX;

		setLeft(offsetLeft);
		setWidth(offsetWidth);

		if (!canAnimate) {
			requestAnimationFrame(() => {
				setCanAnimate(true);
			});
		}
	}, [canAnimate, containerRef, state]);

	return (
		<BackdropView
			style={{
				transform: `translateX(${left}px)`,
				width,
				transition: canAnimate ? null : 'none',
			}}
			role="presentation"
		/>
	);
}
