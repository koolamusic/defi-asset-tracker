import { Box, Circle, Flex, Heading, HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'
import { formatNumberIntl } from '@utils/helpers'
import { CoinStatProps, TokenStatProps } from '@lib/constants'

interface IndicatorProps {
  type: 'up' | 'down'
}

const types = {
  up: { icon: FiArrowUpRight, color: 'green.500' },
  down: { icon: FiArrowDownLeft, color: 'red.500' },
}

const Indicator = (props: IndicatorProps) => {
  const { type } = props
  const { color, icon } = types[type]
  return <Box as={icon} fontSize="lg" color={color} />
}

const CoinStat = (props: CoinStatProps) => {
  const { data, accentColor, icon } = props
  const { label, currency, value, change, symbol } = data

  const isNegative = change.percent < 0

  return (
    <Box bg={mode('white', 'gray.700')} px="6" py="4" shadow="base" rounded="lg">
      <HStack>
        <Circle bg={accentColor} color="white" rounded="full" size="6">
          <Box as={icon} />
        </Circle>
        <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
          {label}
        </Text>
      </HStack>

      <Heading as="h4" size="lg" my="3" fontWeight="extrabold">
        {currency}
        {formatNumberIntl(value)}
      </Heading>
      <Flex justify="space-between" align="center" fontWeight="medium" fontSize="sm">
        <HStack spacing="0" color={mode('gray.500', 'gray.400')}>
          <Indicator type={isNegative ? 'down' : 'up'} />
          <Text>
            {currency}
            {formatNumberIntl(change.value)} ({isNegative ? '' : '+'}
            {change.percent}%)
          </Text>
        </HStack>
        <Text color="gray.400">{symbol}</Text>
      </Flex>
    </Box>
  )
}

export const TokenStat = (props: TokenStatProps) => {
  const { data, accentColor, icon } = props
  const { label, value, symbol } = data

  return (
    <Box bg={mode('white', 'gray.700')} px="6" py="4" shadow="base" rounded="lg">
      <Heading as="h4" size="lg" mt="3" mb="0" fontWeight="extrabold">
        {value}
      </Heading>

      <Flex justify="space-between" mb="3" align="center" fontWeight="medium" fontSize="sm">
        <HStack spacing="0" color={mode('gray.500', 'gray.400')}>
          <Text>Assets on-chain</Text>
        </HStack>
        <Heading as="h3" size="xs" color="gray.600">
          {symbol}
        </Heading>
      </Flex>

      <HStack>
        <Circle bg={accentColor} color="white" rounded="full" size="6">
          <Box as={icon} />
        </Circle>
        <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
          {label}
        </Text>
      </HStack>
    </Box>
  )
}
export default CoinStat
