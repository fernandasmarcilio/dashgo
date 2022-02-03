import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { makeServer } from '../services/mirage'
import { theme } from '../styles/theme'

import { SidebarDrawerProvider } from '../contexts/SiderbarDrawerContext'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp