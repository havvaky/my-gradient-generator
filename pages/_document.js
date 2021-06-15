import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;1,200&family=Varela+Round&display=swap" rel="stylesheet"/>
          <title>My Gradient Generator</title>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
