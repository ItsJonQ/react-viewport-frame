import React, { useRef, useEffect } from 'react';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
import { noop } from '../../utils';
import Backdrop from './SegmentControl.Backdrop';
import {
	ButtonView,
	ContainerView,
	LabelView,
	SeparatorView,
	LabelPlaceholderView,
} from './SegmentControl.style';

function SegmentControl({
	label = 'SegmentControl',
	onChange = noop,
	options = [],
	value,
}) {
	const intialValue = value || options[0]?.value;
	const initialValueRef = useRef(intialValue);
	const containerRef = useRef();
	const radio = useRadioState({
		state: intialValue,
		unstable_virtual: true,
	});

	/**
	 * Work-around to create a controlled component for Reakit
	 */
	useEffect(() => {
		if (intialValue !== initialValueRef.current) {
			radio.setState(intialValue);
			initialValueRef.current = intialValue;
		}
	}, [intialValue, radio]);

	return (
		<RadioGroup
			{...radio}
			aria-label={label}
			as={ContainerView}
			ref={containerRef}
		>
			<Backdrop {...radio} containerRef={containerRef} />
			{options.map((option, index) => {
				const isFirst = index === 0;
				const isLast = index === options.length - 1;

				return (
					<RadioButton
						{...radio}
						{...option}
						key={option.value || index}
						isFirst={isFirst}
						isLast={isLast}
						onClick={() => onChange(option.value)}
					/>
				);
			})}
		</RadioGroup>
	);
}

function RadioButton({ isFirst, label, value, ...props }) {
	const isActive = props.state === value;

	return (
		<LabelView data-active={isActive}>
			{!isFirst && <SeparatorView className="sep" isActive={isActive} />}
			<Radio
				{...props}
				value={value}
				as={ButtonView}
				isActive={isActive}
				data-value={value}
			>
				{label}
				<LabelPlaceholderView aria-hidden>{label}</LabelPlaceholderView>
			</Radio>
		</LabelView>
	);
}

export default SegmentControl;
