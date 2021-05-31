import React from 'react'
import { NextPageContext } from 'next'
import TokenPage from './tokens'

import * as Auth from '@utils/user'

export default function Page(): JSX.Element {
  return <TokenPage />
}

// Page.getInitialProps = async (ctx: NextPageContext) => {
//   if (Auth.redirectIfAuthenticated(ctx, '/')) {
//     return {}
//   }

//   return {}
// }

export async function getServerSideProps(ctx: NextPageContext) {
  await Auth.handleAuthenticatedRequest(ctx)
  return {
    props: {
      user: null,
    },
  }
}
