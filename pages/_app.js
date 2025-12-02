import '../styles.css'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Script src="/scripts.js" strategy="afterInteractive" />
    </>
  )
}

export default MyApp
