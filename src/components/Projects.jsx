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
    emoji: '🫓',
    features: ['Product Catalog', 'Cart System', 'User Auth', 'Order Management'],

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
    emoji: '🪔',
    features: ['Service Booking', 'Pandit Profiles', 'Location Search', 'Reviews'],

    live: 'https://pandit-eta.vercel.app/',
  },
  {
    id: 3,
    title: 'CraveBetter',
    tagline: 'Healthy Can Be Tasty Too',
    description:
      '"Healthy isn\'t tasty and tasty isn\'t healthy" — we built Crave Better to prove that wrong. A protein bar e-commerce platform featuring 5g protein bars, product listings, cart management, and a seamless checkout experience.',
    tech: ['React', 'JavaScript','PostgreSQL','Tailwind CSS', 'Ruby', 'Roda'],
    color: 'from-violet-500 to-purple-500',
    accent: 'violet',
    borderColor: 'border-violet-500/20',
    bgColor: 'bg-violet-500/5',
    emoji: '💪',
    features: ['Product Listing', 'Cart System', 'Checkout', 'Nutrition Info'],
    live: 'https://cravebetter4u.com/',
  },
  {
    id: 4,
    title: 'Real Estate App',
    tagline: 'Property Listing & Search Platform',
    description:
      'A modern real estate web application enabling property listing, advanced filtering, and interactive map-based search. Built with a focus on performance and clean user experience.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'PostgreSQL'],
    color: 'from-emerald-500 to-teal-500',
    accent: 'emerald',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/5',
    emoji: '🏡',
    features: ['Property Listings', 'Advanced Filters', 'Map Integration', 'Contact Forms'],

    live: 'https://realestate-eosin-kappa.vercel.app/',
  },
  {
    id: 5,
    title: 'SohamQuiz',
    tagline: 'Test Your Knowledge, One Quiz at a Time',
    description:
      'An interactive quiz web application built with React. Users can attempt multiple-choice quizzes, track their scores, and challenge themselves across various topics with a clean and engaging UI.',
    tech: ['React', 'Java', 'Tailwind CSS', 'Ruby', 'Roda', 'PostgreSQL'],
    color: 'from-sky-500 to-blue-500',
    accent: 'sky',
    borderColor: 'border-sky-500/20',
    bgColor: 'bg-sky-500/5',
    emoji: '🧠',
    features: ['Multiple Choice', 'Score Tracking', 'Topic Categories', 'Instant Feedback'],
    live: 'https://soham-2-seven.vercel.app/',
  },
  {
    id: 6,
    title: 'Daikin',
    tagline: 'Cooling Solutions, Beautifully Presented',
    description:
      'A product showcase website for Daikin air conditioning systems. Visitors can browse models by category and capacity, compare specifications side by side, and submit enquiries directly to the sales team.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    color: 'from-cyan-500 to-blue-500',
    accent: 'cyan',
    borderColor: 'border-cyan-500/20',
    bgColor: 'bg-cyan-500/5',
    emoji: '❄️',
    features: ['Product Catalog', 'Spec Comparison', 'Enquiry Forms', 'Responsive Design'],
    live: '',
  },
  {
    id: 7,
    title: 'Himalayan Furniture Mart',
    tagline: 'Handcrafted Furniture, Online',
    description:
      'An online furniture store bringing a physical showroom to the web. Features category-wise product browsing, detailed product galleries, cart management, and an enquiry-to-order flow for custom pieces.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Ruby', 'PostgreSQL'],
    color: 'from-amber-500 to-yellow-500',
    accent: 'amber',
    borderColor: 'border-amber-500/20',
    bgColor: 'bg-amber-500/5',
    emoji: '🪑',
    features: ['Product Showroom', 'Category Browsing', 'Cart System', 'Custom Enquiries'],
    live: '',
  },
  {
    id: 8,
    title: 'Clarus Partner',
    tagline: 'Advisory Services, Clearly Communicated',
    description:
      'A professional services website for Clarus Partner, built to present advisory offerings with clarity. Includes structured service pages, team profiles, case study highlights, and lead capture forms.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    color: 'from-blue-500 to-indigo-500',
    accent: 'blue',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/5',
    emoji: '🤝',
    features: ['Service Pages', 'Team Profiles', 'Case Studies', 'Lead Capture'],
    live: '',
  },
  {
    id: 9,
    title: 'Clarus Pvt Ltd',
    tagline: 'Corporate Identity on the Web',
    description:
      'The corporate web presence for Clarus Pvt Ltd, covering company overview, business verticals, and client-facing information. Designed for fast load times and a polished, trustworthy first impression.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    color: 'from-indigo-500 to-violet-500',
    accent: 'indigo',
    borderColor: 'border-indigo-500/20',
    bgColor: 'bg-indigo-500/5',
    emoji: '🏢',
    features: ['Company Profile', 'Business Verticals', 'Contact Forms', 'SEO Ready'],
    live: '',
  },
  {
    id: 10,
    title: 'Vaachika Lakhini',
    tagline: 'Where Words Find Their Voice',
    description:
      'A web platform built around spoken and written expression — presenting services and content in a clean, reader-first layout with session enquiry and contact flows for interested clients.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    color: 'from-fuchsia-500 to-pink-500',
    accent: 'fuchsia',
    borderColor: 'border-fuchsia-500/20',
    bgColor: 'bg-fuchsia-500/5',
    emoji: '🎙️',
    features: ['Content Showcase', 'Service Listing', 'Enquiry Flow', 'Mobile First'],
    live: '',
  },
  {
    id: 11,
    title: 'THIS',
    tagline: 'The Honest Indian Snack',
    description:
      'An e-commerce storefront for a clean-label Indian snack brand. Shoppers browse the range, read honest ingredient and nutrition details, and move through a frictionless cart-to-checkout flow.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Ruby', 'Roda', 'PostgreSQL'],
    color: 'from-lime-500 to-green-500',
    accent: 'lime',
    borderColor: 'border-lime-500/20',
    bgColor: 'bg-lime-500/5',
    emoji: '🥨',
    features: ['Product Listing', 'Ingredient Details', 'Cart System', 'Checkout'],
    live: '',
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
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 glow-sm`}
          >
            <span className="text-4xl">{project.emoji}</span>
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
          Project {String(project.id).padStart(2, '0')}
        </div>

        <h3 className="text-3xl md:text-4xl font-black text-white mb-3">{project.title}</h3>
        <p
          className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color} font-semibold mb-4`}
        >
          {project.tagline}
        </p>
        <p className="text-slate-400 leading-relaxed mb-8">{project.description}</p>

        {project.live && (
          <div className="flex gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r ${project.color} hover:opacity-90 transition-opacity glow-sm`}
            >
              Live Demo →
            </a>
          </div>
        )}
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

      </div>
    </section>
  )
}
