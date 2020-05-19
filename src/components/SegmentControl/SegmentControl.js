import React, { useRef } from 'react';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
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
	options = [],
	onChange,
	value,
}) {
	const containerRef = useRef();
	const reakitRadio = useRadioState({ unstable_virtual: true });
	const radio = {
		...reakitRadio,
		state: value || reakitRadio.state || options[0]?.value,
		setState: onChange || reakitRadio.setState,
	};

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
