import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  Flex,
  Heading,
  ListIcon,
  ListItem,
} from '@chakra-ui/core'

import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'

const Index = (): JSX.Element => (
  <Container>
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Heading fontSize="4vw">NextJS - Apollo GraphQL - TypeScript - Eslint</Heading>
    </Flex>
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <Icon name="external-link" mx="2px" />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <Icon name="external-link" mx="2px" />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <CTA />
    <DarkModeSwitch />
  </Container>
)

export default Index