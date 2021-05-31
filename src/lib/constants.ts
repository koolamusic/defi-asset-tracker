export const MORALIS_APPLICATION_ID =
  process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID
export const MORALIS_SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL

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