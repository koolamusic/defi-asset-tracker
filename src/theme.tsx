import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


const fonts = {
  mono: `'Menlo', Monaco, Fira Code, Ubuntu Mono, monospace`,
  heading: `"Barlow", Cantarell, Oxygen, Ubuntu, sans-serif`,
  body: `"Dosis", Segoe UI, Oxygen, Ubuntu, Roboto, Fira Sans, Helvetica Neue, sans-serif`,
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
  '6xl': '4rem',
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  fontSizes,
  breakpoints,
})

/* A bunch of design constants */
export const styleConstants = {
  defaultBox: '1rem',
  defaultWrapper: '.5rem 1.1rem',
  formBorderRadius: '6px',
  defaultRadius: '4px',
  defaultShadow: '6px 1px 18px #44866b1a',
  defaultBorder: '1px solid #38a169',
  headerHeight: '60px',
  buttonHeight: '48px',
  fixedMarginTop: '3rem',
  paddingWrapper: '.5rem 2rem',
  altBorder: '1px solid #dddddd',
  thickBorder: '1px solid #38a169',
  altBackground: '#fafffd',
  background: '#F7FAFC',
  inputMinHeight: '48px',
  inputFontSize: '16px',
  inputPlaceHolder: '14px',
  topZindex: '99910',
  tableBorder: '1px solid rgba(77, 77, 77, 0.3)',
  lightShadow: '6px 5px 10px rgba(0,50,30,0.03)',
  blue: '#0476D0',
  green: '#00B268',
  main: 'green.600',
  green800: '#22543d',
};

export default theme
