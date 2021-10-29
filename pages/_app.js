import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default Website
