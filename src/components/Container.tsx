import { Flex, useColorMode, SimpleGrid, FlexProps } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { styleConstants } from 'src/theme'

const bgColor = { light: styleConstants.background, dark: 'gray.900' }
const color = { light: 'text', dark: 'white' }

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      willChange="background"
      transition="background 450ms ease 0s"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}

export const Wrapper: React.FC<FlexProps> = (props): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      alignItems="center"
      direction="column"
      width="100%"
      minH="100vh"
      // width="200vw"
      // minH="200vh"
      // transform="translateY(-100vh)"
      justifyContent="flex-start"
      willChange="background"
      transition="background 450ms ease 0s"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}

export const CardWrapper = styled(Flex)`
  background: white;
  width: 100%;
  overflow-x: scroll;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent;
    height: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #2a422a;
  }
`
export const GridWrapper = styled(SimpleGrid)`
  @media (max-width: 630px) {
    grid-template-columns: none;
    justify-content: center;
  }
`
