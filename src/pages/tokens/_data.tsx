import { FaEthereum } from 'react-icons/fa'
import { CoinStatProps, TokenStatProps } from '@lib/constants'
import { IcBinance, IcPolygonMatic } from '@components/_icons'

type Icons = Record<string, { icon: React.ElementType; color: string }>

export const icons: Icons = {
  MATIC: {
    icon: IcPolygonMatic,
    color: '#8f5ae8',
  },
  ETH: {
    icon: FaEthereum,
    color: '#3c3c3d',
  },
  BSC: {
    icon: IcBinance,
    color: '#121213',
  },
}

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
