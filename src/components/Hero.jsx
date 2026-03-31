import { useEffect, useState } from 'react'

const roles = ['Frontend Developer', 'Full Stack Developer', 'UI/UX Enthusiast']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">

      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="/sirisha2.jpeg"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0a0a0f]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 pt-28 pb-16 w-full">
        <div className="max-w-xl">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6 w-fit animate-fade-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for new opportunities
          </div>

          <p className="text-slate-400 text-base font-medium mb-2 font-code animate-fade-up">
            Hi there, I&apos;m
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight animate-fade-up">
            <span className="gradient-text">Sirisha</span>
            <br />
            <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">Lakhanapuram</span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-slate-300 mb-4 h-9 animate-fade-up">
            <span>{displayed}</span>
            <span className="cursor text-purple-400">|</span>
          </div>

          <p className="text-slate-400 text-base leading-relaxed mb-8 animate-fade-up">
            Crafting elegant, performant web experiences with modern technologies.
            I turn ideas into{' '}
            <span className="text-purple-400 font-semibold">beautiful, functional products</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up mb-12">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-200 glow text-sm w-fit"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-full font-semibold border border-purple-500/40 text-slate-300 hover:border-purple-400 hover:text-purple-300 transition-all duration-200 text-sm w-fit"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-10 animate-fade-up">
            {[
              { value: '3+', label: 'Projects Built' },
              { value: '5+', label: 'Technologies' },
              { value: '100%', label: 'Commitment' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-black gradient-text">{value}</div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}
