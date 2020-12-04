import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

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
