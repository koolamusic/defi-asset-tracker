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
  createdAt: Date
  ethAddress: string
  name: string
  objectId: string
  sessionToken: string
  updatedAt: Date
  username: string
  ethBalance?: AccountBalanceDict
  bnbBalance?: AccountBalanceDict
}

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