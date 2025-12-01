import Image from 'next/image'

export default function SocialLinks() {
    return (
        <nav className="side-links">
            <a href="https://www.behance.net/gallery/221593177/Helen-AI-Brand-Humanizada-Autonoma" className="side-link" title="Portfólio no Behance" target="_blank" rel="noreferrer">
                <Image src="/assets/behance.png" alt="Behance" width={64} height={64} className="icon-image" />
            </a>
            <a href="https://www.tiktok.com/@helenai.wtf" className="side-link" title="TikTok" target="_blank" rel="noreferrer">
                <Image src="/assets/tiktok.png" alt="TikTok" width={64} height={64} className="icon-image" />
            </a>
            <a href="https://discord.gg/pMWaSH4W9b" className="side-link" title="Discord" target="_blank" rel="noreferrer">
                <Image src="/assets/discord.png" alt="Discord" width={64} height={64} className="icon-image" />
            </a>
            <a href="https://x.com/helenai_wtf" className="side-link" title="X" target="_blank" rel="noreferrer">
                <Image src="/assets/x.png" alt="X" width={64} height={64} className="icon-image" />
            </a>
            <a href="https://www.instagram.com/helenai.wtf/" className="side-link" title="Instagram" target="_blank" rel="noreferrer">
                <Image src="/assets/instagram.png" alt="Instagram" width={64} height={64} className="icon-image" />
            </a>
            <a href="https://www.youtube.com/@helenai_wtf" className="side-link" title="YouTube" target="_blank" rel="noreferrer">
                <Image src="/assets/youtube.png" alt="YouTube" width={64} height={64} className="icon-image" />
            </a>
            <a href="https://aitag.app/" className="side-link" title="AITAG" target="_blank" rel="noreferrer">
                <Image src="/assets/tag.png" alt="AITAG" width={64} height={64} className="icon-image" />
            </a>
        </nav>
    )
}
