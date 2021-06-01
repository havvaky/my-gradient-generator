import '../styles/globals.scss'
import Head from 'next/dist/next-server/lib/head';
import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import theme from './theme';


function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>My Gradient Generator</title>
    </Head>
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default MyApp
