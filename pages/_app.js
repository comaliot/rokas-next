import { ChakraProvider, Box } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
