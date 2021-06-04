import React from 'react'
import { destroyCookie } from 'nookies'
import { CompoundLayout, SubmitButton } from '@components/Layout'
import { ProfileList } from '@components/List'
import { Avatar, Text, Box, VStack } from '@chakra-ui/react'
import { useAuth } from '@lib/auth'
import { config } from '@lib/constants'

export default function Page(): JSX.Element {
  const { logout } = useAuth()

  const handleLogout = async () => {
    try {
      // const cookies = nookies.get(null)
      await destroyCookie(null, config.profileKey)

      await logout()
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }

  return (
    <CompoundLayout>
      <VStack w="100%">
        <VStack p="2" width="100%">
          <Avatar size="md" name="MetaId" src="/" />
          <Text pt={3}>Andrew Miracle</Text>
        </VStack>
        <Box py={4} />

        <Box w="100%">
          <ProfileList
            customerName="Wallet Address"
            paymentStatus="Binance Chain"
            itemName="Rudimentaty"
            // iconName="arrow-forward"
          />
          <ProfileList
            customerName="Joined"
            paymentStatus="Binance Chain"
            itemName="Rudimentaty"
            // amountPaid="3113"
            // customerStatus="Paid"
            // amountDue="3202"
            // overdueAmount="3113"
            // amount="3202"
          />
          <SubmitButton onClick={() => handleLogout()} type="button" mt={8} withIcon buttonName="Logout" />
        </Box>
      </VStack>
    </CompoundLayout>
  )
}
