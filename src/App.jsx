import { useEffect, useMemo, useState } from 'react'

const assetBase = import.meta.env.VITE_PUBLIC_ASSET_BASE_URL || '/'
const asset = (name) => `${assetBase.replace(/\/$/, '')}/imported-designs/${name}`

const routes = [
  { id: 'hub', label: 'Hub' },
  { id: 'video', label: 'YouTube Downloader' },
  { id: 'pdf', label: 'PDF' },
  { id: 'categories', label: 'Categories' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'designs', label: 'Full Designs' },
]

const icons = {
  hub: (
    <>
      <path d="M12 3.5v3M12 17.5v3M20.5 12h-3M6.5 12h-3" />
      <path d="m18 6-2.1 2.1M8.1 15.9 6 18m12 0-2.1-2.1M8.1 8.1 6 6" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  video: (
    <>
      <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h6A2.5 2.5 0 0 1 16 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 5 16.5v-9Z" />
      <path d="m16 10 3.8-2.2a.8.8 0 0 1 1.2.7v7a.8.8 0 0 1-1.2.7L16 14" />
    </>
  ),
  file: (
    <>
      <path d="M7 3.8h6.2L18 8.6v11.6H7V3.8Z" />
      <path d="M13 4v5h5M9.5 13h6M9.5 16h4.5" />
    </>
  ),
  grid: (
    <>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h3A2.5 2.5 0 0 1 12 6.5v3A2.5 2.5 0 0 1 9.5 12h-3A2.5 2.5 0 0 1 4 9.5v-3Z" />
      <path d="M14 6.5A2.5 2.5 0 0 1 16.5 4h1A2.5 2.5 0 0 1 20 6.5v1A2.5 2.5 0 0 1 17.5 10h-1A2.5 2.5 0 0 1 14 7.5v-1Z" />
      <path d="M14 14.5A2.5 2.5 0 0 1 16.5 12h1A2.5 2.5 0 0 1 20 14.5v3A2.5 2.5 0 0 1 17.5 20h-1A2.5 2.5 0 0 1 14 17.5v-3Z" />
      <path d="M4 16.5A2.5 2.5 0 0 1 6.5 14h3a2.5 2.5 0 0 1 0 5h-3A2.5 2.5 0 0 1 4 16.5Z" />
    </>
  ),
  download: <path d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  bolt: <path d="m13 2-8 12h6l-1 8 9-13h-6l0-7Z" />,
  shield: <path d="M12 3 5.5 5.4v5.5c0 4.2 2.7 7.9 6.5 9.1 3.8-1.2 6.5-4.9 6.5-9.1V5.4L12 3Z" />,
}

const fullDesigns = [
  ['Equinox Hub', 'equinox-hub.png', '780 x 6298'],
  ['Browse Categories', 'browse-categories.png', '940 x 6622'],
  ['PDF Converter', 'pdf-converter.png', '780 x 5384'],
  ['YouTube Downloader', 'youtube-downloader.png', '780 x 4548'],
  ['My Dashboard', 'my-dashboard.png', '780 x 4368'],
  ['HOME.jpeg Reference', 'home-reference.png', '736 x 1104'],
]

function Icon({ name, className = 'icon-md' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

function getRouteFromHash() {
  const route = window.location.hash.replace(/^#\/?/, '')
  return routes.some((item) => item.id === route) ? route : 'hub'
}

function useRoute() {
  const [route, setRoute] = useState(getRouteFromHash)

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

function Header({ route }) {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a href="#/hub" className="brand-link" aria-label="Equinox utility hub home">
          <span className="brand-mark"><Icon name="hub" /></span>
          <span>
            <span className="brand-name">Equinox</span>
            <span className="eyebrow">Universal Utility Hub</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Feature pages">
          {routes.map((item) => (
            <a key={item.id} href={`#/${item.id}`} className={route === item.id ? 'nav-link active' : 'nav-link'}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function PageShell({ eyebrow, title, copy, children, media }) {
  return (
    <main className="page-shell">
      <section className="site-shell page-grid">
        <div className="page-copy">
          <p className="pill">{eyebrow}</p>
          <h1 className="display-title">{title}</h1>
          <p className="body-large">{copy}</p>
          {children}
        </div>
        {media}
      </section>
    </main>
  )
}

function HubPage() {
  return (
    <PageShell
      eyebrow="High-performance utility platform"
      title="Digital Utility Precision"
      copy="The hub is now split into fast feature pages. Open only the tool you need, keep heavy design previews isolated, and avoid rendering every imported screen at once."
      media={<FeaturePreview />}
    >
      <div className="quick-grid">
        {routes.slice(1).map((item) => (
          <a key={item.id} className="glass-card quick-card" href={`#/${item.id}`}>
            <Icon name={item.id === 'video' ? 'video' : item.id === 'pdf' ? 'file' : item.id === 'categories' ? 'grid' : 'hub'} />
            <strong>{item.label}</strong>
            <span>Open page</span>
          </a>
        ))}
      </div>
    </PageShell>
  )
}

function FeaturePreview() {
  return (
    <div className="preview-stack">
      <article className="glass-card spotlight-card">
        <Icon name="video" className="icon-lg" />
        <h2>YouTube Downloader</h2>
        <p>MP4, MP3, and quality controls are wired to the local server.</p>
      </article>
      <article className="glass-card spotlight-card">
        <Icon name="file" className="icon-lg" />
        <h2>PDF Converter</h2>
        <p>Placeholder page kept separate so it no longer costs render time on the downloader.</p>
      </article>
    </div>
  )
}

function YouTubePage() {
  const [url, setUrl] = useState('')
  const [format, setFormat] = useState('mp4')
  const [quality, setQuality] = useState('720')
  const [info, setInfo] = useState(null)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const qualityOptions = useMemo(() => {
    if (format === 'mp3') return ['192kbps']
    const values = info?.qualities?.length ? info.qualities : [1080, 720, 480, 360]
    return values.map(String)
  }, [format, info])

  async function readApiResponse(response) {
    const contentType = response.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      throw new Error('The downloader API is not responding. Start the local server with npm run serve, or use http://127.0.0.1:3000/#/video.')
    }
    return response.json()
  }

  async function fetchInfo(event) {
    event.preventDefault()
    setLoading(true)
    setStatus('Checking video...')
    setInfo(null)
    try {
      const response = await fetch(`/api/youtube/info?url=${encodeURIComponent(url)}`)
      const payload = await readApiResponse(response)
      if (!response.ok) throw new Error(payload.error)
      setInfo(payload)
      if (payload.qualities?.length && !payload.qualities.map(String).includes(quality)) {
        setQuality(String(payload.qualities[0]))
      }
      setStatus('Video ready. Choose format and download.')
    } catch (error) {
      setStatus(error.message || 'Could not read that video.')
    } finally {
      setLoading(false)
    }
  }

  function startDownload() {
    if (!url) {
      setStatus('Paste a YouTube URL first.')
      return
    }
    const params = new URLSearchParams({ url, format, quality })
    window.location.href = `/api/youtube/download?${params.toString()}`
  }

  return (
    <main className="page-shell">
      <section className="site-shell video-page-grid">
        <div className="page-copy">
          <p className="pill">Media utility</p>
          <h1 className="display-title">YouTube Downloader</h1>
          <p className="body-large">Paste a video URL, inspect the available qualities, then download MP4 video or MP3 audio using the local server.</p>
        </div>
        <form className="glass-card downloader-panel" onSubmit={fetchInfo}>
          <label className="field-stack" htmlFor="youtube-url">
            <span>Video URL</span>
            <input id="youtube-url" value={url} onChange={(event) => setUrl(event.target.value)} type="url" placeholder="https://www.youtube.com/watch?v=..." required />
          </label>

          <div className="option-grid">
            <label className="field-stack" htmlFor="download-format">
              <span>Format</span>
              <select id="download-format" value={format} onChange={(event) => setFormat(event.target.value)}>
                <option value="mp4">MP4 video</option>
                <option value="mp3">MP3 audio</option>
              </select>
            </label>
            <label className="field-stack" htmlFor="download-quality">
              <span>{format === 'mp3' ? 'Audio quality' : 'Video quality'}</span>
              <select id="download-quality" value={quality} onChange={(event) => setQuality(event.target.value)} disabled={format === 'mp3'}>
                {qualityOptions.map((item) => (
                  <option key={item} value={item}>{format === 'mp3' ? item : `${item}p`}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="button-row">
            <button type="submit" className="button button-glass" disabled={loading}>
              {loading ? 'Checking...' : 'Check video'}
            </button>
            <button type="button" className="button button-primary" onClick={startDownload}>
              <Icon name="download" />
              Download
            </button>
          </div>

          {status ? <p className="status-text">{status}</p> : null}
          {info ? <VideoInfo info={info} /> : null}
        </form>
      </section>
    </main>
  )
}

function VideoInfo({ info }) {
  const minutes = Math.floor(info.durationSeconds / 60)
  const seconds = String(info.durationSeconds % 60).padStart(2, '0')
  return (
    <article className="video-info">
      {info.thumbnail ? <img src={info.thumbnail} alt={`${info.title} thumbnail`} /> : null}
      <div>
        <h2>{info.title}</h2>
        <p>{info.author}</p>
        <p>{minutes}:{seconds}</p>
      </div>
    </article>
  )
}

function PdfPage() {
  return (
    <PageShell
      eyebrow="PDF Converter"
      title="Transform files with precision"
      copy="The PDF area is on its own page now. That keeps the interface lighter while preserving the design direction for merge, split, compress, and export flows."
      media={<img className="design-snapshot" src={asset('pdf-converter.png')} alt="PDF Converter imported design" loading="lazy" />}
    >
      <div className="tool-grid">
        {['Word', 'Excel', 'Image', 'TXT'].map((format) => <button key={format} type="button" className="filter-pill">{format}</button>)}
      </div>
    </PageShell>
  )
}

function CategoriesPage() {
  return (
    <PageShell
      eyebrow="Browse categories"
      title="Explore tool collections"
      copy="Categories are isolated on this page with the imported visual cards and references kept lazy."
      media={<img className="design-snapshot" src={asset('browse-categories.png')} alt="Browse Categories imported design" loading="lazy" />}
    >
      <div className="quick-grid">
        {['Video', 'Document', 'Productivity', 'Developer', 'Images'].map((item) => <article key={item} className="glass-card quick-card"><Icon name="grid" /><strong>{item}</strong><span>Collection</span></article>)}
      </div>
    </PageShell>
  )
}

function DashboardPage() {
  return (
    <PageShell
      eyebrow="Dashboard"
      title="Welcome back, Power User"
      copy="Dashboard content is now a standalone page, so the main downloader and hub do not pay for its cards and image previews."
      media={<img className="design-snapshot" src={asset('my-dashboard.png')} alt="My Dashboard imported design" loading="lazy" />}
    >
      <div className="quick-grid">
        {['Neural Engine', 'Architect Pro', 'Core Console', 'Stream Sync'].map((item) => <article key={item} className="glass-card quick-card"><Icon name="bolt" /><strong>{item}</strong><span>Ready</span></article>)}
      </div>
    </PageShell>
  )
}

function DesignsPage() {
  return (
    <main className="page-shell">
      <section className="site-shell">
        <div className="page-copy compact-copy">
          <p className="pill">Source of truth</p>
          <h1 className="display-title">Full imported designs</h1>
          <p className="body-large">These large original frames are lazy-loaded only on this page, which removes the biggest source of lag from the rest of the app.</p>
        </div>
        <div className="full-design-grid">
          {fullDesigns.map(([title, src, size]) => (
            <article key={title} className="full-design-card">
              <div className="full-design-meta">
                <h2>{title}</h2>
                <span>{size}</span>
              </div>
              <img src={asset(src)} alt={`${title} full imported Stitch design`} loading="lazy" />
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function App() {
  const route = useRoute()
  const pages = {
    hub: <HubPage />,
    video: <YouTubePage />,
    pdf: <PdfPage />,
    categories: <CategoriesPage />,
    dashboard: <DashboardPage />,
    designs: <DesignsPage />,
  }

  return (
    <>
      <Header route={route} />
      {pages[route]}
    </>
  )
}

export default App
