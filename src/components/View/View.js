import React from 'react';
import styled from '@emotion/styled';

const View = styled.div`
	box-sizing: border-box;
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin: 0;
`;

export const StyledView = (as = 'div') => {
	return React.forwardRef((props, ref) => {
		return <View as={as} {...props} ref={ref} />;
	});
};

export default View;
