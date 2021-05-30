import { Box, BoxProps, Flex, Spinner, Text } from '@chakra-ui/react'


export const Main: React.FC<BoxProps> = (props) => {
  return <Box
    width="100%"
    margin=" 0 auto"
    maxWidth="1280px"
    pt="2rem"
    px="1rem"

    {...props}
  />;
};




export const Loader = ({ entry }: { entry: string }) => (
  <Flex>
    <Spinner
      thickness="10px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.400"
      size="md"
    />
    <Text ml={2}>
      Loading your {entry}
    </Text>
  </Flex>
)
