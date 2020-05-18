import React, { useState } from 'react';
import Frame from 'react-frame-component';
import { noop } from '../../utils';
import Resizer from './ViewportFrame.Resizer';
import {
	FrameWrapperView,
	FrameContainerView,
	FrameBorderView,
} from './ViewportFrame.style';

function Canvas({
	height: heightProp = 300,
	viewportWidth,
	setViewportWidth = noop,
	...props
}) {
	const [viewportHeight, setViewportHeight] = useState(heightProp);
	const [isDragging, setIsDragging] = useState(false);

	const width = viewportWidth === Infinity ? '100%' : viewportWidth;
	const handleOnResizeX = (nextViewport) => setViewportWidth(nextViewport);
	const handleOnResizeY = (nextHeight) => setViewportHeight(nextHeight);

	return (
		<FrameWrapperView>
			<FrameContainerView
				style={{
					width: width,
					height: viewportHeight,
					transition: isDragging ? 'none' : 'width 100ms linear',
				}}
			>
				<FrameBorderView>
					<Frame
						{...props}
						style={{
							pointerEvents: isDragging ? 'none' : null,
						}}
					/>
				</FrameBorderView>
				<Resizer
					direction="left"
					viewport={viewportWidth}
					isDragging={isDragging}
					onResizeStart={() => setIsDragging(true)}
					onResizeEnd={() => setIsDragging(false)}
					onResize={handleOnResizeX}
				/>

				<Resizer
					direction="right"
					viewport={viewportWidth}
					isDragging={isDragging}
					onResizeStart={() => setIsDragging(true)}
					onResizeEnd={() => setIsDragging(false)}
					onResize={handleOnResizeX}
				/>
				<Resizer
					direction="down"
					viewport={viewportHeight}
					isDragging={isDragging}
					onResizeStart={() => setIsDragging(true)}
					onResizeEnd={() => setIsDragging(false)}
					onResize={handleOnResizeY}
				/>
			</FrameContainerView>
		</FrameWrapperView>
	);
}

export default Canvas;
