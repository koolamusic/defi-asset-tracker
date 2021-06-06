import { CoinStatProps, TokenStatProps } from '@lib/constants'

export const data: TokenStatProps['data'][] = [
  {
    symbol: 'MATIC',
    label: 'Polygon MATIC',
    value: 59,
  },
  {
    symbol: 'ETH',
    label: 'Ethereum',
    value: 95,
  },
  {
    symbol: 'BSC',
    label: 'Binance',
    value: 43,
  },
]

export const coinDate: CoinStatProps['data'][] = [
  {
    symbol: 'MATIC',
    label: 'Polygon MATIC',
    value: 59,
    change: { value: 30.98, percent: +1.84 },
    currency: '',
  },
  {
    symbol: 'ETH',
    label: 'Ethereum',
    value: 95,
    change: { value: 12.4, percent: -0.72 },
    currency: '',
  },
  {
    symbol: 'BSC',
    label: 'Binance',
    value: 43,
    change: { value: 33, percent: 1.82 },
    currency: '',
  },
]
