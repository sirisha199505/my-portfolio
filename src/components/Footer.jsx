export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="font-code text-lg font-bold gradient-text"
        >
          &lt;Sirisha /&gt;
        </a>

        <p className="text-slate-600 text-sm text-center">
          &copy; {year} Sirisha Lakhanapuram. Designed &amp; Built with React &amp; Tailwind CSS.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:border-purple-500/40 hover:text-purple-400 transition-all"
          aria-label="Back to top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  )
}
