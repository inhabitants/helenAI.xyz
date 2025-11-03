import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isSpotifyExpanded, setIsSpotifyExpanded] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // Inicia mutado por padrão
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const toggleSpotify = () => {
    setIsSpotifyExpanded(!isSpotifyExpanded)
  }

  const toggleMute = () => {
    const video = document.getElementById('background-video')
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
    }
  }

  const handleVideoLoadStart = () => {
    setIsVideoLoading(true)
    setLoadingProgress(0)
    
    // Simular progresso de carregamento
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return prev
        }
        return prev + Math.random() * 15
      })
    }, 200)
  }

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false)
    setLoadingProgress(100)
    
    // Garantir que o vídeo toque
    const video = document.getElementById('background-video')
    if (video) {
      video.play().catch(error => {
        console.log('Autoplay prevented:', error)
      })
    }
  }

  return (
    <>
      <Head>
        <title>Helen Ailith</title>
      </Head>

      <div className="background-container">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="background-video" 
          id="background-video"
          onLoadStart={handleVideoLoadStart}
          onCanPlay={handleVideoCanPlay}
        >
          <source src="/assets/Helenfull.mp4" type="video/mp4" id="video-source" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        <img src="/assets/helen_m.png" alt="Background estático móvel" className="background-image" />
      </div>

      {/* Indicador de carregamento do vídeo */}
      {isVideoLoading && (
        <div className="video-loading-indicator">
          <div className="loading-content">
            <div className="loading-spinner" />
            <div className="loading-text">Carregando vídeo...</div>
            <div className="loading-progress">
              <div 
                className="loading-progress-bar" 
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="loading-percentage">{Math.round(loadingProgress)}%</div>
          </div>
        </div>
      )}

      <a href="https://www.behance.net/gallery/221593177/Helen-AI-Brand-Humanizada-Autonoma" className="cta" id="enter-button" target="_blank" rel="noreferrer">
        Portfólio
      </a>
      <a href="https://inhabitants.zone/" className="cta" id="comic-button" target="_blank" rel="noreferrer">
        My Comic
      </a>
      <a href="https://chatgpt.com/g/g-68ab55d6ed9c8191a435622d7724a7b2-helen-ailith" className="cta" id="chat-button" target="_blank" rel="noreferrer">
        Conversar com Helen
      </a>

      {/* Botão de volume para o vídeo de background */}
      <button 
        type="button"
        className="volume-button" 
        onClick={toggleMute}
        aria-label={isMuted ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
        title={isMuted ? 'Ativar som' : 'Desativar som'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

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

      <div className={`spotify-player ${isSpotifyExpanded ? 'expanded' : 'collapsed'}`}>
        {/* Botão de toggle (apenas visível quando expandido) */}
        <button 
          type="button"
          className="spotify-toggle" 
          onClick={toggleSpotify}
          aria-label="Recolher player do Spotify"
        >
          <div className="spotify-icon">🎵</div>
          <span className="spotify-text">Recolher</span>
          <div className="spotify-arrow">▼</div>
        </button>
        
        {/* Botão de expansão no miniplayer */}
        <button 
          type="button"
          className="spotify-expand-btn" 
          onClick={toggleSpotify}
          aria-label="Expandir player do Spotify"
          title="Expandir player"
        >
          ⤢
        </button>
        
        {/* Conteúdo do player - sempre visível */}
        <div className="spotify-content">
          <iframe
            style={{borderRadius: '12px'}}
            src="https://open.spotify.com/embed/album/2rIgJTXSOEt1fcC5pr7lWO?utm_source=generator&theme=0"
            width="100%"
            height={isSpotifyExpanded ? "400" : "120"}
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Embed: Helen AI"
          />
        </div>
      </div>

      <footer className="powered-by">
        <p>
          Powered by <a href="https://pinto.wtf" target="_blank" rel="noreferrer">PBrasilDAO</a> 🐥 & <a href="https://sapiensinteticos.com" target="_blank" rel="noreferrer">Sapiens Sintéticos</a>
        </p>
      </footer>
    </>
  )
}
