import { theme as chakraTheme, DefaultTheme } from '@chakra-ui/core';

// interface IFonts extends CustomTheme
interface ICustom {
	buttonHeight: string;
	inputMinHeight: string;
	inputFontSize: string;
	inputPlaceHolder: string;
	blue: string;
	green: string;
	tabNavHeight: string;
	defaultBox: string;
	defaultWrapper: string;
	defaultRadius: string;
	[key: string]: string;
}

interface IThemeProps extends DefaultTheme {
	fonts: {
		mono: string;
		heading: string;
		body: string;
	};
	custom: ICustom;
}
type TBreakPoint = Array<string>;

const fonts = {
	...chakraTheme.fonts,
	mono: `'Menlo', Monaco, Fira Code, Ubuntu Mono, monospace`,
	heading: `"Barlow", "Cantarell", "Oxygen", "Ubuntu", sans-serif`,
	body: `'Barlow', "Segoe UI", "Cantarell", "Oxygen", "Ubuntu", "Roboto", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
};
const fontSizes = {
	xs: '0.65rem',
	sm: '0.875rem',
	md: '1rem',
	lg: '1.125rem',
	xl: '1.25rem',
	'2xl': '1.5rem',
	'3xl': '1.875rem',
	'4xl': '2.25rem',
	'5xl': '3rem',
	'6xl': '4rem'
};
const custom = {
	buttonHeight: '48px',
	inputMinHeight: '48px',
	inputFontSize: '16px',
	inputPlaceHolder: '14px',
	blue: '#0476D0',
	green: '#028248',
	tabNavHeight: '54px',
	defaultBox: '1rem',
	defaultWrapper: '.5rem 1.1rem',
	defaultRadius: '3px'
};
const colors = {
	...chakraTheme.colors,
	black: '#010203',
	default: '#4EB191',
	tomato: 'FF5238',
	text: '#1D1D1D',
	background: '#FCFDFF'
};
const breakpoints: TBreakPoint = [ '40em', '52em', '64em' ];

const theme: IThemeProps = {
	...chakraTheme,
	colors,
	fonts,
	fontSizes,
	breakpoints,
	custom,
	icons: {
		...chakraTheme.icons
	}
};

export default theme;
