import { FaEthereum } from 'react-icons/fa'
import { IcBinance, IcPolygonMatic } from '@components/_icons'

export const MORALIS_APPLICATION_ID =
  process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID
export const MORALIS_SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL

/* Stubs for config variables */
export const config = {
  loginRoute: '/login',
  rootRoute: '/tokens',
  authKey: '__app.sid',
  profileKey: '__app.user',
}

export interface AccountBalanceDict {
  balance: string
  decimals: number
  name: string
  symbol: string
}

export interface UserAccountDict {
  ACL: {
    [key: string]: {
      read: boolean
      write: boolean
    }
  }
  accounts: string[]
  authData: {
    moralisEth: {
      data: string
      id: string
      signature: string
    }
  }
  createdAt: string
  ethAddress: string
  name: string
  objectId: string
  sessionToken: string
  updatedAt: Date
  username: string
  ethBalance?: AccountBalanceDict
  bnbBalance?: AccountBalanceDict
}

type Icons = Record<string, { icon: React.ElementType; color: string }>
export type TPageProps = JSX.IntrinsicAttributes & {
  user: UserAccountDict
}

export interface CoinStatProps {
  icon: React.ElementType
  accentColor: string
  data: {
    symbol: string
    label: string
    currency: string
    value: number
    change: {
      value: number
      percent: number
    }
  }
}

export interface TokenStatProps {
  icon: React.ElementType
  accentColor: string
  data: {
    symbol: string
    label: string
    value: number
  }
}

export type TNetwork = 'ETH' | 'BSC' | 'MATIC'

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