/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Link from 'next/link'
import { useViewerQuery, ViewerDocument } from '../lib/viewer.graphql'
import { initializeApollo } from '../lib/apollo'
import { CTA } from '../components/CTA'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'

const Index = (): JSX.Element => {
  const { data } = useViewerQuery()
  const { viewer } = data!

  return (
    <div>
      You are signed in as {viewer.name} and you are {viewer.status} go to the{' '}
      <Link href="/about">
        <a>about</a>
      </Link>{' '}
      page.
      <CTA />
    </div>
  )
}

export async function getStaticProps(): Promise<NormalizedCacheObject> {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ViewerDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
