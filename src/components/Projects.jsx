const projects = [
  {
    id: 1,
    title: 'RotiCraft',
    tagline: 'Artisan Bread & Roti Ordering Platform',
    description:
      'A full-stack food ordering web application for artisan bread and roti products. Features product browsing, cart management, user authentication, and order tracking with a seamless checkout flow.',
    tech: ['React', 'Ruby', 'Roda', 'PostgreSQL', 'Tailwind CSS'],
    color: 'from-orange-500 to-amber-500',
    accent: 'orange',
    borderColor: 'border-orange-500/20',
    bgColor: 'bg-orange-500/5',
    favicon: 'https://roti-lemon.vercel.app/favicon.ico',
    emoji: '🫓',
    features: ['Product Catalog', 'Cart System', 'User Auth', 'Order Management'],
    github: '#',
    live: 'https://roti-lemon.vercel.app/',
  },
  {
    id: 2,
    title: 'PanditSeva',
    tagline: 'Every Ritual, Every Tradition',
    description:
      'An online platform connecting users with pandits (priests) for religious ceremonies and rituals. Supports service listing, booking management, location-based search, and review system.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'Ruby'],
    color: 'from-rose-500 to-pink-500',
    accent: 'rose',
    borderColor: 'border-rose-500/20',
    bgColor: 'bg-rose-500/5',
    favicon: 'https://pandit-eta.vercel.app/favicon.ico',
    emoji: '🪔',
    features: ['Service Booking', 'Pandit Profiles', 'Location Search', 'Reviews'],
    github: '#',
    live: 'https://pandit-eta.vercel.app/',
  },
  {
    id: 3,
    title: 'Real Estate App',
    tagline: 'Property Listing & Search Platform',
    description:
      'A modern real estate web application enabling property listing, advanced filtering, and interactive map-based search. Built with a focus on performance and clean user experience.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'PostgreSQL'],
    color: 'from-emerald-500 to-teal-500',
    accent: 'emerald',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/5',
    favicon: 'https://realestate-eosin-kappa.vercel.app/favicon.ico',
    emoji: '🏡',
    features: ['Property Listings', 'Advanced Filters', 'Map Integration', 'Contact Forms'],
    github: '#',
    live: 'https://realestate-eosin-kappa.vercel.app/',
  },
]

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isEven ? '' : 'lg:grid-flow-dense'
      }`}
    >
      {/* Visual Panel */}
      <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
        <div
          className={`relative rounded-2xl border ${project.borderColor} ${project.bgColor} p-8 card-hover overflow-hidden group`}
        >
          {/* Background decoration */}
          <div
            className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${project.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}
          />

          {/* Logo / icon */}
          <div
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 glow-sm overflow-hidden`}
          >
            {project.favicon ? (
              <img
                src={project.favicon}
                alt={`${project.title} logo`}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
            ) : null}
            <span
              className="text-4xl"
              style={{ display: project.favicon ? 'none' : 'flex' }}
            >
              {project.emoji}
            </span>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400 text-xs font-code"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-slate-400">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-500 text-xs font-code mb-4">
          Project 0{project.id}
        </div>

        <h3 className="text-3xl md:text-4xl font-black text-white mb-3">{project.title}</h3>
        <p
          className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color} font-semibold mb-4`}
        >
          {project.tagline}
        </p>
        <p className="text-slate-400 leading-relaxed mb-8">{project.description}</p>

        <div className="flex gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r ${project.color} hover:opacity-90 transition-opacity glow-sm`}
          >
            Live Demo →
          </a>
          <a
            href={project.github}
            className="px-6 py-3 rounded-full font-semibold text-sm text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-900/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <p className="font-code text-purple-400 text-sm font-medium mb-2">What I&apos;ve built</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Projects</h2>
          <div className="section-divider" />
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More projects CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-4">More projects on GitHub</p>
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-slate-300 hover:border-purple-500/40 hover:text-purple-300 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View GitHub Profile
          </a> */}
        </div>
      </div>
    </section>
  )
}
