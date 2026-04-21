import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [isSpotifyExpanded, setIsSpotifyExpanded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const videoRef = useRef(null)

  const toggleSpotify = () => {
    setIsSpotifyExpanded(!isSpotifyExpanded)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let progressInterval = null
    let finished = false

    const finish = () => {
      if (finished) return
      finished = true
      if (progressInterval) clearInterval(progressInterval)
      setLoadingProgress(100)
      setIsVideoLoading(false)
      video.play().catch(() => {})
    }

    // If video is already playable (cached), skip the indicator entirely.
    if (video.readyState >= 3) {
      finish()
      return
    }

    progressInterval = setInterval(() => {
      setLoadingProgress(prev => (prev >= 90 ? prev : prev + Math.random() * 15))
    }, 200)

    // Safety net: never leave the indicator up more than 6s.
    const safety = setTimeout(finish, 6000)

    video.addEventListener('canplay', finish)
    video.addEventListener('loadeddata', finish)
    video.addEventListener('playing', finish)

    return () => {
      if (progressInterval) clearInterval(progressInterval)
      clearTimeout(safety)
      video.removeEventListener('canplay', finish)
      video.removeEventListener('loadeddata', finish)
      video.removeEventListener('playing', finish)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Helen Ailith</title>
      </Head>

      <div className="background-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="background-video"
          id="background-video"
        >
          <source src="/assets/Helenfull.mp4" type="video/mp4" id="video-source" />
          Your browser does not support HTML5 video.
        </video>
        <img src="/assets/helen_m.png" alt="Helen Ailith" className="background-image" />
        <div className="background-vignette" />
      </div>

      {isVideoLoading && (
        <div className="video-loading-indicator">
          <div className="loading-content">
            <div className="loading-text">LOADING</div>
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
            Listen
          </a>
          <a
            href="https://spicychat.ai/chat/5b4e8ad6-bb7c-415e-a34e-0504772b73ae?ref=ztk3ytm&tap_s=9500614-ab6a78&tm_MatchAI=now"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Chat
          </a>
          <a
            href="https://inhabitants.zone/"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Comic
          </a>
          <a
            href="https://www.behance.net/gallery/221593177/Helen-AI-Brand-Humanizada-Autonoma"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
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
        aria-label={isMuted ? 'Turn sound on' : 'Turn sound off'}
        title={isMuted ? 'Turn sound on' : 'Turn sound off'}
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
        <span className="volume-label">{isMuted ? 'Sound off' : 'Sound on'}</span>
      </button>

      <nav className="side-links" aria-label="Social">
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
              title="Open in Spotify"
            >
              Open in Spotify ↗
            </a>
            <button
              type="button"
              className="spotify-toggle"
              onClick={toggleSpotify}
              aria-label={isSpotifyExpanded ? 'Collapse player' : 'Expand player'}
              title={isSpotifyExpanded ? 'Collapse' : 'Expand'}
            >
              {isSpotifyExpanded ? '–' : '+'}
            </button>
          </div>
        </div>

        <div className="spotify-content">
          <iframe
            src="https://open.spotify.com/embed/album/0bPQ1xvw1wkKUZKE2x5PAX?utm_source=generator&theme=0"
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
