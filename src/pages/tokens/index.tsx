import React, { useEffect } from 'react'
import { useMoralis } from '@lib/moralis'
import { TransactionLog } from '@components/TransactionLog'
import { CompoundLayout } from '@components/Layout'
import { FormPageHeader } from '@components/Body'
import { MultiStat } from '@components/Statistic'
import { TransactionList, TransactionSearch } from '@components/List'
import { Box } from '@chakra-ui/react'

export default function Page(): JSX.Element {
  const { Moralis } = useMoralis()

  useEffect(() => {
    async function useMora() {
      const balances = await Moralis.Web3.getAllERC20()
      const user = await JSON.parse(localStorage.getItem('user') as string)
      const options = { chain: 'bsc' }
      const bnbBalances = await Moralis.Web3.getAllERC20(options)
      const ethBalance = await Moralis.Web3.getERC20() // defaults to ETH
      const bnbBalance = await Moralis.Web3.getERC20({ chain: 'bsc' })
      const userEthNFTs = await Moralis.Web3.getNFTs()
      const userTrans = await Moralis.Web3.getTransactions()
      const userTransBsc = await Moralis.Web3.getTransactions({
        ...options,
        address: user.ethAddress,
      })
      const numTx = await Moralis.Web3.getTransactionsCount()

      return {
        balances,
        userTransBsc,
        user,
        bnbBalances,
        ethBalance,
        bnbBalance,
        userEthNFTs,
        userTrans,
        numTx,
      }
    }

    useMora().then((val) => console.log(val))
  }, [])

  return (
    <CompoundLayout>
      <FormPageHeader
        formHeading="Your Tokens"
        formSubHeading="Monitor ROI for your tokens on the BSC and ETH Network"
      />
      <MultiStat />
      <Box py={4} />
      <TransactionLog />
      <TransactionSearch
        customerName="0x33481f1383131"
        customerStatus="Paid"
        amountDue="3202"
        overdueAmount="3113"
        amount="3202"
        paymentStatus="Binance Chain"
        amountPaid="3113"
        overdueStatus="Rudimentaty"
        iconName="arrow-forward"
        iconSize="Rudimentaty"
        cardLink="/"
      />
      <TransactionList
        customerName="9x027373761011"
        customerStatus="Paid"
        amount={3202}
        paymentStatus="Ethereum"
        overdueAmount="3113"
        overdueStatus="Rudimentaty"
        iconName="arrow-forward"
        iconSize="Rudimentaty"
        cardLink="/tokens"
      />
      <TransactionList
        customerName="9x027373761011"
        customerStatus="Paid"
        amount={3202}
        paymentStatus="Ethereum"
        overdueAmount="3113"
        overdueStatus="Rudimentaty"
        iconName="arrow-forward"
        iconSize="Rudimentaty"
        cardLink="/tokens"
      />
    </CompoundLayout>
  )
}

// export async function getServerSideProps(ctx: NextPageContext) {
// Page.getInitialProps = async (ctx: NextPageContext) => {

//     if (Auth.redirectIfAuthenticated(ctx, '/')) {
//         return {};
//     }

//     return {}

// }
