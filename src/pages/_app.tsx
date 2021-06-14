import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import progress from 'nprogress'

import theme from '../theme'
import Fonts from '../components/Global'
import { Unstated } from '@lib/unstated'
import DocumentHead from '@utils/next/Head'

/* Configure N-progress Routing Feedback */
progress.configure({ showSpinner: false })

/* ------Apply NextJs Custom Routing------ */
Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.done())
Router.events.on('routeChangeError', () => progress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Unstated.Provider>
      <ChakraProvider resetCSS theme={theme}>
        <DocumentHead />
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </Unstated.Provider>
  )
}

export default MyApp
