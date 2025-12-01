import { useState, useRef } from 'react'
import Image from 'next/image'
import LoadingIndicator from './LoadingIndicator'

export default function VideoBackground() {
    const [isMuted, setIsMuted] = useState(true)
    const [isVideoLoading, setIsVideoLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)
    const videoRef = useRef(null)

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setIsMuted(videoRef.current.muted)
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

        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Autoplay prevented:', error)
            })
        }
    }

    return (
        <>
            <div className="background-container">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                    id="background-video"
                    onLoadStart={handleVideoLoadStart}
                    onCanPlay={handleVideoCanPlay}
                >
                    <source src="/assets/Helenfull.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <Image
                    src="/assets/helen_m.png"
                    alt="Background estático móvel"
                    className="background-image"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            <LoadingIndicator isLoading={isVideoLoading} progress={loadingProgress} />

            <button
                type="button"
                className="volume-button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
                title={isMuted ? 'Ativar som' : 'Desativar som'}
            >
                {isMuted ? '🔇' : '🔊'}
            </button>
        </>
    )
}
