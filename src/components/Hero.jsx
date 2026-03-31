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
    <section id="home" className="relative min-h-screen bg-[#0d0d0d] overflow-hidden">

      {/* Full height image — left side, blends into dark bg on right edge */}
      <div className="absolute left-0 top-0 h-full w-[45%]">
        <img
          src="/sirisha1.jpeg"
          alt="Sirisha Lakhanapuram"
          className="h-full w-full object-cover object-top"
        />
        {/* Blend right edge of image into dark background */}
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0d0d0d] to-transparent" />
        {/* Subtle top fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0d0d0d] to-transparent" />
      </div>

      {/* Text — right side, slightly overlaps the photo */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pl-[50%] pr-8 md:pr-16 pt-24 pb-16">

        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-8 w-fit">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Available for new opportunities
        </div>

        {/* Big bold name */}
        <h1 className="font-black uppercase leading-none mb-6 text-white">
          <span className="block text-5xl md:text-7xl lg:text-8xl gradient-text">Sirisha</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl tracking-widest mt-1">Lakhanapuram</span>
        </h1>

        {/* Typing role */}
        <div className="text-lg md:text-2xl font-semibold text-slate-300 mb-6 h-8">
          <span>{displayed}</span>
          <span className="cursor text-purple-400">|</span>
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-md">
          Crafting elegant, performant web experiences with modern technologies.
          I turn ideas into{' '}
          <span className="text-purple-400 font-semibold">beautiful, functional products</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-14">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-200 glow text-sm"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 rounded-full font-semibold border border-white/20 text-white hover:border-purple-400 hover:text-purple-300 transition-all duration-200 text-sm"
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
              <div className="text-2xl md:text-3xl font-black gradient-text">{value}</div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">{label}</div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
