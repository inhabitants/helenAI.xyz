import localFont from 'next/font/local'
import { Roboto } from 'next/font/google'
import '../styles.css'

const augustBold = localFont({
  src: '../src/fonts/Anime.otf',
  variable: '--font-august-bold',
})

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${augustBold.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
