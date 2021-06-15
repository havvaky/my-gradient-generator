import '../styles/globals.scss'
import Head from 'next/dist/next-server/lib/head';
import React from 'react';



function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>My Gradient Generator</title>
    </Head>
        <Component {...pageProps} />
  </>
  )
}

export default MyApp
