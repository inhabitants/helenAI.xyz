export default function LoadingIndicator({ isLoading, progress }) {
    if (!isLoading) return null

    return (
        <div className="video-loading-indicator">
            <div className="loading-content">
                <div className="loading-spinner" />
                <div className="loading-text">Carregando vídeo...</div>
                <div className="loading-progress">
                    <div
                        className="loading-progress-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="loading-percentage">{Math.round(progress)}%</div>
            </div>
        </div>
    )
}
