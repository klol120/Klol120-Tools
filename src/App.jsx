import { useEffect, useRef, useState } from 'react'

const assetBase = import.meta.env.VITE_PUBLIC_ASSET_BASE_URL || '/'
const asset = (name) => `${assetBase.replace(/\/$/, '')}/imported-designs/${name}`

const iconPaths = {
  hub: (
    <>
      <path d="M12 3.5v3" />
      <path d="M12 17.5v3" />
      <path d="M20.5 12h-3" />
      <path d="M6.5 12h-3" />
      <path d="m18 6-2.1 2.1" />
      <path d="m8.1 15.9-2.1 2.1" />
      <path d="m18 18-2.1-2.1" />
      <path d="m8.1 8.1-2.1-2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  dashboard: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h5v7h-7v-5.5Z" />
      <path d="M13.5 4h5A1.5 1.5 0 0 1 20 5.5v3h-6.5V4Z" />
      <path d="M13.5 11H20v7.5a1.5 1.5 0 0 1-1.5 1.5h-5v-9Z" />
      <path d="M4 13.5h7V20H5.5A1.5 1.5 0 0 1 4 18.5v-5Z" />
    </>
  ),
  categories: (
    <>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h3A2.5 2.5 0 0 1 12 6.5v3A2.5 2.5 0 0 1 9.5 12h-3A2.5 2.5 0 0 1 4 9.5v-3Z" />
      <path d="M14 6.5A2.5 2.5 0 0 1 16.5 4h1A2.5 2.5 0 0 1 20 6.5v1A2.5 2.5 0 0 1 17.5 10h-1A2.5 2.5 0 0 1 14 7.5v-1Z" />
      <path d="M14 14.5A2.5 2.5 0 0 1 16.5 12h1A2.5 2.5 0 0 1 20 14.5v3A2.5 2.5 0 0 1 17.5 20h-1A2.5 2.5 0 0 1 14 17.5v-3Z" />
      <path d="M4 16.5A2.5 2.5 0 0 1 6.5 14h3a2.5 2.5 0 0 1 0 5h-3A2.5 2.5 0 0 1 4 16.5Z" />
    </>
  ),
  file: (
    <>
      <path d="M7 3.8h6.2L18 8.6v11.6H7V3.8Z" />
      <path d="M13 4v5h5" />
      <path d="M9.5 13h6" />
      <path d="M9.5 16h4.5" />
    </>
  ),
  video: (
    <>
      <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h6A2.5 2.5 0 0 1 16 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 5 16.5v-9Z" />
      <path d="m16 10 3.8-2.2a.8.8 0 0 1 1.2.7v7a.8.8 0 0 1-1.2.7L16 14" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </>
  ),
  upload: <path d="M12 16V4m0 0 5 5m-5-5-5 5M5 20h14" />,
  download: <path d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  bolt: <path d="m13 2-8 12h6l-1 8 9-13h-6l0-7Z" />,
  shield: <path d="M12 3 5.5 5.4v5.5c0 4.2 2.7 7.9 6.5 9.1 3.8-1.2 6.5-4.9 6.5-9.1V5.4L12 3Z" />,
  layers: (
    <>
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 17 8 4 8-4" />
    </>
  ),
  filter: <path d="M4 6h16M7 12h10m-7 6h4" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
}

const navItems = [
  { label: 'Hub', href: '#hub' },
  { label: 'Categories', href: '#categories' },
  { label: 'PDF', href: '#pdf' },
  { label: 'Video', href: '#video' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Full Designs', href: '#full-designs' },
]

const categoryFilters = ['All Tools', 'Video Editing', 'File Management', 'Development', 'Security', 'AI Integrations']

const toolCards = [
  { title: 'Clip Forge', category: 'Video', icon: 'video', copy: 'Download, trim, and prepare video assets.', action: 'Launch' },
  { title: 'DocuMerge', category: 'PDF', icon: 'file', copy: 'Merge, split, compress, and convert files.', action: 'Launch' },
  { title: 'Code Lens', category: 'Development', icon: 'layers', copy: 'Inspect snippets and normalize formats.', action: 'Launch' },
  { title: 'Secure Hash', category: 'Security', icon: 'shield', copy: 'Generate checksums and validate payloads.', action: 'Launch' },
]

const categoryCards = [
  {
    title: 'Video',
    icon: 'video',
    copy: 'High-fidelity download, compression, conversion, and timeline utilities for media workflows.',
    images: ['video-suite.png', 'camera-lens.png'],
    size: 'wide',
  },
  { title: 'Document', icon: 'file', copy: 'PDF conversion, merge, split, OCR, compression, and export pipelines.', size: 'standard' },
  { title: 'Productivity', icon: 'bolt', copy: 'Small fast tools for repeated daily work and cleanup tasks.', size: 'standard' },
  { title: 'Developer', icon: 'layers', copy: 'JSON, URL, color, text, hash, and formatter utilities for builders.', size: 'standard' },
  { title: 'Images', icon: 'categories', copy: 'Resize, crop, optimize, convert, and prepare visual assets.', size: 'standard' },
]

const pdfFormats = ['Word', 'Excel', 'Image', 'TXT']

const pdfUtilities = [
  { title: 'Merge Files', icon: 'layers', copy: 'Combine documents in a single secure session.' },
  { title: 'Compress PDF', icon: 'bolt', copy: 'Reduce file weight without losing readability.' },
  { title: 'Secure Export', icon: 'shield', copy: 'Process locally with clear export controls.' },
]

const dashboardTools = [
  { title: 'Neural Engine', icon: 'bolt', meta: 'Last used 2h ago' },
  { title: 'Architect Pro', icon: 'layers', meta: 'Last used 1d ago' },
  { title: 'Core Console', icon: 'dashboard', meta: 'Last used 4h ago' },
  { title: 'Stream Sync', icon: 'video', meta: 'Last used 6h ago' },
]

const downloads = [
  { name: 'Market-brief.pdf', size: '24MB', icon: 'file' },
  { name: 'Workshop-recording.mp4', size: '1.2GB', icon: 'video' },
  { name: 'Icon-pack.zip', size: '4.5MB', icon: 'download' },
  { name: 'Security-key.txt', size: '12KB', icon: 'shield' },
  { name: 'Dashboard-export.png', size: '158MB', icon: 'categories' },
]

const fullDesigns = [
  { title: 'Equinox Hub', src: 'equinox-hub.png', size: '780 x 6298' },
  { title: 'Browse Categories', src: 'browse-categories.png', size: '940 x 6622' },
  { title: 'PDF Converter', src: 'pdf-converter.png', size: '780 x 5384' },
  { title: 'YouTube Downloader', src: 'youtube-downloader.png', size: '780 x 4548' },
  { title: 'My Dashboard', src: 'my-dashboard.png', size: '780 x 4368' },
  { title: 'HOME.jpeg Reference', src: 'home-reference.png', size: '736 x 1104' },
]

function Icon({ name, className = 'icon-md' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  )
}

function useInView() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function Reveal({ as: Component = 'div', className = '', children, index = 0, ...props }) {
  const [ref, visible] = useInView()
  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--i': index }}
      {...props}
    >
      {children}
    </Component>
  )
}

function AnimatedWords({ text }) {
  return (
    <span className="word-row" aria-label={text}>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="word" style={{ '--i': index }} aria-hidden="true">
          {word}
        </span>
      ))}
    </span>
  )
}

function Counter({ value, suffix = '' }) {
  const [ref, visible] = useInView()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!visible) return undefined
    let frame = 0
    let start
    const duration = 1400
    const step = (timestamp) => {
      start ??= timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCurrent(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [value, visible])

  return (
    <span ref={ref}>
      {current.toLocaleString()}
      {suffix}
    </span>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a href="#hub" className="brand-link" aria-label="Equinox utility hub home">
          <span className="brand-mark">
            <Icon name="hub" />
          </span>
          <span>
            <span className="brand-name">Equinox</span>
            <span className="eyebrow">Universal Utility Hub</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#full-designs" className="button button-primary">
          Full Designs
          <Icon name="arrow" className="icon-sm" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hub" className="screen-section hero-screen">
      <div className="site-shell hero-layout">
        <Reveal className="hero-copy">
          <p className="pill">
            <Icon name="bolt" className="icon-sm" />
            High-performance utility platform
          </p>
          <h1 className="display-title">
            <AnimatedWords text="Digital Utility Precision" />
          </h1>
          <p className="body-large">
            A premium, glassmorphic command center for downloaders, converters,
            workflow tools, and everyday browser utilities.
          </p>
          <div className="hero-actions">
            <button type="button" className="button button-primary">
              New Workflow
            </button>
            <button type="button" className="button button-glass">
              View Analytics
            </button>
          </div>
        </Reveal>

        <Reveal className="hero-stack" index={1}>
          <ToolSpotlight
            title="YouTube Downloader"
            copy="Capture high-quality video sources with smart format presets."
            icon="video"
            action="Open Tool"
          />
          <ToolSpotlight
            title="PDF Converter"
            copy="Merge, convert, compress, and export documents from one workspace."
            icon="file"
            action="Resume Task"
          />
        </Reveal>
      </div>
    </section>
  )
}

function ToolSpotlight({ title, copy, icon, action }) {
  return (
    <article className="glass-card spotlight-card interactive-card">
      <div className="card-icon layered-icon">
        <Icon name={icon} />
      </div>
      <div>
        <h3 className="card-title-sm">{title}</h3>
        <p>{copy}</p>
      </div>
      <button type="button" className="button button-secondary">
        {action}
        <Icon name="arrow" className="icon-sm" />
      </button>
    </article>
  )
}

function HubTools() {
  return (
    <section className="screen-section compact-section">
      <div className="site-shell">
        <Reveal className="filter-row" as="div">
          {categoryFilters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={index === 0 ? 'filter-pill active' : 'filter-pill'}
              aria-pressed={index === 0}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <div className="tool-grid stagger-grid">
          {toolCards.map((tool, index) => (
            <Reveal key={tool.title} as="article" index={index} className="tool-card interactive-card">
              <div className="card-icon layered-icon">
                <Icon name={tool.icon} />
              </div>
              <p className="label">{tool.category}</p>
              <h3 className="card-title-sm">{tool.title}</h3>
              <p>{tool.copy}</p>
              <a className="inline-link" href={`#${tool.category.toLowerCase()}`}>
                {tool.action}
                <Icon name="arrow" className="icon-sm" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoriesSection() {
  return (
    <section id="categories" className="screen-section">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Browse categories"
          title="Explore Tool Collections"
          copy="The category screen is rebuilt with the full hero, collection filters, large feature cards, supporting cards, and request access section from the import."
        />
        <Reveal className="filter-row">
          {['All Collections', 'Enterprise', 'Automation', 'Analytics', 'Open Source'].map((item, index) => (
            <button
              key={item}
              type="button"
              className={index === 0 ? 'filter-pill active' : 'filter-pill'}
              aria-pressed={index === 0}
            >
              {item}
            </button>
          ))}
        </Reveal>
        <div className="category-grid stagger-grid">
          {categoryCards.map((card, index) => (
            <Reveal key={card.title} as="article" index={index} className={`category-card ${card.size}`}>
              <div className="card-icon layered-icon">
                <Icon name={card.icon} />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p>{card.copy}</p>
              {card.images ? (
                <div className="thumb-row">
                  {card.images.map((image) => (
                    <img key={image} src={asset(image)} alt={`${card.title} reference visual`} loading="lazy" />
                  ))}
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
        <Reveal className="request-panel">
          <h2 className="section-title">Can&apos;t find what you need?</h2>
          <p>Request access to the next collection and we&apos;ll route it into the roadmap.</p>
          <form className="inline-form" aria-label="Request access form">
            <label className="sr-only" htmlFor="request-email">
              Email address
            </label>
            <input id="request-email" type="email" placeholder="Enter your email" />
            <button type="button" className="button button-primary">
              Request Access
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function PdfSection() {
  return (
    <section id="pdf" className="screen-section">
      <div className="site-shell split-layout">
        <Reveal className="side-rail">
          <p className="label">PDF Converter</p>
          <h2 className="section-title">Transform files with precision.</h2>
          <p>
            The imported PDF workspace includes conversion modes, a drag-and-drop
            canvas, preview imagery, and utility cards.
          </p>
          <nav className="rail-nav" aria-label="PDF converter modes">
            {['Convert PDF', 'Merge Files', 'Compress', 'Secure Export'].map((item, index) => (
              <button key={item} type="button" className={index === 0 ? 'rail-button active' : 'rail-button'}>
                {item}
                <Icon name="arrow" className="icon-sm" />
              </button>
            ))}
          </nav>
        </Reveal>
        <Reveal className="pdf-workspace" index={1}>
          <div className="format-row">
            {pdfFormats.map((format, index) => (
              <button key={format} type="button" className={index === 0 ? 'format-chip active' : 'format-chip'}>
                {format}
              </button>
            ))}
          </div>
          <div className="dropzone">
            <img src={asset('data-waves.png')} alt="Abstract cyan data waves" loading="lazy" className="media-fill" />
            <div className="drop-content">
              <Icon name="upload" className="icon-lg" />
              <h3 className="card-title">Drag &amp; drop files here</h3>
              <p>Upload PDF, image, text, and office files for conversion.</p>
              <button type="button" className="button button-primary">
                Choose Files
              </button>
            </div>
          </div>
          <div className="utility-grid">
            {pdfUtilities.map((item, index) => (
              <Reveal key={item.title} as="article" index={index} className="mini-utility interactive-card">
                <Icon name={item.icon} />
                <h3 className="card-title-sm">{item.title}</h3>
                <p>{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function VideoSection() {
  return (
    <section id="video" className="screen-section">
      <div className="site-shell video-shell">
        <SectionHeading
          eyebrow="Media utility"
          title="YouTube Downloader"
          copy="The imported downloader screen is restored with URL entry, format summary, processing features, profile marker, and bottom-safe actions."
        />
        <Reveal className="download-panel">
          <label className="field-stack" htmlFor="video-url">
            <span>Video Source URL</span>
            <input id="video-url" type="url" placeholder="https://www.youtube.com/watch?v=..." />
          </label>
          <div className="video-options">
            <div>
              <p className="label">Format</p>
              <strong>MP4 1080p</strong>
            </div>
            <div>
              <p className="label">Audio</p>
              <strong>320kbps</strong>
            </div>
            <div>
              <p className="label">Mode</p>
              <strong>Turbo</strong>
            </div>
          </div>
          <button type="button" className="button button-primary button-wide">
            <Icon name="download" />
            Start Download
          </button>
        </Reveal>
        <div className="feature-cards">
          {['Turbo Processing', 'Lossless Quality', 'Secure Sandbox'].map((title, index) => (
            <Reveal key={title} as="article" index={index} className="feature-card interactive-card">
              <Icon name={index === 0 ? 'bolt' : index === 1 ? 'layers' : 'shield'} />
              <h3 className="card-title-sm">{title}</h3>
              <p>Fast, polished interactions tuned for the imported utility experience.</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function DashboardSection() {
  return (
    <section id="dashboard" className="screen-section">
      <div className="site-shell">
        <Reveal className="dashboard-hero">
          <div>
            <p className="pill">Verified workspace</p>
            <h2 className="section-title">Welcome back, Power User</h2>
            <p>The dashboard design is restored with favorite tools, recent downloads, stat cards, and mobile-safe actions.</p>
          </div>
          <div className="avatar-stack" aria-label="Collaborators">
            {['dashboard-user.png', 'avatar-1.png', 'avatar-2.png'].map((image, index) => (
              <img key={image} src={asset(image)} alt={`Collaborator ${index + 1}`} loading="lazy" />
            ))}
          </div>
        </Reveal>
        <div className="dashboard-grid">
          <Reveal className="dashboard-panel large-panel">
            <PanelHeader title="Favorite Tools" action="View All" />
            <div className="dashboard-tools">
              {dashboardTools.map((tool, index) => (
                <article key={tool.title} className="dashboard-tool interactive-card" style={{ '--i': index }}>
                  <div className="card-icon layered-icon">
                    <Icon name={tool.icon} />
                  </div>
                  <div>
                    <h3 className="card-title-sm">{tool.title}</h3>
                    <p>{tool.meta}</p>
                  </div>
                  <button type="button" className="inline-button">
                    Launch Tool
                    <Icon name="arrow" className="icon-sm" />
                  </button>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal className="dashboard-panel">
            <PanelHeader title="Recent Downloads" action="Filter" icon="filter" />
            <div className="download-list">
              {downloads.map((item) => (
                <article key={item.name} className="download-item">
                  <Icon name={item.icon} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Downloaded - {item.size}</p>
                  </div>
                  <Icon name="download" className="icon-sm muted" />
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="screen-section stats-section">
      <div className="site-shell stat-grid">
        {[
          ['Tools mapped', 46, '+'],
          ['Imported screens', 6, ''],
          ['Local assets', 16, ''],
          ['Critical blockers', 0, ''],
        ].map(([label, value, suffix], index) => (
          <Reveal key={label} as="article" index={index} className="stat-card">
            <strong>
              <Counter value={value} suffix={suffix} />
            </strong>
            <span>{label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FullDesignsSection() {
  return (
    <section id="full-designs" className="screen-section">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Source of truth"
          title="Full imported designs"
          copy="These are the exact Stitch MCP screenshots preserved locally from /imported, shown in full so the React build can be checked against the original frames."
        />
        <div className="full-design-grid">
          {fullDesigns.map((design, index) => (
            <Reveal key={design.title} as="article" index={index} className="full-design-card">
              <div className="full-design-meta">
                <h3 className="card-title-sm">{design.title}</h3>
                <span>{design.size}</span>
              </div>
              <img src={asset(design.src)} alt={`${design.title} full imported Stitch design`} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PanelHeader({ title, action, icon }) {
  return (
    <div className="panel-header">
      <h2 className="card-title-sm">{title}</h2>
      <button type="button" className="inline-button" aria-label={`${action} ${title}`}>
        {icon ? <Icon name={icon} className="icon-sm" /> : action}
      </button>
    </div>
  )
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <Reveal className="section-heading">
      <p className="label">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
      <span className="line-reveal" aria-hidden="true" />
    </Reveal>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HubTools />
        <CategoriesSection />
        <PdfSection />
        <VideoSection />
        <DashboardSection />
        <StatsSection />
        <FullDesignsSection />
      </main>
      <footer className="site-shell site-footer">
        <p>Klol120 Tools. Built directly from the Stitch MCP import and local design assets.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </footer>
    </>
  )
}

export default App
