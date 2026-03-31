import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-pink-500 to-purple-500',
    borderColor: 'border-pink-500/25',
    bgColor: 'bg-pink-500/8',
    skills: [
      { name: 'React', level: 88, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'Tailwind CSS', level: 90, icon: '💨' },
      { name: 'HTML5 & CSS3', level: 92, icon: '🌐' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-violet-500 to-indigo-500',
    borderColor: 'border-violet-500/25',
    bgColor: 'bg-violet-500/8',
    skills: [
      { name: 'Ruby', level: 78, icon: '💎' },
      { name: 'Roda Framework', level: 78, icon: '🛤️' },
      { name: 'REST APIs', level: 80, icon: '🔌' },
    ],
  },
  {
    category: 'Database & Tools',
    icon: '🗄️',
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/25',
    bgColor: 'bg-cyan-500/8',
    skills: [
      { name: 'PostgreSQL', level: 80, icon: '🐘' },
      { name: 'Git', level: 85, icon: '🐙' },
      { name: 'Vite', level: 80, icon: '⚡' },
    ],
  },
]

const techLogos = [
  { name: 'React', abbr: 'Re', color: '#61DAFB' },
  { name: 'JavaScript', abbr: 'JS', color: '#F7DF1E' },
  { name: 'Tailwind', abbr: 'Tw', color: '#38BDF8' },
  { name: 'Ruby', abbr: 'Rb', color: '#CC342D' },
  { name: 'Roda', abbr: 'Ro', color: '#A855F7' },
  { name: 'PostgreSQL', abbr: 'PG', color: '#336791' },
  { name: 'HTML5', abbr: 'H5', color: '#E34F26' },
  { name: 'Git', abbr: 'Git', color: '#F05032' },
]

function SkillBar({ name, level, icon, color, delay = 0 }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={ref} className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-slate-300">{name}</span>
        </div>
        <span className="text-xs font-code text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-code text-purple-400 text-sm font-medium mb-2">What I bring</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Skills</h2>
          <div className="section-divider" />
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className={`rounded-2xl border ${cat.borderColor} ${cat.bgColor} p-6 card-hover`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg`}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white text-lg">{cat.category}</h3>
              </div>

              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={cat.color}
                  delay={i * 150}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech logos marquee */}
        <div className="mt-12">
          <p className="text-center text-sm text-slate-500 font-medium uppercase tracking-widest mb-8">
            Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techLogos.map(({ name, abbr, color }) => (
              <div
                key={name}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/3 border border-white/8 hover:border-white/20 transition-all duration-200 cursor-default"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white"
                  style={{ backgroundColor: color + '33', border: `1px solid ${color}55` }}
                >
                  <span style={{ color }}>{abbr.slice(0, 2)}</span>
                </div>
                <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors font-medium">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
