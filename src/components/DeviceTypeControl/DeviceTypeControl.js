import React, { useState, useEffect } from 'react';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
import {
	BackdropView,
	ButtonView,
	ContainerView,
	LabelView,
	SeparatorView,
} from './DeviceTypeControl.style';

export default function DeviceTypeControl() {
	const radio = useRadioState({
		state: 'desktop',
		unstable_virtual: true,
	});

	return (
		<RadioGroup {...radio} aria-label="device-type" as={ContainerView}>
			<Backdrop {...radio} />
			<RadioButton {...radio} value="mobile" label="Mobile" isFirst />
			<RadioButton {...radio} value="tablet" label="Tablet" />
			<RadioButton {...radio} value="desktop" label="Desktop" isLast />
		</RadioGroup>
	);
}

function Backdrop(props) {
	const { currentId, items } = props;
	const [left, setLeft] = useState(0);
	const [width, setWidth] = useState(0);
	const [canAnimate, setCanAnimate] = useState(false);

	useEffect(() => {
		const firstItemNode = items[0];
		const currentItemNode = items.find((item) => item.id === currentId);

		const targetItemNode = (currentItemNode || firstItemNode)?.ref?.current;

		if (!targetItemNode) return;

		const { offsetLeft, offsetWidth } = targetItemNode;

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
				width: width + 4,
				left: 0,
				transition: canAnimate ? null : 'none',
			}}
			role="presentation"
		/>
	);
}

function RadioButton({ isFirst, label, value, ...props }) {
	const isActive = props.state === value;

	return (
		<LabelView data-active={isActive}>
			{!isFirst && <SeparatorView className="sep" isActive={isActive} />}
			<Radio {...props} value={value} as={ButtonView} isActive={isActive}>
				{label}
			</Radio>
		</LabelView>
	);
}
