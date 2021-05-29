import React from 'react';
import { Flex, useColorMode, FlexProps } from '@chakra-ui/core';

export const Container: React.FC<FlexProps> = (props): JSX.Element => {
	const { colorMode } = useColorMode();

	const bgColor = { light: 'gray.50', dark: 'gray.900' };
	const color = { light: 'black', dark: 'white' };

	return (
		<Flex
			direction="column"
			alignItems="center"
			justifyContent="flex-start"
			bg={bgColor[colorMode]}
			color={color[colorMode]}
			{...props}
		/>
	);
};
