import React from 'react'
import { Main } from './Main'
import { Wrapper } from './Container'
import { Footer } from './Body'
import { styleConstants } from '../theme'
import { Box, Button, ButtonProps, Spinner, SpinnerProps, useColorMode } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { ProfileMenu } from './ProfileMenu'

export interface IPageLayout {
  children: React.ReactNode
  wrapperBox?: string | number
  isDefaultHeader?: boolean
}

interface ISubmitButton extends ButtonProps {
  buttonName?: string
  analyticName?: string
  type: 'submit' | 'button' | 'reset'
  isLoading?: boolean
  withIcon?: boolean | undefined
}

export const FormLayout = (props: IPageLayout): JSX.Element => {
  return (
    <Box position="relative">
      {/* <Header isDefault={props.isDefaultHeader} /> */}
      <Footer />
      <Wrapper
        marginTop={['1rem', styleConstants.fixedMarginTopSmall]}
        padding={props.wrapperBox || styleConstants.paddingWrapper}
        width="100%"
        alignItems="flex-start"
        height="100%"
      >
        {/* === section to render the form ==== */}
        <Main
          width={['100%', '30rem']}
          bg={['inherit', 'white']}
          margin={'auto'}
          my="10"
          px={[0, 10]}
          py={[3, 8]}
          alignItems="center"
          border={['none', styleConstants.defaultBorder]}
          justifyContent="center"
          boxShadow={['none', styleConstants.lightShadow]}
          borderRadius={styleConstants.defaultRadius}
        >
          {props.children}
        </Main>
      </Wrapper>
    </Box>
  )
}

export const CompoundLayout = (props: IPageLayout): JSX.Element => {
  return (
    <React.Fragment>
      <ProfileMenu />
      <Footer />
      <Wrapper
        padding={props.wrapperBox || styleConstants.paddingWrapper}
        width="100%"
        alignItems="flex-start"
        height="100%"
      >
        {/* === section to render the form ==== */}
        <Main
          maxW={['100%', '3xl', '5xl']}
          width="100%"
          minH="80vh"
          // bg={['inherit', '#ffffffe4']}
          margin={'auto'}
          my="10"
          marginTop={[styleConstants.fixedMarginTopSmall, styleConstants.fixedMarginTop]}
          px={[2, 10]}
          py={8}
          alignItems="center"
          borderLeft={['none', styleConstants.tableBorder]}
          borderRight={['none', styleConstants.tableBorder]}
          justifyContent="center"
          // boxShadow={['none', styleConstants.lightShadow]}
          // borderRadius={styleConstants.formBorderRadius}
        >
          {props.children}
        </Main>
      </Wrapper>
    </React.Fragment>
  )
}

export const SubmitButton: React.FC<ISubmitButton> = (props) => {
  const { withIcon, isLoading, type, buttonName, ...rest } = props
  return (
    <Button
      borderRadius="4px"
      fontWeight="700"
      alignContent="center"
      minH="3rem"
      justifyContent={props.withIcon ? 'space-between' : 'center'}
      colorScheme="blue"
      type={type ?? 'submit'}
      isLoading={isLoading}
      rightIcon={(withIcon && <ArrowForwardIcon />) || <ArrowForwardIcon />}
      width="100%"
      {...rest}
    >
      {buttonName}
    </Button>
  )
}

export const Loader: React.FC<SpinnerProps> = (props) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'white', dark: 'gray.800' }
  const color = { light: 'black', dark: 'white' }

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      p={4}
    >
      <Spinner
        speed="0.65s"
        thickness="6px"
        emptyColor="gray.200"
        color="blue.600"
        colorScheme="blue"
        size="xl"
        {...props}
      />
    </Box>
  )
}
