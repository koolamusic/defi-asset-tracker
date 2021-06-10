import React from 'react'
import Blockies from 'react-blockies'
import styled from '@emotion/styled'
import {
  Box,
  Stack,
  Avatar,
  Heading,
  Text,
  Flex as ChFlex,
  Badge,
  Link,
  IconButton,
  Circle,
  useMediaQuery,
} from '@chakra-ui/react'
import { ArrowForwardIcon, ChevronRightIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { Url } from 'url'
import { formatAddress, formatBalanceToDecimal, outerColorGen, layerColorGen } from '@utils/helpers'
import { TransactionSearchProps, chainToExplorerMap, icons, CoinListProps, TransactionListProps } from '@lib/constants'

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
  font-size: 0.75rem;
  /* line-height: 6px; */
  text-transform: uppercase;
`

const LineDivider = styled.div`
  height: 0.8px;
  padding: 0px;
  margin: 0;
  background: #eee;
`

export const TransactionSearch: React.FC<Partial<TransactionSearchProps>> = (props) => {
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

interface ProfileListProps {
  propertyNode: string
  value: string
}

export const ProfileList: React.FC<ProfileListProps> = (props) => {
  const { propertyNode, value } = props

  return (
    <React.Fragment>
      <Flex w="100%">
        <Box width="30%">
          <StatusText>{propertyNode}</StatusText>
        </Box>

        <Box width="65%">
          <Heading
            w="max-content"
            p={1}
            px={2}
            rounded="md"
            fontWeight="500"
            fontSize="sm"
            bg={layerColorGen(value)}
            color={outerColorGen(value)}
          >
            {value}
          </Heading>
        </Box>

        <Box width="5%">
          <Stack isInline>
            <InfoOutlineIcon />
          </Stack>
        </Box>
      </Flex>
      <LineDivider />
    </React.Fragment>
  )
}

export const CoinList: React.FC<CoinListProps> = (props) => {
  const { symbol, name, tokenAddress, network, decimal, contractType, balance } = props
  const [isMobile] = useMediaQuery('(max-width: 480px)')

  const router = useRouter()

  return (
    <React.Fragment>
      <Flex
        bg={['white', 'inherit']}
        border={['1px solid #ddd', 'none']}
        p={[4, 'inherit']}
        position={['relative']}
        direction={['column', 'row']}
      >
        <Box p="2" width={['100%', '5%']}>
          <Circle bg={icons[network].color} color="white" rounded="full" size="6">
            <Box as={icons[network].icon} />
          </Circle>
        </Box>

        <Box width={['100%', '35%']} py={[2, 'inherit']}>
          <Text fontWeight="bold" fontSize="xs" color="blue.800">
            Balance:
          </Text>
          <Heading as="h5" fontSize="sm">
            {formatBalanceToDecimal(balance, decimal, network)}{' '}
            <Badge bg={layerColorGen(symbol)} color={outerColorGen(symbol)}>
              {symbol}
            </Badge>
          </Heading>
        </Box>

        <Box width={['100%', '30%']} py={[2, 'inherit']}>
          <StatusText>{name}</StatusText>
          <Badge as="h6" size="xs">
            <Link
              href={`${chainToExplorerMap[network]}/address/${tokenAddress}`}
              to={`${chainToExplorerMap[network]}/address/${tokenAddress}`}
              isExternal
            >
              {isMobile ? tokenAddress : formatAddress(tokenAddress)}
            </Link>
          </Badge>
        </Box>

        <Box width={['100%', '10%']}>
          <Text fontWeight="bold" fontSize="xs" color="red.700">
            Contract Type:
          </Text>
          <Heading as="h6" size="xs">
            {contractType || name}
          </Heading>
        </Box>

        <Box
          position={['absolute', 'relative']}
          top="40%"
          right="3%"
          width={['100%', '5%']}
          onClick={() => router.push(`/token/${tokenAddress}`)}
        >
          <Stack justify={['flex-end']} isInline>
            <IconButton variant="ghost" size="md" aria-label="view token detail" icon={<ChevronRightIcon />} />
          </Stack>
        </Box>
      </Flex>
      <LineDivider />
      <Box mb={[3, 0]} />
    </React.Fragment>
  )
}

export const TransactionList: React.FC<TransactionListProps> = (props) => {
  const { block_timestamp, gas_price, hash, tokenAddress, network, from_address, to_address } = props
  const [isMobile] = useMediaQuery('(max-width: 480px)')

  const router = useRouter()

  return (
    <React.Fragment>
      <Flex
        bg={['white', 'inherit']}
        border={['1px solid #ddd', 'none']}
        p={[4, 'inherit']}
        position={['relative']}
        direction={['column', 'row']}
      >
        <Box p="2" width={['100%', '5%']}>
          <Circle bg={icons[network].color} color="white" rounded="full" size="6">
            <Box as={icons[network].icon} />
          </Circle>
        </Box>

        {/* <Box width={['100%', '35%']} py={[2, 'inherit']}>
          <Text fontWeight="bold" fontSize="xs" color="blue.800">
            Amount:
          </Text>
          <Heading as="h5" fontSize="sm">
            {formatBalanceToDecimal(balance, decimal, network)}{' '}
            <Badge bg={layerColorGen(symbol)} color={outerColorGen(symbol)}>
              {symbol}
            </Badge>
          </Heading>
        </Box> */}

        <Box width={['100%', '20%']} py={[2, 'inherit']}>
          <StatusText>From Address</StatusText>
          <Badge as="h6" size="xs">
            <Link
              href={`${chainToExplorerMap[network]}/address/${from_address}`}
              to={`${chainToExplorerMap[network]}/address/${from_address}`}
              isExternal
            >
              {isMobile ? from_address : formatAddress(from_address || '')}
            </Link>
          </Badge>
        </Box>

        <Box width={['100%', '20%']} py={[2, 'inherit']}>
          <StatusText>To Address</StatusText>
          <Badge as="h6" size="xs">
            <Link
              href={`${chainToExplorerMap[network]}/address/${to_address}`}
              to={`${chainToExplorerMap[network]}/address/${to_address}`}
              isExternal
            >
              {isMobile ? to_address : formatAddress(to_address || '')}
            </Link>
          </Badge>
        </Box>

        <Box width={['100%', '25%']} py={[2, 'inherit']}>
          <StatusText>Transaction Hash</StatusText>
          <Badge as="h6" size="xs">
            <Link
              href={`${chainToExplorerMap[network]}/tx/${hash}`}
              to={`${chainToExplorerMap[network]}/tx/${hash}`}
              isExternal
            >
              {formatAddress(hash)}
            </Link>
          </Badge>
        </Box>

        <Box width={['100%', '20%']}>
          <Text fontWeight="bold" fontSize="xs" color="red.700">
            Gas price
          </Text>
          <Text as="h6" size="xs">
            {gas_price}
          </Text>
        </Box>

        <Box width={['100%', '25%']}>
          <Text fontWeight="bold" fontSize="xs" color="red.700">
            Timestamp
          </Text>
          <Text as="small" size="xs">
            {new Date(block_timestamp).toUTCString()}
          </Text>
        </Box>

        <Box
          position={['absolute', 'relative']}
          bottom="4%"
          right="3%"
          width={['100%', '5%']}
          onClick={() => router.push(`/token/${tokenAddress}`)}
        >
          <Stack justify={['flex-end']} isInline>
            <IconButton
              variant={isMobile ? 'solid' : 'ghost'}
              size="md"
              aria-label="view token detail"
              icon={<ChevronRightIcon />}
            />
          </Stack>
        </Box>
      </Flex>
      <LineDivider />
      <Box mb={[3, 0]} />
    </React.Fragment>
  )
}
