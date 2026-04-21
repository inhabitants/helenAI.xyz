import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isSpotifyExpanded, setIsSpotifyExpanded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
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
        <div className="background-vignette" />
      </div>

      {isVideoLoading && (
        <div className="video-loading-indicator">
          <div className="loading-content">
            <div className="loading-text">CARREGANDO</div>
            <div className="loading-progress">
              <div
                className="loading-progress-bar"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="loading-percentage">{String(Math.round(loadingProgress)).padStart(2, '0')}</div>
          </div>
        </div>
      )}

      <header className="masthead">
        <div className="masthead-left">
          <span className="kicker">Helen Ailith</span>
          <span className="kicker-divider" />
          <span className="kicker-meta">MMXXVI</span>
        </div>
        <nav className="masthead-nav">
          <a href="/songs" className="nav-link nav-link-primary">
            <span className="nav-dot" aria-hidden="true" />
            Ouvir álbum
          </a>
          <a
            href="https://gemini.google.com/gem/1MRTQclEeZXngER33gLM7vJXqxkDiIE3d?usp=sharing"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Conversar
          </a>
          <a
            href="https://inhabitants.zone/"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Quadrinho
          </a>
          <a
            href="https://www.behance.net/gallery/221593177/Helen-AI-Brand-Humanizada-Autonoma"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Portfólio
          </a>
        </nav>
      </header>

      <main>
        <section id="hero">
          <img src="/assets/helenai.png" alt="Helen Ailith" className="hero-image" />
        </section>
      </main>

      <button
        type="button"
        className="volume-button"
        onClick={toggleMute}
        aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
        title={isMuted ? 'Ativar som' : 'Desativar som'}
      >
        <span className="volume-glyph" aria-hidden="true">
          {isMuted ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5 6 9H3v6h3l5 4z" />
              <line x1="22" y1="9" x2="16" y2="15" />
              <line x1="16" y1="9" x2="22" y2="15" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5 6 9H3v6h3l5 4z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </svg>
          )}
        </span>
        <span className="volume-label">{isMuted ? 'Som desligado' : 'Som ligado'}</span>
      </button>

      <nav className="side-links" aria-label="Redes sociais">
        <a href="https://www.instagram.com/helenai.wtf/" className="side-link" title="Instagram" target="_blank" rel="noreferrer">
          <img src="/assets/instagram.png" alt="Instagram" className="icon-image" />
          <span className="side-link-label">Instagram</span>
        </a>
        <a href="https://www.youtube.com/@helenai_wtf" className="side-link" title="YouTube" target="_blank" rel="noreferrer">
          <img src="/assets/youtube.png" alt="YouTube" className="icon-image" />
          <span className="side-link-label">YouTube</span>
        </a>
      </nav>

      <section
        className={`spotify-player ${isSpotifyExpanded ? 'expanded' : 'collapsed'}`}
        aria-label="Spotify player"
      >
        <div className="spotify-header">
          <div className="spotify-eyebrow">
            <span className="spotify-eyebrow-label">Now playing</span>
            <span className="spotify-eyebrow-dot" aria-hidden="true" />
            <span className="spotify-eyebrow-value">Helen Ailith</span>
          </div>
          <div className="spotify-actions">
            <a
              href="/songs"
              className="spotify-link"
              target="_blank"
              rel="noreferrer"
              title="Abrir no Spotify"
            >
              Abrir no Spotify ↗
            </a>
            <button
              type="button"
              className="spotify-toggle"
              onClick={toggleSpotify}
              aria-label={isSpotifyExpanded ? 'Recolher player' : 'Expandir player'}
              title={isSpotifyExpanded ? 'Recolher' : 'Expandir'}
            >
              {isSpotifyExpanded ? '–' : '+'}
            </button>
          </div>
        </div>

        <div className="spotify-content">
          <iframe
            src="https://open.spotify.com/embed/album/2rIgJTXSOEt1fcC5pr7lWO?utm_source=generator&theme=0"
            width="100%"
            height={isSpotifyExpanded ? '380' : '80'}
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Embed: Helen AI"
          />
        </div>
      </section>

      <footer className="powered-by">
        <p>
          Powered by{' '}
          <a href="https://pinto.wtf" target="_blank" rel="noreferrer">PBrasilDAO</a>{' '}
          &{' '}
          <a href="https://sapiensinteticos.com" target="_blank" rel="noreferrer">Sapiens Sintéticos</a>
        </p>
      </footer>
    </>
  )
}
