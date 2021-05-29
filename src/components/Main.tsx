import { Stack, StackProps } from '@chakra-ui/core'

export const Main: React.FC<StackProps> = (props) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    mt="-45vh"
    pt="8rem"
    pb="8rem"
    px="1rem"
    {...props}
  />
)
