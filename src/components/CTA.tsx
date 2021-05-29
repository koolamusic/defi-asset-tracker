import { Link as ChakraLink, Button } from '@chakra-ui/core'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    py={2}
  >
    <ChakraLink href="/about" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" variantColor="green">
        About Page
      </Button>
    </ChakraLink>

    <ChakraLink
      href="/"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" variantColor="green">
        View Homepage
      </Button>
    </ChakraLink>
  </Container>
)
