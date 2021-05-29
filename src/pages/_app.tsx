import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { useApollo } from '../lib/apollo'
import theme from '../lib/theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

