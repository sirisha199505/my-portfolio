const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Freelance / Projects',
    period: '2023 – Present',
    description:
      'Building full-stack web applications using React, Ruby (Roda), and PostgreSQL. Delivered multiple client projects focusing on performance and UX.',
  },
  {
    role: 'Frontend Developer',
    company: 'Personal Projects',
    period: '2022 – 2023',
    description:
      'Developed responsive, accessible user interfaces using React and Tailwind CSS, with a focus on clean design and smooth interactions.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-20 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-900/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-code text-purple-400 text-sm font-medium mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">About Me</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – Bio */}
          <div>
            {/* Avatar placeholder */}
            <div className="w-35 h-35 mx-auto lg:mx-0 mb-8 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center glow relative overflow-hidden">
              <span className="text-5xl font-black text-white select-none">S</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate Developer &amp; Problem Solver
            </h3>

            <p className="text-slate-400 leading-relaxed mb-4">
              I&apos;m Sirisha, a passionate Full Stack Developer with a strong focus on building
              clean, efficient, and user-friendly web applications. I love turning complex
              problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              My expertise spans across the full stack — from crafting polished UIs with React
              and Tailwind CSS to architecting robust backends with Ruby (Roda) and PostgreSQL.
              I am committed to writing clean, maintainable code and continuously growing my
              skill set.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'India' },
                { label: 'Availability', value: 'Open to work' },
                { label: 'Experience', value: '2+ Years' },
                { label: 'Focus', value: 'Full Stack Dev' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/3 border border-white/8 rounded-xl px-4 py-3"
                >
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                    {label}
                  </div>
                  <div className="text-sm text-slate-200 font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Experience Timeline */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-600/30 flex items-center justify-center text-purple-400">
                ⚡
              </span>
              Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-indigo-600 to-transparent" />

              <div className="flex flex-col gap-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="pl-12 relative">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#0a0a0f] border-2 border-purple-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    </div>

                    <div className="bg-white/3 border border-white/8 rounded-xl p-5 card-hover">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-bold text-white">{exp.role}</h4>
                          <p className="text-purple-400 text-sm font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs text-slate-500 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full font-code">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack tags */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 'JavaScript', 'Tailwind CSS', 'Ruby', 'Roda',
                  'PostgreSQL', 'HTML5', 'CSS3', 'Git', 'REST APIs',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg border border-purple-500/25 bg-purple-500/8 text-purple-300 text-xs font-medium hover:border-purple-400/50 hover:bg-purple-500/15 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
