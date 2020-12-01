import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <>
          <CSSReset />
          <Box>
            <Component {...pageProps} />
          </Box>
        </>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
