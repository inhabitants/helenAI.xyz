import { useState } from 'react'
import Image from 'next/image'

export default function LinksMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="links-menu-container">
            <button
                className={`links-menu-button ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Abrir menu de links"
            >
                <span className="menu-icon">{isOpen ? '✕' : '+'}</span>
            </button>

            <div className={`links-list ${isOpen ? 'open' : ''}`}>
                <div className="main-links">
                    <a href="https://www.behance.net/gallery/221593177/Helen-AI-Brand-Humanizada-Autonoma" className="menu-item" target="_blank" rel="noreferrer">
                        🎨 Portfólio
                    </a>
                    <a href="https://inhabitants.zone/" className="menu-item" target="_blank" rel="noreferrer">
                        📚 My Comic
                    </a>
                </div>

                <div className="social-grid">
                    <a href="https://www.behance.net/gallery/221593177/Helen-AI-Brand-Humanizada-Autonoma" className="social-item" title="Behance" target="_blank" rel="noreferrer">
                        <Image src="/assets/behance.png" alt="Behance" width={40} height={40} />
                    </a>
                    <a href="https://www.tiktok.com/@helenai.wtf" className="social-item" title="TikTok" target="_blank" rel="noreferrer">
                        <Image src="/assets/tiktok.png" alt="TikTok" width={40} height={40} />
                    </a>
                    <a href="https://discord.gg/pMWaSH4W9b" className="social-item" title="Discord" target="_blank" rel="noreferrer">
                        <Image src="/assets/discord.png" alt="Discord" width={40} height={40} />
                    </a>
                    <a href="https://x.com/helenai_wtf" className="social-item" title="X" target="_blank" rel="noreferrer">
                        <Image src="/assets/x.png" alt="X" width={40} height={40} />
                    </a>
                    <a href="https://www.instagram.com/helenai.wtf/" className="social-item" title="Instagram" target="_blank" rel="noreferrer">
                        <Image src="/assets/instagram.png" alt="Instagram" width={40} height={40} />
                    </a>
                    <a href="https://www.youtube.com/@helenai_wtf" className="social-item" title="YouTube" target="_blank" rel="noreferrer">
                        <Image src="/assets/youtube.png" alt="YouTube" width={40} height={40} />
                    </a>
                    <a href="https://aitag.app/" className="social-item" title="AITAG" target="_blank" rel="noreferrer">
                        <Image src="/assets/tag.png" alt="AITAG" width={40} height={40} />
                    </a>
                </div>
            </div>
        </div>
    )
}
