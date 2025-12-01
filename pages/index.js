import Head from 'next/head'
import Image from 'next/image'
import SpotifyPlayer from '../src/components/SpotifyPlayer'
import LinksMenu from '../src/components/LinksMenu'
import VideoBackground from '../src/components/VideoBackground'

export default function Home() {
  return (
    <>
      <Head>
        <title>Helen Ailith</title>
      </Head>

      <VideoBackground />

      <a href="https://gemini.google.com/gem/1MRTQclEeZXngER33gLM7vJXqxkDiIE3d?usp=sharing" className="cta" id="chat-button" target="_blank" rel="noreferrer">
        Conversar com Helen
      </a>

      <LinksMenu />

      <main>
        <section id="hero">
          <Image
            src="/assets/helenai.png"
            alt="HelenAI"
            className="hero-image"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </section>
      </main>

      <SpotifyPlayer />

      <footer className="powered-by">
        <p>
          Powered by <a href="https://pinto.wtf" target="_blank" rel="noreferrer">PBrasilDAO</a> 🐥 & <a href="https://sapiensinteticos.com" target="_blank" rel="noreferrer">Sapiens Sintéticos</a>
        </p>
      </footer>
    </>
  )
}
