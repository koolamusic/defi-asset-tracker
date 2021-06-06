import React from 'react'
import styled from '@emotion/styled'
import {
  Box,
  Stack,
  Avatar,
  Heading,
  Text,
  Flex as ChFlex,
  Badge,
  Tag,
  TagLabel,
  Link,
  IconButton,
  Circle,
} from '@chakra-ui/react'
import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { Url } from 'url'
import { formatAddress, formatBalanceToDecimal, formatBalance } from '@utils/helpers'
import { TNetwork, icons } from '@lib/constants'

interface ITransactionList {
  customerName: string
  customerStatus: string
  itemName?: string
  amount: any
  paymentStatus: string
  overdueAmount: string
  overdueStatus: string
  cardLink: string
  iconName: string | any
  iconSize: any
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
  font-size: 0.65rem;
  line-height: 6px;
  text-transform: uppercase;
`

const LineDivider = styled.div`
  height: 0.8px;
  padding: 0px;
  margin: 0;
  background: #eee;
`

export const TransactionList: React.FC<Partial<ITransactionList>> = (props) => {
  const { customerName, customerStatus, amount, paymentStatus, overdueAmount, overdueStatus, cardLink } = props
  const router = useRouter()

  return (
    <React.Fragment>
      <Flex onClick={() => router.push(cardLink as unknown as Url)}>
        <Box p="2" width="15%">
          <Avatar size="sm" name={paymentStatus} src="/" />
        </Box>

        <Box width="40%">
          <StatusText>{customerStatus}</StatusText>
          <Heading as="h5" fontSize="sm">
            {customerName}
          </Heading>
        </Box>

        <Box width="20%">
          <Heading as="h6" size="xs">
            {amount}
          </Heading>
          <Text fontSize="xs" color="green.600">
            {paymentStatus}
          </Text>
        </Box>

        <Box width="20%">
          <Heading as="h6" size="xs">
            {overdueAmount}
          </Heading>
          <Text fontWeight="bold" fontSize="xs" color="red.700">
            {overdueStatus}
          </Text>
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
  )
}

/**
 * Component for Transactions List
 */

interface ITransactionSearch extends ITransactionList {
  itemName?: string
  amountPaid: string
  amountDue: string
}

export const TransactionSearch: React.FC<Partial<ITransactionSearch>> = (props) => {
  const { customerName, itemName, amountPaid, paymentStatus, amountDue, overdueStatus } = props

  return (
    <>
      <Flex {...props}>
        <Box width="55%">
          <StatusText>{customerName}</StatusText>
          <Heading as="h5" fontSize="sm">
            {itemName}
          </Heading>
        </Box>

        <Box width="20%">
          <Heading as="h6" size="xs">
            {amountPaid}
          </Heading>
          <Text fontSize="xs" color="green.600">
            {paymentStatus}
          </Text>
        </Box>

        <Box width="20%">
          <Heading as="h6" size="xs">
            {amountDue}
          </Heading>
          <Text fontWeight="bold" fontSize="xs" color="red.700">
            {overdueStatus}
          </Text>
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

export const ProfileList: React.FC<Partial<ITransactionSearch>> = (props) => {
  const { customerName, itemName, paymentStatus } = props

  return (
    <>
      <Flex {...props}>
        <Box width="55%">
          <StatusText>{customerName}</StatusText>
          <Heading as="h5" fontSize="sm">
            {itemName}
          </Heading>
        </Box>

        <Box width="40%">
          {/* <Heading as="h6" size="xs">{amountPaid}</Heading> */}
          <Text fontSize="xs" color="blue.700">
            {paymentStatus}
          </Text>
        </Box>

        {/* <Box width="20%">
                    <Heading as="h6" size="xs">{amountDue}</Heading>
                    <Text fontWeight="bold" fontSize="xs" color="red.700">{overdueStatus}</Text>
                </Box> */}

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

interface CoinListProps {
  symbol: string
  name: string
  tokenAddress: string
  network: TNetwork
  decimal: number
  contractType: string
  balance: string
}

export const CoinList: React.FC<unknown> = (props: CoinListProps) => {
  const { symbol, name, tokenAddress, network, decimal, contractType, balance } = props
  const router = useRouter()

  const chainToExplorerMap: Record<TNetwork, string> = {
    ETH: 'https://etherscan.com',
    BSC: 'https://bscscan.com',
    MATIC: 'https://etherscan.com',
  }

  return (
    <React.Fragment>
      <Flex>
        <Box p="2" width="5%">
          <Circle bg={icons[network].color} color="white" rounded="full" size="6">
            <Box as={icons[network].icon} />
          </Circle>
        </Box>

        <Box width="35%">
          <StatusText>Balance:</StatusText>
          <Heading as="h5" fontSize="sm">
            {formatBalanceToDecimal(balance, decimal, network)} <Badge fontSize="sm">{symbol}</Badge>
          </Heading>
        </Box>

        <Box width="30%">
          <StatusText>{name}</StatusText>
          <Badge as="h6" size="xs">
            <Link
              href={`${chainToExplorerMap[network]}/${tokenAddress}`}
              to={`https://etherscan.com/${tokenAddress}`}
              isExternal
            >
              {formatAddress(tokenAddress)}
            </Link>
          </Badge>
        </Box>

        <Box width="10%">
          <Text fontWeight="bold" fontSize="xs" color="red.700">
            Contract Type:
          </Text>
          <Heading as="h6" size="xs">
            {contractType || name}
          </Heading>
        </Box>

        <Box width="5%" onClick={() => router.push(`/token/${tokenAddress}`)}>
          <Stack isInline>
            <IconButton variant="ghost" size="md" aria-label="view token detail" icon={<ChevronRightIcon />} />
          </Stack>
        </Box>
      </Flex>
      <LineDivider />
    </React.Fragment>
  )
}
