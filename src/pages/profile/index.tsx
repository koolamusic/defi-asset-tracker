import React from 'react'
import { TransactionLog } from '@components/TransactionLog'
import { CompoundLayout, SubmitButton } from '@components/Layout'
import { MultiStat } from '@components/Statistic'
import { ProfileList, TransactionList, TransactionSearch } from '@components/List'
import { Avatar, Text, Box, VStack } from '@chakra-ui/react'


export default function Page(): JSX.Element {

    return (
        <CompoundLayout>
            <VStack w="100%">

                <VStack p="2" width="100%">
                    <Avatar size="md" name="MetaId" src="/" />
                    <Text pt={3}>Sharay Reed</Text>
                </VStack>
                <Box py={4} />

                <Box w="100%">
                    <ProfileList
                        customerName="Wallet Address"
                        customerStatus="Paid"
                        amountDue="3202"
                        overdueAmount="3113"
                        amount="3202"
                        paymentStatus="Binance Chain"
                        amountPaid="3113"
                        overdueStatus="Rudimentaty"
                        iconName="arrow-forward"
                        iconSize="Rudimentaty"
                        cardLink="/"
                    />
                    <ProfileList
                        customerName="Joined"
                        customerStatus="Paid"
                        amountDue="3202"
                        overdueAmount="3113"
                        amount="3202"
                        paymentStatus="Binance Chain"
                        amountPaid="3113"
                        overdueStatus="Rudimentaty"
                        iconName="arrow-forward"
                        iconSize="Rudimentaty"
                        cardLink="/"
                    />
                    <SubmitButton type="button" mt={8} withIcon buttonName="Logout" />


                </Box>
            </VStack>
        </CompoundLayout>
    )
}