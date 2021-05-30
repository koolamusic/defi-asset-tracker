import React, { useCallback } from 'react';
import Head from 'next/head'
import { Text, Box, Flex } from '@chakra-ui/react'


import { Wrapper, CardWrapper } from '../components/Container'
import { Main } from '../components/Main'
import { Header } from '../components/Header'

import { styleConstants } from '../theme';




export default function Page(): JSX.Element {

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
          <Box my={4} mt={8} pt={6}>
            <Text
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              fontSize={["3xl", "5xl"]}
              fontWeight="bold"
              textAlign={["center", "left"]}
              my={[3, 6]}
              py={[2, 4]}
            >
              Hear a Joke
            </Text>
          </Box>
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