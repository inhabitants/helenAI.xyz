import Head from 'next/head'

const SPOTIFY_ALBUM_URL = 'https://open.spotify.com/album/0bPQ1xvw1wkKUZKE2x5PAX'

export default function Songs() {
  return (
    <>
      <Head>
        <title>Helen Ailith — Songs</title>
        <meta httpEquiv="refresh" content={`0; url=${SPOTIFY_ALBUM_URL}`} />
        <meta name="robots" content="noindex" />
      </Head>
      <noscript>
        <a href={SPOTIFY_ALBUM_URL}>Open album in Spotify</a>
      </noscript>
    </>
  )
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: SPOTIFY_ALBUM_URL })
  res.end()
  return { props: {} }
}
