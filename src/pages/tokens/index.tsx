import React, { useState, useEffect } from 'react'
import { useMoralis } from '@lib/moralis'
import { CompoundLayout, Loader } from '@components/Layout'
import { FormPageHeader } from '@components/Body'
import { MultiStat } from '@components/Statistic'
import { TokenStat } from '@components/ChainReports'
import { TransactionList, TransactionSearch } from '@components/List'
import * as Auth from '@utils/user'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { NextPageContext } from 'next'
import { UserAccountDict, TPageProps, TokenStatProps } from '@lib/constants'
import { icons } from './_data'

export default function Page(props: TPageProps): JSX.Element {
  const [assets, setAssets] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState<boolean>(true)
  const { Moralis } = useMoralis()

  useEffect(() => {
    /* Init loader */
    setLoading(true)

    async function useMora() {
      /* Use Promise.all */
      const ethOptions = { chain: 'eth' }
      const bnbOptions = { chain: 'bsc' }
      const maticOptions = { chain: 'matic' }
      const user = props.user as UserAccountDict
      const ethBalances: unknown[] = await Moralis.Web3.getAllERC20()
      const bnbBalances: unknown[] = await Moralis.Web3.getAllERC20(bnbOptions)
      const maticBalances: unknown[] = await Moralis.Web3.getAllERC20(maticOptions)
      const ethBalance = await Moralis.Web3.getERC20() // defaults to ETH
      const bnbBalance = await Moralis.Web3.getERC20({ chain: 'bsc' })
      const userEthNFTs = await Moralis.Web3.getNFTs()
      const userTrans = await Moralis.Web3.getTransactions({
        ...ethOptions,
        address: user.ethAddress,
      })
      const userTransBsc = await Moralis.Web3.getTransactions({
        ...bnbOptions,
        address: user.ethAddress,
      })
      const numTx = await Moralis.Web3.getTransactionsCount()
      const tokenStat: TokenStatProps['data'][] = [
        {
          symbol: 'MATIC',
          label: 'Polygon MATIC',
          value: maticBalances.length,
        },
        {
          symbol: 'ETH',
          label: 'Ethereum',
          value: ethBalances.length,
        },
        {
          symbol: 'BSC',
          label: 'Binance',
          value: bnbBalances.length,
        },
      ]
      return {
        ethBalances,
        bnbBalances,
        maticBalances,
        userTransBsc,
        user,
        ethBalance,
        bnbBalance,
        userEthNFTs,
        userTrans,
        numTx,
        tokenStat,
      }
    }

    useMora().then((val) => {
      setAssets(val)
      setLoading(false)
    })
  }, [])

  console.log(assets, 'profile assets')

  if (loading) {
    return <Loader />
  }

  return (
    <CompoundLayout>
      <FormPageHeader
        formHeading="Your Tokens"
        formSubHeading="Monitor ROI for your tokens on the BSC and ETH Network"
      />
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

      <MultiStat />
      <Box py={4} />
      <TransactionSearch
        // customerName="0x33481f1383131"
        // customerStatus="Paid"
        // amountDue="3202"
        // amountPaid="3113"
        amount="3202"
        // paymentStatus="Binance Chain"
        // overdueStatus="Rudimentaty"
        // cardLink="/"
      />
      <TransactionList
        customerName="9x027373761011"
        customerStatus="Paid"
        amount={3202}
        paymentStatus="Ethereum"
        overdueAmount="3113"
        overdueStatus="Rudimentaty"
        iconName="arrow-forward"
        cardLink="/tokens"
      />
      <TransactionList
        customerName="9x027373761011"
        customerStatus="Paid"
        amount={3202}
        paymentStatus="Ethereum"
        overdueStatus="Rudimentaty"
        iconName="arrow-forward"
        cardLink="/tokens"
      />
    </CompoundLayout>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const userInfo = await Auth.handleAuthenticatedRequest(ctx)

  /* Manage Nextjs screams!!! */
  if (!userInfo)
    return {
      props: {
        user: null,
      },
    }
  return userInfo
}
