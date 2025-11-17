import { ShieldCheck, Zap, LineChart, Lock, Globe2, Layers } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Institutional Security',
    desc: 'SOC2-aligned practices, role-based access, and encrypted data at rest and in transit.',
  },
  {
    icon: Zap,
    title: 'Low-Latency Execution',
    desc: 'Optimized order routing with smart aggregation and co-located infrastructure.',
  },
  {
    icon: LineChart,
    title: 'Advanced Analytics',
    desc: 'Real-time PnL, risk, and exposure dashboards with granular reporting.',
  },
  {
    icon: Lock,
    title: 'Compliance-Ready',
    desc: 'Audit trails, KYC/AML integrations, and exportable regulatory reports.',
  },
  {
    icon: Globe2,
    title: 'Global Connectivity',
    desc: 'Connectivity to major venues, liquidity providers, and custodians worldwide.',
  },
  {
    icon: Layers,
    title: 'Modular APIs',
    desc: 'REST and WebSocket APIs designed for rapid integration and scale.',
  },
]

function Features() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Solutions built for professional trading</h2>
          <p className="mt-3 text-slate-700">Everything you need to execute, monitor, and scale your trading operations.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white grid place-items-center shadow-sm">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
