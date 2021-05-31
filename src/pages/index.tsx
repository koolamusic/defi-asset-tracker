import React from 'react'
import { NextPageContext } from 'next'
import * as Auth from '@utils/user'
import TokenPage from './tokens'
import { TPageProps } from '@lib/constants'

export default function Page(props: TPageProps): JSX.Element {
  return <TokenPage {...props} />
}

// Page.getInitialProps = async (ctx: NextPageContext) => {
//   if (Auth.redirectIfAuthenticated(ctx, '/')) {
//     return {}
//   }

//   return {}
// }

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
