import { css } from '@emotion/core';
import styled from '@emotion/styled';
import View, { StyledView } from '../View';

export const WrapperView = styled(View)`
	overflow: hidden;
	max-width: 100%;
	min-width: 50vw;
	width: 100%;
	position: relative;
	height: 18px;
`;

export const ContainerView = styled(View)`
	display: flex;
	height: 18px;
	min-width: 100vw;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
`;

export const ControlView = styled(StyledView('button'))`
	appearance: none;
	background: #eee;
	border: none;
	color: black;
	cursor: pointer;
	font-size: 11px;
	height: 18px;
	line-height: 1;
	margin: 2px 1px;
	outline: none;
	padding: 0px 4px;

	&:hover {
		background: #ddd;
	}

	${({ isActive }) =>
		isActive &&
		css`
			background: #ddd;
		`}
	${({ flex, width }) => css({ flex, width })}
`;
