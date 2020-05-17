import { css } from '@emotion/core';
import styled from '@emotion/styled';
import View, { StyledView } from '../View';

export const ContainerView = styled(View)`
	border-radius: 8px;
	background: #eeeeef;
	display: inline-flex;
	padding: 2px;
	position: relative;

	&:focus {
		outline: none;
	}
`;

export const BackdropView = styled(View)`
	background: white;
	border-radius: 6px;
	height: 22px;
	position: absolute;
	transition: all 200ms cubic-bezier(0.28, -0.25, 0.225, 1.25);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.1);
	margin-left: -2px;
	z-index: 1;
`;

export const LabelView = styled(StyledView('label'))`
	display: inline-flex;

	${({ isActive }) => {
		if (!isActive) return '';
		return css`
			+ * {
				.sep {
					background: transparent;
				}
			}
		`;
	}}
`;

export const ButtonView = styled(StyledView('button'))`
	appearance: none;
	background: none;
	border-radius: 6px;
	border: none;
	cursor: pointer;
	font-size: 12px;
	height: 24px;
	line-height: 1;
	outline: none;
	margin: -1px 2px;
	padding: 0 10px;
	position: relative;
	user-select: none;
	z-index: 2;

	&::-moz-focus-inner {
		border: 0;
	}
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
