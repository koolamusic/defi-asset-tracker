import React from 'react';
import { useColorMode, Switch, SwitchProps } from '@chakra-ui/core';

export const DarkModeSwitch: React.FC<SwitchProps> = (): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
	return (
		<Switch position="fixed" top="1rem" right="1rem" color="green" isChecked={isDark} onChange={toggleColorMode} />
	);
};
