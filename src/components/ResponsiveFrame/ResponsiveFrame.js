import React, { useState } from 'react';
import Frame from 'react-frame-component';
import DeviceTypeControl from '../DeviceTypeControl';
import ViewportControl from '../ViewportControl';
import Resizer from './ResponsiveFrame.Resizer';
import {
	DeviceTypeControlWrapperView,
	ViewportControlWrapperView,
	FrameWrapperView,
	FrameContainerView,
} from './ResponsiveFrame.style';

function ResponsiveFrame(props) {
	const [viewport, setViewport] = useState(Infinity);
	const deviceType = getDeviceTypeFromViewport(viewport);
	const [isDragging, setIsDragging] = useState(false);

	const handleOnChangeDeviceType = (nextDeviceType) => {
		setViewport(getViewportFromDeviceType(nextDeviceType));
	};

	const width = viewport === Infinity ? '100%' : viewport;
	const handleOnResize = (nextViewport) => setViewport(nextViewport);

	return (
		<div>
			<DeviceTypeControlWrapperView>
				<DeviceTypeControl
					value={deviceType}
					onChange={handleOnChangeDeviceType}
				/>
			</DeviceTypeControlWrapperView>
			<ViewportControlWrapperView>
				<ViewportControl onChange={setViewport} />
			</ViewportControlWrapperView>
			<FrameWrapperView>
				<Resizer
					direction="left"
					viewport={viewport}
					isDragging={isDragging}
					onResizeStart={() => setIsDragging(true)}
					onResizeEnd={() => setIsDragging(false)}
					onResize={handleOnResize}
				/>
				<FrameContainerView
					style={{
						width,
						pointerEvents: isDragging ? 'none' : null,
						transition: isDragging ? 'none' : 'width 100ms linear',
					}}
				>
					<Frame {...props} />
				</FrameContainerView>
				<Resizer
					direction="right"
					viewport={viewport}
					isDragging={isDragging}
					onResizeStart={() => setIsDragging(true)}
					onResizeEnd={() => setIsDragging(false)}
					onResize={handleOnResize}
				/>
			</FrameWrapperView>
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
