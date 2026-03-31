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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="/sirisha1.jpeg"
          alt=""
          className="w-full h-full object-cover object-right"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/90 via-[#0a0a0f]/70 to-[#0a0a0f]/30" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for new opportunities
          </div>

          {/* Greeting */}
          <p className="text-slate-400 text-base font-medium mb-2 animate-fade-up font-code">
            Hi there, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-black mb-4 animate-fade-up leading-tight">
            <span className="gradient-text">Sirisha</span>
            <br />
            <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">Lakhanapuram</span>
          </h1>

          {/* Typing role */}
          <div className="text-xl md:text-2xl font-semibold text-slate-300 mb-4 h-9 animate-fade-up">
            <span>{displayed}</span>
            <span className="cursor text-purple-400">|</span>
          </div>

          {/* Tagline */}
          <p className="text-slate-300 text-base leading-relaxed mb-8 animate-fade-up">
            Crafting elegant, performant web experiences with modern technologies.
            I turn ideas into{' '}
            <span className="text-purple-400 font-semibold">beautiful, functional products</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up mb-12">
            <button
              onClick={scrollToProjects}
              className="px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-200 glow text-sm"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-7 py-3.5 rounded-full font-semibold border border-white/30 text-white hover:border-purple-400 hover:text-purple-300 transition-all duration-200 text-sm"
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            {[
              { value: '3+', label: 'Projects Built' },
              { value: '5+', label: 'Technologies' },
              { value: '100%', label: 'Commitment' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-black gradient-text">{value}</div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent group-hover:from-purple-400 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  )
}
