import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden" id="home">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/50 via-indigo-100/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div className="py-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 backdrop-blur px-3 py-1 text-xs text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Trading infrastructure for modern teams
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Qpital.co
          </h1>
          <p className="mt-4 text-slate-700 text-lg leading-relaxed">
            Professional, secure, and scalable trading solutions. We build execution-grade tools, analytics, and integrations so you can focus on strategy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors">
              Talk to us
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center rounded-lg bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium text-slate-900 border border-white/60 shadow-sm hover:bg-white/90 transition-colors">
              Explore solutions
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900">99.99%</p>
              <p className="text-xs text-slate-600">uptime SLA</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900"><span className="align-top text-base">$</span>5B+</p>
              <p className="text-xs text-slate-600">volume processed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">24/7</p>
              <p className="text-xs text-slate-600">global coverage</p>
            </div>
          </div>
        </div>

        <div className="relative h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-2xl border border-white/30 bg-white/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(2,6,23,0.08)] overflow-hidden">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-x-10 -bottom-8 h-40 bg-gradient-to-t from-white to-transparent opacity-80" />
        </div>
      </div>
    </section>
  )
}

export default Hero
