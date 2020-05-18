import styled from '@emotion/styled';
import { css } from '@emotion/core';
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
	height: 100%;
	max-width: calc(100% - 40px);
	max-height: calc(100% - 20px);
	user-select: none;
	min-width: 320px;
	min-height: 100px;
	padding: 0;
	position: relative;

	iframe {
		border: none;
		width: 100%;
		height: 100%;
		user-select: none;
	}
`;

export const FrameBorderView = styled(View)`
	width: 100%;
	height: 100%;
	border: 1px solid #ddd;
`;

const resizerDirectionStyle = ({ direction }) => {
	if (direction === 'left') {
		return css`
			bottom: 0px;
			cursor: ew-resize;
			left: -20px;
			top: 0;
			width: 20px;
		`;
	}

	if (direction === 'right') {
		return css`
			bottom: 0px;
			cursor: ew-resize;
			right: -20px;
			top: 0;
			width: 20px;
		`;
	}

	if (direction === 'down') {
		return css`
			bottom: -20px;
			cursor: ns-resize;
			height: 20px;
			left: 0px;
			right: 0px;
		`;
	}
};

export const ResizerView = styled(View)`
	background: rgba(0, 0, 0, 0);
	user-select: none;
	position: relative;
	opacity: 0.5;
	transition: all 160ms linear;
	position: absolute;

	&:hover {
		background: rgba(0, 0, 0, 0.04);
		opacity: 1;
	}

	${resizerDirectionStyle};
`;

const dragHandleDirectionStyle = ({ direction }) => {
	if (direction === 'down') {
		return css`
			height: 6px;
			width: 30px;

			&::before {
				height: 2px;
				width: 100%;
				box-shadow: 0 4px 0 #ddd;
			}
		`;
	}

	return css`
		width: 6px;
		height: 30px;

		&::before {
			width: 2px;
			height: 100%;
			box-shadow: 4px 0 0 #ddd;
		}
	`;
};

export const DragHandleView = styled(View)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	&::before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		background: #ddd;
		border-radius: 9999px;
	}

	${dragHandleDirectionStyle};
`;
