import React, { useState } from 'react';
import { noop } from '../../utils';
import {
	WrapperView,
	ContainerView,
	ControlView,
} from './ViewportControl.style';
import { VIEWPORTS } from './ViewportControl.utils';

function ViewportControl({ onChange = noop }) {
	const [viewport, setViewport] = useState(null);
	const currentItem = VIEWPORTS.find((v) => v.size === viewport);

	return (
		<WrapperView>
			<ContainerView>
				{VIEWPORTS.map((item, index) => (
					<ControlView
						{...item}
						key={index}
						onMouseEnter={() => setViewport(item.size)}
						onMouseLeave={() => setViewport(null)}
						isActive={viewport !== null && viewport >= item.size}
						onClick={() => onChange(item.size)}
					>
						{item.isCenter && currentItem && (
							<span>{currentItem.value}</span>
						)}
					</ControlView>
				))}
			</ContainerView>
		</WrapperView>
	);
}

export default ViewportControl;
