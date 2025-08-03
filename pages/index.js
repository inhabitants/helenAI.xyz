import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Helen Ailith</title>
      </Head>

      <div className="background-container">
        <video autoPlay muted loop className="background-video" id="background-video">
          <source src="/assets/helen-video.mp4" type="video/mp4" id="video-source" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        <img src="/assets/helen_m.png" alt="Background estático móvel" className="background-image" />
      </div>

      <a href="https://www.behance.net/gallery/221593177/Helen-AI-Brand-Humanizada-Autonoma" className="cta" id="enter-button" target="_blank" rel="noreferrer">
        Portfólio
      </a>
      <a href="https://inhabitants.zone/" className="cta" id="comic-button" target="_blank" rel="noreferrer">
        My Comic
      </a>
      <a href="https://character.ai/chat/FWPjHgLGezhbasrl9E8AlYsFTQUU51G2Bv4X1HqgZr4" className="cta" id="chat-button" target="_blank" rel="noreferrer">
        Chat com Helen
      </a>

      <nav className="side-links">
        <a href="https://www.behance.net/gallery/221593177/Helen-AI-Brand-Humanizada-Autonoma" className="side-link" title="Portfólio no Behance" target="_blank" rel="noreferrer">
          <img src="/assets/behance.png" alt="Behance" className="icon-image" />
        </a>
        <a href="https://www.tiktok.com/@helenai.wtf" className="side-link" title="TikTok" target="_blank" rel="noreferrer">
          <img src="/assets/tiktok.png" alt="TikTok" className="icon-image" />
        </a>
        <a href="https://discord.gg/pMWaSH4W9b" className="side-link" title="Discord" target="_blank" rel="noreferrer">
          <img src="/assets/discord.png" alt="Discord" className="icon-image" />
        </a>
        <a href="https://x.com/helenai_wtf" className="side-link" title="X" target="_blank" rel="noreferrer">
          <img src="/assets/x.png" alt="X" className="icon-image" />
        </a>
        <a href="https://www.instagram.com/helenai.wtf/" className="side-link" title="Instagram" target="_blank" rel="noreferrer">
          <img src="/assets/instagram.png" alt="Instagram" className="icon-image" />
        </a>
        <a href="https://www.youtube.com/@helenai_wtf" className="side-link" title="YouTube" target="_blank" rel="noreferrer">
          <img src="/assets/youtube.png" alt="YouTube" className="icon-image" />
        </a>
        <a href="https://aitag.app/" className="side-link" title="AITAG" target="_blank" rel="noreferrer">
          <img src="/assets/tag.png" alt="AITAG" className="icon-image" />
        </a>
      </nav>

      <main>
        <section id="hero">
          <img src="/assets/helenai.png" alt="HelenAI" className="hero-image" />
        </section>
      </main>

      <div className="spotify-player">
        <iframe
          style={{borderRadius: '12px'}}
          src="https://open.spotify.com/embed/album/2rIgJTXSOEt1fcC5pr7lWO?utm_source=generator&theme=0"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Embed: Helen AI"
        />
      </div>

      <footer className="powered-by">
        <p>
          Powered by <a href="https://pinto.wtf" target="_blank" rel="noreferrer">PBrasilDAO</a> 🐥
        </p>
      </footer>
    </>
  )
}
