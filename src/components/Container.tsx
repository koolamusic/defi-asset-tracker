import { Flex, useColorMode, SimpleGrid, FlexProps } from '@chakra-ui/react'
import styled from '@emotion/styled'


const bgColor = { light: 'gray.50', dark: 'gray.900' }
const color = { light: 'black', dark: 'white' }


export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}


export const Wrapper: React.FC<FlexProps> = (props): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems="center"
      direction="column"
      width="100%"
      minH="100vh"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};


export const CardWrapper = styled(Flex)`
background: white;
width: 100%;
overflow-x: scroll;
flex-direction: column;
  &::-webkit-scrollbar { 
      width: 0;  /* Remove scrollbar space */
      background: transparent;
      height: .50rem;
      }
    &::-webkit-scrollbar-thumb {
    background: #2a422a;
}
            
`
export const JokeWrapper = styled(SimpleGrid)`

@media (max-width: 630px) { 
    grid-template-columns: none;
    justify-content: center;
  }

`
