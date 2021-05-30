import React from 'react';
import { Box, BoxProps, Text, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverHeader, Button, PopoverBody } from '@chakra-ui/react'
import { TJokesCollectionProps, outerColorGen, layerColorGen } from '../utils/helpers';
import { styleConstants } from '../theme';

export interface JokeCardProps extends BoxProps {
    jokes: TJokesCollectionProps
}

export default function JokeCard({ jokes, ...props }: JokeCardProps) {

    return (
        <Box
            border={styleConstants.altBorder}
            boxShadow={styleConstants.lightShadow}
            borderRadius={styleConstants.defaultRadius}
            background={`${layerColorGen(jokes.setup)}`}
            borderColor={`${outerColorGen(jokes.setup)}`}
            // color={`${outerColorGen(jokes.setup)}`}
            _hover={{
                opacity: '0.8',
                shadow: styleConstants.defaultShadow

            }}
            minH="200px"
            maxW="300px"
            w="100%"
            h="100%"
            p={6}
            position="relative"

        >
            <Box {...props}>
                <Text as="h1" fontSize="1.25rem">{jokes.setup}</Text>



                <Popover
                    flip
                    placement="top-start"
                >
                    <PopoverTrigger>
                        <Button position="absolute" bottom={5} borderColor={`${outerColorGen(jokes.setup)}`} variant="outline">Get Punchline</Button>
                    </PopoverTrigger>
                    <PopoverContent maxW="14.6rem">
                        <PopoverHeader fontWeight="600">Punchline!</PopoverHeader>
                        {/* <PopoverArrow /> */}
                        <PopoverCloseButton mt={1} />
                        <PopoverBody>
                            {jokes.punchline}
                        </PopoverBody>
                    </PopoverContent>
                </Popover>


            </Box>
        </Box>

    )
}