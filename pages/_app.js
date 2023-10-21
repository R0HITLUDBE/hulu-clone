import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "",
          color: ''
        },
      }),
    },
  });
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}

export default MyApp
