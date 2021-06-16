import React, { useState, useEffect } from 'react'
import { useMoralis } from '@lib/moralis'
import { CompoundLayout, Loader } from '@components/Layout'
import { FormPageHeader } from '@components/Body'
import { TokenStat } from '@components/ChainReports'
import { TransactionList } from '@components/List'
import * as NextUser from '@utils/user'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { NextPageContext } from 'next'
import {
  UserAccountDict,
  icons,
  TPageProps,
  TokenStatProps,
  TransactionStateContainer,
  TransactionListProps,
} from '@lib/constants'
import { orderLastToFirst } from '@utils/helpers'

export default function Page(props: TPageProps): JSX.Element {
  const [assets, setAssets] = useState<TransactionStateContainer>({} as TransactionStateContainer)
  const [loading, setLoading] = useState<boolean>(true)
  const { Moralis } = useMoralis()

  useEffect(() => {
    /* Init loader */
    setLoading(true)

    async function valuesFromMoralis() {
      /* Use Promise.all */
      const ethOptions = { chain: 'eth' }
      // const bnbOptions = { chain: 'bsc' }
      // const maticOptions = { chain: 'matic' }
      const user = props.user as UserAccountDict
      const userTransEth: any[] = await Moralis.Web3.getTransactions({
        ...ethOptions,
        address: user.ethAddress,
      })
      // const userTransBsc = await Moralis.Web3.getTransactions({
      //   ...bnbOptions,
      //   address: user.ethAddress,
      // })
      // const userTransMatic = await Moralis.Web3.getTransactions({
      //   ...maticOptions,
      //   address: user.ethAddress,
      // })
      const nft = userTransEth.slice(0, 9)
      const tokenStat: TokenStatProps['data'][] = [
        {
          symbol: 'MATIC',
          label: 'Polygon MATIC',
          value: 0,
          message: 'NFTs on chain',
        },
        {
          symbol: 'ETH',
          label: 'Ethereum',
          value: nft.length,
          message: 'NFTs on chain',
        },
        {
          symbol: 'BSC',
          label: 'Binance',
          value: 0,
          message: 'NFTs on chain',
        },
      ]

      const transactionBase = orderLastToFirst(
        [...nft.map((item: TransactionListProps) => ({ ...item, network: 'ETH' }))],
        'block_timestamp'
      )

      // const coinBase = [
      // ]
      return {
        user,
        transactionBase,
        tokenStat,
      }
    }

    valuesFromMoralis().then((val) => {
      setAssets(val)
      setLoading(false)
    })
  }, [])

  // console.log(assets, 'profile assets')

  if (loading) {
    return <Loader />
  }

  return (
    <React.Fragment>
      <CompoundLayout>
        <FormPageHeader formHeading="Your NFTs" formSubHeading="All of your NFTs in one place" />
        {/* /////////////// Network Token Balance Stat ///////////// */}
        <Box mx="auto" my={6}>
          <SimpleGrid columns={{ sm: 2, md: 3, lg: 3 }} spacing="6">
            {assets.tokenStat.map((stat, index) => {
              const { icon, color: accentColor } = icons[stat.symbol]
              return <TokenStat icon={icon} accentColor={accentColor} key={index} data={stat} />
            })}
          </SimpleGrid>
        </Box>
        {/* /////////////// Network Token Balance Stat ///////////// */}

        <Box py={4} />
        {/* /////////////// Contracts and Tokens in Wallet ///////////// */}
        <Box mx="auto" my={6}>
          {assets.transactionBase.map((asset, _index) => {
            // const { symbol, name, tokenAddress, contractType, balance } = asset

            return <TransactionList key={asset.hash} {...asset} />
          })}
        </Box>
        {/* /////////////// Contracts and Tokens in Wallet ///////////// */}

        {/* <TransactionList
        customerName="9x027373761011"
        customerStatus="Paid"
        amount={3202}
        paymentStatus="Ethereum"
        overdueAmount="3113"
        overdueStatus="Rudimentaty"
        iconName="arrow-forward"
        cardLink="/tokens"
      /> */}
      </CompoundLayout>
      <Box py={8} />
    </React.Fragment>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const userInfo = await NextUser.handleAuthenticatedRequest(ctx)

  /* Manage Nextjs screams!!! */
  if (!userInfo)
    return {
      props: {
        user: null,
      },
    }
  return userInfo
}
