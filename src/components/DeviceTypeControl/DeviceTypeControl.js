import React from 'react';
import SegmentControl from '../SegmentControl';
import { noop } from '../../utils';

function DeviceTypeControl({ onChange = noop, value = 'desktop' }) {
	const options = [
		{ label: 'Mobile', value: 'mobile' },
		{ label: 'Tablet', value: 'tablet' },
		{ label: 'Desktop', value: 'desktop' },
	];

	return (
		<SegmentControl
			value={value}
			label="device-type"
			onChange={onChange}
			options={options}
		/>
	);
}

export default DeviceTypeControl;
