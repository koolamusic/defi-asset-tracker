import React from 'react';
import styled from '@emotion/styled'
import Link from 'next/link'
import { Box, Stack, Avatar, Heading, Text, Icon, Flex as ChFlex } from '@chakra-ui/react'
import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'


interface ITransactionList {
    customerName: string,
    customerStatus: string,
    itemName?: string,
    amount: any,
    paymentStatus: string,
    overdueAmount: string,
    overdueStatus: string,
    cardLink: string,
    iconName: string | any,
    iconSize: any,

}


const Flex = styled(ChFlex)`
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`
const StatusText = styled(Text)`
    margin: 0;
    padding: 0;
    font-size: .65rem;
    line-height: 6px;
    text-transform: uppercase;
`

const LineDivider = styled.div`
    height: .8px;
    padding: 0px;
    margin: 0;
    background: #eee;
`


const TransactionList: React.FC<ITransactionList> = (props) => {
    const { customerName, customerStatus, amount, paymentStatus, overdueAmount, overdueStatus,
        // iconName, iconSize,
        cardLink } = props

    return (
        <Link href={cardLink} >
            <React.Fragment>

                <Flex>
                    <Box p="2" width="15%">
                        <Avatar size="sm" name={paymentStatus} src="/" />
                    </Box>

                    <Box width="40%">
                        <StatusText>{customerStatus}</StatusText>
                        <Heading as="h5" fontSize="sm">{customerName}</Heading>
                    </Box>

                    <Box width="20%">
                        <Heading as="h6" size="xs">{amount}</Heading>
                        <Text fontSize="xs" color="green.600">{paymentStatus}</Text>
                    </Box>

                    <Box width="20%">
                        <Heading as="h6" size="xs">{overdueAmount}</Heading>
                        <Text fontWeight="bold" fontSize="xs" color="red.700">{overdueStatus}</Text>
                    </Box>

                    <Box width="5%">
                        <Stack isInline>
                            {/* <Icon name={iconName} size={iconSize} /> */}
                            <ArrowForwardIcon />
                        </Stack>

                    </Box>
                </Flex>
                <LineDivider />
            </React.Fragment>
        </Link>



    )
}



/**
 * Component for Transactions List
 */


interface ITransactionSearch extends ITransactionList {
    itemName?: string,
    amountPaid: string,
    amountDue: string
}


const TransactionSearch: React.FC<ITransactionSearch> = (props) => {
    const { customerName, itemName, amountPaid, paymentStatus, amountDue, overdueStatus } = props


    return (
        <>
            <Flex {...props}>
                <Box width="55%">
                    <StatusText>{customerName}</StatusText>
                    <Heading as="h5" fontSize="sm">{itemName}</Heading>
                </Box>

                <Box width="20%">
                    <Heading as="h6" size="xs">{amountPaid}</Heading>
                    <Text fontSize="xs" color="green.600">{paymentStatus}</Text>
                </Box>

                <Box width="20%">
                    <Heading as="h6" size="xs">{amountDue}</Heading>
                    <Text fontWeight="bold" fontSize="xs" color="red.700">{overdueStatus}</Text>
                </Box>

                <Box width="5%">
                    <Stack isInline>
                        <ChevronRightIcon />
                    </Stack>

                </Box>
            </Flex>
            <LineDivider />
        </>
    )
}

// export the components as modules to be resuable by other component
// export default CustomerList
export { TransactionList, TransactionSearch }