import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import { UsersProvider } from '../contexts/UsersContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <UsersProvider>
        <Component {...pageProps} />
      </UsersProvider>
    </ChakraProvider>
  )
}
