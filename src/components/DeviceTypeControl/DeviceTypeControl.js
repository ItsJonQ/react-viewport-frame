import React, { useEffect } from 'react';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
import { noop } from '../../utils';
import Backdrop from './DeviceTypeControl.Backdrop';
import {
	ButtonView,
	ContainerView,
	LabelView,
	SeparatorView,
	LabelPlaceholderView,
} from './DeviceTypeControl.style';

export default function DeviceTypeControl({
	onChange = noop,
	value = 'desktop',
}) {
	const radio = useRadioState({
		state: value,
		unstable_virtual: true,
	});

	useEffect(() => {
		onChange(radio.state);
	}, [onChange, radio.state]);

	return (
		<RadioGroup {...radio} aria-label="device-type" as={ContainerView}>
			<Backdrop {...radio} />
			<RadioButton {...radio} value="mobile" label="Mobile" isFirst />
			<RadioButton {...radio} value="tablet" label="Tablet" />
			<RadioButton {...radio} value="desktop" label="Desktop" isLast />
		</RadioGroup>
	);
}

function RadioButton({ isFirst, label, value, ...props }) {
	const isActive = props.state === value;

	return (
		<LabelView data-active={isActive}>
			{!isFirst && <SeparatorView className="sep" isActive={isActive} />}
			<Radio {...props} value={value} as={ButtonView} isActive={isActive}>
				{label}
				<LabelPlaceholderView aria-hidden>{label}</LabelPlaceholderView>
			</Radio>
		</LabelView>
	);
}
