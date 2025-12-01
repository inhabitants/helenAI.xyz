import { useState } from 'react'

export default function SpotifyPlayer() {
    const [isSpotifyExpanded, setIsSpotifyExpanded] = useState(false)

    const toggleSpotify = () => {
        setIsSpotifyExpanded(!isSpotifyExpanded)
    }

    return (
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
                    style={{ borderRadius: '12px' }}
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
    )
}
