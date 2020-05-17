import { css } from '@emotion/core';
import styled from '@emotion/styled';
import View, { StyledView } from '../View';

export const ContainerView = styled(View)`
	background: #eeeeef;
	border-radius: 8px;
	display: inline-flex;
	padding: 2px;
	position: relative;

	&:focus {
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.1);
		outline: none;
	}
`;

export const BackdropView = styled(View)`
	background: white;
	border-radius: 6px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1);
	height: 22px;
	position: absolute;
	transition: all 200ms ease-in-out;
	z-index: 1;
`;

export const LabelView = styled(StyledView('label'))`
	display: inline-flex;

	&[data-active='true'] {
		+ * {
			.sep {
				background: transparent;
			}
		}
	}
`;

export const ButtonView = styled(StyledView('button'))`
	appearance: none;
	background: none;
	border-radius: 6px;
	border: none;
	color: black;
	cursor: pointer;
	font-size: 12px;
	height: 24px;
	line-height: 1;
	margin: -1px 0;
	outline: none;
	padding: 0 12px;
	position: relative;
	transition: font-weight 60ms linear;
	user-select: none;
	z-index: 2;

	&::-moz-focus-inner {
		border: 0;
	}

	${({ isActive }) =>
		isActive &&
		css`
			font-weight: bold;
		`}
`;

export const SeparatorView = styled(View)`
	height: 18px;
	width: 1px;
	background: rgba(0, 0, 0, 0.1);
	position: relative;
	top: 2px;
	transition: background 100ms linear;

	${({ isActive }) =>
		isActive &&
		css`
			background: transparent;
		`}
`;

export const LabelPlaceholderView = styled.div`
	font-weight: bold;
	height: 0;
	overflow: hidden;
	visibility: hidden;
`;
