import React from 'react'
import {
  Box,
  BoxProps,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  Button,
  PopoverBody,
} from '@chakra-ui/react'
import { outerColorGen, layerColorGen } from '../utils/helpers'
import { styleConstants } from '../theme'

export interface JokeCardProps extends BoxProps {
  options: {
    setup: string
    punchline: string
  }
}

export default function JokeCard({ options, ...props }: JokeCardProps) {
  return (
    <Box
      border={styleConstants.altBorder}
      boxShadow={styleConstants.lightShadow}
      borderRadius={styleConstants.defaultRadius}
      background={`${layerColorGen(options.setup)}`}
      borderColor={`${outerColorGen(options.setup)}`}
      // color={`${outerColorGen(options.setup)}`}
      _hover={{
        opacity: '0.8',
        shadow: styleConstants.defaultShadow,
      }}
      minH="200px"
      maxW="300px"
      w="100%"
      h="100%"
      p={6}
      position="relative"
    >
      <Box {...props}>
        <Text as="h1" fontSize="1.25rem">
          {options.setup}
        </Text>

        <Popover flip placement="top-start">
          <PopoverTrigger>
            <Button
              position="absolute"
              bottom={5}
              borderColor={`${outerColorGen(options.setup)}`}
              variant="outline"
            >
              Get Punchline
            </Button>
          </PopoverTrigger>
          <PopoverContent maxW="14.6rem">
            <PopoverHeader fontWeight="600">Punchline!</PopoverHeader>
            {/* <PopoverArrow /> */}
            <PopoverCloseButton mt={1} />
            <PopoverBody>{options.punchline}</PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  )
}
