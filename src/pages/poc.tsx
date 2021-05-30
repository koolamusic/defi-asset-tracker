import React, { useCallback } from 'react';
import Head from 'next/head'
import { Text, Box, Flex } from '@chakra-ui/react'


import { Wrapper, CardWrapper } from '@components/Container'
import { SubmitButton } from '@components/Layout'

import { Main } from '@components/Main'
import { Header } from '@components/Body'
import { useAuth } from '@lib/auth'
import { styleConstants } from '../theme';




export default function Page(): JSX.Element {
  const { logout, login } = useAuth()

  const fetchResources = useCallback(async () => {

    try {

      // console.log(manga, jokes)
    } catch (error) {
      alert(error)
    }
  }, [],
  )


  React.useEffect(() => {
    fetchResources()
  }, []);


  return (
    <>
      <Head>
        <title>Asset Tracker 🤐</title>
      </Head>
      <Header isDefault={true} />
      <Wrapper>


        {/* =================>  The Jokes Section */}
        <Main>
          <Flex justify="space-between" my={4} mt={8} pt={6}>
            <SubmitButton onClick={login} type="button" buttonName="Login Account" />
          </Flex>
          <Flex justify="space-between" my={4} mt={8} pt={6}>
            <SubmitButton onClick={logout} type="button" buttonName="Logout your Account" />
          </Flex>
        </Main>
        {/* =================>  The Jokes Section */}



        {/* =========> Section to render Anime Collection */}
        <Flex direction="column" width="100%" borderTop={styleConstants.altBorder} background="white">
          <Main pb={1}>
            <Box>
              <Text
                bgGradient="linear(to-l, #be3759, #108645)"
                bgClip="text"
                fontSize={["3xl", "5xl"]}
                fontWeight="bold"
                my={[1, 3]}
                py={[1, 3]}
              >
                Explore Mangas
            </Text>
            </Box>
          </Main>
        </Flex>

        <CardWrapper>
          <Main pb={12}>

          </Main>
        </CardWrapper>
        {/* =========> Section to render Anime Collection */}

      </Wrapper>
    </>
  )
}