import { Box, Stack, StackDivider, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Description } from './Description'

export const NotificationCard = () => {
  return (
    <Box maxW="3xl" mx="auto" py="6" px="8" rounded="lg" bg={mode('white', 'gray.700')} shadow="base" overflow="hidden">
      <Box mb="8">
        <Text as="h3" fontWeight="bold" fontSize="lg">
          Notifications
        </Text>
        <Text color="gray.500" fontSize="sm">
          Receive notifications about Chakra UI updates.
        </Text>
      </Box>
      <Stack spacing="4" divider={<StackDivider />}>
        <Description title="Email">Receive email updates on comments you followed</Description>
        <Description title="Text messages">Recieve updates by SMS</Description>
        <Description title="Browser notifications">We&apos;ll send via our desktop or mobile app</Description>
      </Stack>
    </Box>
  )
}
