import React, { useState, useEffect } from 'react';
import { BackdropView } from './DeviceTypeControl.style';

export default function Backdrop(props) {
	const { currentId, items } = props;
	const [left, setLeft] = useState(0);
	const [width, setWidth] = useState(0);
	const [canAnimate, setCanAnimate] = useState(false);

	useEffect(() => {
		const firstItemNode = items[0];
		const currentItemNode = items.find((item) => item.id === currentId);

		const targetItemNode = (currentItemNode || firstItemNode)?.ref?.current;

		if (!targetItemNode) return;

		const {
			x: parentX,
		} = targetItemNode.offsetParent.getBoundingClientRect();
		const {
			width: offsetWidth,
			x,
		} = targetItemNode.getBoundingClientRect();
		const offsetLeft = x - parentX;

		setLeft(offsetLeft);
		setWidth(offsetWidth);

		if (!canAnimate) {
			requestAnimationFrame(() => {
				setCanAnimate(true);
			});
		}
	}, [currentId, items, canAnimate]);

	return (
		<BackdropView
			style={{
				transform: `translateX(${left}px)`,
				width,
				left: 0,
				transition: canAnimate ? null : 'none',
			}}
			role="presentation"
		/>
	);
}
