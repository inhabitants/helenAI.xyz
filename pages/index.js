import Head from 'next/head'

import SpotifyPlayer from '../src/components/SpotifyPlayer'
import SocialLinks from '../src/components/SocialLinks'
import VideoBackground from '../src/components/VideoBackground'

export default function Home() {
  return (
    <>
      <Head>
        <title>Helen Ailith</title>
      </Head>

      <VideoBackground />

      <a href="https://www.behance.net/gallery/221593177/Helen-AI-Brand-Humanizada-Autonoma" id="enter-button" target="_blank" rel="noreferrer">
        <Image src="/assets/behance.png" alt="Portfólio" width={24} height={24} style={{ marginRight: '8px' }} />
        Portfólio
      </a>

      <a href="https://inhabitants.zone/" id="comic-button" target="_blank" rel="noreferrer">
        My Comic
      </a>

      <a href="https://gemini.google.com/gem/1MRTQclEeZXngER33gLM7vJXqxkDiIE3d?usp=sharing" className="cta" id="chat-button" target="_blank" rel="noreferrer">
        Conversar com Helen
      </a>

      <SocialLinks />

      <main>
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
