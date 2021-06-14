import { Box, Flex, Switch } from '@chakra-ui/react'
import * as React from 'react'

interface DescriptionProps {
  title: string
  children?: React.ReactNode
}

export const Description = (props: DescriptionProps) => {
  const { title, children } = props
  return (
    <Flex align="center" pos="relative" justify="space-between">
      <Box flex="1">
        <Box as="h4" fontWeight="medium" maxW="xl">
          {title}
        </Box>
        {children && (
          <Box maxW="xl" color="gray.500" fontSize="sm">
            {children}
          </Box>
        )}
      </Box>
      <Switch size="lg" />
    </Flex>
  )
}
