import styled from '@emotion/styled';
import View from '../View';

export const DeviceTypeControlWrapperView = styled(View)`
	align-items: center;
	display: flex;
	justify-content: center;
	padding: 4px 8px;
`;

export const ViewportControlWrapperView = styled(View)`
	padding: 0 0 2px;
`;

export const FrameWrapperView = styled(View)`
	align-items: stretch;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const FrameContainerView = styled(View)`
	border: 1px solid #eee;
	height: 100%;
	max-width: calc(100% - 40px);
	user-select: none;
	min-width: 320px;

	iframe {
		border: none;
		width: 100%;
		height: 100%;
		user-select: none;
	}
`;

export const ResizerView = styled(View)`
	width: 20px;
	cursor: ew-resize;
	background: rgba(0, 0, 0, 0);
	user-select: none;
	position: relative;
	opacity: 0.5;
	transition: all 100ms linear;

	&:hover {
		background: rgba(0, 0, 0, 0.04);
		opacity: 1;
	}
`;

export const DragHandleView = styled(View)`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 6px;
	height: 30px;
	transform: translate(-50%, -50%);

	&::before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		background: #ddd;
		width: 2px;
		border-radius: 9999px;
		height: 100%;
		box-shadow: 4px 0 0 #ddd;
	}
`;
