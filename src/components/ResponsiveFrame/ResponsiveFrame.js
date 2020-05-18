import React, { useState } from 'react';
import DeviceTypeControl from '../DeviceTypeControl';
import ViewportControl from '../ViewportControl';
import Canvas from './ResponsiveFrame.Canvas';
import {
	DeviceTypeControlWrapperView,
	ViewportControlWrapperView,
} from './ResponsiveFrame.style';

function ResponsiveFrame({
	width: widthProp = 'auto',
	height: heightProp = 300,
	...props
}) {
	const initialWidth = widthProp === 'auto' ? Infinity : widthProp;
	const [viewportWidth, setViewportWidth] = useState(initialWidth);

	const deviceType = getDeviceTypeFromViewport(viewportWidth);

	const handleOnChangeDeviceType = (nextDeviceType) => {
		setViewportWidth(getViewportFromDeviceType(nextDeviceType));
	};

	return (
		<div>
			<DeviceTypeControlWrapperView>
				<DeviceTypeControl
					value={deviceType}
					onChange={handleOnChangeDeviceType}
				/>
			</DeviceTypeControlWrapperView>
			<ViewportControlWrapperView>
				<ViewportControl onChange={setViewportWidth} />
			</ViewportControlWrapperView>
			<Canvas
				width={widthProp}
				height={heightProp}
				{...props}
				viewportWidth={viewportWidth}
				setViewportWidth={setViewportWidth}
			/>
		</div>
	);
}

function getDeviceTypeFromViewport(viewport) {
	if (viewport <= 425) return 'mobile';
	if (viewport <= 768) return 'tablet';

	return 'desktop';
}

function getViewportFromDeviceType(deviceType) {
	if (deviceType === 'mobile') return 320;
	if (deviceType === 'tablet') return 768;
	return 1024;
}

export default ResponsiveFrame;
