import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Text,
  Stack,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

import { FormLayout } from '@components/Layout'
import { FormPageHeader } from '@components/Body'
import { useAuth } from '@lib/auth'

export default function Page(): JSX.Element {
  const { login } = useAuth()

  const onLoginWithMetaMask = async (_data: any): Promise<void> => {
    login()
      .then((res) => console.log(res))
      .catch((err) => {
        alert(JSON.stringify(err))
      })
  }

  return (
    <FormLayout>
      <FormPageHeader formSubHeading="Measure and track the ROI on all your tokens and assets on the blockchain in one dashboard" />

      <Center py={6}>
        <Box
          maxW={'350px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}
          >
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              px={3}
              mb={2}
              color={'blue.500'}
              rounded={'full'}
            >
              Login with MetaMask
            </Text>
            <Center>
              <Image w="120px" h="120px" src="/metamask.svg" alt="MetaMask" />
            </Center>
          </Stack>

          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <Button
              mt={5}
              w={'full'}
              colorScheme="green"
              fontWeight="700"
              rightIcon={<ArrowForwardIcon />}
              justifyContent={'space-between'}
              color={'white'}
              borderRadius="4px"
              size="lg"
              onClick={onLoginWithMetaMask}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.400',
              }}
              _focus={{
                bg: 'green.400',
              }}
            >
              Authorize Now
            </Button>
          </Box>
        </Box>
      </Center>
    </FormLayout>
  )
}

// export async function getServerSideProps(ctx: NextPageContext) {
// Page.getInitialProps = async (ctx: NextPageContext) => {

//     if (Auth.redirectIfAuthenticated(ctx, '/')) {
//         return {};
//     }

//     return {}

// }
