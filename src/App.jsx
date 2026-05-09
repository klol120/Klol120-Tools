const iconPaths = {
  video: (
    <>
      <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h6A2.5 2.5 0 0 1 16 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 5 16.5v-9Z" />
      <path d="m16 10 3.8-2.2a.8.8 0 0 1 1.2.7v7a.8.8 0 0 1-1.2.7L16 14" />
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
  image: (
    <>
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v11A2.5 2.5 0 0 1 16.5 20h-9A2.5 2.5 0 0 1 5 17.5v-11Z" />
      <path d="m7 16 3.2-3.2 2.2 2.2 2.7-3.3L19 16" />
      <path d="M9 8.8h.1" />
    </>
  ),
  text: (
    <>
      <path d="M5 6h14" />
      <path d="M8 6v12" />
      <path d="M16 6v12" />
      <path d="M6.8 18h4.4" />
      <path d="M12.8 18h4.4" />
    </>
  ),
  link: (
    <>
      <path d="M10.5 13.5a3.5 3.5 0 0 0 5 0l2-2a3.5 3.5 0 0 0-5-5l-1.1 1.1" />
      <path d="M13.5 10.5a3.5 3.5 0 0 0-5 0l-2 2a3.5 3.5 0 0 0 5 5l1.1-1.1" />
    </>
  ),
  utility: (
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

const categories = ['All', 'Media', 'PDF', 'Images', 'Text', 'Utilities']

const tools = [
  {
    name: 'Video Downloader',
    category: 'Media',
    description: 'A ready slot for YouTube and social video download flows.',
    icon: 'video',
    accent: 'bg-rose-50 text-rose-700 ring-rose-100',
  },
  {
    name: 'PDF Converter',
    category: 'PDF',
    description: 'Convert, merge, split, compress, and organize documents.',
    icon: 'file',
    accent: 'bg-amber-50 text-amber-700 ring-amber-100',
  },
  {
    name: 'Image Tools',
    category: 'Images',
    description: 'Resize, compress, convert, crop, and prepare image files.',
    icon: 'image',
    accent: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  },
  {
    name: 'Text Formatter',
    category: 'Text',
    description: 'Clean, transform, count, and format text quickly.',
    icon: 'text',
    accent: 'bg-sky-50 text-sky-700 ring-sky-100',
  },
  {
    name: 'URL Utilities',
    category: 'Utilities',
    description: 'Shorten, encode, decode, inspect, and normalize links.',
    icon: 'link',
    accent: 'bg-violet-50 text-violet-700 ring-violet-100',
  },
  {
    name: 'Quick Utilities',
    category: 'Utilities',
    description: 'Small helpers for everyday conversions and cleanup tasks.',
    icon: 'utility',
    accent: 'bg-slate-100 text-slate-700 ring-slate-200',
  },
]

function Icon({ name, className = 'h-5 w-5' }) {
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
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-white">
            <Icon name="layers" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Klol120
            </span>
            <span className="block text-lg font-bold text-slate-950">Tools</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a className="transition hover:text-slate-950" href="#tools">
            Tools
          </a>
          <a className="transition hover:text-slate-950" href="#categories">
            Categories
          </a>
          <a className="transition hover:text-slate-950" href="#roadmap">
            Roadmap
          </a>
        </nav>

        <a
          href="#tools"
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Browse
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="border-b border-slate-200/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
            <Icon name="bolt" className="h-4 w-4" />
            One home for fast browser tools
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            A clean base for every online tool you want to build.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Start with a polished directory, reusable cards, categories, and a
            layout ready for downloaders, converters, editors, and utility pages.
          </p>

          <div className="mt-8 max-w-2xl rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
            <label className="flex min-h-12 items-center gap-3 px-3 text-slate-500">
              <Icon name="search" className="h-5 w-5 shrink-0" />
              <input
                type="search"
                placeholder="Search tools, converters, downloaders..."
                className="h-12 w-full bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400"
              />
            </label>
          </div>
        </div>

        <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
          <div className="absolute inset-x-0 top-0 h-16 border-b border-slate-200 bg-slate-50/80">
            <div className="flex h-full items-center gap-2 px-5">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
          </div>
          <div className="grid h-full gap-4 p-5 pt-24 sm:grid-cols-2">
            {tools.slice(0, 4).map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div
                  className={`mb-4 grid h-11 w-11 place-items-center rounded-lg ring-1 ${tool.accent}`}
                >
                  <Icon name={tool.icon} />
                </div>
                <h3 className="font-bold text-slate-950">{tool.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryTabs() {
  return (
    <div
      id="categories"
      className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]"
    >
      {categories.map((category, index) => (
        <button
          key={category}
          type="button"
          className={`h-10 shrink-0 rounded-lg border px-4 text-sm font-semibold transition ${
            index === 0
              ? 'border-slate-950 bg-slate-950 text-white'
              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

function ToolCard({ tool }) {
  return (
    <article className="group flex min-h-64 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/70">
      <div className="flex items-start justify-between gap-4">
        <div className={`grid h-12 w-12 place-items-center rounded-lg ring-1 ${tool.accent}`}>
          <Icon name={tool.icon} />
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-500">
          Soon
        </span>
      </div>
      <div className="mt-6 flex-1">
        <p className="text-sm font-semibold text-slate-500">{tool.category}</p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">{tool.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{tool.description}</p>
      </div>
      <button
        type="button"
        className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition group-hover:border-slate-950 group-hover:text-slate-950"
      >
        Open placeholder
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </article>
  )
}

function FeatureRow() {
  const items = [
    {
      title: 'Fast by default',
      body: 'Built as a lightweight frontend base that is easy to expand.',
      icon: 'bolt',
    },
    {
      title: 'Reusable structure',
      body: 'Cards, categories, buttons, and page bands are ready to reuse.',
      icon: 'layers',
    },
    {
      title: 'User-focused',
      body: 'Designed for repeat utility use with clear scanning and actions.',
      icon: 'shield',
    },
  ]

  return (
    <section id="roadmap" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-0 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {items.map((item) => (
          <div key={item.title} className="border-slate-200 py-8 lg:border-r lg:px-8 last:lg:border-r-0">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-white">
              <Icon name={item.icon} className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <section id="tools" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Tool library
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Ready for the tools we build next.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              These are placeholder modules for now. Each card can become a route,
              upload flow, form, progress state, or result view.
            </p>
          </div>
          <CategoryTabs />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>
      <FeatureRow />
      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Klol120 Tools base. Built with React, Vite, and Tailwind.</p>
        <div className="flex items-center gap-4 font-semibold">
          <a className="hover:text-slate-950" href="#tools">
            Tools
          </a>
          <a className="hover:text-slate-950" href="#categories">
            Categories
          </a>
          <a className="hover:text-slate-950" href="#roadmap">
            Roadmap
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
