import React from 'react'
import { CompoundLayout } from '@components/Layout'
import { FormPageHeader } from '@components/Body'
import { MultiStat } from '@components/Statistic'
import { Box, Center, VStack, Text } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

export default function Page(): JSX.Element {
  return (
    <CompoundLayout>
      <FormPageHeader
        formHeading="Track your NFTs"
        formSubHeading="Monitor ROI for your NFTs on the ETH Network"
      />
      <MultiStat />
      <Box py={[4, 8]} />
      <Center>
        <VStack>
          <InfoOutlineIcon color="orange.300" fontSize="7rem" />
          <Text pt={3}>You do not have any NFTs at the moment</Text>
        </VStack>
      </Center>
    </CompoundLayout>
  )
}
