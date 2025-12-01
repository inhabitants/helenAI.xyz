import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Helen Ailith - Brand Humanizada Autônoma. Helen é uma entidade experimental: um ser, ou uma personagem hiper-realista, autônoma, com personalidade e filosofia próprias, misturando o Brasil e mundo, com dose de anarquismo financeiro presente Web3, e a possibilidade de autônomos nas redes sociais. Uma atriz como brand compartilhada gerida pela @PBrasilNFT" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://helenai.wtf/" />
          <meta property="og:title" content="Helen Ailith - Brand Humanizada Autônoma" />
          <meta property="og:description" content="Helen Ailith é uma entidade experimental: um ser, uma personagem hiper-realista, autônoma, com personalidade e filosofia próprias, misturando o Brasil e mundo, com dose de anarquismo financeiro presente Web3, e a possibilidade de autônomos nas redes sociais. Uma atriz como brand compartilhada gerida pela @PBrasilNFT" />
          <meta property="og:image" content="/assets/helen-social.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://helenai.wtf/" />
          <meta name="twitter:title" content="Helen Ailith - Brand Humanizada Autônoma" />
          <meta name="twitter:description" content="Helen Ailith é uma entidade experimental: um ser, uma personagem hiper-realista, autônoma, com personalidade e filosofia próprias, misturando o Brasil e mundo, com dose de anarquismo financeiro presente Web3, e a possibilidade de autônomos nas redes sociais. Uma atriz como brand compartilhada gerida pela DAO @PBrasilNFT" />
          <meta name="twitter:image" content="/assets/helen-social.jpg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/assets/android-chrome-512x512.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/assets/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
          <link rel="shortcut icon" href="/assets/favicon.ico" />
          <link rel="manifest" href="/assets/site.webmanifest" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
