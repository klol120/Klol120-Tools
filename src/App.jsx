const iconPaths = {
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
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </>
  ),
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
}

const navItems = [
  { label: 'Hub', href: '#hub' },
  { label: 'Designs', href: '#designs' },
  { label: 'Roadmap', href: '#roadmap' },
]

const categories = ['All', 'Media', 'PDF', 'Images', 'Text', 'Utilities']

const importedDesigns = [
  {
    name: 'Equinox Hub',
    category: 'Hub',
    description: 'The high-performance utility landing surface from the Stitch import.',
    icon: 'hub',
    metric: '5 screens',
  },
  {
    name: 'Browse Categories',
    category: 'Directory',
    description: 'A category browser for scanning tool groups and choosing the right workflow.',
    icon: 'categories',
    metric: '940 px',
  },
  {
    name: 'PDF Converter',
    category: 'PDF',
    description: 'A document conversion workspace for merge, split, compress, and export flows.',
    icon: 'file',
    metric: '5,384 px',
  },
  {
    name: 'YouTube Downloader',
    category: 'Media',
    description: 'A video utility screen with URL entry, format selection, and download states.',
    icon: 'video',
    metric: '4,548 px',
  },
  {
    name: 'My Dashboard',
    category: 'Dashboard',
    description: 'A personal command center for recent tools, downloads, and quick actions.',
    icon: 'dashboard',
    metric: '4,368 px',
  },
  {
    name: 'HOME.jpeg',
    category: 'Reference',
    description: 'The hidden image-only reference screen preserved from the Stitch canvas.',
    icon: 'layers',
    metric: 'source',
  },
]

const featureItems = [
  {
    title: 'Consistent interface states',
    body: 'Buttons, links, cards, and fields now share clear focus and hover behavior.',
    icon: 'shield',
  },
  {
    title: 'Responsive utility layout',
    body: 'The layout holds at mobile, tablet, and desktop widths with stable spacing.',
    icon: 'layers',
  },
  {
    title: 'Import-aware roadmap',
    body: 'Every Stitch screen is represented as a working website surface instead of sitting idle.',
    icon: 'bolt',
  },
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

function Header() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a href="#hub" className="brand-link" aria-label="Klol120 Tools home">
          <span className="brand-mark">
            <Icon name="layers" />
          </span>
          <span>
            <span className="eyebrow">Klol120</span>
            <span className="brand-name">Tools</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#designs" className="button button-primary">
          Browse
          <Icon name="arrow" className="icon-sm" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hub" className="hero-section">
      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <p className="pill">
            <Icon name="bolt" className="icon-sm" />
            Cyanide Glass import applied
          </p>
          <h1 className="display-title">Universal Utility Hub</h1>
          <p className="body-large">
            A polished utility platform shell built from the Stitch project inventory:
            dashboard, categories, PDF conversion, video download, and the hidden
            reference screen are all represented in one responsive website.
          </p>

          <label className="search-field">
            <Icon name="search" />
            <span className="sr-only">Search tools</span>
            <input
              type="search"
              placeholder="Search tools, converters, downloaders..."
              aria-label="Search tools, converters, downloaders"
            />
          </label>
        </div>

        <div className="hero-panel" aria-label="Imported Stitch screens summary">
          <div className="window-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="panel-grid">
            {importedDesigns.slice(0, 4).map((design) => (
              <article key={design.name} className="mini-card">
                <div className="card-icon">
                  <Icon name={design.icon} />
                </div>
                <h3 className="card-title-sm">{design.name}</h3>
                <p>{design.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryTabs() {
  return (
    <div id="categories" className="category-tabs" aria-label="Tool categories">
      {categories.map((category, index) => (
        <button
          key={category}
          type="button"
          className={index === 0 ? 'category-pill active' : 'category-pill'}
          aria-pressed={index === 0}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

function DesignCard({ design }) {
  return (
    <article className="design-card">
      <div className="card-topline">
        <div className="card-icon">
          <Icon name={design.icon} />
        </div>
        <span className="metric">{design.metric}</span>
      </div>
      <p className="label">{design.category}</p>
      <h3 className="card-title">{design.name}</h3>
      <p className="card-copy">{design.description}</p>
      <button type="button" className="button button-secondary">
        Open placeholder
        <Icon name="arrow" className="icon-sm" />
      </button>
    </article>
  )
}

function FeatureRow() {
  return (
    <section id="roadmap" className="feature-band">
      <div className="site-shell feature-grid">
        {featureItems.map((item) => (
          <article key={item.title} className="feature-item">
            <div className="feature-icon">
              <Icon name={item.icon} />
            </div>
            <h3 className="card-title-sm">{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="designs" className="site-shell section-block">
          <div className="section-heading">
            <div>
              <p className="label">Tool library</p>
              <h2 className="section-title">Imported designs, ready to wire.</h2>
              <p className="section-copy">
                The working site now mirrors the Stitch inventory and keeps spacing,
                labels, headings, and interaction states aligned across equivalent
                sections.
              </p>
            </div>
            <CategoryTabs />
          </div>

          <div className="design-grid">
            {importedDesigns.map((design) => (
              <DesignCard key={design.name} design={design} />
            ))}
          </div>
        </section>
        <FeatureRow />
      </main>
      <footer className="site-shell site-footer">
        <p>Klol120 Tools. Built from the Stitch import with React, Vite, and Tailwind.</p>
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
