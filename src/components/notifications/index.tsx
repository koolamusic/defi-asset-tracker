import { Box, Stack, StackDivider, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Description } from './Description'

export const NotificationCard = () => {
  return (
    <Box w="100%" py="6" bg={mode('inherit', 'gray.700')} overflow="hidden">
      <Box mb="8">
        <Text as="h3" fontWeight="medium" fontFamily="heading" fontSize="lg">
          Transaction & Alerts
        </Text>
        <Text color="gray.500" fontSize="sm">
          Configure how you want to be notified for activities
        </Text>
      </Box>
      <Stack spacing="4" divider={<StackDivider />}>
        <Description title="Tokens">Notify me if new assets are added to my account</Description>
        <Description title="Transactions">Notify me of new transactions across my portfolio</Description>
        <Description title="NFTs">Notify me of new buys and sell orders on my NFTs</Description>
      </Stack>
    </Box>
  )
}
